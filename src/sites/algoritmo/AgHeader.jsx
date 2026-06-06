import { useState } from 'react'
import { LogoAG } from './LogoAG.jsx'
import { GitHubIcon, LinkedInIcon, XIcon } from '../../lib/icons.jsx'

/* Header del sitio Algoritmo García: logo + nav + social + CTA + menú mobile. */
export function AgHeader({ links = [], socials = {}, cta }) {
  const [open, setOpen] = useState(false)

  const Social = () => (
    <>
      {socials.github && <a href={socials.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>}
      {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>}
      {socials.x && <a href={socials.x} target="_blank" rel="noopener" aria-label="X"><XIcon /></a>}
    </>
  )

  return (
    <header className="ag-header">
      <div className="ag-header-inner">
        <a href="#top" className="ag-brand">
          <LogoAG size={32} />
          <span>Algoritmo <span className="garcia">García</span></span>
        </a>

        <nav className="ag-nav">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="ag-header-actions">
          <div className="ag-social"><Social /></div>
          {cta && <a className="btn btn-oro" href={cta.href} target="_blank" rel="noopener">{cta.label}</a>}
        </div>

        <button className={'ag-burger' + (open ? ' open' : '')} aria-label="Menú" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={'ag-mobile' + (open ? ' open' : '')}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        {cta && <a className="btn btn-oro" href={cta.href} target="_blank" rel="noopener">{cta.label}</a>}
      </div>
    </header>
  )
}
