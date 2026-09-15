export const notFound = (message: string = 'الصفحة مو موجودة') => {
  throw createError({
    status: 404,
    statusText: 'Not Found',
    message,
    fatal: true,
  })
}
