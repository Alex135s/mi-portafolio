import type { LucideIcon } from "lucide-react";
import {
  Database,
  BarChart3,
  Cloud,
  Code2,
  Users,
  Rocket,
  Settings2,
  Building2,
  Stethoscope,
} from "lucide-react";

export const profile = {
  name: "Geremy Hernández",
  fullName: "Geremy Alexander Hernández Peña",
  roles: [
    "Practicante de Infraestructura y Telecomunicaciones",
    "Desarrollador Jr. Full Stack",
  ],
  location: "Ica, Perú",
  email: "geremy3132@gmail.com",
  phone: "+51 942 697 707",
  whatsapp: "https://wa.me/51942697707",
  linkedin:
    "https://www.linkedin.com/in/geremy-alexander-hernandez-pe%C3%B1a-059a51267",
  github: "https://github.com/Alex135s",
  githubHandle: "Alex135s",
  englishLevel: "Intermedio-Avanzado (B2)",
  cvPath: "/CV_Geremy_Hernandez.pdf",
};

export type SkillChip = {
  name: string;
  icon: LucideIcon;
  colorClasses: string;
};

export const heroSkills: SkillChip[] = [
  {
    name: ".NET & C#",
    icon: Code2,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
  {
    name: "Python & SQL",
    icon: Database,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
  {
    name: "Power BI Data Analyst",
    icon: BarChart3,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
  {
    name: "Google Cloud Platform",
    icon: Cloud,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
  {
    name: "Scrum Foundation",
    icon: Users,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
  {
    name: "NASA Galactic Solver",
    icon: Rocket,
    colorClasses:
      "bg-slate-50 border-slate-200 text-slate-700 hover:border-google-blue-border hover:bg-google-blue-light/60",
  },
];

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Desarrollo",
    icon: Code2,
    items: [
      ".NET 8",
      "C#",
      "Razor Pages",
      "ASP.NET",
      "React",
      "Next.js",
      "Entity Framework Core",
      "Python",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Bases de datos",
    icon: Database,
    items: ["SQL Server", "PostgreSQL", "Firebase"],
  },
  {
    category: "Cloud & Infraestructura",
    icon: Cloud,
    items: [
      "Google Cloud (BigQuery, Cloud Storage, Cloud SQL)",
      "Active Directory",
      "Microsoft Entra ID",
      "Microsoft Intune",
      "SharePoint",
      "Redes CCNA",
      "SNMP",
      "Soporte TI",
    ],
  },
  {
    category: "Business Intelligence",
    icon: BarChart3,
    items: ["Power BI", "Looker Studio", "Excel avanzado", "R"],
  },
  {
    category: "Herramientas & Metodologías",
    icon: Settings2,
    items: ["Visual Studio", "VS Code", "Git", "Scrum", "Análisis de datos"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  icon: LucideIcon;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ElectroDunas S.A.A.",
    role: "Practicante de Infraestructura y Telecomunicaciones",
    period: "Ene 2025 – Ene 2027",
    current: true,
    icon: Building2,
    bullets: [
      "Diseño y desarrollo de ActivosTI, aplicación web interna en .NET 8 para la gestión de activos tecnológicos.",
      "Levantamiento de requerimientos junto al área de TI y traducción a funcionalidades del sistema.",
      "Soporte técnico de infraestructura y telecomunicaciones a las distintas áreas de la empresa.",
      "Administración de usuarios y accesos en Active Directory, Microsoft Entra ID e Intune, además de permisos sobre SharePoint y carpetas compartidas.",
    ],
  },
  {
    company: "Centro de Salud Guadalupe (MINSA)",
    role: "Practicante Pre-Profesional — Soporte y Análisis de Datos",
    period: "Jun 2025 – Sep 2025",
    current: false,
    icon: Stethoscope,
    bullets: [
      "Soporte técnico a las áreas de Triaje, Admisión, Medicina y Estadística; digitación en el sistema HIS-MINSA y elaboración de tramas.",
      "Desarrollo de reportes en Power BI, Excel y R para apoyar la toma de decisiones de la gerencia.",
      "Creación de un sitio web de reservas de citas médicas (CRED) con Apps Script y Excel.",
    ],
  },
  {
    company: "ACL Best Company",
    role: "Practicante Pre-Profesional — Business Intelligence",
    period: "Jun 2023 – Oct 2023",
    current: false,
    icon: BarChart3,
    bullets: [
      "Elaboración de dashboards en Power BI y Looker Studio para el análisis de indicadores clave.",
      "Desarrollo de consultas SQL para integrar y limpiar datos de diversas fuentes; automatización de reportes con Python, reduciendo tiempos en un 30%.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachiller en Ingeniería de Sistemas e Informática",
    institution: "Universidad Tecnológica del Perú (UTP) — Ica",
    period: "Ago 2021 – Dic 2025",
    status: "Egresado",
  },
];

export type ActivityItem = {
  title: string;
  period: string;
  desc: string;
  icon: LucideIcon;
};

export const activities: ActivityItem[] = [
  {
    title: "Jefe de Logística — GDG Ica (Google Developer Group)",
    period: "Jul 2023 – Actualidad",
    desc: "Organización y coordinación logística de eventos técnicos de la comunidad, gestión de sedes, equipamiento y alianzas con empresas.",
    icon: Users,
  },
  {
    title: "NASA International Space Apps Challenge 2025",
    period: "2025",
    desc: "Reconocimiento \"Galactic Problem Solver\" por el proyecto OXYRA: predicción de calidad del aire con datos satelitales y meteorológicos.",
    icon: Rocket,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google",
    date: "Dic. 2025 · vigente hasta dic. 2028",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "Feb. 2026",
  },
  {
    name: "CCNAv7: Switching, Routing and Wireless Essentials",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "CCNAv7: Introducción a Redes",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Scrum Foundation (SFPC)",
    issuer: "CertiProf",
  },
  {
    name: "Power BI",
    issuer: "Udemy",
    date: "2024",
  },
];

export type TechStackEntry = {
  name: string;
  desc: string;
};

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  placeholder?: boolean;
  placeholderIcon: LucideIcon;
  repoLink?: string;
  techStack: TechStackEntry[];
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ActivosTI — Sistema de Gestión de Activos de TI",
    shortDesc:
      "Plataforma interna en .NET 8 para gestionar +800 activos tecnológicos de ElectroDunas con firma digital y alertas automáticas.",
    fullDesc:
      "Sistema web corporativo desarrollado durante mi práctica en ElectroDunas S.A.A. para centralizar el registro, mantenimiento y control de más de 800 activos tecnológicos (laptops, celulares, impresoras y otros) usados por más de 200 usuarios en 9 a 11 áreas de la empresa. Incluye monitoreo automatizado de impresoras vía protocolo SNMP, generación de actas de entrega con firma digital electrónica a través de un portal del empleado —el proceso pasó de 5–10 minutos a menos de 2, ~75% menos tiempo— y un chatbot con Machine Learning entrenado en Google Colab para consultas internas.",
    images: [],
    placeholder: true,
    placeholderIcon: Database,
    techStack: [
      {
        name: ".NET 8 (Razor Pages)",
        desc: "Backend y vistas del sistema, con arquitectura en capas.",
      },
      {
        name: "SQL Server + EF Core",
        desc: "Modelado de base de datos y acceso a datos.",
      },
      {
        name: "SNMP",
        desc: "Monitoreo automatizado del parque de impresoras, incluyendo nivel de tinta.",
      },
      {
        name: "Machine Learning",
        desc: "Chatbot de consultas internas entrenado en Google Colab.",
      },
    ],
    tags: ["Full Stack", ".NET", "SQL Server", "Proyecto corporativo"],
  },
  {
    id: 2,
    title: "OXYRA — Predicción de Calidad del Aire",
    shortDesc:
      "Aplicación web con datos satelitales y meteorológicos para predecir la calidad del aire en tiempo real.",
    fullDesc:
      "Proyecto desarrollado para el NASA International Space Apps Challenge 2025, reconocido con el certificado \"Galactic Problem Solver\". OXYRA integra datos satelitales y meteorológicos para predecir la calidad del aire en tiempo real, con el objetivo de anticipar episodios de contaminación y apoyar decisiones de salud pública.",
    images: [],
    placeholder: true,
    placeholderIcon: Rocket,
    techStack: [
      {
        name: "Datos satelitales y meteorológicos",
        desc: "Fuentes de datos usadas para el modelo de predicción de calidad del aire.",
      },
    ],
    tags: ["NASA Space Apps", "Datos", "Sostenibilidad"],
  },
  {
    id: 3,
    title: "Sistema de Gestión de Evaluación (CERM 2025)",
    shortDesc:
      "Plataforma integral para calificación automática y reportes de concursos escolares.",
    fullDesc:
      "Sistema web completo para la gestión del Concurso Regional de Matemáticas 2025. Permite el registro de participantes, calificación automatizada de exámenes, generación de rankings en tiempo real y emisión de reportes PDF oficiales. Desarrollado con una arquitectura moderna usando Streamlit para el frontend y Firebase para la persistencia de datos en tiempo real.",
    images: [
      "/dashboard_Final.png",
      "/REGISTRO.png",
      "/RESULTADO.png",
      "/CONFIGURACION.png",
    ],
    placeholderIcon: Database,
    repoLink: "https://github.com/Alex135s/sistema-cerm-2025",
    techStack: [
      {
        name: "Streamlit",
        desc: "Interfaz de usuario interactiva y dashboard administrativo para gestión de concursos.",
      },
      {
        name: "Firebase",
        desc: "Base de datos NoSQL (Firestore) para almacenamiento y sincronización en tiempo real.",
      },
      {
        name: "Python",
        desc: "Motor de cálculo (Pandas) para procesar calificaciones y estadísticas de rendimiento.",
      },
      {
        name: "FPDF",
        desc: "Generación automatizada de reportes PDF oficiales y certificados de mérito.",
      },
    ],
    tags: ["Full Stack", "Python", "Firebase"],
  },
  {
    id: 4,
    title: "Smart Inventory & AI Chatbot",
    shortDesc:
      "Sistema de inventario inteligente con Asistente Virtual por voz.",
    fullDesc:
      "Aplicación Web Progresiva (SPA) para la gestión de inventarios, usuarios y ventas. Lo revolucionario de este proyecto es la integración de un Chatbot con Inteligencia Artificial (Dialogflow) que permite consultar stock, registrar productos y navegar por el sistema mediante comandos de voz y lenguaje natural.",
    images: [
      "/PY1_DASHBOARD.png",
      "https://www.youtube.com/embed/L1VnQwdr_5o",
      "/PY2.png",
      "/PY3.png",
    ],
    placeholderIcon: Code2,
    repoLink: "https://github.com/Alex135s/smart-inventory-assistant",
    techStack: [
      {
        name: "JavaScript (ES6)",
        desc: "Desarrollo modular Vanilla JS sin frameworks pesados para máximo rendimiento.",
      },
      {
        name: "Firebase",
        desc: "Backend Serverless completo: Firestore (BD) y Authentication.",
      },
      {
        name: "Dialogflow (AI)",
        desc: "Procesamiento de Lenguaje Natural (NLP) para el asistente virtual.",
      },
      {
        name: "Web Speech API",
        desc: "Reconocimiento de voz nativo para controlar el sistema hablando.",
      },
      {
        name: "Chart.js",
        desc: "Visualización de métricas de negocio y balance de ingresos.",
      },
    ],
    tags: ["JavaScript", "AI Chatbot", "Firebase"],
  },
];
