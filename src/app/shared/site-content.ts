/**
 * ============================================================
 *  DOSPUNTOS — CONTENIDO DEL SITIO
 * ============================================================
 *  TODO lo que se lee en la web esta en este archivo.
 *  Para cambiar un precio, un texto o el numero de WhatsApp,
 *  se edita aca y listo. No hace falta tocar nada mas.
 *
 *  Buscá los comentarios que dicen "COMPLETAR" — son los datos
 *  que todavia faltan cargar.
 * ============================================================
 */

export interface Paquete {
  id: string;
  nombre: string;
  bajada: string;
  prefijoPrecio: string;
  precio: string;
  paraQuien: string;
  incluye: string[];
  textoBoton: string;
  destacado: boolean;
  etiqueta?: string;
}

export interface Proyecto {
  nombre: string;
  rubro: string;
  paquete: string;
  resultado: string;
  icono: string;
  enlace: string;
}

export interface Paso {
  titulo: string;
  detalle: string;
  icono: string;
}

export interface Valor {
  titulo: string;
  detalle: string;
  icono: string;
}

export interface Socia {
  nombre: string;
  rol: string;
  descripcion: string;
  /** Ruta de la foto dentro de la carpeta `public`, por ejemplo '/socias/martina.jpg'.
   *  Si se deja vacio, se muestra la inicial del nombre en un circulo de color. */
  foto: string;
}

// ============================================================
//  1. DATOS DE CONTACTO
// ============================================================

/** COMPLETAR: numero de WhatsApp con codigo de pais, solo numeros. */
export const WHATSAPP_NUMERO = '5492975065482';

/** Mensaje con el que se abre el chat cuando hacen clic en el boton. */
export const WHATSAPP_MENSAJE = 'Hola! Quiero hacer la pagina web de mi negocio.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAJE,
)}`;

/** COMPLETAR: usuario de Instagram, sin el arroba. */
export const INSTAGRAM_USUARIO = 'dospuntos.web';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USUARIO}`;

/** COMPLETAR: email. Es el canal secundario, WhatsApp va primero. */
export const EMAIL = 'dos.puntos.jm@gmail.com';

/** COMPLETAR: a donde envia el formulario de contacto.
 *
 *  Mientras esto quede vacio, el formulario NO se rompe: abre WhatsApp con los
 *  datos ya escritos. La consulta llega igual.
 *
 *  Opcion A — Formspree (formspree.io):
 *    pegar aca la URL que te dan, con esta forma:
 *    'https://formspree.io/f/xxxxxxxx'
 *
 *  Opcion B — Web3Forms (web3forms.com):
 *    pegar aca 'https://api.web3forms.com/submit'
 *    y ademas cargar la clave en FORMULARIO_CLAVE, abajo.
 */
export const FORMULARIO_URL = 'https://api.web3forms.com/submit';

/** Solo para Web3Forms. Con Formspree se deja vacio. */
export const FORMULARIO_CLAVE = '92c03c90-7483-4c50-90fb-56387bb30c54';

// ============================================================
//  2. ENCABEZADO (lo primero que se ve)
// ============================================================

export const HERO = {
  titulo: 'Tu negocio, con la página web que se merece',
  bajada:
    'Somos dos desarrolladoras. Creamos tu página para que tus clientes te encuentren, te conozcan y te escriban.',
  botonPrincipal: 'Escribinos por WhatsApp',
  botonSecundario: 'Ver nuestros trabajos',
};

// ============================================================
//  3. COMO TRABAJAMOS
// ============================================================

export const VALORES: Valor[] = [
  {
    titulo: 'Atención personalizada',
    detalle: 'Hablás siempre con nosotras dos, nunca con un formulario automático.',
    icono: 'UserRoundCheck',
  },
  {
    titulo: 'Te explicamos todo simple',
    detalle: 'Nada de palabras raras. Te contamos qué estamos haciendo y por qué.',
    icono: 'MessageCircle',
  },
  {
    titulo: 'Entregamos a tiempo',
    detalle: 'Te damos una fecha desde el principio y la cumplimos.',
    icono: 'CalendarCheck',
  },
];

