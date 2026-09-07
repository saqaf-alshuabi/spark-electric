export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    let path = event.path
    try {
      path = decodeURIComponent(path)
    }
    catch {
      // Keep the raw path if Cloudflare already decoded it.
    }

    if (!path.startsWith('/_ipx/')) {
      return
    }

    if (path.includes('f_avif')) {
      setResponseHeader(event, 'content-type', 'image/avif')
      return
    }

    if (path.includes('f_webp')) {
      setResponseHeader(event, 'content-type', 'image/webp')
    }
  })
})
