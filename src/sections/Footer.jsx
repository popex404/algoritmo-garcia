/* Footer: logo + copyright + links + nota de privacidad. */
export function Footer({ logo, logoAlt, copyright, links = [], privacy }) {
  return (
    <footer>
      <div className="footer-inner">
        {logo && <img src={logo} alt={logoAlt} className="footer-logo" />}
        {copyright && <p>{copyright}</p>}
        {links.length > 0 && (
          <div className="footer-links">
            {links.map((l, i) => <a key={i} href={l.href}>{l.label}</a>)}
          </div>
        )}
        {privacy && <p className="privacidad-nota" id="privacidad">{privacy}</p>}
      </div>
    </footer>
  )
}
