export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    icons: {
      menu: 'i-heroicons-bars-2',
      close: 'i-heroicons-x-mark',
      arrowLeft: 'i-heroicons-arrow-left',
      arrowRight: 'i-heroicons-arrow-right',
      check: 'i-heroicons-check',
      whatsapp: 'i-simple-icons-whatsapp',
      phone: 'i-heroicons-phone',
    },
    header: {
      slots: {
        root: 'h-[calc(var(--ui-header-height)+env(safe-area-inset-top,0px))] pt-[env(safe-area-inset-top,0px)]',
      },
    },
  },
})
