import { WhatsAppIcon } from '../lib/icons.jsx'

/* Boton flotante de WhatsApp. */
export function WaFloat({ href }) {
  return (
    <a href={href} className="wa-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
      <WhatsAppIcon size={28} fill="white" />
    </a>
  )
}
