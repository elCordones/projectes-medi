/**
 * ==============================================================================
 * CLONADOR INTEGRAL DE LA SdA DE GEOGRAFIA A GOOGLE DRIVE
 * Projecte: «El Mosaic de Paisatges: Geografia de Catalunya i d'Espanya» (5è i 6è)
 * Autor: David Cordones (2026) · Llicència: AGPL v3
 * ==============================================================================
 * 
 * FINALITAT PEDAGÒGICA I ORGANITZATIVA:
 * Aquest script permet al mestre titular desar amb 1 sol clic a Google Drive
 * TOTA l'estructura documental i de recursos del projecte de Geografia,
 * garantint la continuïtat docent en cas de:
 * 1. Baixa o substitució imprevista d'un dia o setmanes (el mestre substitut
 *    troba el "LLEGEIX-ME" i sap exactament què fer).
 * 2. Canvi de centre o fi de curs (la documentació queda a la carpeta
 *    compartida del centre educatiu o de l'equip de cicle).
 * 3. Coordinació docent entre mestres paral·lels de 5è i 6è.
 * 
 * COM EXECUTAR AQUEST SCRIPT:
 * 1. Obre el navegador i entra a: https://script.new
 * 2. Esborra el codi buit i enganxa aquest codi complet.
 * 3. Posa de títol al projecte: "Clonador SdA Geografia a Drive".
 * 4. Fes clic a "Executar" (funció 'crearEstructuraProjecteGeografia').
 * 5. Accepta els permisos de Google Drive (només la primera vegada).
 * 6. En 10 segons tindràs a la teva carpeta arrel de Drive tota l'estructura llesta!
 */

function crearEstructuraProjecteGeografia() {
  const nomCarpetaArrel = "📁 [ESCOLA] Projecte Medi - Geografia (5è i 6è)";
  
  Logger.log("Iniciant la creació de l'estructura a Google Drive...");
  
  // 1. Creació de la carpeta principal
  const arrelDrive = DriveApp.getRootFolder();
  const carpetesExistents = arrelDrive.getFoldersByName(nomCarpetaArrel);
  let carpetaPrincipal;
  
  if (carpetesExistents.hasNext()) {
    carpetaPrincipal = carpetesExistents.next();
    Logger.log("S'ha trobat la carpeta existent: " + nomCarpetaArrel);
  } else {
    carpetaPrincipal = arrelDrive.createFolder(nomCarpetaArrel);
    Logger.log("S'ha creat la carpeta principal: " + nomCarpetaArrel);
  }
  
  // 2. Creació de les subcarpetes organitzatives
  const subcarpetes = [
    "01_Programacio_Oficial_SdA",
    "02_Dossiers_DUA_Alumnat",
    "03_Presentacions_Google_Slides_Equips",
    "04_Avaluacio_CoRubrics_i_Passaport",
    "05_Kit_Continuacio_i_Substituts"
  ];
  
  const mapaCarpetes = {};
  subcarpetes.forEach(nom => {
    const iterador = carpetaPrincipal.getFoldersByName(nom);
    if (iterador.hasNext()) {
      mapaCarpetes[nom] = iterador.next();
    } else {
      mapaCarpetes[nom] = carpetaPrincipal.createFolder(nom);
    }
  });
  
  // 3. Crear el Document de Guia d'Urgència per al Mestre Substitut
  crearGuiaSubstitut(mapaCarpetes["05_Kit_Continuacio_i_Substituts"], carpetaPrincipal);
  
  // 4. Crear la Plantilla de les 5 Presentacions de Google Slides
  crearPresentacionsEquips(mapaCarpetes["03_Presentacions_Google_Slides_Equips"]);
  
  // 5. Crear el document de resum curricular oficial a la carpeta 01
  crearResumCurricularDoc(mapaCarpetes["01_Programacio_Oficial_SdA"]);

  Logger.log("🎉 Procés completat amb èxit!");
  Logger.log("Enllaç a la carpeta del projecte: " + carpetaPrincipal.getUrl());
}

/**
 * Crea el document guia immediat d'1-2 pàgines per a substituts
 */
