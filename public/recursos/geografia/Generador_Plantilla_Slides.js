/**
 * GENERADOR AUTOMÀTIC DE PLANTILLA DE GOOGLE SLIDES
 * Projecte de Geografia: Treball per Projectes (5è i 6è de Primària)
 * 
 * COM UTILITZAR AQUEST CODI:
 * 1. Obre el navegador i entra a: https://script.new
 * 2. Esborra qualsevol codi que hi hagi i enganxa tot aquest contingut.
 * 3. Fes clic a la icona del disquet (Desa) i després al botó "Executar" (Run).
 * 4. La primera vegada et demanarà acceptar permisos per crear fitxers a Google Drive.
 * 5. Al registre d'execució (Execution log) veuràs l'enllaç directe a la teva nova presentació!
 */

function crearPlantillaGoogleSlides() {
  // 1. Crear la presentació
  const titolPresentacio = "Plantilla Base - Projecte de Geografia (5è i 6è)";
  const deck = SlidesApp.create(titolPresentacio);
  
  // Esborrem la diapositiva en blanc per defecte
  const diapositivesInicials = deck.getSlides();
  if (diapositivesInicials.length > 0) {
    diapositivesInicials[0].remove();
  }

  // Colors de la plantilla (estètica neta i educativa)
  const COLOR_FONS = "#F8FAFC";       // Gris molt clar / blavós
  const COLOR_PRIMARI = "#1E3A8A";    // Blau marí profund
  const COLOR_SECUNDARI = "#0284C7";  // Blau cel intens
  const COLOR_TARGETA = "#FFFFFF";    // Blanc pur per a targetes
  const COLOR_TEXT = "#1E293B";       // Gris fosc pissarra
  const COLOR_SUBTEXT = "#64748B";    // Gris mitjà

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

  // Targeta central (ROUND_RECTANGLE és el nom correcte a Apps Script)
  const cardPortada = slide1.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 40, 30, 640, 345);
  cardPortada.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardPortada);

  // Títol gran
  const t1 = slide1.insertTextBox("PROJECTE DE GEOGRAFIA", 60, 50, 600, 45);
  t1.getText().getTextStyle().setFontSize(26).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

  // Subtítol del tema
  const sub1 = slide1.insertTextBox("Subtítol del Tema (Ex: El Relleu de Muntanya / La Costa / Els Rius)", 60, 95, 600, 35);
  sub1.getText().getTextStyle().setFontSize(16).setItalic(true).setForegroundColor(COLOR_SECUNDARI).setFontFamily("Montserrat");

  // Caixa d'integrants i rols
  const textMembres = "MEMBRES DE L'EQUIP I ROLS:\n" +
                      "• Alumne/a 1: [Nom] - [Subtema 1]\n" +
                      "• Alumne/a 2: [Nom] - [Subtema 2]\n" +
                      "• Alumne/a 3: [Nom] - [Subtema 3]\n" +
                      "• Alumne/a 4: [Nom] - [Subtema 4]\n" +
                      "• Alumne/a 5: [Nom] - [Subtema 5]\n\n" +
                      "Curs i grup: 5è / 6è de Primària\n" +
                      "Escola: [Nom de l'Escola]";
  const boxMembres = slide1.insertTextBox(textMembres, 60, 140, 340, 210);
  boxMembres.getText().getTextStyle().setFontSize(13).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  // Marc per a la imatge de portada
  const marcFotoPortada = slide1.insertShape(SlidesApp.ShapeType.RECTANGLE, 420, 145, 230, 180);
  marcFotoPortada.getFill().setSolidFill("#E2E8F0");
  try {
    marcFotoPortada.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2);
  } catch (e) {}
  marcFotoPortada.getText().setText("📷 Inseriu aquí una imatge general o mapa representatiu del tema").getTextStyle().setFontSize(12).setForegroundColor(COLOR_SUBTEXT);

  // Notes de l'orador Diapositiva 1
  slide1.getNotesPage().getSpeakerNotesShape().getText().setText(
    "📝 NOTES PER A L'EXPOSICIÓ (ORADOR):\n" +
    "- Saludeu a la classe i presenteu el vostre equip.\n" +
    "- Digueu quin tema investigareu i qui explicarà cada apartat."
  );

  // ==========================================
  // DIAPOSITIVES 2 A 6: SUBTEMES INDIVIDUALS (Alumnes 1 a 5)
  // ==========================================
  for (let i = 1; i <= 5; i++) {
    const slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    slide.getBackground().setSolidFill(COLOR_FONS);

    // Barra superior de títol
    const titolSubtema = slide.insertTextBox("Subtema " + i + ": [Escriu aquí el títol de l'apartat assignat]", 40, 20, 640, 35);
    titolSubtema.getText().getTextStyle().setFontSize(22).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

    const nomInvestigador = slide.insertTextBox("Investigat per: [Nom de l'Alumne/a " + i + "]", 40, 55, 640, 25);
    nomInvestigador.getText().getTextStyle().setFontSize(13).setItalic(true).setForegroundColor(COLOR_SECUNDARI).setFontFamily("Arial");

    // Targeta esquerra (Contingut i resposta clau)
    const cardText = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 40, 85, 360, 290);
    cardText.getFill().setSolidFill(COLOR_TARGETA);
    treureVora(cardText);

    const textGuio = "📌 ON SE SITUA I COM ÉS EL PAISATGE:\n" +
                     "[Escriu 1-2 frases clau amb les teves pròpies paraules]\n\n" +
                     "🔍 ELEMENTS O EXEMPLES DESTACATS:\n" +
                     "• [Exemple 1: nom de pic, poble, conreu o riu]\n" +
                     "• [Exemple 2: accident geogràfic o dada interessant]\n\n" +
                     "💡 LA MEVA RESPOSTA A LA PREGUNTA CLAU:\n" +
                     "[Respon la pregunta d'investigació del teu guió]";
    
    const boxContingut = slide.insertTextBox(textGuio, 50, 95, 340, 270);
    boxContingut.getText().getTextStyle().setFontSize(12.5).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

    // Targeta dreta (Marc per a la imatge o mapa)
    const cardImatge = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 420, 85, 260, 220);
    cardImatge.getFill().setSolidFill("#E2E8F0");
    try {
      cardImatge.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2);
    } catch (e) {}
    cardImatge.getText().setText("🗺️ Inseriu aquí una FOTO REAL o un MAPA de localització\n\n(Vés a Inserir > Imatge > Cerca al web)").getTextStyle().setFontSize(12).setForegroundColor(COLOR_SUBTEXT);

    // Peu de foto i font
    const boxPeu = slide.insertTextBox("💬 Peu de foto: [Descriu què es veu] | Font: [Web d'on l'has tret]", 420, 315, 260, 50);
    boxPeu.getText().getTextStyle().setFontSize(10.5).setItalic(true).setForegroundColor(COLOR_SUBTEXT).setFontFamily("Arial");

    // Notes de l'orador
    slide.getNotesPage().getSpeakerNotesShape().getText().setText(
      "📝 APUNTS DE L'ALUMNE/A " + i + " PER NO LLEGIR LA PANTALLA:\n" +
      "1. Hola a tothom, us explicaré...\n" +
      "2. El detall més important o curiós que he descobert és...\n" +
      "3. Com podeu veure al mapa / a la imatge..."
    );
  }

  // ==========================================
  // DIAPOSITIVA 7: CONCLUSIÓ I REFLEXIÓ ECOSOCIAL
  // ==========================================
  const slide7 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide7.getBackground().setSolidFill(COLOR_FONS);

  const t7 = slide7.insertTextBox("🌱 Conclusions i compromís de l'equip", 40, 20, 640, 35);
  t7.getText().getTextStyle().setFontSize(22).setBold(true).setForegroundColor(COLOR_PRIMARI).setFontFamily("Montserrat");

  // Targeta esquerra: Què hem après
  const cardApres = slide7.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 40, 70, 310, 240);
  cardApres.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardApres);

  const textApres = "💡 QUÈ HEM APRÈS COM A EQUIP?\n\n" +
                    "• La conclusió o curiositat que més ens ha sorprès de la nostra recerca.\n\n" +
                    "• Per què aquest territori o element és fonamental per a la vida de les persones.";
  const boxApres = slide7.insertTextBox(textApres, 50, 80, 290, 220);
  boxApres.getText().getTextStyle().setFontSize(12.5).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  // Targeta dreta: Compromís ecosocial
  const cardSostenible = slide7.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 370, 70, 310, 240);
  cardSostenible.getFill().setSolidFill(COLOR_TARGETA);
  treureVora(cardSostenible);

  const textSostenible = "🛡️ EL NOSTRE COMPROMÍS ECOSOCIAL:\n\n" +
                         "• Proposta 1: Què podem fer a la nostra vida diària per respectar i cuidar aquest entorn?\n\n" +
                         "• Proposta 2: Com podem reduir residus o estalviar aigua a l'escola i a casa?";
  const boxSostenible = slide7.insertTextBox(textSostenible, 380, 80, 290, 220);
  boxSostenible.getText().getTextStyle().setFontSize(12.5).setForegroundColor(COLOR_TEXT).setFontFamily("Arial");

  // Barra inferior de bibliografia
  const boxFonts = slide7.insertTextBox("📚 Fonts consultades per l'equip: Vikidia en català | ICGC / IGN Educar | Edu365 | Meteocat / AEMET", 40, 325, 640, 35);
  boxFonts.getText().getTextStyle().setFontSize(11).setItalic(true).setForegroundColor(COLOR_SUBTEXT).setFontFamily("Arial");

  // Notes de l'orador Diapositiva 7
  slide7.getNotesPage().getSpeakerNotesShape().getText().setText(
    "📝 NOTES DE COMIAT DE L'EQUIP:\n" +
    "- Tots els membres de l'equip tanquen l'exposició explicant la seva proposta de sostenibilitat.\n" +
    "- Doneu les gràcies a la classe i obriu torn de preguntes."
  );

  // Enllaç final
  Logger.log("✅ Presentació creada amb èxit!");
  Logger.log("🔗 Enllaç per obrir-la a Google Drive: " + deck.getUrl());
}
