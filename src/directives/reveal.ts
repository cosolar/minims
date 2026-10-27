import type { Directive } from 'vue'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer: IntersectionObserver | null = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
  )
  return observer
}

export const revealDirective: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion) {
      el.classList.add('is-in')
      return
    }
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
