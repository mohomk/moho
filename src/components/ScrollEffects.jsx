'use client'
import { useEffect } from 'react'

// Page-wide effects for server-rendered markup:
// [data-reveal] fades in when scrolled into view, [data-light] lights up at mid-screen,
// [data-spotlight] gets --x/--y so its glow follows the pointer. Styles live in globals.css.
export default function ScrollEffects () {
  useEffect(() => {
    const show = (entries, observer) => entries.forEach((e) => {
      if (!e.isIntersecting) return
      e.target.setAttribute('data-visible', '')
      observer.unobserve(e.target)
    })

    const reveal = new IntersectionObserver(show, { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el))

    const light = new IntersectionObserver(show, { rootMargin: '0px 0px -50% 0px' })
    document.querySelectorAll('[data-light]').forEach((el) => light.observe(el))

    const onMove = (e) => {
      const el = e.target.closest?.('[data-spotlight]')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--x', `${e.clientX - r.left}px`)
      el.style.setProperty('--y', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      reveal.disconnect()
      light.disconnect()
      document.removeEventListener('pointermove', onMove)
    }
  }, [])

  return null
}
