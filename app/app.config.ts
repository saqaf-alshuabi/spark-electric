export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    icons: {
      menu: 'i-ph-equals',
      close: 'i-ph-x',
      arrowLeft: 'i-ph-arrow-left',
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