// ============================================================
//  4. PAQUETES — EDITAR LOS PRECIOS ACA
// ============================================================

export const PAQUETES: Paquete[] = [
  {
    id: 'landing',
    nombre: 'Landing page',
    bajada: 'Una página que va al grano',
    prefijoPrecio: 'Desde',
    precio: '$100.000', // EDITABLE
    paraQuien: 'Si estás arrancando, tenés una promoción puntual o un servicio de urgencia.',
    incluye: [
      'Una página pensada para que te contacten',
      'Se ve perfecta desde el celular',
      'Formulario para que te dejen sus datos',
      'Botón de WhatsApp siempre a mano',
    ],
    textoBoton: 'La quiero',
    destacado: false,
  },
  {
    id: 'informativo',
    nombre: 'Sitio informativo',
    bajada: 'Tu negocio contado completo',
    prefijoPrecio: 'Desde',
    precio: '$300.000', // EDITABLE
    paraQuien: 'Para comercios, consultorios y estudios profesionales.',
    incluye: [
      'Todo lo del plan anterior',
      'Hasta 5 secciones: inicio, servicios, nosotros y contacto',
      'Mapa con la ubicación de tu local',
      'Preparada para que te encuentren en Google',
    ],
    textoBoton: 'Empezar',
    destacado: true,
    etiqueta: 'Más elegido',
  },
  {
    id: 'premium',
    nombre: 'Sitio premium',
    bajada: 'Para negocios que necesitan algo más que una web',
    prefijoPrecio: 'A medida',
    precio: 'Consultar', // EDITABLE
    paraQuien: 'Si querés que tus clientes reserven solos o mostrar un catálogo que cambia seguido.',
    incluye: [
      'Todo lo del plan anterior',
      'Turnos online, para que tus clientes reserven solos',
      'Catálogo de productos o servicios que cargás y editás vos',
      'Novedades o blog que actualizás cuando querés',
      'Tu negocio en Google Maps',
      'Te enseñamos a manejarlo',
    ],
    textoBoton: 'Pedir presupuesto',
    destacado: false,
  },
];

export const MANTENIMIENTO = {
  titulo: 'Y después, nos seguimos ocupando',
  bajada:
    'Cualquiera de los tres planes puede sumar mantenimiento mensual. Vos te dedicás a tu negocio, del resto nos encargamos nosotras.',
  nombre: 'Mantenimiento mensual',
  precio: '$30.000', // EDITABLE
  periodo: '/mes',
  incluye: [
    'Tu web siempre online y funcionando',
    'Copia de seguridad todos los días',
    'Cambios chicos sin costo extra',
  ],
  textoBoton: 'Quiero saber más',
};

// ============================================================
//  5. PORTAFOLIO
//  COMPLETAR: reemplazar el '#' de cada 'enlace' por la direccion
//  real del sitio cuando este publicado.
// ============================================================

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'Luna Fit',
    rubro: 'Entrenadora personal',
    paquete: 'Landing page',
    resultado: 'Una página con sus planes y un botón para empezar a entrenar hoy.',
    icono: 'Dumbbell',
    enlace: 'https://lunafit.netlify.app/',
  },
  {
    nombre: 'Dulce Antojo',
    rubro: 'Repostería',
    paquete: 'Landing page',
    resultado: 'Fotos grandes de cada torta y los pedidos entran directo por WhatsApp.',
    icono: 'CakeSlice',
    enlace: 'https://antojosdulces.netlify.app/',
  },
  {
    nombre: 'Herrera & Asociados',
    rubro: 'Estudio contable',
    paquete: 'Sitio informativo',
    resultado: 'Sus servicios explicados claro y un contacto que transmite confianza.',
    icono: 'Landmark',
    enlace: 'https://herrerayasoc.netlify.app/',
  },
  {
    nombre: 'Patitas del Sur',
    rubro: 'Veterinaria',
    paquete: 'Sitio informativo',
    resultado: 'Horarios a la vista, el equipo presentado y cómo llegar al local.',
    icono: 'PawPrint',
    enlace: 'https://patitasdelsur.netlify.app/',
  },
  {
    nombre: 'Clínica Sonría',
    rubro: 'Odontología',
    paquete: 'Sitio premium',
    resultado: 'Turnos online y notas de salud que la clínica actualiza sola.',
    icono: 'Stethoscope',
    enlace: '#',
  },
];

