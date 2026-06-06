import { useState } from 'react'
import { SectionHeader } from '../../sections/SectionHeader.jsx'
import { Reveal } from '../../lib/Reveal.jsx'

/* Card simple: muestra ícono + título; al pasar el mouse o hacer click
   revela términos específicos. */
function CapCard({ c }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={'cap-card' + (c.wild ? ' cap-wild' : '') + (open ? ' open' : '')}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="cap-head">
        <span className="cap-icon">{c.icon}</span>
        <h3>{c.title}</h3>
      </div>
      {c.desc && <p className="cap-desc">{c.desc}</p>}
      {c.terms?.length > 0 && (
        <div className="cap-terms">
          {c.terms.map((t, i) => <span key={i} className="cap-term">{t}</span>)}
        </div>
      )}
    </div>
  )
}

export function Capacidades({ label, title, text, items = [] }) {
  return (
    <section id="capacidades">
      <div className="container">
        <SectionHeader label={label} title={title} text={text} />
        <Reveal className="cap-grid">
          {items.map((c, i) => <CapCard key={i} c={c} />)}
        </Reveal>
      </div>
    </section>
  )
}
