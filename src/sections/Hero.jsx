/* Hero con imagen full-bleed + capa + contenido + ola.
   La imagen de fondo se define en CSS (.hero-bg). title es JSX (permite <em>/acentos). */
export function Hero({ title, sub, badges = [], ctas = [], waveFill, wavePath = 'M0,12 C480,68 960,8 1440,46 L1440,64 L0,64 Z' }) {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>{title}</h1>
        {sub && <p className="hero-sub">{sub}</p>}

        {badges.length > 0 && (
          <div className="hero-badges">
            {badges.map((b, i) => <span key={i} className="hero-badge">{b}</span>)}
          </div>
        )}

        <div className="hero-ctas">
          {ctas.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className={'btn ' + c.variant}
              {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
            >{c.label}</a>
          ))}
        </div>
      </div>

      {waveFill && (
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d={wavePath} fill={waveFill} />
          </svg>
        </div>
      )}
    </section>
  )
}