// ============================================================
//  6. PROCESO DE TRABAJO
// ============================================================

export const PASOS: Paso[] = [
  {
    titulo: 'Charlamos',
    detalle: 'Nos contás qué hacés y qué necesitás. Sin compromiso.',
    icono: 'MessageSquare',
  },
  {
    titulo: 'Te pasamos la propuesta',
    detalle: 'Qué incluye, cuánto sale y para cuándo está lista.',
    icono: 'FileText',
  },
  {
    titulo: 'Diseñamos',
    detalle: 'Te mostramos cómo va a verse antes de escribir una sola línea.',
    icono: 'Palette',
  },
  { titulo: 'La construimos', detalle: 'Armamos tu sitio y lo probamos en todos los tamaños de pantalla.', icono: 'Wrench' },
  {
    titulo: 'Sale al aire',
    detalle: 'Publicamos tu web y te acompañamos los primeros días.',
    icono: 'Rocket',
  },
];

// ============================================================
//  7. SOBRE NOSOTRAS — texto placeholder, reemplazar por el real
// ============================================================

export const NOSOTRAS = {
  titulo: 'Somos dos, y eso se nota',
  parrafos: [
    // COMPLETAR: reescribir con las palabras de ustedes.
    'DosPuntos nació de dos desarrolladoras que se cansaron de ver buenos negocios con una presencia en internet que no les hacía justicia.',
    'Somos Martina y Julieta y trabajamos en convertir tu idea en realidad. Las dos estamos en cada proyecto, así que siempre hay alguien que conoce tu web de memoria. Nos escribís y te contestamos nosotras, no un chatbot.',
  ],
  /** REVISAR: los roles estan repartidos a ojo. Si es al reves, se dan vuelta
   *  los dos objetos y listo.
   *  Para la foto: guardar la imagen en `public/socias/` y poner aca la ruta,
   *  por ejemplo '/socias/martina.jpg'. Sirve cuadrada y de al menos 400x400.
   *  Mientras este vacio se muestra la inicial, asi que nunca se ve rota. */
  socias: [
    {
      nombre: 'Martina',
      rol: 'Diseño',
      descripcion:
        'Me encargo de que tu web se vea como el negocio que tenés en la cabeza, no como una plantilla.',
      foto: '',
    },
    {
      nombre: 'Julieta',
      rol: 'Desarrollo',
      descripcion:
        'Me encargo de que funcione: que abra rápido, que se vea bien en el celular y que no se rompa.',
      foto: '',
    },
  ] as Socia[],

  /** El nombre juega con el simbolo ":" que se usa al programar, y con que somos dos. */
  notaLogo:
    'Dos puntos. Dos personas. Un símbolo que en programación siempre abre lo que viene después.',
};

// ============================================================
//  8. CONTACTO Y PIE DE PAGINA
// ============================================================

export const CONTACTO = {
  titulo: 'Contanos qué necesitás',
  bajada: 'Te respondemos por WhatsApp, que es donde más rápido nos encontrás.',
  textoBotonWhatsapp: 'Escribinos por WhatsApp',
  textoFormulario: 'O dejanos tus datos y te escribimos nosotras',
};

export const PIE = {
  descripcion: 'Páginas web para negocios y profesionales que quieren que los encuentren.',
  ciudad: 'Argentina', // COMPLETAR: ciudad o zona
  enlaceCotizacion: 'Pedí una cotización sin compromiso',
};

export const ANIO_ACTUAL = new Date().getFullYear();

/** Enlaces del menu de navegacion. */
export const NAVEGACION = [
  { texto: 'Paquetes', ancla: '#paquetes' },
  { texto: 'Trabajos', ancla: '#portafolio' },
  { texto: 'Cómo trabajamos', ancla: '#proceso' },
  { texto: 'Nosotras', ancla: '#nosotras' },
];
