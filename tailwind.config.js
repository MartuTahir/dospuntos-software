/**
 * ============================================================
 *  DOSPUNTOS — IDENTIDAD VISUAL
 * ============================================================
 *  Este es el unico lugar donde se cambian colores, tipografias,
 *  tamanos y espaciados de todo el sitio. Tocando algo aca,
 *  cambia en todas las paginas a la vez.
 *
 *  Tokens tomados del diseno de Stitch "Impulso Digital Local".
 * ============================================================
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // --- COLORES PROTAGONISTAS (los 3 de la marca) ---
        primary: '#340075', // violeta oscuro: titulos y texto de marca
        'primary-container': '#4c1d95', // violeta principal: botones y fondos fuertes
        secondary: '#735c00', // texto sobre fondos ambar
        'secondary-container': '#fcd34d', // ambar: badges y llamados a la accion
        tertiary: '#550018', // texto sobre fondos coral
        'tertiary-container': '#7a0c29', // coral oscuro

        // --- TEXTO SOBRE CADA COLOR (contraste garantizado) ---
        'on-primary': '#ffffff',
        'on-primary-container': '#b994ff',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#725b00',
        'on-secondary-fixed': '#231b00',
        'on-tertiary': '#ffffff',
        'on-tertiary-fixed-variant': '#891933',

        // --- FONDOS Y NEUTROS ---
        background: '#f8f9fa', // fondo general del sitio
        surface: '#f8f9fa',
        'surface-container-lowest': '#ffffff', // tarjetas sobre fondo gris
        'surface-container-low': '#f3f4f5',
        'surface-container': '#edeeef',
        'surface-variant': '#e1e3e4',

        // --- TEXTO ---
        'on-background': '#191c1d', // texto principal (carbon, no negro puro)
        'on-surface': '#191c1d',
        'on-surface-variant': '#4a4452', // texto secundario / parrafos

        // --- BORDES ---
        outline: '#7b7483',
        'outline-variant': '#ccc3d4',

        // --- ESTADOS ---
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // --- EXTRAS DE DETALLE ---
        'primary-fixed': '#ebdcff',
        'primary-fixed-dim': '#d3bbff',
        'secondary-fixed': '#ffe086',
        'tertiary-fixed': '#ffdadc',
      },

      // --- TIPOGRAFIA ---
      // Una sola familia en todo el sitio: Plus Jakarta Sans.
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '700' }],
      },

      // --- ESPACIADOS ---
      spacing: {
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        gutter: '24px',
        'margin-mobile': '20px',
        'margin-desktop': '60px',
        'section-padding': '120px',
      },
      maxWidth: {
        'container-max': '1280px',
      },

      // --- ESQUINAS REDONDEADAS ---
      borderRadius: {
        DEFAULT: '0.5rem',
        md: '0.75rem', // 12px — inputs y botones chicos
        lg: '1rem',
        xl: '1.5rem', // 24px — tarjetas
        '2xl': '2rem', // 32px — bloques destacados
      },

      // --- SOMBRAS (tintadas de violeta, nunca gris puro) ---
      boxShadow: {
        ambient: '0 4px 20px rgba(76, 29, 149, 0.04)',
        'ambient-lg': '0 12px 40px rgba(76, 29, 149, 0.08)',
      },
    },
  },
  plugins: [],
};
