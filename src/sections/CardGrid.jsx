import { SectionHeader } from './SectionHeader.jsx'
import { MobileCarousel } from '../lib/Carousel.jsx'

/* Seccion generica: encabezado + grid de cards (carrusel en mobile).
   renderCard(item, i, className) aplica `className` al root de cada card. */
export function CardGrid({ id, label, title, text, gridClass, navClass, itemClass, items, renderCard }) {
  return (
    <section id={id}>
      <div className="container">
        <SectionHeader label={label} title={title} text={text} />
        <MobileCarousel
          containerClass={gridClass}
          navClass={navClass}
          itemClass={itemClass}
          items={items}
          renderItem={renderCard}
        />
      </div>
    </section>
  )
}
