export default defineAppConfig({
  site: {
    name: 'تيم',
    copyright: `${new Date().getFullYear()} جميع الحقوق محفوظة`,
    logo: '/logos/logo.svg',
  },
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    icons: {
      menu: 'i-heroicons-bars-2',
      close: 'i-heroicons-x-mark',
    },
  },
});
