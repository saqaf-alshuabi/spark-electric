import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (motionQuery.matches) {
    return
  }

  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.08,
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  })

  const router = useRouter()
  const stopRouterHook = router.afterEach((to, from) => {
    if (to.path !== from.path) {
      lenis.scrollTo(0, { immediate: true })
    }
  })

  let destroyed = false

  const cleanup = () => {
    if (destroyed) {
      return
    }

    destroyed = true
    stopRouterHook()
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

  // RuntimeNuxtHooks has no app:unmounted — clean up on page hide / HMR instead
  window.addEventListener('pagehide', cleanup)

  return {
    provide: {
      lenis,
    },
  }
})
