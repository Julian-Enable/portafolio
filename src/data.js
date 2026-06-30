// =============================================================
//  DATOS DEL PORTAFOLIO — edita TODO aquí en un solo lugar.
// =============================================================

export const profile = {
  name: "Julian González",
  fullName: "Julian David González Merchán",
  role: "Full-Stack",            // línea 1 del hero
  roleLine2: "developer",         // línea 2 del hero
  location: "Bogotá, Colombia",
  email: "engjuliangonzalez@gmail.com",
  phone: "+57 321 244 1930",
  cv: "/CV_Julian_Gonzalez.pdf",
  // Frases que rotan bajo el título del hero
  taglines: [
    "Construyendo puentes entre el frontend y la lógica del backend.",
    "Del pixel al servidor, cada capa importa.",
    "Stack PERN: PostgreSQL, Express, React y Node.js.",
  ],
  // Cita / about
  citation:
    "Me obsesiona convertir ideas en productos web reales: APIs limpias, interfaces cuidadas y bases de datos bien pensadas.",
  about:
    "Ingeniero de Software fullstack con foco en el stack PERN. Actualmente en 8.º semestre de Ingeniería de Software, sumando experiencia construyendo software de principio a fin: desde el modelado de la base de datos hasta la interfaz final.",
};

// Datos rápidos (columna derecha del About) — edita con tus datos reales
export const facts = [
  { label: "Ubicación", value: "Bogotá, Colombia" },
  { label: "Experiencia", value: "1+ año profesional" },
  { label: "Educación", value: "Ing. de Software · 8.º sem · U. Manuela Beltrán" },
  { label: "Idiomas", value: "Español (nativo) · Inglés (técnico)" },
  { label: "Disponibilidad", value: "Remoto / híbrido" },
];

// Métricas del About
export const stats = [
  { value: "1+", label: "Año de experiencia" },
  { value: "PERN", label: "Stack principal" },
  { value: "35+", label: "Repos en GitHub" },
  { value: "4", label: "Proyectos en producción" },
];

// Experiencia laboral (de tu CV)
export const experience = [
  {
    role: "Systems & Software Engineer",
    company: "Inversiones Farmashaio",
    period: "Ene 2025 – Actualidad",
    points: [
      "Diseñé y desarrollé desde cero el Sistema de Gestión de Tickets (SGTS) con stack PERN, reduciendo el tiempo de resolución de incidentes en ~35%.",
      "Implementé autenticación JWT con control de acceso por roles (RBAC) en todos los endpoints de la API REST.",
      "Construí un sistema de notificaciones automáticas por email (Nodemailer) con disparadores por cambio de estado.",
      "Lideré la migración de +5.000 registros a un nuevo ERP con scripts de Python, con cero pérdida de datos.",
    ],
  },
  {
    role: "Technical Operations Coordinator",
    company: "Itac Colombia",
    period: "Sep 2024 – Ene 2025",
    points: [
      "Coordiné rutas y recursos para equipos técnicos en campo, optimizando los tiempos de respuesta en un 20%.",
      "Digitalicé el control de gastos operativos y activos técnicos, logrando trazabilidad completa.",
      "Monitoreé el cumplimiento de SLAs, manteniéndolo por encima del 90%.",
    ],
  },
  {
    role: "Software Developer / IT Support",
    company: "Freelance",
    period: "Sep 2023 – Ene 2025",
    points: [
      "Desarrollé scripts de automatización en Python para clientes, reduciendo tiempos de procesamiento manual.",
      "Brindé mantenimiento preventivo y correctivo de hardware/software a clientes corporativos y personales.",
    ],
  },
  {
    role: "CEO & Web Developer",
    company: "Girouette Perfumería",
    period: "Feb 2022 – Sep 2023",
    points: [
      "Desarrollé y optimicé el e-commerce de la empresa: catálogo, SEO básico y experiencia de usuario.",
      "Negocié con proveedores estratégicos, aumentando el ticket promedio.",
    ],
  },
];

// Educación y certificaciones
export const education = [
  {
    title: "Ingeniería de Software",
    place: "Universidad Manuela Beltrán",
    period: "2021 – Actualidad · 8.º semestre",
  },
  {
    title: "Técnico en Mantenimiento de Computadores y Redes",
    place: "CET CAFAM",
    period: "2017 – 2019",
  },
];

export const certifications = [
  "Especialización en Python & Django — Netzun (2023)",
  "Introducción a Cloud Computing — Netzun (2023)",
  "Administración SQL Server 2008–2019 — Udemy (2023)",
];

