/** Show the mobile bar when page CTAs scroll off-screen (or immediately if none). */
export function useMobileBarVisibility() {
  const anchor = useMobileCtaAnchorState()
  const isOnScreen = useElementVisibility(anchor)

  const isVisible = computed(() => !anchor.value || !isOnScreen.value)

  return { isVisible }
}
