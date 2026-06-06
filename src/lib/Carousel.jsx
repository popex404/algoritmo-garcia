import { useState } from 'react'

/* ============================================================
   MobileCarousel  —  reemplaza initCarousels()/setupCarousel() de app.js

   En vanilla: un grid que en mobile (CSS @media) ocultaba todas las cards
   menos la que tuviera .carousel-active, mas botones prev/next/dots manuales.
   En React: misma idea, pero el indice activo es estado y el CSS de CG hace
   el resto (grid en desktop, una sola visible en mobile).

   renderItem(item, i, className) debe aplicar `className` al root del item
   (incluye 'carousel-active' cuando corresponde).
   ============================================================ */

export function MobileCarousel({ containerClass, navClass, itemClass = '', items, renderItem, start = 0 }) {
  const [idx, setIdx] = useState(start)
  const n = items.length
  const go = (i) => setIdx((i + n) % n)

  return (
    <>
      <div className={containerClass}>
        {items.map((item, i) =>
          renderItem(item, i, (itemClass + (i === idx ? ' carousel-active' : '')).trim())
        )}
      </div>
      <div className={navClass}>
        <button className="carousel-btn carousel-prev" aria-label="Anterior" onClick={() => go(idx - 1)}>&#8592;</button>
        <div className="carousel-dots">
          {items.map((_, i) => (
            <span
              key={i}
              className={'carousel-dot' + (i === idx ? ' active' : '')}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button className="carousel-btn carousel-next" aria-label="Siguiente" onClick={() => go(idx + 1)}>&#8594;</button>
      </div>
    </>
  )
}
