#!/usr/bin/env node
/**
 * Cloudflare Pages:
 * 1. CF_PAGES makes Nitro auto-pick cloudflare-pages-static (wrong for us).
 * 2. `nuxt generate` can finish writing files but leave the event loop open.
 * This script forces a real static generate, then exits once output exists.
 */
import { spawn } from 'node:child_process'
import { access } from 'node:fs/promises'
import { setTimeout as sleep } from 'node:timers/promises'

const OUTPUT = '.output/public/index.html'
const SITEMAP = '.output/public/sitemap.xml'
const HARD_MS = 12 * 60 * 1000
const SETTLE_MS = 20_000

const env = {
  ...process.env,
  // Beat Cloudflare's auto preset so output stays in .output/public.
  NITRO_PRESET: 'static',
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      env,
      shell: process.platform === 'win32',
    })
    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
      }
      else {
        reject(new Error(`${command} ${args.join(' ')} exited ${code}`))
      }
    })
  })
}

await run('pnpm', ['exec', 'nuxt', 'prepare'])

const child = spawn('pnpm', ['exec', 'nuxt', 'generate'], {
  stdio: 'inherit',
  env,
  shell: process.platform === 'win32',
})

let finishing = false

async function outputReady() {
  await access(OUTPUT)
  await access(SITEMAP)
}

async function finishOk(reason) {
  if (finishing) {
    return
  }
  finishing = true
  console.log(`[pages:build] ${reason} — stopping Nuxt so Cloudflare can deploy`)
  child.kill('SIGTERM')
  await sleep(5000)
  if (!child.killed) {
    child.kill('SIGKILL')
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
  outputReady()
    .then(async () => {
      clearInterval(poll)
      await sleep(SETTLE_MS)
      await finishOk('static output ready')
    })
    .catch(() => {})
}, 2000)

child.on('exit', (code) => {
  clearInterval(poll)
  if (finishing) {
    return
  }
  process.exit(code ?? 1)
})

setTimeout(() => {
  clearInterval(poll)
  finishOk('hard timeout')
}, HARD_MS)