function crearGuiaSubstitut(carpeta, carpetaArrel) {
  const nomDoc = "📄 00_LLEGEIX-ME_Guia_Urgencia_Mestre_Substitut";
  const fitxersExistents = carpeta.getFilesByName(nomDoc);
  if (fitxersExistents.hasNext()) return;
  
  const doc = DocumentApp.create(nomDoc);
  const body = doc.getBody();
  
  body.appendParagraph("GUIA RÀPIDA DE SUBSTITUCIÓ I RELLEU DOCENT").setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph("Projecte de Geografia: Catalunya (5è) i Espanya (6è) · Cicle Superior Primària").setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
  
  body.appendParagraph("Benvingut/da a l'aula de Medi! Aquesta guia està pensada perquè puguis fer la classe amb total tranquil·litat si el mestre titular no hi és, sense haver de preparar res de zero.").setItalic(true);
  
  body.appendParagraph("\n1. COM ESTÀ ORGANITZADA L'AULA?").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("• L'alumnat treballa en 5 EQUIPS COOPERATIUS FIXES de 5 alumnes (Taules 1 a 5).");
  body.appendParagraph("• Cada equip investiga un eix territorial: 1. Costa, 2. Muntanya, 3. Plana, 4. Clima, 5. Rius.");
  body.appendParagraph("• Regla del 4 + 1: Els alumnes 1 a 4 investiguen geografia física. L'alumne 5 s'encarrega sempre de l'impacte ecosocial, sequera i sostenibilitat.");
  
  body.appendParagraph("\n2. ON TENEN EL MATERIAL ELS ALUMNES?").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("• Presentacions compartides: A la carpeta '03_Presentacions_Google_Slides_Equips' cada equip té la seva presentació de 7 diapositives.");
  body.appendParagraph("• Dossier de consulta: A la carpeta '02_Dossiers_DUA_Alumnat' tenen el document de consulta amb pestanyes per llegir la informació sense perdre's.");
  body.appendParagraph("• Portal web de consulta en línia: https://elcordones.github.io/projectes-medi/geografia/");
  
  body.appendParagraph("\n3. QUÈ CAL FER SEGONS LA SESSIÓ ON ESTIGUIN?").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  const taulaSessions = [
    ["Sessió", "Fase 5E", "Què han de fer els alumnes avui?"],
    ["S1", "Enganxa", "Formació d'equips, repartiment dels 5 rols i obrir la presentació a Drive."],
    ["S2", "Explora", "Llegir el dossier DUA a Google Docs i respondre la pregunta clau a la llibreta."],
    ["S3", "Explica", "Redactar 3-4 idees pròpies directament a la seva diapositiva de Google Slides."],
    ["S4", "Elabora 1", "Posar fotos/mapes amb font, redactar la conclusió i fer 2 preguntes per al concurs."],
    ["S5", "Elabora 2", "Completar el Mapa Conceptual del Territori connectant relleu, rius i clima."],
    ["S6", "Avalua 1", "Assaig oral amb cronòmetre (1 min 30 s per persona) i diana de coavaluació."],
    ["S7", "Avalua 2", "Exposicions orals davant del grup-classe i omplir el Passaport de l'Oient Actiu."],
    ["S8", "Avalua 3", "Concurs col·laboratiu Quizizz/Kahoot, coavaluació d'equip i autoavaluació."]
  ];
  
  const t = body.appendTable(taulaSessions);
  t.getRow(0).editAsText().setBold(true);
  
  body.appendParagraph("\n4. CONTACTE I TRANSFERÈNCIA DE CENTRE").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("Tots els fitxers d'aquesta carpeta formen part del patrimoni pedagògic de l'escola. Si marxes del centre o canvies de nivell, només cal que comparteixis la carpeta arrel amb l'equip directiu o el compte de cicle superior.");
  
  doc.saveAndClose();
  
  const fitxerDoc = DriveApp.getFileById(doc.getId());
  carpeta.addFile(fitxerDoc);
  carpetaArrel.addFile(fitxerDoc); // També a l'arrel per accés immediat
  DriveApp.getRootFolder().removeFile(fitxerDoc);
}

/**
 * Crea les 5 presentacions de Google Slides per als 5 equips
 */
