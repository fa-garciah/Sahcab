export const site = {
  name: 'Sahcab',
  nameUpper: 'SAHCAB',
  domain: 'sahcab.com',
  url: 'https://www.sahcab.com',
  lang: 'es-MX',

  slogan: 'Soluciones para mantener tus espacios operando correctamente',
  cta: 'Solicita atención',

  /*
   * Pendientes de la segunda fase: el cliente entregará razón social, domicilio,
   * teléfono y correo con dominio propio. Mientras tanto no se publica ningún dato
   * de contacto directo; el sitio atiende sólo por formulario.
   */
  legalName: null as string | null,
  email: null as string | null,
  phone: null as string | null,
  phoneHref: null as string | null,

  year: new Date().getFullYear(),

  nav: [
    { label: 'Nuestra empresa', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Casos tipo', href: '/proyectos' },
    { label: 'Contacto', href: '/contacto' },
  ],
};

export const intro = {
  titulo: 'Mantenimiento, instalaciones, adecuaciones y limpieza especializada para inmuebles en operación.',
  texto:
    'Ejecutamos los trabajos en sitio, con la herramienta adecuada y equipo de protección personal. Organizamos cada servicio por especialidad para que sepas qué incluye, cómo se realiza y qué recibes al terminar.',
};

/* Las cuatro familias de servicio. `alcance` enumera lo que cubre cada una. */
export const services = [
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento e instalaciones',
    text: 'Mantenimiento preventivo y correctivo de las instalaciones que sostienen la operación diaria del inmueble.',
    alcance: [
      'Instalaciones eléctricas, tableros y contactos',
      'Luminarias interiores y exteriores',
      'Plomería, drenaje y alcantarillado',
      'Instalación y mantenimiento de sistemas de alarma',
    ],
    img: '/assets/img/servicio-electricidad.webp',
    alt: 'Técnico trabajando en una instalación eléctrica',
  },
  {
    slug: 'adecuaciones',
    title: 'Adecuaciones y remodelación',
    text: 'Obra ligera para adaptar, renovar o reparar espacios sin detener más de lo necesario la operación.',
    alcance: [
      'Reparación de muros, plafones y acabados',
      'Adecuación de locales comerciales y oficinas',
      'Remodelación de habitaciones y áreas comunes',
      'Pintura, recubrimientos y detalles de obra',
    ],
    img: '/assets/img/servicio-muros.webp',
    alt: 'Trabajos de reparación de muros y acabados',
  },
  {
    slug: 'limpieza',
    title: 'Limpieza especializada',
    text: 'Limpieza técnica con equipo y productos adecuados a cada tipo de superficie y área.',
    alcance: [
      'Limpieza y tratamiento de pisos',
      'Limpieza profunda de áreas comunes y de servicio',
      'Limpieza posterior a obra o adecuación',
      'Programas de limpieza periódica',
    ],
    img: '/assets/img/servicio-pisos.webp',
    alt: 'Limpieza de pisos con equipo especializado',
  },
  {
    slug: 'tecnicos',
    title: 'Servicios técnicos',
    text: 'Revisiones en sitio para detectar fallas y riesgos antes de que afecten la operación, con reporte de hallazgos.',
    alcance: [
      'Revisión de instalaciones eléctricas',
      'Revisión de plomería y alcantarillado',
      'Revisión de condiciones de seguridad del inmueble',
      'Reporte de hallazgos y trabajos recomendados',
    ],
    img: '/assets/img/servicio-riesgo.webp',
    alt: 'Técnico con casco llenando una lista de revisión en sitio',
  },
];

/* Cómo se atiende una solicitud, de principio a fin. */
export const proceso = [
  { title: 'Solicitud', text: 'Nos cuentas qué necesitas y dónde está el inmueble.' },
  { title: 'Visita técnica', text: 'Revisamos el sitio y definimos el alcance del trabajo.' },
  { title: 'Propuesta', text: 'Recibes el alcance, los tiempos y la cotización.' },
  { title: 'Ejecución', text: 'Realizamos el trabajo con personal y equipo adecuados.' },
  { title: 'Entrega', text: 'Revisamos contigo el resultado y documentamos lo realizado.' },
];

/* Ejemplos ilustrativos: no corresponden a clientes ni a resultados reales. */
export const casos = [
  {
    title: 'Adecuación de habitaciones de hotel',
    situacion: 'Un hotel necesita renovar acabados e instalaciones de un grupo de habitaciones sin cerrar el resto del piso.',
    trabajo: 'Programación por bloques, reparación de muros y acabados, cambio de luminarias y limpieza posterior a obra.',
    img: '/assets/img/proyecto-hotel.webp',
    alt: 'Espacio interior antes y después de una adecuación',
  },
  {
    title: 'Acondicionamiento de un local comercial',
    situacion: 'Un comercio recibe un local que debe adaptarse a su operación antes de abrir.',
    trabajo: 'Adecuación de muros y plafones, instalaciones eléctricas y de iluminación, y limpieza final para entrega.',
    img: '/assets/img/proyecto-local.webp',
    alt: 'Local comercial acondicionado, con iluminación y pisos terminados',
  },
];

export const mercado = ['Hoteles', 'Corporativos', 'Comercios', 'Industria', 'Inmuebles'];

export const mision =
  'Conservar instalaciones funcionales mediante servicios coordinados de mantenimiento y limpieza.';

export const vision =
  'Ser una opción confiable para el cuidado y la continuidad operativa de instalaciones.';

export const valores = ['Orden', 'Seguridad', 'Cumplimiento', 'Servicio'];
