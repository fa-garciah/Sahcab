export const site = {
  name: 'Sahcab',
  nameUpper: 'SAHCAB',
  legalName: 'RETROSERVIMEX, S.A. DE C.V.',
  domain: 'sahcab.com',
  url: 'https://www.sahcab.com',
  lang: 'es-MX',

  email: 'contacto@waacun.com',
  phone: '984 688 9682',
  phoneHref: '+529846889682',
  address: {
    line1: 'Av. Constituyentes, MZ 07, Lote 04,',
    line2: 'Oficina 108 A, Playa del Carmen, Q. Roo',
  },
  hours: ['Lunes - Sábado', '09:00 am - 05:30 pm'],
  coords: { lat: 20.6326815, lng: -87.0908232 },
  year: new Date().getFullYear(),

  nav: [
    { label: 'Nuestra empresa', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: '/contacto' },
  ],
};

export const intro = {
  titulo: 'Servicios de Limpieza, Trabajos Especializados para Construcción, y Servicios de Inspección de Edificios.',
  texto:
    'Colaboramos con una diversa gama de clientes que incluye consultoras especializadas en capital humano, operadoras de restaurantes de renombre, fabricantes líderes en la industria, proveedores industriales, productoras creativas, destacados hoteles y más.',
};

/* Los tres primeros se muestran en la portada. */
export const services = [
  { slug: 'alarmas', title: 'Instalación, mantenimiento y monitoreo de alarmas', img: '/assets/img/servicio-alarmas.webp' },
  { slug: 'plomeria', title: 'Inspección de plomería o alcantarillado', img: '/assets/img/servicio-plomeria.webp' },
  { slug: 'electricidad', title: 'Inspección de energía eléctrica', img: '/assets/img/servicio-electricidad.webp' },
  { slug: 'muros', title: 'Reparación de muros y acabados de edificios', img: '/assets/img/servicio-muros.webp' },
  { slug: 'luminarias', title: 'Inspección y mantenimiento de luminarias interiores y exteriores del inmueble', img: '/assets/img/servicio-luminarias.webp' },
  { slug: 'pisos', title: 'Servicio de limpieza de pisos', img: '/assets/img/servicio-pisos.webp' },
  { slug: 'riesgo', title: 'Análisis de riesgo o seguridad del inmueble', img: '/assets/img/servicio-riesgo.webp' },
];

export const casos = [
  {
    title: 'Remodelamos habitaciones de los hoteles más destacados de la Riviera Maya',
    text: 'Que mejoraron tanto la estética como la funcionalidad, resultando en una mejora significativa en la satisfacción del cliente y un aumento en las reservaciones.',
    img: '/assets/img/proyecto-hotel.webp',
  },
  {
    title: 'Acondicionamos locales comerciales en las principales plazas de Cancún',
    text: 'Adaptando cada espacio a las necesidades específicas del cliente, lo que permitió una mejora notable en la atracción de clientes y el rendimiento comercial de nuestros socios.',
    img: '/assets/img/proyecto-local.webp',
  },
];

export const mision =
  'Nuestra misión es ofrecer servicios integrales de alta calidad, destacándose en el sector de servicios de limpieza, trabajos especializados para construcción, y servicios de inspección de edificios. Nos comprometemos a proporcionar soluciones eficientes y personalizadas que superen las expectativas de nuestros clientes. Además, buscamos ser un socio estratégico para empresas al ofrecer asesoría, consultoría y asistencia en áreas clave de administración, cobranza, comercialización y mercadotecnia.';

export const vision =
  'La visión es consolidarse como líder en la industria de servicios, siendo reconocidos por nuestra excelencia en cada área en la que operamos. Buscamos expandir nuestra presencia nacional e internacional, diversificando nuestros servicios para adaptarnos a las necesidades cambiantes del mercado. Nos esforzamos por ser pioneros en innovación y sostenibilidad, manteniendo un compromiso constante con la satisfacción del cliente y la mejora continua.';

export const valores = ['Excelencia', 'Desarrollo sostenible', 'Compromiso', 'Contribución positiva'];

export const certificaciones = [
  { src: '/assets/img/cert-repse.webp', alt: 'REPSE' },
  { src: '/assets/img/cert-stps.webp', alt: 'STPS' },
  { src: '/assets/img/cert-iso.webp', alt: 'ISO 9000' },
  { src: '/assets/img/cert-imss.webp', alt: 'Certificación' },
];
