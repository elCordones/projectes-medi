# 📁 Kit de Continuïtat Docent, Traspàs a Google Drive i Guia de Substitució

<div class="sda-quickbar">
  <a href="./">🏠 Visió General</a>
  <a href="./programacio">📘 Programació Curricular</a>
  <a href="./dua-metodologia">🧩 Metodologia Puzle i DUA</a>
  <a href="./dossiers">📖 Dossiers DUA (5è i 6è)</a>
  <a href="./materials">💻 Plantilla Slides i Mapes</a>
  <a href="./avaluacio">⚖️ Avaluació 360° CoRubrics</a>
  <a href="./kit-substitucio" class="active">📁 Kit Relleu Docent i Drive</a>
</div>

<span class="pe-badge pe-badge-curric">Custòdia i Transferència de Centre</span>
<span class="pe-badge pe-badge-team">Guia Immediata per a Substituts</span>
<span class="pe-badge pe-badge-dua">Automatització Google Drive (1 Clic)</span>

---

## 🎯 Per què aquest Kit de Continuïtat Docent?

En el dia a dia escolar poden sorgir situacions habituals que posen a prova la coordinació pedagògica:
1. **Una baixa mèdica imprevista d'un dia o de diverses setmanes:** Un docent substitut entra a l'aula de 5è o 6è sense conèixer el grup ni el projecte.
2. **Canvi de centre del mestre titular a final de curs:** Tot el material elaborat ha de quedar custodiat a l'escola, a disposició de l'equip directiu i del nou equip docent de Cicle Superior.
3. **Coordinació internivell entre línies paral·leles:** Compartir les mateixes bastides, criteris i documents oficials entre diversos mestres de l'escola.

Aquest espai ofereix **dues solucions immediates**:
* Una **Guia Ràpida d'Urgència (1 pàgina)** per al mestre que entra a l'aula avui mateix.
* Un **script de Google Apps Script** que clona en 10 segons tota l'estructura organitzativa a la unitat de Google Drive del centre educatiu.

---

## 📄 1. Guia Ràpida d'Urgència per al Mestre Substitut («Què faig avui a l'aula?»)

::: tip 📌 Ets mestre/a substitut/da i entres ara mateix a la classe?
Llegeix aquests 4 punts clau i podràs conduir la sessió sense necessitat de preparar res:
:::

### 1. Com estan organitzats els alumnes?
* L'alumnat treballa en **5 Equips Cooperatius Fixes de 5 alumnes** (Taules 1 a 5).
* Cada equip investiga un gran bloc geogràfic:
  * **Taula 1:** La Costa (Penya-segats, platges, deltes).
  * **Taula 2:** La Muntanya (Serralades, cims alts, valls).
  * **Taula 3:** La Plana (Depressions, conreus, ciutats).
  * **Taula 4:** El Clima (Temperatures, pluges, tipus de climes).
  * **Taula 5:** Els Rius (Conques, vessants, cabals).
* **La Regla del 4 + 1:** Els alumnes 1 a 4 investiguen geografia física. L'alumne 5 s'encarrega exclusivament de la **sostenibilitat, la sequera i l'impacte humà**.

### 2. On tenen el material els alumnes?
* Cada equip té una presentació de **Google Slides compartida de 7 diapositives** al seu Google Drive / Classroom.
* Tenen el **Dossier de Consulta DUA** amb tota la informació a [dossiers.md](./dossiers) o imprès en paper a la carpeta d'aula.

### 3. Taula de Ruta: Què toca fer segons la sessió d'avui?

| Sessió d'avui | Fase 5E | Consigna immediata per donar a l'alumnat en entrar a l'aula |
| :---: | :---: | :--- |
| **Sessió 1** | **Enganxa** | «Seieu a la vostra taula d'equip (1 a 5), repartiu-vos els 5 subtemes i obriu la presentació compartida a Google Drive». |
| **Sessió 2** | **Explora** | «Obriu el dossier de consulta, llegiu el vostre subtema individualment i responeu la pregunta clau a la vostra llibreta». |
| **Sessió 3** | **Explica** | «Regla de text primer: escriviu 3 o 4 idees amb paraules pròpies a la vostra diapositiva individual. Prohibit posar fotos encara». |
| **Sessió 4** | **Elabora 1** | «Afegiu una foto o mapa amb la font citada, redacteu la diapositiva 7 de conclusions d'equip i escriviu 2 preguntes per al concurs». |
| **Sessió 5** | **Elabora 2** | «Completem individualment el Mapa Conceptual del Territori connectant muntanyes, climes i rius amb fletxes i connectors». |
| **Sessió 6** | **Avalua 1** | «Assagem l'exposició oral amb cronòmetre: 1 minut i mig per persona (màxim 8 minuts per equip). L'equip parella avalua amb la diana». |
| **Sessió 7** | **Avalua 2** | «Congrés oral davant la classe: l'equip ponent exposa a la PDI i la resta del grup omple el Passaport de l'Oient Actiu i CoRubrics». |
| **Sessió 8** | **Avalua 3** | «Juguem el Gran Quizizz cooperatiu de classe, omplim la coavaluació interna d'equip a CoRubrics i fem la reflexió de tancament». |

