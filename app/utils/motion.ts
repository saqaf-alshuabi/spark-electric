/** True when any part of the element is in the current viewport (first screen on load). */
export const isInFirstViewport = (el: HTMLElement) => {
  const { top, bottom } = el.getBoundingClientRect()
  return top < window.innerHeight && bottom > 0
}

export const MOTION_DELAY = {
  heading: 0,
  copy: 100,
  grid: 180,
  stagger: 90,
  cta: 240,
} as const

export const MOTION_DURATION = {
  reveal: 900,
} as const

export const motionStagger = (
  index: number,
  base = MOTION_DELAY.grid,
  step = MOTION_DELAY.stagger,
) => base + index * step
