import { Reveal } from '../lib/Reveal.jsx'

/* Encabezado de seccion: label + h2 + p. variant light para fondos oscuros.
   children = contenido extra dentro del header (ej: el toggle de moneda). */
export function SectionHeader({ label, title, text, light = false, children }) {
  return (
    <Reveal className={light ? 'section-header-light' : 'section-header'}>
      {label && <span className={light ? 'label-light' : 'label'}>{label}</span>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}
    </Reveal>
  )
}
