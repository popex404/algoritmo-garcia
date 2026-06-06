import { SectionHeader } from '../../sections/SectionHeader.jsx'
import { Reveal } from '../../lib/Reveal.jsx'

/* "La diferencia": transparencia, control y enseñanza (vs cajas negras). */
export function Diferencia({ label, title, text, items = [] }) {
  return (
    <section className="dif">
      <div className="container">
        <SectionHeader label={label} title={title} text={text} />
        <Reveal className="dif-grid">
          {items.map((d, i) => (
            <div key={i} className="dif-card">
              <div className="dif-head">
                <span className="dif-icon">{d.icon}</span>
                <h3>{d.title}</h3>
              </div>
              <p>{d.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
