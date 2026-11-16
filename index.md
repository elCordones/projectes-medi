---
layout: home

hero:
  name: "Portal de Coneixement del Medi"
  text: "Hub de Projectes i SdA"
  tagline: "Situacions d'Aprenentatge cooperatives per a Cicle Superior (5è i 6è): Model Puzle 4 + 1, Dossiers DUA, seqüències 5E pas a pas, Web Apps interactives i avaluació 360° amb CoRubrics (Decret 175/2022 i Decret 480/2024)."
  actions:
    - theme: brand
      text: 🌋 SdA 1 · Geologia (La Terra Viva)
      link: /geologia/
    - theme: alt
      text: 🌍 Els 5 Blocs i Dossiers DUA
      link: /geologia/dossiers
    - theme: alt
      text: 🗺️ Mapa Sessió 5 (Puzle 1–5)
      link: /geologia/sessions/sessio-05

features:
  - icon: 🧩
    title: Model Puzle 5×5 + Regla 4+1
    details: 5 equips cooperatius de 5 alumnes on 4 membres investiguen processos científics/històrics i el 5è assumeix la dimensió ecosocial, riscos i sostenibilitat.
  - icon: 🪑
    title: Gestió Visual d'Aula i Sessions 5E
    details: Barra ràpida S1–S8 i plànols d'aula (.classroom-grid) per distingir d'un cop d'ull quan treballen en Equips Base i quan en Taules Mixtes d'Ambaixadors.
  - icon: ♿
    title: DUA i Accessibilitat Real
    details: Dossiers organitzats en 5 Pestanyes de Google Docs, plantilles predissenyades de 7 Slides, retallables manipulatius i suports per a dislèxia, nouvinguts, TDAH, TEA i altes capacitats.
  - icon: ⚖️
    title: Avaluació Triangular 360°
    details: CoRubrics (50% docent, 20% coavaluació d'exposicions, 15% coavaluació d'equip, 15% autoavaluació), Passaport de l'Oient Actiu i Kahoot/Quizizz cooperatiu.
---

<script setup>
import { ref, computed } from 'vue';

const activeModality = ref('all');
const activeDomain = ref('all');

const modalityFilters = [
  { id: 'all', label: 'Totes les modalitats' },
  { id: 'bianual', label: 'Bianual CS (5è i 6è)' },
  { id: '5e', label: '5è de Primària' },
  { id: '6e', label: '6è de Primària' }
];

const domainFilters = [
  { id: 'all', label: 'Tots els àmbits' },
  { id: 'geologia', label: '🌋 Terra i Geologia' },
  { id: 'geografia', label: '🗺️ Geografia i Territori' },
  { id: 'historia', label: '🏛️ Història i Societats' },
  { id: 'ciencia', label: '🔬 Cultura Científica' }
];

const matchesProject = (modalities, domains) => {
  const mMatch = activeModality.value === 'all' || modalities.includes(activeModality.value);
  const dMatch = activeDomain.value === 'all' || domains.includes(activeDomain.value);
  return mMatch && dMatch;
};

const visibleProjectCount = computed(() => {
  let count = 0;
  if (matchesProject(['bianual', '5e', '6e'], ['geologia', 'ciencia'])) count++;
  if (matchesProject(['5e', '6e'], ['geografia'])) count++;
  if (matchesProject(['bianual', '5e', '6e'], ['historia'])) count++;
  return count;
});

const hasActiveFilters = computed(() => activeModality.value !== 'all' || activeDomain.value !== 'all');

const resetFilters = () => {
  activeModality.value = 'all';
  activeDomain.value = 'all';
};
</script>

## 📚 Catàleg Oficial de Projectes i Situacions d'Aprenentatge {#cataleg-sda}

<div class="catalog-filter-panel" role="region" aria-label="Filtres del catàleg de Projectes de Medi">
  <div class="filter-row">
    <span class="filter-group-label">🎓 Curs / Modalitat:</span>
    <div class="filter-chips">
      <button
        v-for="item in modalityFilters"
        :key="item.id"
        type="button"
        class="filter-chip"
        :class="{ active: activeModality === item.id }"
        @click="activeModality = item.id"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
  <div class="filter-row">
    <span class="filter-group-label">🧭 Àmbit Curricular:</span>
    <div class="filter-chips">
      <button
        v-for="item in domainFilters"
        :key="item.id"
        type="button"
        class="filter-chip"
        :class="{ active: activeDomain === item.id }"
        @click="activeDomain = item.id"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
  <div class="filter-status-bar">
    <span class="filter-count">
      Mostrant <strong>{{ visibleProjectCount }}</strong> {{ visibleProjectCount === 1 ? 'Projecte' : 'Projectes' }}
    </span>
    <button v-if="hasActiveFilters" type="button" class="filter-reset-btn" @click="resetFilters">
      ↺ Restablir filtres
    </button>
  </div>
