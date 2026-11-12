# Projecte de Geologia (Cicle Superior - 5è i 6è) - Estat i Documentació

## 1. Descripció i Especificacions del Projecte
- **Títol del Projecte:** «La Terra Viva: Com es crea i es modela el relleu»
- **Àmbit:** Coneixement del Medi Natural, Social i Cultural — Cicle Superior de Primària (Decret 175/2022 i Decret 480/2024 de Catalunya).
- **Tipus de Projecte:** Aprenentatge Basat en Projectes (ABP) cooperatiu de caràcter **bianual** (l'alumnat el cursa un sol cop durant l'etapa, sigui a 5è o a 6è).
- **Model Metodològic:**
  - Model Puzle / Jigsaw: 5 equips heterogenis de 5 alumnes per classe.
  - Regla del 4 + 1: 4 alumnes investiguen el medi físic i casos d'estudi; l'alumne 5 s'encarrega sempre de l'impacte ecosocial, riscos geològics, prevenció i sostenibilitat.
  - Producte Final: Presentació compartida a Google Slides de 7 diapositives estandarditzades.
  - Seqüència didàctica en 8 sessions seguint el model 5E (Enganxa, Explora, Explica, Elabora, Avalua).
  - Avaluació Triangular 360° amb CoRubrics (coavaluació d'exposicions inter-grup, coavaluació interna d'equip, autoavaluació i heteroavaluació docent) + evidència final mitjançant concurs Kahoot / Quizizz col·laboratiu (preguntes tipus test preparades pels mateixos grups).

---

## 2. Mapa d'Arquitectura de Fitxers

```
Projecte medi Geologia/
├── 5è i 6è GUIÓ PROJECTE 1r trimestre Geologia.docx # Document oficial SdA maquetat segons el model del Departament
├── SdA_Projecte_Geologia.md         # Documentació oficial completa de la Situació d'Aprenentatge (SdA)
├── DOCUMENTACIO_PROJECTE.md         # Guia docent mestre, arquitectura bianual, sessions i avaluació
├── Proposta_Guio_Geologia.md        # Guió únic combinat: gestió d'aula, preguntes clau i pautes Slides
├── Plantilla_Google_Slides.md       # Especificació visual de les 7 diapositives i disseny
├── Generador_Plantilla_Slides.js    # Codi Apps Script per crear la presentació a Google Drive
├── Rubrica_Avaluacio_Geologia.md    # Rúbrica de 4 nivells per a CoRubrics, Kahoot/Quizizz i Passaport
├── presentacio_projecte_geologia.html # Presentació interactiva HTML/SVG per explicar el projecte a l'alumnat (Sessió 1)
├── sessio_5_mapa_conceptual.html    # Aplicació autònoma imprimible (A4/A3) i interactiva: Mapa Conceptual, DUA i PDI (Sessió 5)
├── PROJECT_STATUS.md                # Registre d'estat del projecte i continuïtat entre sessions
└── Dossiers_Grups/                  # Subcarpeta amb els dossiers DUA independents per equip:
    ├── Dossier_Grup_1_Tectonica.md      # Bloc 1: Tectònica de Plaques i Moviment de Continents
    ├── Dossier_Grup_2_Vulcanisme.md     # Bloc 2: El Vulcanisme i les Erupcions
    ├── Dossier_Grup_3_Terratremols.md   # Bloc 3: Els Terratrèmols i les Falles
    ├── Dossier_Grup_4_Vent_Deserts.md   # Bloc 4: Dinàmica Externa: Vent, Temperatura i Deserts
    └── Dossier_Grup_5_Aigua_Carst.md    # Bloc 5: Dinàmica Externa: L'Aigua, Canyons i Carst
```

---

