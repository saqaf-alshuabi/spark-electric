const MOBILE_CTA_ANCHOR_KEY = 'mobile-cta-anchor'

function useMobileCtaAnchorState() {
  return useState<HTMLElement | null>(MOBILE_CTA_ANCHOR_KEY, () => null)
}

/** Bind to the page's primary CTA block; clears on unmount. */
export function useMobileCtaAnchor() {
  const anchor = useMobileCtaAnchorState()

  onUnmounted(() => {
    anchor.value = null
  })

  return anchor
}

export { MOBILE_CTA_ANCHOR_KEY, useMobileCtaAnchorState }
