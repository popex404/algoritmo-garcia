import { SectionHeader } from '../../sections/SectionHeader.jsx'
import { MobileCarousel } from '../../lib/Carousel.jsx'

/* Planes. En desktop: grid 3 columnas. En mobile: carrusel que parte en el plan destacado. */
export function Pricing({ label, title, text, plans = [], note }) {
  const featuredIdx = Math.max(0, plans.findIndex((p) => p.featured))
  return (
    <section id="precios" className="pricing">
      <div className="container">
        <SectionHeader label={label} title={title} text={text} />
        <MobileCarousel
          containerClass="price-grid"
          navClass="price-carousel-nav"
          itemClass="price-card"
          items={plans}
          start={featuredIdx}
          renderItem={(p, i, cls) => (
            <div key={i} className={cls + (p.featured ? ' featured' : '')}>
              {p.featured && <span className="price-badge">Más popular</span>}
              <h3>{p.name}</h3>
              <p className="price-desc">{p.desc}</p>
              <div className="price-amount">
                {p.from && <span className="price-from">{p.from}</span>}
                {p.price}{p.unit && <span className="price-unit"> {p.unit}</span>}
              </div>
              <ul className="price-feats">
                {p.feats.map((f, j) => {
                  const neg = typeof f === 'object' && f.no
                  return <li key={j} className={neg ? 'feat-no' : undefined}>{neg ? f.text : f}</li>
                })}
              </ul>
              <a
                className={'btn ' + (p.featured ? 'btn-oro' : 'btn-outline')}
                href={p.cta.href}
                target="_blank"
                rel="noopener"
              >{p.cta.label}</a>
            </div>
          )}
        />
        {note && (
          <p className="price-note">
            {note.text}{' '}
            {note.cta && <a href={note.cta.href} target="_blank" rel="noopener">{note.cta.label}</a>}
          </p>
        )}
      </div>
    </section>
  )
}
