export const notFound = (message: string = 'الصفحة غير موجودة') => {
  throw createError({
    status: 404,
    statusText: 'Not Found',
    message,
    fatal: true,
  })
}
