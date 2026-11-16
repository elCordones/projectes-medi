# 🌍 Portal de Coneixement del Medi · SdA Hub — Estat i Documentació

## 1. Especificacions del Projecte

- **Nom del Portal:** **«Portal de Coneixement del Medi · SdA Hub»**
- **Objectiu:** Centralitzar en un portal web docent modern, consultable des de qualsevol dispositiu (ordinador, PDI, tauleta o mòbil) i fàcil d'ampliar, tots els projectes cooperatius i Situacions d'Aprenentatge (SdA) de Coneixement del Medi de Cicle Superior (5è i 6è de Primària), alineats amb el **Decret 175/2022** i el **Decret 480/2024**.
- **Stack tecnològic i Dependències:**
  - **VitePress `^1.6.4`** (`package.json`, `.vitepress/`): generador estàtic basat en Vue 3 i Markdown, amb cercador local en català.
  - **`docx` `^9.15.1`**: per a la sortida dual obligatòria Markdown + Word `.docx` segons `GEMINI.md`.
- **Arquitectura de Carpetes:**
  ```txt
  EDU - Projectes Medi/
  ├── .vitepress/
  │   ├── config.mjs                  # Configuració, nav, sidebar (/geologia/), srcExclude i cercador català
  │   └── theme/
  │       ├── index.js                # Tema dinàmic (.theme-geologia, .theme-geografia, .theme-historia), quickbar i peu legal
  │       └── custom.css              # Sistema de disseny: Bento Grid, .classroom-grid, .sda-quickbar, .resource-card
  ├── public/
  │   ├── favicon.svg                 # Icona del planeta / Geosfera
  │   └── recursos/geologia/          # Web Apps HTML (S1 i S5), Apps Script (.js) i SdA_Geologia_Oficial.docx
  ├── geologia/                       # 🌋 SdA 1 completa: 6 pàgines troncals (incloent 5 Dossiers DUA) + 8 sessions S1–S8
  ├── index.md                        # Portada Bento Grid amb doble filtre en viu (Curs/Modalitat i Àmbit Curricular)
  ├── package.json                    # Scripts docs:dev, docs:build, docs:preview
  ├── PROJECT_STATUS.md               # Aquest registre d'estat global i full de ruta
  ├── README.md                       # Guia general del repositori
  ├── GEMINI.md                       # Normativa tecnopedagògica del repositori
  ├── Projecte medi Geologia/         # Carpeta font original de Geologia (exclosa via srcExclude)
  ├── Projecte medi Geografia ESP - CAT/ # Carpeta font original de Geografia (exclosa via srcExclude)
  └── Projecte Grecs - Romans/        # Carpeta font original de Grecs i Romans (exclosa via srcExclude)
  ```
- **Sistema de Disseny i Components Propis de Medi:**
  - **Tematització dinàmica automàtica:** `.theme-hub` (Verd Biosfera / Blau Oceà `#0f766e` / `#0284c7`), `.theme-geologia` (Taronja Magma / Blau Hidrosfera `#c2410c` / `#0284c7`), `.theme-geografia` (Verd Relleu / Blau Fluvial `#15803d` / `#0369a1`) i `.theme-historia` (Terracota Clàssic / Grana `#b45309` / `#991b1b`).
  - **`.classroom-grid` i `.classroom-zone`:** Plànols visuals d'agrupament cooperatiu de les 5 taules de l'aula (`.internal`, `.external`, `.mixed`, `.ecosocial`).
  - **`.sda-quickbar`:** Barra píndola superior d'accés directe a pàgines troncals i sessions (`S1–S8`).
  - **`.resource-card`:** Targetes amb etiquetes automàtiques (`WEB APP PDI`, `BASTIDA A4 + PDI`, `WORD OFICIAL .DOCX`, `APPS SCRIPT .JS`, `GUIA INTEGRADA`).
- **Llicenciament:** Codi i automatitzacions sota **AGPL v3**; Continguts educatius sota **CC BY-SA 4.0** (`© David Cordones · 2026`).

---

## 2. Estat Actual i Punt de Control (Checkpoint: 2026-11-16)

