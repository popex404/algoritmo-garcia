import { useEffect, useRef, useState } from 'react'

/* ============================================================
   Reveal  —  reemplaza initReveal() (IntersectionObserver) de app.js
   Aplica .reveal y agrega .revealed cuando entra al viewport.
   ============================================================ */

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = ['reveal', shown ? 'revealed' : '', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