// Servicios que ofreces (sección "Lo que hago")
export const services = [
  {
    n: "01",
    title: "Aplicaciones web fullstack",
    desc: "Productos completos de principio a fin con React / Next.js, Node.js y PostgreSQL.",
  },
  {
    n: "02",
    title: "APIs REST seguras",
    desc: "Backends con autenticación JWT, control de acceso por roles (RBAC) y buenas prácticas.",
  },
  {
    n: "03",
    title: "Bases de datos",
    desc: "Modelado y optimización en PostgreSQL, SQL Server y MySQL para datos consistentes.",
  },
  {
    n: "04",
    title: "Integraciones",
    desc: "Correos transaccionales, calendarios, pagos y servicios de terceros conectados a tu app.",
  },
];

// Skills en grupos grandes (lista gigante estilo Ewan)
export const skillGroups = [
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / SQL",
  "TypeScript",
  "Python / Django",
  "Docker / DevOps",
  "JWT / RBAC / Auth",
];

export const socials = [
  { label: "Github", url: "https://github.com/Julian-Enable" },
  { label: "Linkedin", url: "https://www.linkedin.com/in/julian-gonzalez-46ba5524a/" },
  { label: "Email", url: "mailto:engjuliangonzalez@gmail.com" },
];

// Proyectos — estructura "Selected works" (lista + preview al hover).
// `link` apunta al DEMO en vivo. Para repos privados no se enlaza el código.
// Reemplaza `color` por `image: "/proyecto.webp"` cuando tengas capturas.
export const projects = [
  {
    id: "sgts-farmashaio",
    number: "01",
    title: "SGTS FARMASHAIO",
    subtitle: "Sistema de tickets de soporte TI",
    category: "Fullstack · PERN",
    description:
      "Plataforma empresarial para gestionar el soporte técnico de FARMASHAIO: creación, asignación y resolución de tickets con roles (empleado, técnico, admin), notificaciones en tiempo real y métricas de servicio.",
    stack: ["React", "Node.js", "PostgreSQL", "Express"],
    highlights: [
      "Redujo el tiempo de resolución de incidentes en ~35%",
      "Autenticación JWT + RBAC en todos los endpoints",
      "Notificaciones automáticas por email (Nodemailer)",
      "Panel de administración en tiempo real con filtros",
    ],
    link: "https://farmatickets.vercel.app/",
    private: true,
    color: "linear-gradient(135deg,#6366f1,#0a0a0a)",
    image: "/projects/sgts-farmashaio.png",
  },
  {
    id: "loop-house",
    number: "02",
    title: "LOOP HOUSE",
    subtitle: "Portal de academia de música",
    category: "Fullstack · Next.js",
    description:
      "Sitio público + panel de gestión con 3 roles, calendario de clases con drag & drop, inscripciones con cupo mensual y correos transaccionales.",
    stack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma"],
    highlights: [
      "3 roles: admin, profesor y estudiante",
      "Calendario de clases con drag & drop (FullCalendar)",
      "Inscripciones con cupo mensual y clase de regalo",
      "Correos transaccionales (Brevo) + Auth.js",
    ],
    link: "https://loop-house.vercel.app",
    private: true,
    color: "linear-gradient(135deg,#a855f7,#0a0a0a)",
    image: "/projects/loop-house.png",
  },
  {
    id: "mis-finanzas",
    number: "03",
    title: "MIS FINANZAS",
    subtitle: "Gestión financiera personal",
    category: "Fullstack · TypeScript",
    description:
      "App de finanzas con matemática exacta (decimal.js): cuentas, deudas con 5 sistemas de amortización, presupuestos y planes de pago (avalancha vs. bola de nieve). Auth propia con JWT httpOnly + bcrypt.",
    stack: ["TypeScript", "React", "Node.js", "JWT"],
    highlights: [
      "Matemática exacta con decimal.js (sin errores de redondeo)",
      "5 sistemas de amortización de deudas",
      "Plan de pago: estrategia avalancha vs. bola de nieve",
      "Auth propia: JWT en cookie httpOnly + bcrypt",
    ],
    link: "https://mis-finanzas-amber.vercel.app",
    private: true,
    color: "linear-gradient(135deg,#10b981,#0a0a0a)",
    image: "/projects/mis-finanzas.png",
  },
  {
    id: "farmanalitics",
    number: "04",
    title: "FARMANALITICS",
    subtitle: "Dashboard analítico POS",
    category: "Data · Python",
    description:
      "Tablero analítico para un POS farmacéutico: backend FastAPI sobre históricos Parquet sincronizados desde SmartPOS y SQL Server, con frontend Vue 3.",
    stack: ["Python", "FastAPI", "Vue 3", "ApexCharts"],
    highlights: [
      "Procesa +45.000 filas de CSV/Excel sin backend persistente",
      "8 módulos analíticos (Health Score, rentabilidad, metas)",
      "Comparación entre sucursales y proyección de escenarios",
      "Arquitectura serverless in-memory",
    ],
    link: "https://farm-analitics.vercel.app",
    private: false,
    repo: "https://github.com/Julian-Enable/FarmAnalitics",
    color: "linear-gradient(135deg,#f59e0b,#0a0a0a)",
    image: "/projects/farmanalitics.png",
  },
];
