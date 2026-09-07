export default defineNuxtPlugin(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const desktopQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

  if (motionQuery.matches || !desktopQuery.matches) {
    return
  }

  let destroyed = false
  let stopLenis: (() => void) | undefined

  const cleanup = () => {
    if (destroyed) {
      return
    }

    destroyed = true
    motionQuery.removeEventListener('change', onMotionPreferenceChange)
    desktopQuery.removeEventListener('change', onDesktopChange)
    window.removeEventListener('pagehide', onPageHide)
    stopLenis?.()
  }

  const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      cleanup()
    }
  }

  const onDesktopChange = (event: MediaQueryListEvent) => {
    if (!event.matches) {
      cleanup()
    }
  }

  const onPageHide = () => {
    cleanup()
  }

  const shouldSkip = () => destroyed || motionQuery.matches || !desktopQuery.matches

  onNuxtReady(async () => {
    if (shouldSkip()) {
      return
    }

    const [{ default: Lenis }] = await Promise.all([
      import('lenis'),
      import('lenis/dist/lenis.css'),
    ])

    if (shouldSkip()) {
      return
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.12,
      syncTouch: false,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    })

    let isPopState = false
    const onPopState = () => {
      isPopState = true
    }

    window.addEventListener('popstate', onPopState)

    const router = useRouter()
    const stopRouterHook = router.afterEach((to, from) => {
      if (to.path === from.path) {
        return
      }

      if (isPopState) {
        isPopState = false
        return
      }

      lenis.scrollTo(0, { immediate: true })
    })

    stopLenis = () => {
      stopRouterHook()
      window.removeEventListener('popstate', onPopState)
      lenis.destroy()
    }
  })

  motionQuery.addEventListener('change', onMotionPreferenceChange)
  desktopQuery.addEventListener('change', onDesktopChange)
  window.addEventListener('pagehide', onPageHide)

  if (import.meta.hot) {
    import.meta.hot.dispose(cleanup)
  }
})
