import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (motionQuery.matches) {
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

  let destroyed = false

  const cleanup = () => {
    if (destroyed) {
      return
    }

    destroyed = true
    stopRouterHook()
    window.removeEventListener('popstate', onPopState)
    motionQuery.removeEventListener('change', onMotionPreferenceChange)
    window.removeEventListener('pagehide', cleanup)
    lenis.destroy()
  }

  const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      cleanup()
    }
  }

  motionQuery.addEventListener('change', onMotionPreferenceChange)

  if (import.meta.hot) {
    import.meta.hot.dispose(cleanup)
  }

  window.addEventListener('pagehide', cleanup)

  return {
    provide: {
      lenis,
    },
  }
})
