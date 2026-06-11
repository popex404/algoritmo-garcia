import { useEffect, useState } from 'react'

/* Héroe: Idea → Algoritmo → Acción.
   La idea y la acción cambian en pareja (cuentan una historia), con fundido. */
export function Hero({ title, tag, ctas = [], flow }) {
  const pairs = flow.pairs
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % pairs.length), 2300) // 1.8s + 0.5s extra
    return () => clearInterval(id)
  }, [pairs.length])

  const cur = pairs[i]

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <h1>{title}</h1>

        <div className="flow">
          <div className="flow-node idea">
            <span className="flow-k">Tu idea</span>
            <span className="flow-v fade" key={'i' + i}>{cur.idea}</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-core">
            <img src={`${import.meta.env.BASE_URL}gear-white.png`} alt="" className="flow-gear" />
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node accion">
            <span className="flow-k">Acción</span>
            <span className="flow-v fade" key={'a' + i}>{cur.accion}</span>
            <span className="flow-emoji fade" key={'e' + i}>{cur.emoji}</span>
          </div>
        </div>

        <p className="hero-tag">{tag}</p>

        <div className="hero-ctas">
          {ctas.map((c, idx) => (
            <a key={idx} href={c.href} className={'btn ' + c.variant} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