### 4. Què fer si falla internet o els ordinadors?
Tota la feina es pot continuar en analògic: els alumnes llegeixen els dossiers impresos o fan servir el llibre de text de consulta i redacten el seu esborrany a la llibreta de medi.

---

## ⚡ 2. Automatització Google Apps Script: Clonador Integral a Google Drive

Per garantir que tot el projecte quedi desat al **Google Drive corporatiu del centre educatiu**, hem desenvolupat aquest script que crea automàticament l'arbre complet de carpetes, fitxers i guies:

<div class="resource-card">
  <div class="resource-badge">APPS SCRIPT .JS</div>
  <div class="resource-title">⚡ Clonador Integral de la SdA a Google Drive</div>
  <p>Crea a l'arrel de Google Drive la carpeta compartida «📁 [ESCOLA] Projecte Medi - Geografia (5è i 6è)» amb totes les subcarpetes, presentacions per equips i guia de substituts.</p>
  <div class="resource-meta">
    <span>📁 Script: Clonador_SdA_Drive.js</span>
    <span>⚡ Execució gratuïta en 10 segons a script.new</span>
  </div>
  <a href="/recursos/geografia/Clonador_SdA_Drive.js" download="Clonador_SdA_Drive.js" class="resource-download">📥 Descarregar Script Clonador</a>
</div>

### 📂 Estructura resultant a Google Drive:
```txt
📁 [ESCOLA] Projecte Medi - Geografia (5è i 6è)
├── 📁 01_Programacio_Oficial_SdA
│   └── 📘 Programacio_Didactica_Oficial_SdA_Geografia.gdoc (Per a Direcció / Inspecció)
├── 📁 02_Dossiers_DUA_Alumnat
│   ├── 📖 Dossier_Geografia_Catalunya_5e.gdoc (Organitzat per pestanyes)
│   └── 📖 Dossier_Geografia_Espanya_6e.gdoc (Organitzat per pestanyes)
├── 📁 03_Presentacions_Google_Slides_Equips
│   ├── 💻 Presentació Equip 1 · La Costa (7 Diapositives)
│   ├── 💻 Presentació Equip 2 · La Muntanya (7 Diapositives)
│   ├── 💻 Presentació Equip 3 · La Plana (7 Diapositives)
│   ├── 💻 Presentació Equip 4 · El Clima (7 Diapositives)
│   └── 💻 Presentació Equip 5 · Els Rius (7 Diapositives)
├── 📁 04_Avaluacio_CoRubrics_i_Passaport
│   ├── ⚖️ Rubrica_CoRubrics_Geografia.gsheet
│   └── 🛂 Passaport_Oient_Actiu_Imprimible.gdoc
├── 📁 05_Kit_Continuacio_i_Substituts
│   └── 📄 00_LLEGEIX-ME_Guia_Urgencia_Mestre_Substitut.gdoc
└── 📄 00_LLEGEIX-ME_Guia_Urgencia_Mestre_Substitut.gdoc (Còpia a l'arrel per accés immediat)
```

---

## 📥 3. Banc de Descàrrega de Documents Oficials

Tots els fitxers estan disponibles per a descàrrega directa per si cal desar-los a un llapis USB o compartir-los per correu electrònic amb la secretaria del centre:

<div class="bento-grid" style="margin-top: 1.5rem;">
  <div class="bento-card bento-span-6">
    <div class="bento-icon">📄</div>
    <div class="bento-title">Programació Oficial SdA en Word (.docx)</div>
    <div class="bento-desc">Document oficial complet amb capçalera institucional, taules d'alt contrast i 12 seccions curriculars per a la carpeta de programacions del centre.</div>
    <a href="/recursos/geografia/SdA_Geografia_Oficial.docx" download="SdA_Geografia_Oficial.docx" class="bento-link">📥 Descarregar Document Word (.docx) →</a>
  </div>

  <div class="bento-card bento-span-6">
    <div class="bento-icon">⚡</div>
    <div class="bento-title">Generador de Slides a Drive (.js)</div>
    <div class="bento-desc">Script lleuger de Google Apps Script per generar només la plantilla de les 7 diapositives a Google Drive en cas de voler crear presentacions soltes.</div>
    <a href="/recursos/geografia/Generador_Plantilla_Slides.js" download="Generador_Plantilla_Slides.js" class="bento-link">📥 Descarregar Script Slides (.js) →</a>
  </div>
</div>

::: info 🏢 Consell de Custòdia Escolar:
Quan executis l'script o desis aquesta carpeta al teu Google Drive, recorda prémer **Compartir** i afegir el correu general de l'escola o del cicle (ex: `cicle.superior@escola.cat` o `direccio@escola.cat`) amb permisos d'editor/propietari. D'aquesta manera, encara que canviïs de centre o de curs, el material educatiu quedarà custodiat al centre per sempre!
:::
