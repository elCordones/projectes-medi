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

- **Estat general:** **Portal VitePress creat, compilat i operatiu amb el Projecte de Geologia integrat al 100%; pendent d'integrar Geografia i Grecs i Romans en properes sessions.**
- **Feina completada en la sessió d'avui (2026-11-16):**
  1. **Concreció del Model Puzle (Opció A: 5 Taules Mixtes d'Ambaixadors 1–5) a la Sessió 5 de Geologia:**
     - Actualitzada tota la seqüència de la Sessió 5 a [`SdA_Projecte_Geologia.md`](Projecte%20medi%20Geologia/SdA_Projecte_Geologia.md), [`DOCUMENTACIO_PROJECTE.md`](Projecte%20medi%20Geologia/DOCUMENTACIO_PROJECTE.md), [`presentacio_projecte_geologia.html`](Projecte%20medi%20Geologia/presentacio_projecte_geologia.html) i al document Word oficial [`5è i 6è GUIÓ PROJECTE 1r trimestre Geologia.docx`](Projecte%20medi%20Geologia/5è%20i%206è%20GUIÓ%20PROJECTE%201r%20trimestre%20Geologia.docx).
     - Actualitzada la bastida [`sessio_5_mapa_conceptual.html`](Projecte%20medi%20Geologia/sessio_5_mapa_conceptual.html) (camps `Equip base` i `Taula Mixta`, dinàmica Puzle, quadre de les 5 Taules Mixtes a la vista `Modelatge PDI Novak` i correcció de les media queries a `@media screen` perquè la fitxa d'alumnat imprimeixi exactament en **2 pàgines A4**).
  2. **Construcció del «Portal de Coneixement del Medi · SdA Hub» amb VitePress 1.6.4:**
     - Configurat `package.json`, `.gitignore`, `public/favicon.svg`, `.vitepress/config.mjs`, `.vitepress/theme/index.js` i `.vitepress/theme/custom.css`.
     - Creada la portada Bento Grid ([`index.md`](index.md)) amb doble filtre en viu (Curs/Modalitat i Àmbit Curricular) i targetes per als 3 projectes.
     - Integrat al 100% el projecte de **Geologia** a [`geologia/`](geologia/index.md): 6 pàgines troncals (incloent tots 5 Dossiers DUA complets a `dossiers.md`), 8 sessions `S1–S8` amb plànols `.classroom-grid` i recursos estàtics copiats a `public/recursos/geologia/`.
     - Compilat i verificat amb `npm run docs:build` (codi `0`, 0 *dead links*) i comprovat en viu amb el servidor VitePress (HTTP `200` a totes les rutes).
- **Punt exacte on ens hem quedat:**
  - El portal VitePress arrenca amb `npm run docs:dev` des de `C:\Users\dcordone\Desktop\ANTIGRAVITY\EDU - Projectes Medi`.
  - El projecte de **Geologia** està 100% integrat i verificat; les targetes de **Geografia** i **Grecs i Romans** ja apareixen al catàleg de la portada com a «En integració al Portal», pendents de crear les seves carpetes `geografia/` i `grecs-romans/`.

---

## 3. Full de Ruta d'Implementació (Roadmap per a properes sessions)

- [x] **Pas 1 — Validació visual de Geologia:** Executat `npm run docs:build` (exit 0) i portal verificat amb estètica completa (`.theme-geologia`, `.classroom-grid`, Dossiers DUA i Web Apps).
- [x] **Pas 1.1 — Publicació i Desplegament CI/CD a GitHub Pages:** Repositori configurat com a públic ([`github.com/elCordones/projectes-medi`](https://github.com/elCordones/projectes-medi)), creat el workflow `.github/workflows/deploy.yml` i l'script PowerShell `desplegar-github.ps1`. **Web en línia i operativa al 100%** a [https://elcordones.github.io/projectes-medi/](https://elcordones.github.io/projectes-medi/) (HTTP 200).
- [ ] **Pas 2 — Integrar SdA 2 · Geografia de Catalunya i Espanya (`geografia/`):** Crear les pàgines troncals, dossiers DUA, 8 sessions `S1–S8`, recursos a `public/recursos/geografia/`, activar `.theme-geografia` a `.vitepress/theme/index.js` i actualitzar `config.mjs` i `index.md`.
- [ ] **Pas 3 — Integrar SdA 3 · Grècia i Roma: Clàssics a Escena (`grecs-romans/`):** Crear les pàgines troncals, guió teatral, dossiers DUA, 8 sessions `S1–S8`, recursos a `public/recursos/grecs-romans/`, activar `.theme-historia` i actualitzar `config.mjs` i `index.md`.
- [ ] **Pas 4 (Opcional) — Publicació a GitHub Pages:** Configurar `.github/workflows/deploy.yml` i l'script `desplegar-github.ps1` (equivalent al del Portal EF) si es vol publicar el portal en línia.
