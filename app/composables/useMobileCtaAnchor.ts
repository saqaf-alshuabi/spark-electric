const MOBILE_CTA_ANCHOR_KEY = 'mobile-cta-anchor'

function useMobileCtaAnchorState() {
  return useState<HTMLElement | null>(MOBILE_CTA_ANCHOR_KEY, () => null)
}

export function useMobileCtaAnchor() {
  const anchor = useMobileCtaAnchorState()

  onUnmounted(() => {
    anchor.value = null
  })

  return anchor
}

export { useMobileCtaAnchorState }
