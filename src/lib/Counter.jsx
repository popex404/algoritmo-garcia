import { useEffect, useRef, useState } from 'react'

/* ============================================================
   Counter  —  reemplaza initCounters() de app.js
   Anima un numero de 0 al valor al entrar al viewport.
   value: "6", "+20", "+500" (prefijo y sufijo no numericos se conservan).
   ============================================================ */

export function Counter({ value }) {
  const ref = useRef(null)
  const m = String(value).match(/^(\D*)(\d+)(\D*)$/)
  const prefix = m ? m[1] : ''
  const target = m ? parseInt(m[2], 10) : 0
  const suffix = m ? m[3] : ''
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || !m) return
    const easeOut = (t) => t * (2 - t)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          io.unobserve(el)
          const dur = 1200
          const start = performance.now()
          const step = (now) => {
            const p = Math.min((now - start) / dur, 1)
            setN(Math.round(easeOut(p) * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!m) return <span className="dato-num">{value}</span>
  return (
    <span ref={ref} className="dato-num">
      {prefix}{n}{suffix}
    </span>
  )
}
