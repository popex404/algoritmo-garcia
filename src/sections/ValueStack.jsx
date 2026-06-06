import { SectionHeader } from './SectionHeader.jsx'
import { MobileCarousel } from '../lib/Carousel.jsx'
import { PriceToggle, Price } from '../lib/currency.jsx'

/* Tabla comparativa: valor de mercado vs precio real.
   block: { title, cols:[a,b], rows:[{label,value}], total:{label,value}, final:{label,value} }
   rows/total = valores de mercado (fee=false); title/final = precio real (fee=true). */
function ValueBlock({ block, className }) {
  return (
    <div className={className}>
      <p className="value-title"><Price fee>{block.title}</Price></p>
      <table className="value-table">
        <tbody>
          <tr><th>{block.cols[0]}</th><th>{block.cols[1]}</th></tr>
          {block.rows.map((r, i) => (
            <tr key={i}><td>{r.label}</td><td><Price fee={false}>{r.value}</Price></td></tr>
          ))}
          <tr className="total"><td>{block.total.label}</td><td><Price fee={false}>{block.total.value}</Price></td></tr>
          <tr className="precio-final"><td>{block.final.label}</td><td><Price fee>{block.final.value}</Price></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export function ValueStack({ id = 'value-stack', label, title, text, blocks = [], ancla }) {
  return (
    <section id={id}>
      <div className="container">
        <SectionHeader label={label} title={title} text={text}>
          <PriceToggle />
        </SectionHeader>
        <MobileCarousel
          containerClass="value-inner"
          navClass="value-carousel-nav"
          itemClass="value-block"
          items={blocks}
          renderItem={(b, i, cls) => <ValueBlock key={i} block={b} className={cls} />}
        />
        {ancla && <p className="frase-ancla"><Price fee>{ancla}</Price></p>}
      </div>
    </section>
  )
}
