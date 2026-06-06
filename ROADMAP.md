# ROADMAP — Algoritmo García

> Roadmap exclusivo de este sitio. Arriba lo pendiente/importante; abajo del muro
> `## Logrado`, el historial. Al retomar, leer **solo hasta `## Logrado`**.

## Qué es esto (mapa para no perderse)

`JG/algoritmo-garcia/` contiene **solo lo tuyo**: tu librería de secciones reutilizables + tu sitio.

```
src/
├── lib/            ← primitivas (lógica reutilizable)
│   ├── currency.jsx   moneda CLP/USD (Context) + <Price> + <PriceToggle>
│   ├── Carousel.jsx   carrusel mobile
│   ├── Reveal.jsx     aparición al hacer scroll
│   ├── Counter.jsx    número que se anima
│   └── icons.jsx      iconos sociales
├── sections/       ← SECCIONES-TEMPLATE (tu "LEGO": cada una recibe datos por props)
│   Header · Hero · SectionHeader · CardGrid · Mecanismo · Prueba · Servicios ·
│   ValueStack · Urgencia · Garantia · Faq · CtaFinal · Footer · Wave · WaFloat
├── sites/algoritmo/
│   └── Home.jsx    ← tu home (hoy es un placeholder; Fase 3 lo construye)
└── main.jsx        ← router (hoy solo "/")
```

**Por dónde empezar a entender:** abre una sección simple primero, ej. `sections/CtaFinal.jsx`
o `sections/Hero.jsx`. Cada archivo es chico y hace una sola cosa. Mira cómo recibe `props`
y devuelve HTML. Esa es la idea de "templates" que querías.

> La recreación de CG ya **no** vive aquí: es un proyecto aparte en `CG/landing-react/`
> (al lado del original `CG/landing/`), para comparar limpio. Comparten copias de `lib/`
> y `sections/`; la versión canónica es la de aquí.

## Pendiente

### Ahora — de Javier
- [ ] Revisar el sitio en `localhost:5173` y marcar qué ajustar (copy, orden de secciones, colores, tamaños).
- [ ] Validar/ajustar el **pricing** (modelo consultoría-primero: Sesión $25k · Acompañamiento $120k/mes · Construcción cotizada). Editable en `src/sites/algoritmo/data.jsx`.
- [ ] Decidir el **deploy** (Cloudflare Pages o GitHub Pages + dominio).

### Pulido siguiente
- [ ] Pasar los colores del tema a un `tokens-ag.css` aparte si se quiere reusar la librería en modo oscuro para otros sitios.
- [ ] (Opcional) Versión del logo en oro para usos premium.
- [ ] Para el deploy: ajustar `base` en `vite.config.js` si va en subruta de GitHub Pages.

### Más adelante (cuando el núcleo esté)
- [ ] Blog (patrón de MA: posts desde Google Sheets, sin redeploy).
- [ ] E-shop / servicios productizados.
- [ ] Easter egg de memes (botón secreto).
- [ ] Playground (experimentos crypto/IA en vivo).
- [ ] Deploy: Cloudflare Pages o GitHub Pages + dominio propio (ajustar `base` en `vite.config.js` si va en subruta).

## Cómo correrlo
```
rtk npm install --prefix JG/algoritmo-garcia   # primera vez
rtk npm run dev --prefix JG/algoritmo-garcia   # http://localhost:5173
rtk npm run build --prefix JG/algoritmo-garcia # build estático → dist/
```

---

## Logrado

### 2026-06-05 — Fase 3 (pulido + logo real)
- Logo real aplicado: `Logo.png` (AG con G-engranaje, A delante) procesado a transparente con `tools/process-logo.py` (Pillow) → `public/logo-ag-white.png` (header) y `public/logo-ag.png` (favicon).
- Engranaje propio `gear.png` → `public/gear-white.png`, **girando** en el centro del héroe (animación `gear-rotate`, independiente del logo). Se quitó el `prefers-reduced-motion` que lo frenaba.
- Botones oro con brillo premium **automático y sincronizado**.
- Héroe: idea↔acción rotan en pareja (con retardo de 0.5s), acción con mayúscula + emoji, palabra clave de la idea en morado.
- Se reemplazó la franja de números por la sección **"La diferencia"** (control, sin cajas negras, te enseño a usar lo que construimos).
- Capacidades: cards simples con frase-problema visible + términos específicos al hover/click (ej. Cripto → DeFi, Blockchain, NFTs).
- Casos actualizados: fuera AZ, dentro mi portafolio; Criterio Legal "en construcción · BOT + WEB"; descripciones sin tecnicismos.

### 2026-06-05 — Fase 3 (sitio AG v1)
- Tema oscuro + tríada en `src/styles/ag.css` (60-30-10: oro=CTA, teal=resalte, morado=decoración). Fonts Montserrat + Lato.
- Logo: concepto AG con G-engranaje (A delante). Componente `LogoAG.jsx` (usa PNG si existe, si no engranaje SVG).
- Secciones AG en `src/sites/algoritmo/`: AgHeader, Hero (Idea→Algoritmo→Acción con palabra rotativa), Stats, Capacidades (5 áreas + diferenciador), Casos (FA, MA, CG, CE + portfolio), Pricing (3 planes). Reusa templates Faq, CtaFinal, Footer, WaFloat + primitivas Reveal/Counter.
- Tagline aplicado: "Tu idea no necesita que sepas cómo. Yo la convierto en acción."
- Pricing de referencia calibrado vs competencia (design-creativo.cl: $150k-$500k): Despegue $190k · Negocio $390k · Sistema $690k CLP.
- Build OK (58 módulos) y dev server HTTP 200.

### 2026-06-05 — Fase 1 y 2
- Proyecto Vite + React creado. Stack: React 19 + Vite 6 (sin Tailwind; CSS plano).
- **Librería de secciones-template** construida en `lib/` + `sections/`, abstrayendo la
  landing de CG: 5 primitivas + 15 secciones, todas parametrizadas por props/datos.
- Lógica imperativa del `app.js` de CG (fetch de secciones, carruseles, toggle de moneda
  por regex, reveal, contadores) portada a hooks/componentes React.
- **Recreación de CG** completada y movida a proyecto standalone `CG/landing-react/`
  (build OK, paridad visual con el original pendiente de revisión de Javier).
- Decisiones tomadas: sitio nuevo independiente (enlaza al portfolio), React como destino,
  héroe Idea → Algoritmo → Acción, enfoque "mostrar rango + 1 hook suave".
- Builds verificados sin errores en ambos proyectos.
