import { Reveal } from '../lib/Reveal.jsx'

/* CTA final centrado (fondo invertido). ctas: [{ href, label, variant, external }] */
export function CtaFinal({ id = 'cta-final', label, title, text, ctas = [] }) {
  return (
    <section id={id}>
      <Reveal className="cta-content container">
        <span className="label-light" style={{ textAlign: 'center', display: 'block' }}>{label}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <div className="cta-ctas">
          {ctas.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className={'btn ' + c.variant}
              {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
            >{c.label}</a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