</div>

<div class="sda-bento-grid">
  <!-- BENTO CARD 1: GEOLOGIA -->
  <article v-show="matchesProject(['bianual', '5e', '6e'], ['geologia', 'ciencia'])" class="bento-card bento-geologia">
    <div class="bento-header">
      <span class="bento-status-pill">🌋 SdA 01 · Bianual Cicle Superior (5è i 6è)</span>
      <span class="bento-live-badge"><span class="pulse-dot"></span> 100% Operativa</span>
    </div>
    <h3 class="bento-title">
      <a :href="$withBase('/geologia/')">La Terra Viva: Com es crea i es modela el relleu</a>
    </h3>
    <p class="bento-desc">
      Dinàmica interna (tectònica de plaques, vulcanisme, terratrèmols) i dinàmica externa (vent, deserts, glaceres, rius i relleu càrstic) amb casos mundials i de Catalunya (Garrotxa, Mont-rebei, Montserrat, Delta de l'Ebre).
    </p>
    <div class="bento-metrics">
      <div class="bento-metric">
        <strong>8 Sessions 5E</strong>
        <span>90 min cadascuna</span>
      </div>
      <div class="bento-metric">
        <strong>5 Equips × 5</strong>
        <span>Regla 4+1 + S5 Puzle</span>
      </div>
      <div class="bento-metric">
        <strong>25 Subtemes</strong>
        <span>5 Dossiers DUA + Slides</span>
      </div>
    </div>
    <div class="bento-sessions-box">
      <span class="bento-sessions-label">🗓️ Accés directe a les sessions (S1–S8):</span>
      <div class="bento-session-pills">
        <a :href="$withBase('/geologia/sessions/sessio-01.html')" title="S1: Llançament PDI i Equips Base">S1</a>
        <a :href="$withBase('/geologia/sessions/sessio-02.html')" title="S2: Investigació al Dossier DUA">S2</a>
        <a :href="$withBase('/geologia/sessions/sessio-03.html')" title="S3: Redacció pròpia a Slides">S3</a>
        <a :href="$withBase('/geologia/sessions/sessio-04.html')" title="S4: Acabat visual i preguntes test">S4</a>
        <a :href="$withBase('/geologia/sessions/sessio-05.html')" title="S5: Taules Mixtes d'Ambaixadors i Mapa Conceptual">S5</a>
        <a :href="$withBase('/geologia/sessions/sessio-06.html')" title="S6: Assaig oral i Checklist">S6</a>
        <a :href="$withBase('/geologia/sessions/sessio-07.html')" title="S7: Congrés Oral i CoRubrics">S7</a>
        <a :href="$withBase('/geologia/sessions/sessio-08.html')" title="S8: Gran Quizizz i Retorn 360°">S8</a>
      </div>
    </div>
    <div class="bento-actions">
      <a class="bento-btn bento-btn-primary" :href="$withBase('/geologia/')">Obrir SdA Geologia <span>→</span></a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/geologia/dossiers.html')">🌍 5 Dossiers</a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/geologia/avaluacio.html')">⚖️ CoRubrics</a>
    </div>
  </article>

  <!-- BENTO CARD 2: GEOGRAFIA CATALUNYA I ESPANYA -->
  <article v-show="matchesProject(['5e', '6e'], ['geografia'])" class="bento-card bento-geografia">
    <div class="bento-header">
      <span class="bento-status-pill">🗺️ SdA 02 · 5è (CAT) i 6è (ESP)</span>
      <span class="bento-live-badge"><span class="pulse-dot"></span> 100% Operativa</span>
    </div>
    <h3 class="bento-title">
      <a :href="$withBase('/geografia/')">El Mosaic de Paisatges: Geografia de Catalunya i d'Espanya</a>
    </h3>
    <p class="bento-desc">
      Relleu peninsular i català, unitats morfoestructurals, vessants hidrogràfics, costes i zones climàtiques. Model Puzle 4+1, dossiers DUA per pestanyes, 7 diapositives a Google Slides, Kit de Relleu Docent a Drive i reflexió ecosocial sobre l'aigua i la sequera.
    </p>
    <div class="bento-metrics">
      <div class="bento-metric">
        <strong>8 Sessions 5E</strong>
        <span>90 min cadascuna</span>
      </div>
      <div class="bento-metric">
        <strong>5 Equips × 5</strong>
        <span>Regla 4+1 + DUA</span>
      </div>
      <div class="bento-metric">
        <strong>25 Subtemes</strong>
        <span>Dossiers 5è CAT / 6è ESP</span>
      </div>
    </div>
    <div class="bento-sessions-box">
      <span class="bento-sessions-label">🗓️ Accés directe a les sessions (S1–S8):</span>
      <div class="bento-session-pills">
        <a :href="$withBase('/geografia/sessions/sessio-01.html')" title="S1: Llançament del Viatge i Equips">S1</a>
        <a :href="$withBase('/geografia/sessions/sessio-02.html')" title="S2: Investigació al Dossier DUA">S2</a>
        <a :href="$withBase('/geografia/sessions/sessio-03.html')" title="S3: Redacció a Slides (Text Primer)">S3</a>
        <a :href="$withBase('/geografia/sessions/sessio-04.html')" title="S4: Disseny Visual i Preguntes Test">S4</a>
        <a :href="$withBase('/geografia/sessions/sessio-05.html')" title="S5: Mapa Conceptual del Territori">S5</a>
        <a :href="$withBase('/geografia/sessions/sessio-06.html')" title="S6: Assaig Oral i Diana d'Assaig">S6</a>
        <a :href="$withBase('/geografia/sessions/sessio-07.html')" title="S7: Congrés Geogràfic i CoRubrics">S7</a>
        <a :href="$withBase('/geografia/sessions/sessio-08.html')" title="S8: Gran Quizizz i Retorn 360°">S8</a>
      </div>
    </div>
    <div class="bento-actions">
      <a class="bento-btn bento-btn-primary" :href="$withBase('/geografia/')">Obrir SdA Geografia <span>→</span></a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/geografia/dossiers.html')">📖 Dossiers DUA</a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/geografia/kit-substitucio.html')">📁 Kit Relleu Drive</a>
    </div>
  </article>

  <!-- BENTO CARD 3: GRECS I ROMANS -->
  <article v-show="matchesProject(['bianual', '5e', '6e'], ['historia'])" class="bento-card bento-historia">
    <div class="bento-header">
      <span class="bento-status-pill">🏛️ SdA 03 · Bianual Cicle Superior (5è i 6è)</span>
      <span class="bento-soon-badge">🛠️ En integració al Portal</span>
    </div>
    <h3 class="bento-title">
      <a href="#cataleg-sda">Grècia i Roma: Clàssics a Escena (Teatre Històric)</a>
    </h3>
    <p class="bento-desc">
      Societats en el temps: democràcia atenesa, vida quotidiana, enginyeria romana, mitologia i llegat patrimonial (Empúries i Tarraco). Culmina amb una representació teatral breu de 2–4 minuts per equip i Passaport de l'Espectador.
    </p>
    <div class="bento-metrics">
      <div class="bento-metric">
        <strong>8 Sessions 5E</strong>
        <span>Projecte Dramàtic</span>
      </div>
      <div class="bento-metric">
        <strong>Regla 4+1</strong>
        <span>Rols històrics i ètics</span>
      </div>
      <div class="bento-metric">
        <strong>Teatre 2–4'</strong>
        <span>CoRubrics + Kahoot</span>
      </div>
    </div>
    <div class="bento-sessions-box">
      <span class="bento-sessions-label">📁 Estat de migració al Portal Web:</span>
      <div style="font-size: 0.82rem; color: var(--vp-c-text-2); line-height: 1.45;">
        Materials font disponibles a la carpeta <code>Projecte Grecs - Romans/</code> (guió teatral, dossiers DUA, rúbrica CoRubrics i Passaport). Es desplegarà amb el tema clàssic <code>.theme-historia</code>.
      </div>
    </div>
    <div class="bento-actions">
      <span class="bento-btn bento-btn-ghost" style="opacity: 0.85; cursor: default;">⏳ Proper desplegament (Pas 2)</span>
    </div>
  </article>

  <!-- ESTAT BUIT QUAN EL FILTRE NO COINCIDEIX -->
  <div v-if="visibleProjectCount === 0" class="bento-card bento-empty-state">
    <div class="empty-state-icon">🧭</div>
    <h4>Encara no hi ha cap projecte en aquesta combinació de filtres</h4>
    <p>Pots restablir els filtres per explorar els projectes actuals de Coneixement del Medi o afegir noves carpetes de SdA seguint l'arquitectura escalable del portal.</p>
    <button type="button" class="bento-btn bento-btn-ghost" @click="resetFilters">
      ↺ Mostrar tots els projectes disponibles (3)
    </button>
  </div>

  <!-- BENTO CARD WIDE: ARQUITECTURA METODOLÒGICA COMUNA -->
  <div class="bento-card bento-wide">
    <div class="bento-wide-content">
      <div class="bento-wide-info">
        <span class="bento-kicker">⚖️ ARQUITECTURA PEDAGÒGICA UNIFICADA · DECRET 175/2022 I 480/2024</span>
        <h4>Estructura Comuna: Model Puzle 4 + 1, Taules Mixtes a la S5 i Avaluació 360°</h4>
        <p>Tots els projectes de Coneixement del Medi del hub comparteixen un flux clar perquè l'alumnat interioritzi la dinàmica cooperativa i el docent disposi d'una estructura previsible, inclusiva i fàcil d'ampliar.</p>
      </div>
      <div class="bento-ce-pills">
        <div class="ce-chip ce-1"><strong>1. Puzle 5×5 + Regla 4+1</strong><span>4 investigadors científics/històrics + 1 especialista ecosocial i de riscos/patrimoni.</span></div>
        <div class="ce-chip ce-2"><strong>2. Dossier DUA per Pestanyes</strong><span>Un sol Google Docs amb 5 pestanyes perquè cada grup accedeixi sense distraccions.</span></div>
        <div class="ce-chip ce-3"><strong>3. Sessió 5 · Ambaixadors (1–5)</strong><span>Tancament del Puzle en 5 Taules Mixtes per construir el Mapa Conceptual abans d'exposar.</span></div>
        <div class="ce-chip ce-4"><strong>4. CoRubrics 360° + Quizizz</strong><span>50% docent + 20% exposició + 15% equip + 15% autoavaluació i concurs col·laboratiu final.</span></div>
      </div>
    </div>
  </div>
