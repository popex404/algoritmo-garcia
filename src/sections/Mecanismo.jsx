import { Reveal } from '../lib/Reveal.jsx'

/* Seccion "por que es diferente": imagen + texto con cita y lista de diferenciadores.
   diffs: [{ k: 'Titulo:', v: 'descripcion' }] */
export function Mecanismo({ id = 'mecanismo', imgDesktop, imgMobile, imgAlt, label, title, razon, diffs = [] }) {
  return (
    <section id={id}>
      <div className="container">
        <Reveal className="mec-inner">
          <div className="mec-img">
            <img src={imgDesktop} alt={imgAlt} loading="lazy" />
          </div>
          <div className="mec-img-mobile">
            <img src={imgMobile} alt={imgAlt} loading="lazy" />
          </div>
          <div className="mec-text">
            {label && <span className="label">{label}</span>}
            <h2>{title}</h2>
            {razon && <p className="razon">{razon}</p>}
            <ul className="mec-diffs">
              {diffs.map((d, i) => (
                <li key={i}><strong>{d.k}</strong> {d.v}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
