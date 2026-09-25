export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('robots:robots-txt', (ctx) => {
    ctx.robotsTxt = ctx.robotsTxt
      .split('\n')
      .filter(line => !/^Content-(Usage|Signal):/i.test(line))
      .join('\n')
  })
})
