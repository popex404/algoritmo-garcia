import { Reveal } from '../lib/Reveal.jsx'

/* Seccion garantia/promesa: imagen + label a la izquierda, texto + lista a la derecha. */
export function Garantia({ id = 'garantia', logo, logoAlt, label, title, subtitle, paragraphs = [], items = [] }) {
  return (
    <section id={id}>
      <div className="container">
        <Reveal className="garantia-inner">
          <div style={{ textAlign: 'center' }}>
            {logo && <img src={logo} alt={logoAlt} className="garantia-logo-img" />}
            {label && <span className="label">{label}</span>}
          </div>
          <div className="garantia-texto">
            <h2>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {items.length > 0 && (
              <ul className="garantia-items">
                {items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
