/* ============================================================
   Contenido del sitio Algoritmo García.
   Info real de Javier. Todo el texto vive aquí (separado de la presentación).
   ============================================================ */

const WA = '56967481782' // +56 9 6748 1782
const MAIL = 'javiergarciapinilla95@gmail.com'
export const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`
export const mail = (subject) => `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`

const waPlan = (plan) => wa(`Hola Javier, me interesa el plan ${plan}. ¿Agendamos los 30 min?`)
const wa30 = wa('Hola Javier, quiero agendar los 30 min gratis. Mi idea es:')

export const agData = {
  brand: { name: 'Algoritmo García' },

  nav: [
    { href: '#casos', label: 'Mi Portafolio' },
    { href: '#precios', label: 'Precios' },
    { href: '#faq', label: 'Preguntas' },
  ],

  socials: {
    github: 'https://github.com/popex404',
    linkedin: 'https://www.linkedin.com/in/javier-garcia-popex404/',
  },

  headerCta: { href: wa30, label: '30 min gratis' },
  waFloat: wa30,

  hero: {
    title: (
      <>Convierto tus <span className="grad">ideas</span> en <span className="oro">acciones</span>.</>
    ),
    tag: 'Tu idea no necesita que sepas cómo. Yo la convierto en acción.',
    ctas: [
      { href: wa30, label: 'Agenda 30 min gratis', variant: 'btn-oro', external: true },
      { href: '#casos', label: 'Ver lo que he construido', variant: 'btn-outline' },
    ],
    flow: {
      pairs: [
        { idea: <>"Quiero <span className="kw">vender</span> online"</>, accion: 'Una tienda', emoji: '🛒' },
        { idea: <>"Quiero más <span className="kw">clientes</span>"</>, accion: 'Una campaña', emoji: '📢' },
        { idea: <>"Quiero ordenar mi <span className="kw">marca</span>"</>, accion: 'Una identidad', emoji: '🎨' },
        { idea: <>"Quiero <span className="kw">automatizar</span>"</>, accion: 'Un bot con IA', emoji: '🤖' },
        { idea: <>"Quiero entender mis <span className="kw">datos</span>"</>, accion: 'Un dashboard', emoji: '📊' },
        { idea: <>"Quiero aprender <span className="kw">cripto</span>"</>, accion: 'Un plan para lograrlo', emoji: '📝' },
      ],
    },
  },

  diferencia: {
    label: 'La diferencia',
    title: 'No te dejo dependiendo de mí',
    text: 'Muchos configuran todo con sus propias cuentas y te dejan amarrado. Yo construyo contigo y te dejo con el control.',
    items: [
      { icon: '🔑', title: 'El control es tuyo', desc: 'Todo queda a tu nombre y en tus cuentas. No dependes de mí para tocar tu propio sitio.' },
      { icon: '🔍', title: 'Nada de cajas negras', desc: 'Te explico en simple cómo funciona lo que construimos. Si no lo entiendes, no terminé mi trabajo.' },
      { icon: '🎓', title: 'Te enseño, no solo lo hago', desc: 'Te enseño a usar el producto que construimos, para que seas capaz de mejorarlo y usarlo por tu cuenta.' },
    ],
  },

  capacidades: {
    label: 'Lo que hago',
    title: 'Un proveedor, varias disciplinas',
    text: 'No tienes que coordinar a cinco personas. Reúno informática, diseño, marketing, cripto e IA en un mismo lugar.',
    items: [
      { icon: '💻', title: 'Informática', desc: '¿Necesitas una página o automatizar tareas repetitivas? Lo armamos juntos.', terms: ['Sitios web', 'Tiendas online', 'Automatización', 'Dashboards'] },
      { icon: '🎨', title: 'Diseño', desc: '¿Tu marca se ve improvisada? La dejamos viéndose profesional.', terms: ['Branding', 'Logos', 'Identidad visual', 'UI'] },
      { icon: '📈', title: 'Marketing', desc: '¿Tienes el producto pero no llegan clientes? Te ayudo a que te encuentren.', terms: ['SEO', 'Google Ads', 'Meta Ads', 'Redes', 'Leads'] },
      { icon: '🪙', title: 'Cryptomonedas', desc: '¿Quieres entenderlas para invertir? Yo te puedo enseñar.', terms: ['DeFi', 'Blockchain', 'NFTs', 'Wallets'] },
      { icon: '🤖', title: 'Inteligencia Artificial', desc: '¿Quieres usar IA pero no sabes por dónde partir? Te muestro cómo.', terms: ['Prompts', 'Contexto', 'Skills', 'LLMs'] },
      { icon: '✦', title: '¿No está en la lista?', desc: '¿Algo que no domino todavía? Te lo digo de frente, y aun así te oriento y armamos el plan para lograrlo.', terms: ['Investigo por ti', 'Aprendo rápido', 'Te derivo si conviene'], wild: true },
    ],
  },

  casos: {
    label: 'Lo que he construido',
    title: 'Trabajos reales, en producción',
    text: 'Distintos rubros, el mismo método: entender, planear, ejecutar.',
    items: [
      { title: 'A&C Soluciones', tag: 'WEB', rubro: 'Control de plagas', desc: 'Una página enfocada en conseguir leads, con un formulario interactivo para cotizar al instante.', href: 'https://www.aycmip.cl/', linkLabel: 'aycmip.cl' },
      { title: 'Mi portafolio', tag: 'WEB · Portafolio', rubro: 'Proyecto personal', desc: 'Mi propio sitio donde muestro lo que he hecho. Ahí mis análisis y CV viven de forma interactiva.', href: 'https://popex404.github.io/portfolio-javier/', linkLabel: 'Ver portafolio' },
      { title: 'Alelyche Ancestral', tag: 'WEB', rubro: 'Terapia holística', desc: 'Un sitio que transmite calma y deja ver fácilmente cada servicio, con precios en moneda nacional e internacional.', href: 'https://alelycheancestral.cl', linkLabel: 'alelycheancestral.cl' },
      { title: 'En construcción', tag: 'WSP BOT + WEB', rubro: 'Asesoría legal', desc: 'Un asistente de WhatsApp que responde y agenda solo, junto a su página. Pronto online.' },
    ],
  },

  pricing: {
    label: 'Cómo cobro',
    title: 'Pagas por mi tiempo, no por una caja negra',
    text: 'La primera reunión es gratis. Desde ahí eliges: una sesión puntual, acompañamiento continuo, o que construya yo lo que necesites. Sin amarres, sin letra chica.',
    plans: [
      {
        name: 'Sesión de Asesoría',
        desc: 'Una reunión enfocada en tu idea o problema. Para partir o resolver una duda puntual.',
        from: '1ª reunión gratis · luego',
        price: '$25.000',
        unit: 'CLP / sesión',
        feats: [
          'La primera reunión (30 min) es gratis',
          '1 hora enfocada en lo tuyo',
          'Sales con un plan de acción concreto',
          'Te enseño lo que necesites (cripto, IA, herramientas)',
          { text: 'No preparo material antes de la reunión', no: true },
          { text: 'Cambios de fecha sujetos a mi disponibilidad', no: true },
        ],
        cta: { href: wa('Hola Javier, quiero agendar una sesión de asesoría.'), label: 'Agenda tu reunión' },
      },
      {
        name: 'Acompañamiento',
        featured: true,
        desc: 'Te acompaño mes a mes a sacar adelante tu negocio o tus ideas, con material a tu medida.',
        from: 'desde',
        price: '$120.000',
        unit: 'CLP / mes',
        feats: [
          '4 sesiones al mes (1 hora cada una)',
          'Me preparo antes de cada reunión',
          'Preparo material a tu medida entre sesiones',
          'Reagendamos sin problema',
          'Respuestas por WhatsApp en días hábiles',
          'Te oriento y te enseño a manejarlo tú',
          'Sin permanencia: lo dejas cuando quieras',
        ],
        cta: { href: wa('Hola Javier, me interesa el acompañamiento mensual.'), label: 'Quiero acompañamiento' },
      },
      {
        name: 'Construcción',
        desc: 'Cuando decidimos que lo construya yo: web, tienda, bot o automatización.',
        price: 'A tu medida',
        feats: [
          'Webs, tiendas, bots de WhatsApp, automatización, IA',
          'Lo cotizamos según el alcance real',
          'Te entrego una cotización formal por escrito',
          'Tú quedas como dueño de todo',
          'Normalmente nace de las sesiones',
        ],
        cta: { href: wa('Hola Javier, quiero que construyas algo. Te cuento el proyecto:'), label: 'Conversemos tu proyecto' },
      },
    ],
    note: {
      text: 'Cada caso es distinto: si lo tuyo no calza en estos formatos, lo conversamos y lo adaptamos. La primera reunión siempre es gratis.',
      cta: { href: wa30, label: 'Agenda los 30 min gratis →' },
    },
  },

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Lo que sueles querer saber',
    items: [
      { q: '¿Cómo trabajamos?', a: 'Agendamos una reunión de 30 minutos gratis, me cuentas tu idea o pregunta, y te entrego un plan de acción concreto. Si te hace sentido, lo ejecutamos. Si no, te quedas igual con el plan.' },
      { q: '¿Y si no sé exactamente qué necesito?', a: 'Mejor. Esa es justo mi pega: ordenar la idea y proponer el camino más corto al resultado. No necesitas llegar con todo resuelto.' },
      { q: '¿Cuánto demora?', a: 'Depende del proyecto y de lo que necesites: no es lo mismo una idea simple que algo más completo. Si tienes prisa y estás dispuesto a invertir en mejores herramientas, podemos acelerar. Antes de partir acordamos un plazo realista para tu caso, sin números inventados.' },
      { q: '¿Trabajas con cualquier rubro?', a: 'Sí. He hecho desde control de plagas hasta terapia holística y asesoría legal. El método es el mismo: entender, planear, ejecutar.' },
      { q: '¿Qué pasa con el hosting y el dominio?', a: 'Voy a ser transparente con los costos desde el inicio, y tú quedas como dueño del dominio y del hosting, a tu nombre. Te los dejo configurados y listos, sin quedar amarrado a mí.' },
      { q: '¿Haces cosas además de páginas web?', a: 'Sí. Todo parte desde las reuniones de consultoría: ahí ideamos y planificamos para realizar lo que se te ocurra, o sencillamente te enseño las bases. Webs, bots de WhatsApp, automatización, datos o IA.' },
    ],
  },

  hook: {
    label: 'El primer paso es gratis',
    title: 'Trae tu idea. Te llevas un plan de acción.',
    text: '30 minutos, sin compromiso. Salgas o no conmigo, te vas con claridad de cómo lograrlo.',
    ctas: [
      { href: wa30, label: 'Agenda 30 min gratis', variant: 'btn-oro', external: true },
    ],
  },

  footer: {
    copyright: '© 2026 Algoritmo García · Javier García Pinilla · Chile',
    links: [
      { href: 'https://popex404.github.io/portfolio-javier/', label: 'Portfolio' },
      { href: 'https://github.com/popex404', label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/javier-garcia-popex404/', label: 'LinkedIn' },
    ],
    privacy: 'Convierto ideas en acciones. Informática · Diseño · Marketing · Cryptomonedas · IA.',
  },
}
