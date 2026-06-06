import { AgHeader } from './AgHeader.jsx'
import { Hero } from './Hero.jsx'
import { Diferencia } from './Diferencia.jsx'
import { Capacidades } from './Capacidades.jsx'
import { Casos } from './Casos.jsx'
import { Pricing } from './Pricing.jsx'
import { Faq } from '../../sections/Faq.jsx'
import { CtaFinal } from '../../sections/CtaFinal.jsx'
import { Footer } from '../../sections/Footer.jsx'
import { WaFloat } from '../../sections/WaFloat.jsx'
import { agData as d } from './data.jsx'
import '../../styles/ag.css'

/* ============================================================
   Sitio Algoritmo García — composición.
   Secciones propias (AgHeader, Hero, Stats, Capacidades, Casos, Pricing)
   + templates reutilizados de la librería (Faq, CtaFinal, Footer, WaFloat).
   ============================================================ */

export default function Home() {
  return (
    <>
      <AgHeader links={d.nav} socials={d.socials} />
      <main>
        <Hero {...d.hero} />
        <Diferencia {...d.diferencia} />
        <Capacidades {...d.capacidades} />
        <Casos {...d.casos} />
        <Pricing {...d.pricing} />
        <Faq id="faq" label={d.faq.label} title={d.faq.title} items={d.faq.items} />
        <CtaFinal id="cta-final" label={d.hook.label} title={d.hook.title} text={d.hook.text} ctas={d.hook.ctas} />
        <Footer copyright={d.footer.copyright} links={d.footer.links} privacy={d.footer.privacy} />
      </main>
      <WaFloat href={d.waFloat} />
    </>
  )
}
