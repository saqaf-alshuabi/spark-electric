import Lenis from 'lenis';

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    lerp: 0.07,
    smoothWheel: true,
    touchMultiplier: 2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    syncTouch: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
