import { useState } from 'react'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '../lib/icons.jsx'

/* Header fijo con marca + nav + social + menu hamburguesa (mobile).
   Reemplaza el header del index.html + la logica del burger en app.js. */
export function Header({ brand, links = [], socials = {} }) {
  const [open, setOpen] = useState(false)

  const Social = ({ size }) => (
    <>
      {socials.instagram && (
        <a href={socials.instagram} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon size={size} /></a>
      )}
      {socials.tiktok && (
        <a href={socials.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><TikTokIcon size={size} /></a>
      )}
      {socials.whatsapp && (
        <a href={socials.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon size={size} /></a>
      )}
    </>
  )

  return (
    <header id="header">
      <div className="header-inner">
        <a href={brand.homeHref || '#hero'} className="header-brand" aria-label={`${brand.name} — inicio`}>
          {brand.logo && <img src={brand.logo} alt="" />}
          <span>{brand.name}</span>
        </a>

        <nav className="header-nav">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="header-social"><Social size={18} /></div>

        <button
          className={'header-burger' + (open ? ' open' : '')}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className={'mobile-menu' + (open ? ' open' : '')} aria-hidden={!open}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <div className="mobile-menu-social"><Social size={22} /></div>
      </nav>
    </header>
  )
}