</div>

---

## 🛠️ Accés Directe a Web Apps, Bastides Imprimibles i Eines de Geologia

<div class="resource-grid">
  <a class="resource-card" :href="$withBase('/recursos/geologia/presentacio_projecte_geologia.html')" target="_blank" rel="noopener">
    <span class="resource-icon">📽️</span>
    <div>
      <strong>Presentació Interactiva PDI (Sessió 1)</strong>
      <small>10 diapositives HTML5/SVG amb gràfics animats de la Geosfera, mode PDI i dreceres</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/geologia/sessio_5_mapa_conceptual.html')" target="_blank" rel="noopener">
    <span class="resource-icon">🗺️</span>
    <div>
      <strong>Bastida Sessió 5: Mapa Conceptual + DUA</strong>
      <small>4 vistes: Fitxa A4 (2 pàg.), Retallables DUA, Solucionari Docent i Modelatge PDI Novak</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/geologia/SdA_Geologia_Oficial.docx')" download>
    <span class="resource-icon">📄</span>
    <div>
      <strong>Programació Oficial SdA Geologia (.docx)</strong>
      <small>Document Word oficial del Departament en 12 seccions (Decret 175/2022 i 480/2024)</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/geologia/Generador_Plantilla_Slides.js')" target="_blank" rel="noopener">
    <span class="resource-icon">⚡</span>
    <div>
      <strong>Apps Script: Plantilla 7 Slides (.js)</strong>
      <small>Genera automàticament a Google Drive la presentació maquetada en 1 clic a script.new</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/geologia/dossiers.html')">
    <span class="resource-icon">📖</span>
    <div>
      <strong>Els 5 Blocs i Dossiers DUA Integrats</strong>
      <small>Tots 25 subtemes, preguntes clau de recerca, webs en català i textos DUA</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/geologia/avaluacio.html')">
    <span class="resource-icon">⚖️</span>
    <div>
      <strong>Rúbrica CoRubrics, Quizizz i Passaport</strong>
      <small>Graella de 4 nivells, protocol 360°, plantilla de preguntes test i Passaport d'Oient</small>
    </div>
  </a>
</div>
