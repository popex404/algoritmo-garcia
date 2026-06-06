import { SectionHeader } from './SectionHeader.jsx'
import { MobileCarousel } from '../lib/Carousel.jsx'
import { Reveal } from '../lib/Reveal.jsx'
import { Counter } from '../lib/Counter.jsx'

/* Prueba social: testimonios (carrusel en mobile) + grid de numeros animados.
   testimonials: [{ text, name }]   stats: [{ num, label }] */
export function Prueba({ id = 'prueba', label, title, testimonials = [], stats = [] }) {
  return (
    <section id={id}>
      <div className="container">
        <SectionHeader light label={label} title={title} />

        <MobileCarousel
          containerClass="testimonios-grid"
          navClass="testimonios-carousel-nav"
          itemClass="testimonio-card"
          items={testimonials}
          renderItem={(t, i, cls) => (
            <div key={i} className={cls}>
              <p className="testimonio-texto">{t.text}</p>
              <span className="testimonio-nombre">{t.name}</span>
            </div>
          )}
        />

        <Reveal className="datos-grid">
          {stats.map((s, i) => (
            <div key={i} className="dato-item">
              <Counter value={s.num} />
              <span className="dato-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
