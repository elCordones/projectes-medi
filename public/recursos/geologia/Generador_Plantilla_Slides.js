/**
 * GENERADOR AUTOMÀTIC DE PLANTILLA DE GOOGLE SLIDES
 * Projecte de Geologia: «La Terra Viva» (Cicle Superior - 5è i 6è de Primària)
 * 
 * COM UTILITZAR AQUEST CODI:
 * 1. Obre el navegador i entra a: https://script.new
 * 2. Esborra qualsevol codi que hi hagi i enganxa tot aquest contingut.
 * 3. Fes clic a la icona del disquet (Desa) i després al botó "Executar" (Run).
 * 4. La primera vegada et demanarà acceptar permisos per crear fitxers a Google Drive.
 * 5. Al registre d'execució (Execution log) veuràs l'enllaç directe a la teva nova presentació!
 */

function crearPlantillaGeologiaSlides() {
  // 1. Crear la presentació
  const titolPresentacio = "Plantilla Base - Projecte de Geologia (Cicle Superior 5è i 6è)";
  const deck = SlidesApp.create(titolPresentacio);
  
  // Esborrem la diapositiva en blanc per defecte
  const diapositivesInicials = deck.getSlides();
  if (diapositivesInicials.length > 0) {
    diapositivesInicials[0].remove();
  }

  // Colors temàtics de Geologia (terracota, pissarra i magma)
  const COLOR_FONS = "#FDFBF7";       // Crema molt suau / pedra calcària
  const COLOR_PRIMARI = "#8C2D19";    // Terracota volcànic / terra cuita
  const COLOR_SECUNDARI = "#D97706";  // Taronja magma / ocre
  const COLOR_TARGETA = "#FFFFFF";    // Blanc pur per a targetes de contingut
  const COLOR_TEXT = "#1F2937";       // Gris fosc basalt
  const COLOR_SUBTEXT = "#6B7280";    // Gris mitjà
  const COLOR_ECO = "#065F46";        // Verd maragda fosc (per a sostenibilitat)

  // Funció auxiliar per treure la vora de manera segura
  function treureVora(forma) {
    try {
      forma.getBorder().setTransparent();
    } catch (e) {
      try { forma.getBorder().setWeight(0); } catch (err) {}
    }
  }

  // ==========================================
  // DIAPOSITIVA 1: PORTADA DE L'EQUIP
  // ==========================================
  const slide1 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide1.getBackground().setSolidFill(COLOR_FONS);

  const cardPortada = slide1.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 40, 30, 640, 345);
  cardPortada.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardPortada);

  const t1 = slide1.insertTextBox("🌋 LA TERRA VIVA: PROJECTE DE GEOLOGIA", 60, 48, 600, 45);
  t1.getText().getTextStyle().setFontSize(24).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

  const sub1 = slide1.insertTextBox("Tema del grup: [Tectònica / Volcans / Terratrèmols / Deserts / Aigua i Carst]", 60, 92, 600, 35);
  sub1.getText().getTextStyle().setFontSize(15).setItalic(true).setForegroundColor(COLOR_SECUNDARI).setFontFamily("Montserrat");

  const textMembres = "MEMBRES DE L'EQUIP I MISSIONS:\n" +
                      "• Alumne/a 1: [Nom] - [Subtema 1]\n" +
                      "• Alumne/a 2: [Nom] - [Subtema 2]\n" +
                      "• Alumne/a 3: [Nom] - [Subtema 3]\n" +
                      "• Alumne/a 4: [Nom] - [Subtema 4]\n" +
                      "• Alumne/a 5: [Nom] - [Impacte Humà, Riscos i Sostenibilitat]\n\n" +
                      "Curs: Cicle Superior (5è/6è de Primària)\n" +
                      "Escola: [Nom del Centre]";
  const boxMembres = slide1.insertTextBox(textMembres, 60, 135, 340, 220);
  boxMembres.getText().getTextStyle().setFontSize(12).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  const marcFotoPortada = slide1.insertShape(SlidesApp.ShapeType.RECTANGLE, 420, 140, 230, 185);
  marcFotoPortada.getFill().setSolidFill("#E5E7EB");
  try {
    marcFotoPortada.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2);
  } catch (e) {}
  marcFotoPortada.getText().setText("📷 Inseriu aquí una fotografia real d'alta resolució o mapa del tema geològic").getTextStyle().setFontSize(12).setForegroundColor(COLOR_SUBTEXT);

  slide1.getNotesPage().getSpeakerNotesShape().getText().setText(
    "PRESENTACIÓ DE L'EQUIP (Diapositiva 1):\n" +
    "• Saludem el grup-classe amb seguretat: 'Bon dia a tothom, som l'equip...'\n" +
    "• Introduïm el nostre tema geològic i expliquem per què és fascinant per entendre la Terra.\n" +
    "• Presentem qui som i quin subapartat exposarà cadascú de nosaltres."
  );

  // ==========================================
  // DIAPOSITIVES 2 A 5: INDIVIDUALS (Alumnes 1 a 4)
  // ==========================================
  for (let i = 1; i <= 4; i++) {
    const slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    slide.getBackground().setSolidFill(COLOR_FONS);

    const banner = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 20, 660, 52);
    banner.getFill().setSolidFill(COLOR_TARGETA);
    treureVora(banner);

    const titolIndiv = slide.insertTextBox("Subtema " + i + ": [Escriu aquí el títol del teu apartat geològic]", 45, 24, 430, 35);
    titolIndiv.getText().getTextStyle().setFontSize(16).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

    const badgeAutor = slide.insertTextBox("👤 Alumne/a " + i + ": [Nom]", 480, 26, 200, 30);
    badgeAutor.getText().getTextStyle().setFontSize(12).setBold(true).setForegroundColor(COLOR_SECUNDARI).setFontFamily("Montserrat");

    const cardText = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 82, 360, 285);
    cardText.getFill().setSolidFill(COLOR_TARGETA);
    treureVora(cardText);

    const contingutGuia = "📌 IDEES CLAU (Màxim 3 o 4 vinyetes pròpies):\n\n" +
                          "• Què és i com es produeix:\n" +
                          "  - [Explica el fenomen geològic amb les teves paraules]\n\n" +
                          "• Llocs o exemples destacats:\n" +
                          "  - [Exemple del món o de Catalunya]\n\n" +
                          "• 💡 Resposta a la Pregunta Clau d'investigació:\n" +
                          "  - [Respon la pregunta del guió de manera clara]";
    const boxContingut = slide.insertTextBox(contingutGuia, 45, 92, 330, 265);
    boxContingut.getText().getTextStyle().setFontSize(12).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

    const marcVisual = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 410, 82, 280, 200);
    marcVisual.getFill().setSolidFill("#E5E7EB");
    try {
      marcVisual.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2);
    } catch (e) {}
    marcVisual.getText().setText("🖼️ Inseriu aquí una fotografia real, dibuix o esquema geològic explicatiu").getTextStyle().setFontSize(12).setForegroundColor(COLOR_SUBTEXT);

    const cardPeu = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 410, 292, 280, 75);
    cardPeu.getFill().setSolidFill(COLOR_TARGETA);
    treureVora(cardPeu);

    const boxPeu = slide.insertTextBox("💬 Peu de foto: [Breu descripció del que es veu a la imatge]\n🌐 Font: [Vikidia / ICGC / Parcs Naturals...]", 420, 298, 260, 65);
    boxPeu.getText().getTextStyle().setFontSize(11).setItalic(true).setForegroundColor(COLOR_SUBTEXT).setFontFamily("Arial");

    slide.getNotesPage().getSpeakerNotesShape().getText().setText(
      "NOTES DE L'ORADOR/A - ALUMNE/A " + i + ":\n" +
      "1. 'El meu nom és... i us parlaré de...'\n" +
      "2. 'El procés geològic que he investigat es produeix quan...'\n" +
      "3. 'A la imatge podeu observar com...'\n" +
      "4. 'Com a conclusió a la meva pregunta clau, podem afirmar que...'"
    );
  }

  // ==========================================
  // DIAPOSITIVA 6: ALUMNE 5 (Ecosocial / Riscos)
  // ==========================================
  const slide6 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide6.getBackground().setSolidFill(COLOR_FONS);

  const banner6 = slide6.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 20, 660, 52);
  banner6.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(banner6);

  const titol6 = slide6.insertTextBox("🛡️ Impacte Humà, Riscos i Sostenibilitat Geològica", 45, 24, 450, 35);
  titol6.getText().getTextStyle().setFontSize(16).setBold(true).setForegroundColor(COLOR_ECO).setFontFamily("Montserrat");

  const badgeAutor6 = slide6.insertTextBox("👤 Alumne/a 5: [Nom]", 500, 26, 180, 30);
  badgeAutor6.getText().getTextStyle().setFontSize(12).setBold(true).setForegroundColor(COLOR_ECO).setFontFamily("Montserrat");

  const cardText6 = slide6.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 82, 360, 285);
  cardText6.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardText6);

  const contingutGuia6 = "📌 CONVIURE AMB LA TERRA VIVA:\n\n" +
                         "• Riscos per a les persones:\n" +
                         "  - [Com ens afecten els sismes, volcans, riuades o desertització]\n\n" +
                         "• Com ens protegim? (Tecnologia i Prevenció):\n" +
                         "  - [Construcció sismoresistent, alertes primerenques o simulacres]\n\n" +
                         "• Geoconservació i Recursos Responsables:\n" +
                         "  - [Parcs Naturals, Geoparcs UNESCO, geotèrmia o restauració ambiental]";
  const boxContingut6 = slide6.insertTextBox(contingutGuia6, 45, 92, 330, 265);
  boxContingut6.getText().getTextStyle().setFontSize(12).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  const marcVisual6 = slide6.insertShape(SlidesApp.ShapeType.RECTANGLE, 410, 82, 280, 200);
  marcVisual6.getFill().setSolidFill("#E5E7EB");
  try {
    marcVisual6.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2);
  } catch (e) {}
  marcVisual6.getText().setText("🖼️ Inseriu aquí una imatge de prevenció ciutadana, arquitectura sismoresistent o Geoparc protegit").getTextStyle().setFontSize(12).setForegroundColor(COLOR_SUBTEXT);

  const cardPeu6 = slide6.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 410, 292, 280, 75);
  cardPeu6.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardPeu6);

  const boxPeu6 = slide6.insertTextBox("💬 Peu de foto: [Descripció de la mesura ecosocial o de protecció]\n🌐 Font: [Protecció Civil / UNESCO / ICGC...]", 420, 298, 260, 65);
  boxPeu6.getText().getTextStyle().setFontSize(11).setItalic(true).setForegroundColor(COLOR_SUBTEXT).setFontFamily("Arial");

  slide6.getNotesPage().getSpeakerNotesShape().getText().setText(
    "NOTES DE L'ORADOR/A - ALUMNE/A 5 (Dimensió Ecosocial):\n" +
    "• 'La geologia no és només estudiar el passat, sinó aprendre a conviure amb les forces de la natura.'\n" +
    "• 'Davant d'aquest fenomen, les societats humanes han desenvolupat tecnologies com...'\n" +
    "• 'A més, tenim el deure de protegir el nostre patrimoni geològic creant Geoparcs i respectant el medi.'"
  );

  // ==========================================
  // DIAPOSITIVA 7: CONCLUSIÓ DE L'EQUIP
  // ==========================================
  const slide7 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide7.getBackground().setSolidFill(COLOR_FONS);

  const cardConclusio = slide7.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 40, 30, 640, 345);
  cardConclusio.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardConclusio);

  const t7 = slide7.insertTextBox("🧭 QUÈ HEM APRÈS DE LA NOSTRA TERRA VIVA?", 60, 48, 600, 45);
  t7.getText().getTextStyle().setFontSize(22).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

  const sub7 = slide7.insertTextBox("Síntesi col·lectiva i compromís mediambiental de tot l'equip", 60, 90, 600, 30);
  sub7.getText().getTextStyle().setFontSize(14).setItalic(true).setForegroundColor(COLOR_SECUNDARI).setFontFamily("Montserrat");

  const textConclusio = "🌟 LES 3 GRANS CONCLUSIONS DE L'EQUIP:\n\n" +
                        "1. [Primera gran idea: Com la Terra es mou, es transforma i crea paisatges increïbles]\n\n" +
                        "2. [Segona gran idea: Com la ciència geològica ens permet entendre el que no podem veure]\n\n" +
                        "3. [Tercera gran idea: Com les accions humanes poden agreujar o prevenir els riscos naturals]\n\n" +
                        "📢 EL NOSTRE MISSATGE FINAL:\n" +
                        "\"Conèixer la Terra viva és el primer pas per respectar-la i conviure en harmonia amb la natura.\"";
  const boxConclusio = slide7.insertTextBox(textConclusio, 60, 125, 600, 230);
  boxConclusio.getText().getTextStyle().setFontSize(13).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  slide7.getNotesPage().getSpeakerNotesShape().getText().setText(
    "TANCAMENT I COAVALUACIÓ (Diapositiva 7):\n" +
    "• Cada membre de l'equip diu breument una frase de resum de la seva experiència d'investigació.\n" +
    "• Llegim conjuntament el nostre missatge final.\n" +
    "• Donem les gràcies a la classe i obrim el torn de preguntes."
  );

  // Missatge final al registre d'execució
  Logger.log("✅ Presentació creada amb èxit!");
  Logger.log("🔗 Enllaç a la presentació: " + deck.getUrl());
}
