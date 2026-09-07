import { joinURL, encodePath, encodeParam } from 'ufo'
import { createOperationsGenerator, defineProvider } from '@nuxt/image/runtime'

/**
 * ipxStatic, but modifiers stay one path segment without `&`.
 * `&` becomes a query string on Cloudflare Assets (307 to %26).
 * `,` is a srcset separator, so the browser splits `/_ipx/w_640,f_webp/...`.
 * `%2C` keeps one srcset URL and matches the path Cloudflare already serves.
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

    const params = (operationsGenerator(modifiers) || '_').replaceAll(',', '%2C')

    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, '/_ipx')
    }

    return {
      url: joinURL(baseURL, params, encodePath(src).replace(/\/{2,}/g, '/')),
    }
  },
})
