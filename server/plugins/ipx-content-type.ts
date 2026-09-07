export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    const path = decodeURIComponent(event.path.split('?')[0] ?? '')
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