- **Estat general:** **Portal VitePress en línia a GitHub Pages (100% operatiu), amb les SdA 1 (Geologia) i SdA 2 (Geografia) integrades completament; pendent d'integrar la SdA 3 (Grecs i Romans) com a proper pas.**
- **Feina completada en la sessió d'avui (2026-11-16):**
  1. **Publicació i Desplegament CI/CD a GitHub Pages:**
     - Repositori configurat com a públic a [`github.com/elCordones/projectes-medi`](https://github.com/elCordones/projectes-medi).
     - Creat el workflow `.github/workflows/deploy.yml` i l'script PowerShell `desplegar-github.ps1`.
     - Web en línia i operativa a [https://elcordones.github.io/projectes-medi/](https://elcordones.github.io/projectes-medi/).
  2. **Integració al 100% de la SdA 2 · Geografia de Catalunya i Espanya (`geografia/`):**
     - Creades les 7 pàgines troncals a `geografia/` (`index.md`, `programacio.md`, `dua-metodologia.md`, `dossiers.md`, `materials.md`, `avaluacio.md` i `kit-substitucio.md`).
     - Desenvolupades les 8 sessions (`S1–S8`) pas a pas amb la distribució visual d'aula `.classroom-grid` i la regla del 4 + 1.
     - Dissenyat i implementat el **Kit de Continuïtat Docent, Traspàs a Google Drive i Guia per a Mestres Substituts** amb la guia d'urgència («Què faig avui a l'aula?») i l'script automatitzador `public/recursos/geografia/Clonador_SdA_Drive.js` per crear en 1 sol clic a [script.new](https://script.new) tota l'estructura organitzativa a Google Drive.
     - Actualitzada la navegació ràpida de píndoles a `.vitepress/theme/index.js` amb el tema cartogràfic `.theme-geografia`, sidebar a `config.mjs` i portada `index.md`.
     - Compilat i verificat amb èxit (`npm run docs:build` en 6.13 s amb 0 errors i 0 enllaços trencats).
- **Punt exacte on ens hem quedat (Tancament de sessió 2026-11-16):**
  - El portal té integrades i verificades al 100% la **SdA 1 (Geologia)** i la **SdA 2 (Geografia)**, amb el portal publicat en obert a GitHub Pages ([https://elcordones.github.io/projectes-medi/](https://elcordones.github.io/projectes-medi/)).
  - S'ha creat la primera versió de l'script automatitzador de Google Apps Script (`Clonador_SdA_Drive.js`) i la guia de relleu docent a `geografia/kit-substitucio.md`.
  - **Prioritat immediata per a la següent sessió:** **Acabar de perfilar l'script per desar a Google Drive** (personalització de noms de centre, compartició automàtica per correu amb l'equip de cicle/direcció i possible clonador universal extrapolable també a Geologia i Història).

---

## 3. Full de Ruta d'Implementació (Roadmap per a properes sessions)

- [x] **Pas 1 — Validació visual de Geologia:** Executat `npm run docs:build` (exit 0) i portal verificat amb estètica completa (`.theme-geologia`, `.classroom-grid`, Dossiers DUA i Web Apps).
- [x] **Pas 1.1 — Publicació i Desplegament CI/CD a GitHub Pages:** Repositori configurat com a públic ([`github.com/elCordones/projectes-medi`](https://github.com/elCordones/projectes-medi)), creat el workflow `.github/workflows/deploy.yml` i l'script PowerShell `desplegar-github.ps1`. **Web en línia i operativa al 100%** a [https://elcordones.github.io/projectes-medi/](https://elcordones.github.io/projectes-medi/) (HTTP 200).
- [x] **Pas 2 — Integrar SdA 2 · Geografia de Catalunya i Espanya (`geografia/`):** Creades les 7 pàgines troncals, dossiers DUA complets de 5è i 6è, 8 sessions `S1–S8`, recursos a `public/recursos/geografia/`, Kit de Relleu Docent i Traspàs a Google Drive (`Clonador_SdA_Drive.js`), `.theme-geografia` activat i portada actualitzada.
- [ ] **Pas 2.1 (Prioritat a l'inici de la següent sessió) — Perfilar l'Script per Desar a Google Drive:**
  - Optimitzar i parametritzar `Clonador_SdA_Drive.js` (formulari o camps per introduir el nom de l'escola, correus dels mestres de cicle per compartir automàticament la carpeta en mode editor, millora del document d'urgència del substitut).
  - Valorar la creació del clonador de Drive equivalent per a Geologia (deixant el mecanisme homogeni a tot el portal).
- [ ] **Pas 3 — Integrar SdA 3 · Grècia i Roma: Clàssics a Escena (`grecs-romans/`):** Crear les pàgines troncals, guió teatral de representació (2-4 minuts), dossiers DUA dels 5 grups, 8 sessions `S1–S8`, recursos a `public/recursos/grecs-romans/`, activar `.theme-historia` i actualitzar `config.mjs` i `index.md`.
