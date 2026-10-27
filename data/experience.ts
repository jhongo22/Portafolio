export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  title: string;
  period?: string;
  category: "educacion" | "certificacion";
  description?: string;
  badgeText?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "garantias-comunitarias",
    company: "Garantías Comunitarias Latinoamérica",
    role: "Desarrollador de Software",
    period: "2026 - Presente",
    location: "Medellín, Colombia",
    isCurrent: true,
    achievements: [
      "Desarrollo y mantenimiento de módulos en arquitectura full-stack: frontend en Angular y backend en Laravel.",
      "Diseño e implementación de visualizaciones de datos: gráficas estadísticas, métricas de riesgo y dashboards interactivos en tiempo real.",
      "Generación de reportes dinámicos en tiempo real con capacidades de exportación multiformato (Excel, PDF, CSV).",
      "Procesamiento robusto de archivos masivos: validación, transformación y limpieza de datos en cargas CSV/Excel con manejo robusto de excepciones.",
      "Integración de modelos en R dentro del backend Laravel para cálculos de riesgo financiero y análisis normativo avanzado (SARO, SARLAFT, IRL, Brechas de liquidez).",
      "Diseño e integración de un ecosistema de agentes de IA especializados en marcos de riesgo financiero para automatizar generación de reportes y asistencia interactiva.",
      "Mantenimiento y actualización continua del portal web en WordPress y control de versiones con Git/GitHub.",
    ],
    technologies: [
      "Angular",
      "Laravel",
      "PHP",
      "R",
      "MySQL",
      "Agentes IA",
      "N8N",
      "WordPress",
      "Git hub",
    ],
  },
  {
    id: "telocalizo",
    company: "TeLocalizo",
    role: "Desarrollador de Software",
    period: "2025 - 2026",
    location: "Medellín, Colombia",
    achievements: [
      "Planeación, diseño e implementación de aplicaciones y sitios web personalizados para negocios utilizando Next.js.",
      "Implementación de estrategias SEO avanzadas para impulsar el posicionamiento orgánico y optimización continua de Core Web Vitals.",
      "Configuración y gestión de dominios, DNS y despliegue en servidores web y VPS Linux.",
      "Integración completa de herramientas analíticas de medición y comportamiento de usuarios: Google Analytics, Search Console y Microsoft Clarity.",
      "Mantenimiento y soporte técnico post-lanzamiento, actualizaciones de contenido y resolución proactiva de incidentes.",
      "Automatizaciones de procesos con inteligencia artificial para tareas repetitivas, como la generación de reportes y respuestas a clientes.",
    ],
    technologies: [
      "Next.js",
      "React",
      "SEO",
      "Google Analytics",
      "Search Console",
      "Shopify",
      "WordPress",
      "Git hub",
      "PostgreSQL",
      "N8N",
      "Agentes IA",
      "Meta developers",
      "VPS",
    ],
  },
  {
    id: "freelance",
    company: "Desarrollador Freelance",
    role: "Desarrollador Full Stack & IA",
    period: "2024 - 2025",
    location: "Medellín, Colombia",
    achievements: [
      "Diseño e implementación de chatbots inteligentes con IA integrados en redes sociales (WhatsApp, Instagram, Telegram), sitios web, CRM y bases de datos con sistema RAG propio para clínicas, restaurantes y comercios.",
      "Automatización de procesos empresariales mediante IA: flujos para procesamiento de facturas, contratos, gestión documental y hojas de cálculo con n8n.",
      "Automatización completa de CRM con inteligencia artificial para prospección comercial, calificación de leads y seguimiento de clientes.",
      "Planeación, desarrollo y despliegue de aplicaciones web a medida y sitios WordPress de alto rendimiento.",
      "Mantenimiento y administración de los aplicativos en los servidores VPS en la nube, garantizando disponibilidad, rendimiento y seguridad.",
    ],
    technologies: [
      "Next.js",
      "Python",
      "N8N",
      "Agentes IA",
      "RAG",
      "Supabase",
      "CRM",
      "WordPress",
    ],
  },
  {
    id: "clinica-antioquia",
    company: "Clínica Antioquia",
    role: "Practicante de Sistemas",
    period: "2024 - 2025",
    location: "Itagüi, Colombia",
    achievements: [
      "Planeación y desarrollo de aplicaciones web institucionales a la medida de los requerimientos hospitalarios.",
      "Implementación de sistema de Single Sign-On (SSO) unificando múltiples desarrollos dispersos en una plataforma centralizada.",
      "Gestión de mesa de ayuda y soporte técnico nivel 1 a usuarios, resolviendo oportunamente incidencias.",
      "Administración de usuarios y recursos: licenciamiento corporativo, cuentas de correo institucional, acceso a aplicaciones y permisos.",
      "Colaboración con el equipo TI en tareas de infraestructura, mantenimiento de sistemas y optimización de flujos técnicos.",
    ],
    technologies: [
      "Aplicativos web",
      "Single Sign-On",
      "Mesa de ayuda",
      "Directorio activo",
      "Infraestructura TI",
      "Seguridad de accesos",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "politecnico",
    institution: "Politécnico de Colombia",
    title: "Técnico en Desarrollo de Software",
    period: "2023 - 2025",
    category: "educacion",
    description:
      "Formación en arquitectura de software, bases de datos relacionales, desarrollo web y paradigmas de programación.",
    badgeText: "Técnico",
  },
  {
    id: "olaya-herrera",
    institution: "Institución Educativa Olaya Herrera",
    title: "Bachiller Técnico en Eventos y Turismo",
    category: "educacion",
    description:
      "Formación técnica de bachillerato enfocada en gestión logística, servicio al cliente y coordinación de eventos.",
    badgeText: "Bachiller Técnico",
  },
  {
    id: "diplomado-ia",
    institution: "Politecnico Suramericana",
    title: "Diplomado en Inteligencia Artificial (IA)",
    category: "certificacion",
    description:
      "Especialización en modelos de lenguaje, automatización inteligente, orquestación de agentes y arquitecturas RAG.",
    badgeText: "Diplomado",
  },
  {
    id: "curso-gemini",
    institution: "Santander",
    title: "Curso - Domina la IA con Gemini",
    category: "certificacion",
    description:
      "Implementación práctica de la API de Google Gemini, prompts avanzados y capacidades multimodales.",
    badgeText: "Certificación",
  },
  {
    id: "bootcamp-data",
    institution: "Talento TECH",
    title: "Bootcamp - Análisis de Datos",
    category: "certificacion",
    description:
      "Limpieza, transformación de datos, análisis exploratorio y visualización estadística.",
    badgeText: "Bootcamp",
  },
  {
    id: "diplomado-marketing",
    institution: "Itelme",
    title: "Diplomado - Marketing Digital",
    category: "certificacion",
    description:
      "Estrategias de posicionamiento, adquisición de clientes, analítica web y embudos automatizados.",
    badgeText: "Diplomado",
  },
];
