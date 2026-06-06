import { useState } from 'react'
import { SectionHeader } from './SectionHeader.jsx'
import { Reveal } from '../lib/Reveal.jsx'
import { Price } from '../lib/currency.jsx'

/* Acordeon de preguntas (una abierta a la vez).
   items: [{ q, a, price? }]  — price:true hace que la respuesta siga el switch de moneda. */
export function Faq({ id = 'faq', label, title, items = [] }) {
  const [open, setOpen] = useState(-1)
  return (
    <section id={id}>
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="faq-list">
          {items.map((it, i) => (
            <Reveal key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className={'faq-answer-inner' + (it.price ? ' faq-precio' : '')}>
                  {it.price ? <Price fee>{it.a}</Price> : it.a}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