function crearPresentacionsEquips(carpeta) {
  const equips = [
    { num: 1, nom: "Equip 1 · El Relleu de la Costa", sub: "Costa Brava/Llevant, Plana/Garraf, C. Daurada/Sud, Deltes/Ries, Gestió Ecosocial" },
    { num: 2, nom: "Equip 2 · El Relleu de Muntanya", sub: "Pirineus/Sistemes Exteriors, Prepirineus/Meseta, Cims Alts, Valls i Risc Ecosocial" },
    { num: 3, nom: "Equip 3 · El Relleu de la Plana", sub: "Depressió Central/Meseta Nord, Terres de Ponent/Meseta Sud, Conreus, Ciutats i Clima Ecosocial" },
    { num: 4, nom: "Equip 4 · Els Climes del Territori", sub: "Clima Mediterrani Litoral, Clima Continentalitzat, Clima d'Alta Muntanya, Clima Atlàntic, Canvi Climàtic" },
    { num: 5, nom: "Equip 5 · La Xarxa de Rius", sub: "Vessant Mediterrani, Vessant Cantàbric/Pirineu, Vessant Atlàntic, Conca de l'Ebre, Sequera i Embassaments" }
  ];
  
  equips.forEach(eq => {
    const titolPresentacio = "💻 Presentació " + eq.nom + " (7 Diapositives)";
    if (carpeta.getFilesByName(titolPresentacio).hasNext()) return;
    
    const deck = SlidesApp.create(titolPresentacio);
    const slides = deck.getSlides();
    const slide1 = slides[0];
    
    slide1.insertTextBox("GEOGRAFIA DE CATALUNYA I D'ESPANYA\n" + eq.nom, 50, 80, 620, 100)
      .getText().getTextStyle().setFontSize(26).setBold(true);
    slide1.insertTextBox("Cicle Superior de Primària · Curs 2026-2027\nMembres de l'equip (1 a 5):\n1. __________________  2. __________________\n3. __________________  4. __________________\n5. (Investigador/a Ecosocial): __________________", 50, 200, 620, 160)
      .getText().getTextStyle().setFontSize(14);
      
    // Diapositives 2 a 6
    for (let i = 1; i <= 5; i++) {
      const s = deck.appendSlide();
      const titol = (i < 5) ? "Subtema " + i + " · Investigació Física" : "Subtema 5 · Investigació Ecosocial i Sostenibilitat";
      s.insertTextBox(titol + "\nMembre de l'equip: ______________________", 40, 30, 640, 60)
        .getText().getTextStyle().setFontSize(20).setBold(true);
      s.insertTextBox("3-4 IDEES CLAU (Amb paraules pròpies):\n• \n• \n• \n• ", 40, 110, 320, 260)
        .getText().getTextStyle().setFontSize(13);
      s.insertTextBox("[ESPAI PER AL MAPA / FOTOGRAFIA]\n\nPeu de foto:\nFont / Web:", 380, 110, 300, 260)
        .getText().getTextStyle().setFontSize(11).setItalic(true);
    }
    
    // Diapositiva 7
    const s7 = deck.appendSlide();
    s7.insertTextBox("Diapositiva 7 · Conclusions i Compromís de l'Equip", 40, 30, 640, 60)
      .getText().getTextStyle().setFontSize(22).setBold(true);
    s7.insertTextBox("QUÈ HEM APRÈS DE LA NOSTRA GEOGRAFIA?\n• \n• \n\nCOMPROMÍS ECOSOCIAL DEL NOSTRE EQUIP (ODS 6, 13, 15):\n• ", 40, 120, 640, 250)
      .getText().getTextStyle().setFontSize(14);
      
    deck.saveAndClose();
    
    const file = DriveApp.getFileById(deck.getId());
    carpeta.addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  });
}

/**
 * Crea el document curricular a la carpeta 01
 */
function crearResumCurricularDoc(carpeta) {
  const nomDoc = "📘 Programacio_Didactica_Oficial_SdA_Geografia";
  if (carpeta.getFilesByName(nomDoc).hasNext()) return;
  
  const doc = DocumentApp.create(nomDoc);
  const body = doc.getBody();
  
  body.appendParagraph("SITUACIÓ D'APRENENTATGE: EL MOSAIC DE PAISATGES").setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph("Geografia de Catalunya i d'Espanya · Cicle Superior de Primària").setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
  body.appendParagraph("Alineada amb el Decret 175/2022 i el Decret 480/2024 de Catalunya.\n").setItalic(true);
  
  body.appendParagraph("Competències Específiques de l'Àrea: Medi C1, C2, C3, C5, C6.").setBold(true);
  body.appendParagraph("Metodologia: Model Puzle de 5 equips de 5 amb la regla del 4 + 1.");
  body.appendParagraph("Avaluació Triangular 360°: 50% Docent, 20% Coavaluació d'exposicions, 15% Coavaluació d'equip, 15% Autoavaluació + Kahoot/Quizizz cooperatiu.");
  body.appendParagraph("\nPer consultar el document complet de la programació oficial en format .docx, descarrega'l des del portal docent: https://elcordones.github.io/projectes-medi/geografia/");
  
  doc.saveAndClose();
  const file = DriveApp.getFileById(doc.getId());
  carpeta.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
}
