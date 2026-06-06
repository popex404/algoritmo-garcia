import { useState } from 'react'
import { Reveal } from '../lib/Reveal.jsx'
import { MobileCarousel } from '../lib/Carousel.jsx'
import { PriceToggle, Price } from '../lib/currency.jsx'

const strike = { fontSize: '.72rem', opacity: .45, textDecoration: 'line-through', color: 'var(--verde)' }

/* Una tarjeta de servicio. price/oldPrice/star siguen el switch de moneda. */
function ServiceCard({ s, className }) {
  return (
    <div className={className}>
      <img src={s.img} alt={s.alt} className="card-img" loading="lazy" />
      {s.star && (
        <div className="card-star">
          {/\$/.test(s.star) ? <Price fee={!/ahorr/i.test(s.star)}>{s.star}</Price> : s.star}
        </div>
      )}
      <h3>{s.title}</h3>
      <div className="precio">
        <Price fee>{s.price}</Price>
        {s.oldPrice && <> <span style={strike}><Price fee>{s.oldPrice}</Price></span></>}
      </div>
      <p className="desc">{s.desc}</p>
      <span className="seguimiento-badge">✦ Seguimiento incluido</span>
      <a href={s.href} className="card-btn" target="_blank" rel="noopener">Agendar</a>
    </div>
  )
}

/* Catalogo de servicios con tabs + carrusel mobile por tab + switch de moneda.
   tabs: [{ key, label }]   panels: { [key]: { note?, services: [...] } } */
export function Servicios({ id = 'solucion', icon, label, title, text, tabs = [], panels = {}, footer }) {
  const [active, setActive] = useState(tabs[0]?.key)

  return (
    <section id={id}>
      <div className="container">
        <Reveal className="servicios-intro">
          {icon && <img src={icon} alt="" className="service-icon-top" aria-hidden="true" />}
          {label && <span className="label">{label}</span>}
          <h2 style={{ color: 'var(--verde)' }}>{title}</h2>
          {text && <p style={{ color: 'var(--verde)', opacity: .72 }}>{text}</p>}
          <PriceToggle />
        </Reveal>

        <Reveal className="servicios-tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={'tab-btn' + (active === t.key ? ' active' : '')}
              onClick={() => setActive(t.key)}
            >{t.label}</button>
          ))}
        </Reveal>

        {tabs.map((t) => {
          const panel = panels[t.key] || { services: [] }
          return (
            <div key={t.key} id={'tab-' + t.key} className={'tab-panel' + (active === t.key ? ' active' : '')}>
              {panel.note && (
                <p style={{ fontSize: '.84rem', color: 'var(--verde)', opacity: .6, marginBottom: '1.5rem' }}>{panel.note}</p>
              )}
              <MobileCarousel
                containerClass="servicios-grid"
                navClass="servicios-carousel-nav"
                itemClass="servicio-card"
                items={panel.services}
                renderItem={(s, i, cls) => <ServiceCard key={i} s={s} className={cls} />}
              />
            </div>
          )
        })}

        {footer && (
          <div className="servicios-footer">
            <a href={footer.ctaHref} className="btn btn-verde" target="_blank" rel="noopener">{footer.ctaLabel}</a>
            {footer.note && <p>{footer.note}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
