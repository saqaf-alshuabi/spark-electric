export default defineAppConfig({
  site: {
    name: 'تيم',
    fullName: 'أبو تيم الكهربائي',
    tagline: 'فني كهرباء مباني ومنازل',
    city: 'مكة',
    copyright: `${new Date().getFullYear()} جميع الحقوق محفوظة`,
    logo: '/images/logos/logo.svg',

    phone: '967738271423',
  },
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
      whatsapp: 'i-simple-icons-whatsapp',
      phone: 'i-heroicons-phone',
    },
  },
})
