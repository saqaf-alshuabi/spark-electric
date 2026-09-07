import { joinURL, encodePath, encodeParam } from 'ufo'
import { createOperationsGenerator, defineProvider } from '@nuxt/image/runtime'

/**
 * ipxStatic, but modifiers are comma-separated.
 * Ampersands in /_ipx/w_640&f_avif/... get treated as a query string on
 * Cloudflare Assets, which 307s to %26 and delays LCP.
 */
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: 'f',
    width: 'w',
    height: 'h',
    resize: 's',
    quality: 'q',
    background: 'b',
    position: 'pos',
  },
  joinWith: ',',
  formatter: (key, val) => `${encodeParam(key)}_${encodeParam(val.toString())}`,
})

export default defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage(src, { modifiers, baseURL }, ctx) {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`
      delete modifiers.width
      delete modifiers.height
    }

    const params = operationsGenerator(modifiers) || '_'

    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, '/_ipx')
    }

    return {
      url: joinURL(baseURL, params, encodePath(src).replace(/\/{2,}/g, '/')),
    }
  },
})
