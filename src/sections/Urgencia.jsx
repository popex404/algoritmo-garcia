import { Reveal } from '../lib/Reveal.jsx'

/* Banda de urgencia (fondo oscuro, centrada) con CTA. */
export function Urgencia({ id = 'urgencia', label, title, main, sub, cta }) {
  return (
    <section id={id}>
      <div className="container">
        <span className="label-light" style={{ textAlign: 'center', display: 'block' }}>{label}</span>
        <h2>{title}</h2>
        {main && <Reveal as="p" className="urgencia-main">{main}</Reveal>}
        {sub && <Reveal as="p" className="urgencia-sub">{sub}</Reveal>}
        {cta && (
          <Reveal as="a" className="btn btn-khaki" href={cta.href} target="_blank" rel="noopener">{cta.label}</Reveal>
        )}
      </div>
    </section>
  )
}
