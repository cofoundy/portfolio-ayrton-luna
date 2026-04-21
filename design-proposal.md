# Design Proposal: Ayrton Luna

**Tier:** Pro (S/.120)
**Template base:** `pro-starter`
**Reference spec:** https://felipevergara.co/ (cliente lo mandó — replicar layout)

---

## Paleta

```
Primary (verde oscuro):    #064e3b  (emerald-900 — CTA, accents)
Primary hover:             #047857  (emerald-700)
Text primary (navy dark):  #0a0f1e  (near-black with navy tint)
Text secondary:            #475569  (slate-600)
Background:                #ffffff
Background soft:           #f8fafc  (slate-50)
Border subtle:             #e2e8f0  (slate-200)
WhatsApp green:            #25D366  (floating CTA)
```

**Rationale:** Cliente pidió "azul oscuro, negro, verde oscuro, blanco." Felipe usa cyan — reemplazo por verde oscuro (más serio, conecta con "salud/clínicas" que es su nicho core).

## Typography

```
Headings:  "Inter" (ya en el repo) — weight 700/800 para hero
Body:      "Inter" — weight 400/500
Code/tags: "JetBrains Mono" (solo para badges tipo "10+ años")
```

Hero headline size desktop: ~3rem (48px), bold, tracking-tight.

## Secciones (en orden — replicando felipevergara.co)

### 1. Nav header (sticky)
- Logo: "AL" icono + "Ayrton Luna" texto
- Menu horizontal: Sobre Mí · Servicios · Metodología · Contacto
- CTA derecha: "Agenda tu asesoría" (verde oscuro → WhatsApp)

### 2. Hero (2-col split)
- **Izq (50%):** Saludo "¡Hola, soy Ayrton Luna!" + headline grande "Ayudo a clínicas y negocios a generar clientes con publicidad digital" + subtítulo + CTA dark "Agenda tu asesoría →"
- **Der (50%):** Foto del cliente (profesional, IA-enhanced)
- Floating play icon verde (decorativo, como Felipe)
- Mobile: stack vertical, headline primero

### 3. Sobre Mí
- Título + párrafo bio (del CV, adaptado a 1ra persona)
- Stats row: "10+ años" · "9 países" · "Progresivo Academy"
- Frase destacada pull quote: "El contenido es importante, pero la publicidad digital es el verdadero motor que permite a un negocio crecer de forma sostenida."

### 4. Servicios (3-col grid, 4 cards)
Replicar el 3-col grid de la ref con iconos + title + descripción + "¿Para quién es?" colapsado.

**Cards:**
1. **Consultoría Estratégica** (icon: lightbulb) — análisis + plan + recomendaciones
2. **Media Buyer Meta Ads** (icon: target) — campañas + segmentación + optimización
3. **Capacitaciones** (icon: academic-cap) — niveles + modalidad online/1-a-1
4. **Desarrollo Web** (icon: code) — WordPress + Elementor + conversión

### 5. Metodología (numbered steps)
5 steps horizontales con números grandes:
1. Análisis
2. Estrategia
3. Creación
4. Optimización
5. Escalamiento

### 6. Mercados/Sectores atendidos
Sustituto del "logo grid" de Felipe (Ayrton no tiene logos citables).
- **Sectores:** Salud (clínicas, odontología) · Negocios locales · Marcas personales · Emprendedores
- **Países:** Perú · USA · Chile · Guatemala · México · Ecuador · Bolivia · Argentina · Colombia
- Layout: 2 columnas (sectores izq, países der) o badges pill

### 7. CTA final
- Título: "¿Listo para generar clientes de forma constante?"
- 3 opciones (del CV):
  - Agenda una videollamada
  - Escríbeme por WhatsApp
  - Solicita una asesoría
- Botón grande verde "Agenda tu asesoría" → WhatsApp

### 8. Footer
- Logo + tagline
- LinkedIn icon
- WhatsApp icon
- Email
- Copyright

### Floating (fixed)
- WhatsApp button bottom-right + pill "¿Tienes preguntas?" (estilo Felipe)

## Motion (sutil, perfil tier Pro)

- Scroll reveal fade-up en secciones
- Hover translateY(-4px) en cards de servicios
- Hover scale(1.02) en CTA principal
- WhatsApp pulse animation sutil

## Assets

- **Foto:** `photo.png` → aplicar IA enhancement (remove bg / face restoration light) → `public/profile.webp`
- **CV Harvard:** generar via toolkit → `deliverables/cv-ayrton-luna.pdf`
- **Favicon:** SVG iniciales "AL" verde oscuro

## Tier Pro incluye

- [x] Diseño customizado (replicando ref)
- [x] Foto profesional con IA
- [x] CV Harvard PDF
- [x] Animaciones scroll
- [x] Hosting lifetime
- [ ] 1 ronda de ajustes (se usa cuando cliente pida)
