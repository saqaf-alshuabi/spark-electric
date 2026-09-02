export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    // One stroke weight sitewide: Phosphor duotone is drawn on the regular
    // skeleton, so interface icons stay regular to match the content icons.
    icons: {
      menu: 'i-ph-equals',
      close: 'i-ph-x',
      arrowLeft: 'i-ph-arrow-left',
      arrowRight: 'i-ph-arrow-right',
      check: 'i-ph-check',
      whatsapp: 'i-simple-icons-whatsapp',
      phone: 'i-ph-phone',

    },
    header: {
      slots: {
        root: 'h-[calc(var(--ui-header-height)+env(safe-area-inset-top,0px))] pt-[env(safe-area-inset-top,0px)]',
      },
    },
  },
})
