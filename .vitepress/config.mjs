import { defineConfig } from 'vitepress';

// Detecció automàtica de la ruta base per a GitHub Pages (ex: /portal-medi/) i entorn local (/)
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserOrOrgSite = repoName.endsWith('.github.io');
const base = process.env.VITEPRESS_BASE || (process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgSite ? `/${repoName}/` : '/');

export default defineConfig({
  title: 'Portal Medi · SdA Hub',
  description: 'Hub docent de Projectes i Situacions d\'Aprenentatge de Coneixement del Medi — Cicle Superior (Decret 175/2022 i Decret 480/2024)',
  lang: 'ca',
  base,
  cleanUrls: false,
  srcExclude: [
    'README.md',
    'PROJECT_STATUS.md',
    'GEMINI.md',
    'Currículum Medi/**',
    'Projecte medi Geologia/**',
    'Projecte medi Geografia ESP - CAT/**',
    'Projecte Grecs - Romans/**'
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800&display=swap' }],
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Portal Medi' }],
    ['meta', { name: 'application-name', content: 'Portal Medi' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ],

  themeConfig: {
    siteTitle: '🌍 Portal Medi · SdA Hub',
    logo: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
    },

    nav: [
      { text: 'Inici', link: '/' },
      {
        text: '📚 Projectes i SdA',
        items: [
          {
            text: '🟢 Cicle Superior Primària (5è i 6è)',
            items: [
              { text: '🌋 SdA 1 · Geologia: La Terra Viva (8 Sessions)', link: '/geologia/' },
              { text: '🗺️ SdA 2 · Geografia CAT i ESP (En integració)', link: '/#cataleg-sda' },
              { text: '🏛️ SdA 3 · Grècia i Roma: Teatre (En integració)', link: '/#cataleg-sda' }
            ]
          },
          {
            text: '🗂️ Navegació Global',
            items: [
              { text: '🔎 Explorar Catàleg amb Filtres', link: '/#cataleg-sda' }
            ]
          }
        ]
      },
      {
        text: '🛠️ Web Apps i Recursos',
        items: [
          {
            text: '💻 Aplicacions Interactives (PDI i Aula)',
            items: [
              { text: '📽️ Presentació Interactiva Alumnat (Sessió 1 PDI)', link: '/recursos/geologia/presentacio_projecte_geologia.html', target: '_blank' },
              { text: '🗺️ Mapa Conceptual Integrador + DUA + PDI (Sessió 5)', link: '/recursos/geologia/sessio_5_mapa_conceptual.html', target: '_blank' }
            ]
          },
          {
            text: '📖 Dossiers DUA i Bastides',
            items: [
              { text: '🌍 Els 5 Blocs i Dossiers DUA (Geologia)', link: '/geologia/dossiers' },
              { text: '💻 Estructura 7 Diapositives Google Slides', link: '/geologia/materials' }
            ]
          },
          {
            text: '📊 Avaluació 360° i Documents Oficials',
            items: [
              { text: '⚖️ Rúbrica CoRubrics, Quizizz i Passaport', link: '/geologia/avaluacio' },
              { text: '📄 Programació Oficial SdA Geologia (.docx)', link: '/recursos/geologia/SdA_Geologia_Oficial.docx', target: '_blank' },
              { text: '⚡ Apps Script Generador Google Slides (.js)', link: '/recursos/geologia/Generador_Plantilla_Slides.js', target: '_blank' }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/geologia/': [
        {
          text: '🌋 SdA 1: La Terra Viva (Geologia)',
          collapsed: false,
          items: [
            { text: 'Visió General i Context', link: '/geologia/' },
            { text: 'Programació Curricular (175/2022)', link: '/geologia/programacio' },
            { text: 'Metodologia Puzle (4+1) i DUA', link: '/geologia/dua-metodologia' },
            { text: 'Els 5 Blocs i Dossiers DUA', link: '/geologia/dossiers' },
            { text: 'Plantilla 7 Slides i Recursos', link: '/geologia/materials' },
            { text: 'Avaluació 360°, CoRubrics i Passaport', link: '/geologia/avaluacio' }
          ]
        },
        {
          text: '🗓️ Sessions pas a pas (Model 5E · S1–S8)',
          collapsed: false,
          items: [
            { text: 'S1 (Enganxa): Llançament i Equips', link: '/geologia/sessions/sessio-01' },
            { text: 'S2 (Explora): Investigació al Dossier DUA', link: '/geologia/sessions/sessio-02' },
            { text: 'S3 (Explica): Redacció Pròpia a Slides', link: '/geologia/sessions/sessio-03' },
            { text: 'S4 (Elabora 1): Disseny Visual i Preguntes Test', link: '/geologia/sessions/sessio-04' },
            { text: 'S5 (Elabora 2): Puzle Taules Mixtes i Mapa', link: '/geologia/sessions/sessio-05' },
            { text: 'S6 (Avalua 1): Assaig Oral i Checklist', link: '/geologia/sessions/sessio-06' },
            { text: 'S7 (Avalua 2): Congrés Oral i CoRubrics', link: '/geologia/sessions/sessio-07' },
            { text: 'S8 (Avalua 3): Gran Quizizz i Retorn 360°', link: '/geologia/sessions/sessio-08' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Cercar als Projectes de Medi',
                buttonAriaLabel: 'Cercar als Projectes de Medi'
              },
              modal: {
                noResultsText: 'No s\'han trobat resultats per a',
                resetButtonTitle: 'Netejar cerca',
                footer: {
                  selectText: 'per seleccionar',
                  navigateText: 'per navegar',
                  closeText: 'per tancar'
                }
              }
            }
          }
        }
      }
    },

    docFooter: {
      prev: 'Sessió / Pàgina anterior',
      next: 'Següent sessió / pàgina'
    },

    outline: {
      level: [2, 3],
      label: 'En aquesta pàgina'
    },

    returnToTopLabel: 'Tornar a dalt',
    sidebarMenuLabel: 'Menú del Projecte',
    darkModeSwitchLabel: 'Tema visual'
  }
});
