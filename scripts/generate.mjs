#!/usr/bin/env node
/**
 * Static generate for Cloudflare Workers.
 * Nuxt can finish writing HTML and still leave the event loop open;
 * CI waits forever unless this process actually dies.
 */
import { spawn } from 'node:child_process'
import { access, rm } from 'node:fs/promises'
import { setTimeout as sleep } from 'node:timers/promises'

const OUTPUT = '.output/public/index.html'
const SITEMAP = '.output/public/sitemap.xml'
const HARD_MS = 12 * 60 * 1000
const SETTLE_MS = 20_000

const env = {
  ...process.env,
  NITRO_PRESET: 'static',
}

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn('pnpm', ['exec', ...args], {
      stdio: 'inherit',
      env,
      shell: process.platform === 'win32',
    })
    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
      }
      else {
        reject(new Error(`${args.join(' ')} exited ${code}`))
      }
    })
  })
}

await rm('.output', { recursive: true, force: true })
await run(['nuxt', 'prepare'])

const generate = spawn('pnpm', ['exec', 'nuxt', 'generate'], {
  stdio: 'inherit',
  env,
  shell: process.platform === 'win32',
})

let finishing = false

async function finish(reason) {
  if (finishing) {
    return
  }
  finishing = true
  console.log(`[generate] ${reason}`)
  generate.kill('SIGTERM')
  await sleep(5000)
  if (!generate.killed) {
    generate.kill('SIGKILL')
  }
  try {
    await access(OUTPUT)
    process.exit(0)
  }
  catch {
    process.exit(1)
  }
}

const poll = setInterval(() => {
  Promise.all([access(OUTPUT), access(SITEMAP)])
    .then(async () => {
      clearInterval(poll)
      await sleep(SETTLE_MS)
      await finish('static output ready')
    })
    .catch(() => {})
}, 2000)

generate.on('exit', (code) => {
  clearInterval(poll)
  if (!finishing) {
    process.exit(code ?? 1)
  }
})

setTimeout(() => {
  clearInterval(poll)
  finish('hard timeout')
}, HARD_MS)
