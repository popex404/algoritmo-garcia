import { useState } from 'react'

/* ============================================================
   Logo Algoritmo García.
   Muestra tu PNG si existe en public/logo-ag-white.png.
   Si no, dibuja un engranaje SVG (fallback) para que el sitio nunca se rompa.
   Para usar tu logo definitivo: deja el PNG transparente (versión blanca) en
   public/logo-ag-white.png y listo.
   ============================================================ */

function cogPath(teeth = 10, rO = 31, rI = 25, cx = 32, cy = 32, hole = 12) {
  const step = Math.PI / teeth
  let p = ''
  for (let i = 0; i < teeth * 2; i++) {
    const r = i % 2 === 0 ? rO : rI
    const a = i * step - Math.PI / 2
    const x = (cx + r * Math.cos(a)).toFixed(2)
    const y = (cy + r * Math.sin(a)).toFixed(2)
    p += (i === 0 ? 'M' : 'L') + x + ' ' + y + ' '
  }
  p += 'Z'
  // agujero central (fill-rule evenodd lo recorta)
  p += `M${cx - hole} ${cy} a${hole} ${hole} 0 1 0 ${hole * 2} 0 a${hole} ${hole} 0 1 0 ${-hole * 2} 0 Z`
  return p
}

export function GearMark({ size = 36, className, spin = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={(className || '') + (spin ? ' ag-spin' : '')}
      aria-hidden="true"
    >
      <path d={cogPath()} fillRule="evenodd" fill="currentColor" />
    </svg>
  )
}

export function LogoAG({ size = 36, className, spin = false }) {
  const [err, setErr] = useState(false)
  if (err) return <GearMark size={size} className={className} spin={spin} />
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo-ag-white.png`}
      alt="Algoritmo García"
      width={size}
      height={size}
      className={(className || '') + (spin ? ' ag-spin' : '')}
      onError={() => setErr(true)}
      style={{ objectFit: 'contain' }}
    />
  )
}
