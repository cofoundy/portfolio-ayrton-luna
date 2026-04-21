export const siteConfig = {
  name: "Ayrton Luna",
  title: "Especialista en Marketing Digital & Publicidad Online",
  description: "Ayrton Luna — 10+ años generando clientes para clínicas, negocios y marcas personales con Meta Ads, Google Ads y estrategias de publicidad digital enfocadas en resultados reales.",

  // 2-color system: accent (verde oscuro primary) + highlight (warm CTA)
  accentColor: "#064e3b",      // emerald-900 — verde oscuro serio
  highlightColor: "#10b981",   // emerald-500 — verde vibrante para CTAs

  // Hero stats
  stats: [
    { value: "10+", label: "Años en marketing digital" },
    { value: "9", label: "Países atendidos" },
    { value: "Meta Ads", label: "Especialización core" },
  ],

  // Hero tagline
  tagline: "Ayudo a clínicas, negocios y marcas personales a generar clientes de calidad a través de publicidad digital enfocada en resultados reales.",

  social: {
    email: "ayrtonenlapauta@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayrtonlunazapata/",
    whatsapp: "https://wa.me/51907713966",
  },

  aboutMe:
    "Soy Ayrton Luna, profesional con más de 10 años de experiencia en marketing digital. He trabajado tanto en agencias de publicidad como de manera independiente, ayudando a empresas a escalar sus resultados mediante estrategias digitales enfocadas en conversión. A lo largo de mi trayectoria, he colaborado con marcas en Perú, Estados Unidos, Chile, Guatemala, México, Ecuador, Bolivia, Argentina y Colombia, adaptando estrategias según cada mercado. Actualmente me desempeño como consultor externo y docente en Progresivo Academy. Estoy convencido de que, aunque el contenido es importante, la publicidad digital es el verdadero motor que permite a un negocio crecer de forma sostenida y llegar al público correcto.",

  skills: [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Generación de leads",
    "Segmentación avanzada",
    "Copy persuasivo",
    "Diseño publicitario",
    "WordPress",
    "Elementor Pro",
    "Estrategia digital",
    "Optimización de campañas",
    "Marketing para sector salud",
  ],

  // Servicios como "projects" (el template los renderiza así)
  projects: [
    {
      name: "Consultoría Estratégica",
      description: "Análisis completo de tu negocio y presencia digital, evaluación de campañas, identificación de oportunidades y plan estratégico personalizado listo para ejecutar. Para negocios invirtiendo sin resultados o emprendedores que buscan claridad antes de invertir.",
      link: "https://wa.me/51907713966?text=Hola%20Ayrton,%20me%20interesa%20la%20consultor%C3%ADa%20estrat%C3%A9gica",
      skills: ["Estrategia", "Análisis", "Plan accionable"],
    },
    {
      name: "Media Buyer (Meta Ads)",
      description: "Creación y gestión de campañas en Meta Ads con configuración estratégica, segmentación avanzada, optimización diaria/semanal, y escalamiento de campañas rentables. Incluye creativos: flyers, copies persuasivos y guiones para video.",
      link: "https://wa.me/51907713966?text=Hola%20Ayrton,%20me%20interesa%20gestionar%20mis%20Meta%20Ads",
      skills: ["Meta Ads", "Segmentación", "Optimización", "Creativos"],
    },
    {
      name: "Capacitaciones",
      description: "Formación en publicidad digital (Meta Ads principalmente) con estrategias actualizadas y casos reales. Niveles Básico (desde cero) e Intermedio/Avanzado (para quienes ya invierten y quieren escalar). Modalidad 1-a-1, grupal u online.",
      link: "https://wa.me/51907713966?text=Hola%20Ayrton,%20me%20interesa%20una%20capacitaci%C3%B3n",
      skills: ["Formación", "1-a-1", "Grupal", "Online"],
    },
    {
      name: "Desarrollo Web",
      description: "Creación de páginas web en WordPress + Elementor Pro, diseño profesional adaptado a tu marca, estructura pensada para conversión. Web orientada a generar leads o ventas, con integración WhatsApp, formularios y embudos.",
      link: "https://wa.me/51907713966?text=Hola%20Ayrton,%20me%20interesa%20una%20p%C3%A1gina%20web",
      skills: ["WordPress", "Elementor Pro", "Conversión"],
    },
  ],

  // Experience: representa los mercados y roles actuales
  experience: [
    {
      company: "Progresivo Academy",
      title: "Consultor externo & Docente",
      dateRange: "Presente",
      bullets: [
        "Docente en cursos de publicidad digital con enfoque en Meta Ads para emprendedores.",
        "Formación de alumnos en niveles básico, intermedio y avanzado.",
        "Consultoría estratégica externa para casos de estudio y proyectos de la academia.",
      ],
    },
    {
      company: "Consultoría Independiente",
      title: "Especialista en Publicidad Digital",
      dateRange: "10+ años",
      bullets: [
        "Gestión de campañas Meta Ads para clínicas y negocios del sector salud (odontología, estética, medicina general).",
        "Proyectos en 9 países: Perú, USA, Chile, Guatemala, México, Ecuador, Bolivia, Argentina y Colombia.",
        "Generación de leads calificados con optimización continua y escalamiento de campañas rentables.",
      ],
    },
    {
      company: "Agencias de Publicidad Digital",
      title: "Media Buyer & Estratega",
      dateRange: "Trayectoria",
      bullets: [
        "Trabajo previo en agencias ejecutando campañas para marcas locales e internacionales.",
        "Desarrollo de estrategias de conversión adaptadas a cada mercado y tipo de cliente.",
        "Creación de copy persuasivo, diseño de flyers y guiones para anuncios en video.",
      ],
    },
  ],

  // Education: uses "school" field. Ayrton no proveyó formación formal en el CV (es autodidacta/agencia-trained). Lo dejamos con el rol docente + especialización como placeholder.
  education: [
    {
      school: "Progresivo Academy",
      degree: "Docente & Consultor externo",
      dateRange: "Presente",
      achievements: [
        "Formación activa a emprendedores en Meta Ads.",
        "Desarrollo de currícula de publicidad digital.",
      ],
    },
    {
      school: "Formación continua",
      degree: "Especialización en Meta Ads, Google Ads, TikTok Ads",
      dateRange: "2014 - Presente",
      achievements: [
        "10+ años de experiencia práctica gestionando campañas publicitarias.",
        "Certificaciones y capacitaciones especializadas en plataformas Meta Business.",
      ],
    },
  ],

  // Campos extra para secciones custom que vamos a crear:
  metodologia: [
    { step: 1, title: "Análisis", description: "Evaluación profunda de mercado, oferta, demanda y principales competidores." },
    { step: 2, title: "Estrategia", description: "Creación de un plan enfocado en objetivos claros: leads, ventas o posicionamiento." },
    { step: 3, title: "Creación", description: "Desarrollo completo de copy, diseños y guiones estratégicos orientados a conversión." },
    { step: 4, title: "Optimización", description: "Monitoreo constante, ajustes y mejora continua de las campañas en tiempo real." },
    { step: 5, title: "Escalamiento", description: "Incremento de inversión en campañas rentables para maximizar los resultados." },
  ],

  sectores: [
    "Salud (clínicas y odontología)",
    "Negocios locales",
    "Marcas personales",
    "Emprendedores",
  ],

  paises: [
    "Perú",
    "Estados Unidos",
    "Chile",
    "Guatemala",
    "México",
    "Ecuador",
    "Bolivia",
    "Argentina",
    "Colombia",
  ],

  pullQuote: "Aunque el contenido es importante, la publicidad digital es el verdadero motor que permite a un negocio crecer de forma sostenida y llegar al público correcto.",
};