## 3. Estat Actual i Punt de Control (Sessió actualitzada: 2026-11-12)
- **Estat general:** **Completat, enriquit amb bastides didàctiques d'estructuració (Sessió 5) i a punt per a l'aula.**
- **Tasques completades recentment:**
  - [x] **Desenvolupament de la Bastida Imprimible i Interactiva de la Sessió 5:** Creació de [`sessio_5_mapa_conceptual.html`](sessio_5_mapa_conceptual.html) amb selector de 4 vistes (Fitxa Alumne/a per a impressió en A4/A3, Retallables DUA per a suport manipulatiu, Versió Docent amb mapa resolt i solucionari complet, i Mode Projecció PDI amb el modelatge de Novak), diagrames vectorials SVG purs d'alta resolució, estils de contrast per a fotocòpies escolars i llicenciament (David Cordones 2026, CC BY-SA 4.0).
  - [x] **Integració de la Guia Didàctica Minut a Minut a la SdA:** Actualització de [`SdA_Projecte_Geologia.md`](SdA_Projecte_Geologia.md) incorporant l'apartat **7.1. Guia Didàctica d'Aplicació Docent: Sessió 5**, amb justificació tecnopedagògica (avançar el mapa com a organitzador previ d'Ausubel per evitar la parcel·lació del model puzle), gestió d'agrupaments pas a pas (individual, ambaixadors d'equip i parella d'amic crític), cronograma minut a minut de 90', consignes docents literals, preguntes socràtiques i pautes DUA.
  - [x] **Actualització del Mapa de Recursos:** Sincronització de [`DOCUMENTACIO_PROJECTE.md`](DOCUMENTACIO_PROJECTE.md) i [`PROJECT_STATUS.md`](PROJECT_STATUS.md).
  - [x] **Integració al Protocol Oficial de SdA:** S'ha incorporat de manera estructural al protocol tecnopedagògic oficial ([`disseny-sda`](file:///C:/Users/dcordone/.gemini/config/skills/disseny-sda/SKILL.md)) la creació de la **Presentació Multimèdia Interactiva per a l'Alumnat en HTML5/SVG** (`presentacio_projecte_[tema].html`) com a Pas 4 obligatori en el disseny de qualsevol projecte SdA de Medi, així com a recurs tecnopedagògic d'obertura a la Sessió 1 (Enganxa).
  - [x] **Creació de la Presentació Interactiva per a l'Alumnat:** Desenvolupament de [`presentacio_projecte_geologia.html`](presentacio_projecte_geologia.html) amb interfície tecnopedagògica moderna, 10 diapositives seqüenciades, gràfics vectorials SVG originals de la Geosfera, navegació amb teclat/tàctil/PDI, vista en mosaic, mode Pissarra Digital i llicenciament normalitzat segons les directrius (David Cordones 2026, AGPL v3 / CC BY-SA 4.0).
  - [x] **Reescriptura completa del document oficial de la SdA:** Adaptació de [`5è i 6è GUIÓ PROJECTE 1r trimestre Geologia.docx`](5è%20i%206è%20GUIÓ%20PROJECTE%201r%20trimestre%20Geologia.docx) i creació de [`SdA_Projecte_Geologia.md`](SdA_Projecte_Geologia.md) seguint el model normatiu oficial de Situació d'Aprenentatge del Departament d'Educació de la Generalitat de Catalunya (Decret 175/2022 i Decret 480/2024).
  - [x] Diagnosi pedagògica comparativa entre el projecte de Geografia (referent d'èxit) i el de Geologia original.
  - [x] Adaptació a l'estructura **bianual de cicle** (5è i 6è junts o alternats), integrant dinàmica interna, externa, casos mundials i catalans en 5 grans blocs.
  - [x] Creació de la guia docent [`DOCUMENTACIO_PROJECTE.md`](DOCUMENTACIO_PROJECTE.md).
  - [x] Unificació del guió d'aula (graelles per a noms) i el guió de recerca a [`Proposta_Guio_Geologia.md`](Proposta_Guio_Geologia.md).
  - [x] Redacció dels 5 dossiers DUA independents desenvolupats a la subcarpeta [`Dossiers_Grups/`](Dossiers_Grups/).
  - [x] Creació de la guia de disseny de Google Slides (`Plantilla_Google_Slides.md`) i del codi automatitzador de Google Apps Script (`Generador_Plantilla_Slides.js`).
  - [x] Neteja i eliminació dels documents obsolets (el guió antic amb 900 KB de base64, el glossari solt, el document aïllat de la Garrotxa, l'arxiu .xlsx vell i el dossier gran monolític).
  - [x] Integració de la pràctica avaluativa docent:
    - Missió d'equip per crear 2-3 preguntes test (1 certa, 2 falses) per al concurs Kahoot / Quizizz.
    - Protocol d'avaluació triangular 360° amb CoRubrics (coavaluació d'exposició ~4 valoracions per alumne, coavaluació interna d'equip, autoavaluació i heteroavaluació docent) amb ponderació 50% - 35% - 15%.
    - Adaptació de la rúbrica oficial per a la graella de CoRubrics i disseny del Passaport de l'Oient Actiu.
- **Punt exacte on ens hem quedat:**
  - Tot el paquet documental està tancat, verificat, net i llest per ser sincronitzat al Google Drive del docent per a la seva aplicació directa a classe.

---

## 4. Full de Ruta d'Implementació (Propers passos a Google Drive / Aula)
- **Tasques preparatòries per a quan es vulgui aplicar a l'aula:**
  - [ ] **Crear la plantilla de CoRubrics a Google Drive:** Obrir Google Sheets, instal·lar el complement CoRubrics, copiar la graella de [`Rubrica_Avaluacio_Geologia.md`](Rubrica_Avaluacio_Geologia.md) i generar el formulari per a l'alumnat.
  - [ ] **Generar la presentació de Google Slides:** Executar [`Generador_Plantilla_Slides.js`](Generador_Plantilla_Slides.js) a [script.new](https://script.new) per disposar de la presentació maquetada a Drive i poder-ne fer còpies per als equips a Google Classroom.
  - [ ] **Configurar el Dossier a Google Docs (opcional amb pestanyes):** Crear un Google Docs amb 5 pestanyes i enganxar els 5 fitxers de [`Dossiers_Grups/`](Dossiers_Grups/) per oferir un únic enllaç a l'alumnat.
  - [ ] **Recopilació de preguntes test a la Sessió 4:** Crear el qüestionari a Quizizz o Kahoot amb les preguntes creades pels 5 equips per jugar a la Sessió 8.
