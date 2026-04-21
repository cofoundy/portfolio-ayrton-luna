# QA Checklist — Ayrton Luna Portfolio

Fecha: 2026-04-21
Tier: Pro
URL: https://ayrton-luna.cofoundy.dev/ (deployment pendiente propagación GitHub Pages)
Reference replicado: https://felipevergara.co/

## Visual QA (Desktop 1280px)

- [x] **Hero** — split 2-col, foto derecha, headline bold con underline highlight, CTA verde oscuro + secondary outlined, play icon flotante, stats row (10+ / 9 / Meta Ads), social icons inline
- [x] **About/Sobre Mí** — título izq + bio der (grid 3/9), skills pills en fila, linea accent
- [x] **Servicios** — grid 2x2, 4 cards (Consultoría, Media Buyer, Capacitaciones, Desarrollo Web), iconos SVG, hover CTA "Conversemos →"
- [x] **Metodología** — 5 steps circulares conectados por línea horizontal, números grandes verde oscuro, pull quote
- [x] **Alcance/Markets** — 2 cols: Sectores (4 items con bullets) + Países (9 badges)
- [x] **Experience** — roles del template (Progresivo, Consultoría, Agencias)
- [x] **FinalCTA** — fondo verde oscuro, 3 botones (WhatsApp, Email, LinkedIn) con decorative blobs
- [x] **Footer** — nombre + social icons + copyright
- [x] **WhatsApp floating button** — pulse animation, pill "¿Tienes preguntas?" en hover, bottom-right
- [x] **Header sticky** — aparece >400px scroll, pill flotante con CTA

## Visual QA (Mobile 375px)

- [x] **Hero** — stack vertical: foto arriba, greeting + headline, CTA full width
- [x] **Servicios** — cards apiladas 1 col, readable
- [x] **Metodología** — steps apilados verticalmente, números visibles
- [x] **FinalCTA** — botones full-width apilados
- [x] No horizontal overflow

## Tipografía

- [x] Inter font loaded via Google Fonts + fallback system-ui
- [x] letter-spacing -0.02em en headings para look moderno
- [x] -webkit-font-smoothing: antialiased
- [x] Font weights: 400/500/700/800

## Paleta

- [x] Accent (verde oscuro): #064e3b — primary brand, text headlines, accent bars
- [x] Highlight (verde vibrante): #10b981 — CTAs hover, saludo, underlines, play icon
- [x] Background: white + gray-50 alternating
- [x] WhatsApp brand green: #25D366 (solo floating button)

## Contenido

- [x] Datos reales de Ayrton (no placeholders)
- [x] Headline: "Ayudo a clínicas y negocios a generar clientes con publicidad digital"
- [x] Tagline: del CV
- [x] 4 servicios con descripciones del CV
- [x] 5 steps de metodología (del CV)
- [x] 4 sectores + 9 países
- [x] Bio completa (aboutMe del CV)
- [x] Pull quote signature del CV
- [x] CTA links a WhatsApp con mensaje pre-poblado (wa.me con ?text=)

## Assets

- [x] `public/profile.png` (800x800, face-detected, cara centrada al 38%)
- [x] `public/favicon.svg` (SVG iniciales AL verde oscuro)
- [x] `public/og.jpg` (1200x630, fondo verde + foto derecha)
- [x] `public/CNAME` (ayrton-luna.cofoundy.dev)
- [x] `deliverables/cv-luna.pdf` (CV Harvard 2 páginas, compiled OK)
- [x] `deliverables/cv-luna.tex` (source LaTeX)

## SEO / Meta

- [x] `<title>`: "Ayrton Luna - Especialista en Marketing Digital & Publicidad Online"
- [x] `<meta description>`: description de config.ts
- [x] `<meta keywords>`: marketing, Meta Ads, lead gen, clínicas, Perú
- [x] `<link rel=canonical>`: https://ayrton-luna.cofoundy.dev/
- [x] OG image con URL absoluta
- [x] Twitter card summary_large_image
- [x] Schema.org Person con jobTitle, worksFor (Progresivo Academy), knowsAbout

## Build

- [x] `npm run build` → sin errores (1 page built en 410ms)
- [x] `dist/` contiene: index.html, _astro/, profile.png, favicon.svg, og.jpg, CNAME, icons/
- [x] Inter font en lugar de Libre Baskerville (match con ref Felipe)

## Deploy (pending Pages propagación)

- [x] Repo creado: cofoundy/portfolio-ayrton-luna
- [x] gh-pages branch pushed
- [x] CNAME configured
- [x] CV re-pushed to gh-pages
- [ ] Pages status "built" (waiting — currently "building" after previous errored attempts)
- [ ] Live URL returns 200 (propagación pending)

## Quality Gate Status

**Código + build: PASSED**
**Live deployment: PENDING** — Pages build en proceso, normal para repos nuevos

## Match vs Referencia (felipevergara.co)

| Elemento | Ref (Felipe) | Ayrton | Match |
|----------|-------------|--------|-------|
| Layout hero split | ✓ | ✓ | ✅ |
| Saludo pequeño arriba | ¡Hola, soy Felipe Vergara! | ¡Hola, soy Ayrton Luna! | ✅ |
| Headline bold grande | ✓ | ✓ | ✅ |
| CTA dark pill | ✓ | ✓ | ✅ |
| Floating play icon | Cyan | Verde oscuro | ✅ (adaptado a paleta) |
| Foto derecha | ✓ | ✓ | ✅ |
| WhatsApp floating | ✓ | ✓ con pulse | ✅ |
| Color primary | Cyan | Verde oscuro | ✅ (cliente pidió verde) |
| Nav pill flotante | ✓ | ✓ | ✅ |
| Sans-serif moderno | Inter-like | Inter | ✅ |
