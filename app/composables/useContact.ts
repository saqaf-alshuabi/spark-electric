export const useContact = () => {
  const { site } = useAppConfig()

  return {
    whatsappUrl: `https://wa.me/${site.phone}`,
    phoneUrl: `tel:${site.phone}`,
  }
}
