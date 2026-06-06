import { SectionHeader } from '../../sections/SectionHeader.jsx'
import { MobileCarousel } from '../../lib/Carousel.jsx'

/* Casos reales. En desktop: grid. En mobile: carrusel (1 a la vez + flechas + dots). */
export function Casos({ label, title, text, items = [], portfolio }) {
  return (
    <section id="casos">
      <div className="container">
        <SectionHeader label={label} title={title} text={text} />
        <MobileCarousel
          containerClass="casos-grid"
          navClass="casos-carousel-nav"
          itemClass="caso-card"
          items={items}
          renderItem={(c, i, cls) => (
            <div key={i} className={cls}>
              <div className="caso-top">
                <h3>{c.title}</h3>
                <span className="caso-tag">{c.tag}</span>
              </div>
              <div className="caso-rubro">{c.rubro}</div>
              <p>{c.desc}</p>
              {c.href
                ? <a className="caso-link" href={c.href} target="_blank" rel="noopener">{c.linkLabel} →</a>
                : <span className="caso-link caso-soon">Pronto online</span>}
            </div>
          )}
        />
        {portfolio && (
          <p className="price-note">
            <a href={portfolio.href} target="_blank" rel="noopener">{portfolio.label}</a>
          </p>
        )}
      </div>
    </section>
  )
}
