import type { Copy } from "../i18n/types";
import { prices, site } from "./site";

const P = site.platform;
const eur = (n: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
    .format(n)
    .replace(/\s/, "");
const foundingTrial = prices.trial * (1 - prices.foundingDiscount);

export const nl: Copy = {
  locale: "nl-NL",
  meta: {
    title: `Intelligent Software – Stap in de AI-revolutie met ${P}`,
    description: `Een AI-assistent die het herhalende computerwerk doet in de software die je al gebruikt. ${P} verbindt je bestaande programma's veilig met AI. Vaste prijzen, eerst meten, dan bouwen.`,
  },
  common: {
    example: "Voorbeeld",
    examplesCaption:
      "Dit zijn voorbeeldcijfers, gebaseerd op het verwerken van inkoopfacturen. Echte klantresultaten komen hiervoor in de plaats.",
    logoLabel: "Intelligent Software, naar boven",
  },
  nav: {
    label: "Hoofdmenu",
    platform: P,
    how: "Hoe het werkt",
    saves: "Wat het oplevert",
    examples: "Voorbeelden",
    costs: "Kosten",
    questions: "Vragen",
    cta: "Gratis kennismaking",
    ctaShort: "Contact",
    langLabel: "Taal",
  },
  hero: {
    eyebrow: "Jouw kans om in te stappen in de AI-revolutie",
    titleStart: "Laat AI",
    rolling: ["het typewerk", "de facturen", "het verzuim", "het weekrapport", "het kopieerwerk"],
    titleEnd: "doen.",
    sub: `AI kan nu niet alleen praten, maar ook zelf werk uitvoeren. Met ${P} verbinden we jouw bestaande software veilig met een AI-assistent die het herhalende computerwerk overneemt. Je team krijgt elke week uren terug, en je ziet eerst wat het oplevert.`,
    ctaPrimary: "Bereken wat het oplevert",
    ctaSecondary: `Wat is ${P}?`,
    proof: ["Werkt met je huidige software", "Vaste prijzen", "Eerst meten, dan bouwen"],
  },
  chat: {
    question: "Kun je de inkoopfacturen van deze week verwerken?",
    agent: "Jouw assistent",
    thinking: "bezig in het boekhoudprogramma…",
    reply:
      "Klaar. 37 facturen zijn ingevoerd en gecontroleerd tegen de bestellingen. 2 klopten niet, die heb ik apart gezet zodat je ze even kunt bekijken.",
    caption: "Voorbeeldgesprek",
  },
  whyNow: {
    eyebrow: "Waarom nu",
    titleStart: "De",
    titleHighlight: "AI-revolutie",
    titleEnd: "is begonnen. Dit is je moment om in te stappen.",
    intro:
      "Tot voor kort kon AI vooral teksten schrijven en vragen beantwoorden. Nu kan een AI-assistent zelf aan de slag: gegevens opzoeken, invoeren en controleren in de programma's die je al gebruikt. Dat heet agentic AI, en het verandert hoe kantoorwerk wordt gedaan.",
    points: [
      {
        icon: "01",
        title: "AI doet nu het werk zelf",
        body: "ChatGPT vertelt je hoe je een factuur boekt. Een AI-assistent leest de factuur, zoekt de bestelling op en boekt hem, terwijl jij meekijkt.",
      },
      {
        icon: "02",
        title: "Niet meer alleen voor grote bedrijven",
        body: `Grote bedrijven hebben eigen IT-teams om dit te bouwen. Met ${P} kan een middelgrote organisatie het ook, zonder eigen programmeurs en zonder nieuwe software.`,
      },
      {
        icon: "03",
        title: "Wie nu begint, loopt voor",
        body: "Elke taak die je overdraagt levert elke maand opnieuw uren op, en je team leert nu al werken met AI in plaats van het over een paar jaar in te moeten halen.",
      },
      {
        icon: "04",
        title: "Zonder gok",
        body: "Je begint met één taak, tegen een vaste prijs, en we meten wat het oplevert. Loont het niet, dan zeggen we dat voordat je investeert.",
      },
    ],
    closing: "Geen hype, wel resultaat: uren terug die je zelf kunt narekenen.",
  },
  platform: {
    eyebrow: "Het platform",
    title: `${P}: de brug tussen je software en AI.`,
    intro: `${P} (Latijn voor "van de brug") is ons platform dat je bestaande programma's veilig verbindt met een AI-assistent, ook als ze oud zijn of niet met elkaar praten. Je hoeft niets te vervangen: de assistent werkt in de software die je team al kent.`,
    flow: [
      { title: "Jouw software", body: "Boekhouding, ERP, leerlingadministratie, Excel, ook oudere programma's" },
      { title: P, body: "Laat alleen afgesproken handelingen door, vraagt goedkeuring en houdt alles bij" },
      { title: "AI-assistent", body: "Begrijpt de vraag van je team en voert de stappen uit" },
    ],
    status: "verbonden",
    features: [
      {
        icon: "⇄",
        title: "Werkt met oud en nieuw",
        body: "Via een koppeling, de database of, als het niet anders kan, via het scherm. Ook programma's zonder moderne koppelingen.",
      },
      {
        icon: "⌖",
        title: "Een slagboom, geen open deur",
        body: "De assistent kan alleen de handelingen die jij vooraf hebt goedgekeurd. Al het andere kan hij simpelweg niet.",
      },
      {
        icon: "☰",
        title: "Alles in het logboek",
        body: "Elke handeling wordt vastgelegd: wat, wanneer en waarom. Jij kunt het altijd nakijken.",
      },
      {
        icon: "⏻",
        title: "Een noodknop",
        body: "Je kunt de assistent op elk moment zelf uitzetten. Je team kan dan gewoon verder zoals vroeger.",
      },
      {
        icon: "✓",
        title: "Eerst op een testkopie",
        body: "Elke nieuwe taak wordt eerst getest op een kopie van je systeem, nooit meteen op je echte administratie.",
      },
      {
        icon: "◎",
        title: "Open standaard",
        body: `${P} is gebouwd op een open, veelgebruikte standaard. Je zit dus niet vast aan één AI-leverancier, en ook niet aan ons.`,
      },
    ],
    itNote: `Voor je IT'er: ${P} is gebouwd op het Model Context Protocol (MCP), de open standaard waarmee AI-modellen software gebruiken via afgebakende tools. Met rechten per handeling, menselijke goedkeuring voor onomkeerbare wijzigingen en een volledig auditlog. Het draait in je eigen omgeving of in een EU-regio die jij kiest.`,
  },
  problem: {
    eyebrow: "Herkenbaar?",
    title: "Je mensen zijn uren bezig met het overzetten van gegevens.",
    intro:
      "De meeste organisaties draaien op software die prima werkt, maar nooit is gemaakt om samen te werken. Dus vullen mensen de gaten met de hand.",
    points: [
      {
        title: "Alles twee keer intypen",
        body: "Informatie komt binnen per mail of op papier, en iemand typt het over in je administratiesoftware. Elke dag, met de hand.",
      },
      {
        title: "Programma's die niet met elkaar praten",
        body: "De financiële administratie, het personeelssysteem en het orderprogramma zijn allemaal eilandjes. Je medewerkers zijn de brug ertussen.",
      },
      {
        title: "Alles vervangen is geen optie",
        body: "Nieuwe software kost jaren, een fortuin en iedereen moet opnieuw leren werken. Je wilt dat het werk nú lichter wordt, met de programma's die je al hebt.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Voor / na",
    title: "Dezelfde taak, zonder het geregel.",
    intro: "Een alledaags voorbeeld: inkoopfacturen verwerken bij een groothandel.",
    beforeLabel: "Nu, met de hand",
    afterLabel: "Met de assistent",
    before: [
      "Elke factuur openen en de bedragen overtypen in het boekhoudprogramma (~4 min per stuk)",
      "De bijbehorende bestelling opzoeken in een ander programma om te controleren (~2 min)",
      "Typefouten komen pas aan het eind van de maand boven",
    ],
    after: [
      "De assistent leest de facturen en voert ze voor je in (enkele seconden per stuk)",
      "Hij controleert elke factuur automatisch tegen de bestelling",
      "Wat niet klopt, wordt apart gezet zodat een mens ernaar kijkt",
    ],
  },
  worksWith: {
    eyebrow: "Werkt met wat je al hebt",
    title: "Je programma's blijven. Het geregel verdwijnt.",
    intro:
      "Als een mens het stap voor stap op een computer kan doen, kan de assistent het meestal ook leren.",
    // Soorten software, geen merken: we beloven geen koppelingen die we nog niet hebben bewezen.
    softwareKinds: [
      "Boekhoudsoftware",
      "ERP- en ordersystemen",
      "Voorraadbeheer",
      "Personeel & salaris",
      "Planning & roosters",
      "Leerlingadministratie",
      "Excel-bestanden",
      "Oudere computerprogramma's",
      "Mailboxen",
      "Online portalen",
    ],
    tasks: [
      "Facturen invoeren",
      "Bestellingen controleren",
      "Orders overzetten",
      "Weekrapport maken",
      "Personeelsgegevens bijwerken",
      "Verzuim registreren",
      "Inkomende mail sorteren",
      "Formulieren invullen",
      "Offertes voorbereiden",
      "Aanmeldingen verwerken",
    ],
  },
  how: {
    eyebrow: "Hoe het werkt",
    title: "Vier stappen. Na elke stap beslis jij.",
    intro: "Je ziet wat het oplevert voordat je ergens aan vastzit.",
    steps: [
      {
        icon: "1",
        title: "Gratis kennismaking",
        body: "Een gesprek van een half uur. Jij vertelt welke taak de meeste tijd kost; wij zeggen eerlijk of we kunnen helpen.",
      },
      {
        icon: "2",
        title: "Quickscan (1–2 weken)",
        body: "We meten hoe lang het werk nu duurt en rekenen uit wat automatiseren oplevert, voordat je iets uitgeeft aan bouwen.",
      },
      {
        icon: "3",
        title: "Proef met één taak (8–10 weken)",
        body: "We bouwen en testen de assistent op een kopie van je systeem. Daarna werkt hij 3–4 weken mee naast je team, en meten we het resultaat.",
      },
      {
        icon: "4",
        title: "Het blijft draaien",
        body: "Werkt het, dan houden wij het in de gaten, lossen we problemen op en helpen we je met de volgende taak.",
      },
    ],
  },
  calc: {
    eyebrow: "Wat levert het jou op?",
    title: "Vul je eigen cijfers in.",
    intro:
      "Kies één taak die je team vaak doet en vul ongeveer in hoeveel tijd die kost. Onder de uitkomst staat hoe het is berekend, en als het niet de moeite waard is, zeggen we dat ook.",
    tasks: "Hoe vaak per maand?",
    minutes: "Hoeveel minuten per keer?",
    rate: "Kosten van een uur werk (€)",
    build: "Eenmalige kosten: quickscan + proef (€)",
    run: "Maandelijkse ondersteuning (€)",
    shareQuestion: "Hoeveel van het werk kan de assistent overnemen?",
    low: "Voorzichtige schatting",
    high: "Optimistische schatting",
    footnote: `Een uur werk is inclusief werkgeverslasten (grofweg salaris × 1,3). De eenmalige kosten zijn de quickscan (${eur(prices.quickscan)}) plus de proef (${eur(prices.trial)}); de maandkosten zijn de ondersteuning, inclusief AI-gebruik tot een afgesproken maximum. Alles excl. btw. De terugverdientijd telt vanaf het moment dat de assistent meedraait.`,
    hoursUnit: "uur / maand",
    hoursLabel: "terug voor je team, elke maand",
    yearLabel: "bespaard per jaar, na aftrek van de maandkosten",
    monthsUnit: "maanden",
    paybackLabel: "tot de eenmalige kosten zijn terugverdiend",
    notice:
      "Met deze cijfers duurt terugverdienen langer dan een jaar, en is het automatiseren van deze taak waarschijnlijk niet de moeite waard. Dat zouden we je ook in de kennismaking vertellen, voordat je iets uitgeeft.",
    formula:
      "besparing per maand = aantal keer per maand × minuten ÷ 60 × kosten per uur × deel dat wordt overgenomen − maandkosten",
  },
  cases: {
    eyebrow: "Voorbeelden",
    title: "Zo ziet het er in de praktijk uit.",
    intro:
      "Verzonnen maar realistische voorbeelden. Echte klantverhalen komen hiervoor in de plaats zodra onze eerste klanten live zijn.",
    items: [
      {
        placeholder: true,
        client: "Groothandel, ~150 medewerkers",
        task: "Inkoopfacturen invoeren",
        before: "Twee mensen waren het grootste deel van hun week bezig met ruim 1.000 facturen per maand intypen en controleren.",
        result: "Van zo'n 6 minuten naar een controle van seconden per factuur",
      },
      {
        placeholder: true,
        client: "Distributeur, ~120 medewerkers",
        task: "Orders uit de mail overzetten",
        before: "Bestellingen kwamen binnen als pdf en werden met de hand in het ordersysteem gezet.",
        result: "Orders staan klaar in het systeem; een medewerker keurt alleen nog goed",
      },
      {
        placeholder: true,
        client: "Middelbare school, ~1.200 leerlingen",
        task: "Nieuwe aanmeldingen verwerken",
        before: "De administratie typte elk online aanmeldformulier over in de leerlingadministratie.",
        result: "Formulieren gaan er automatisch in; medewerkers controleren alleen nog",
      },
    ],
  },
  results: {
    eyebrow: "Wat het oplevert",
    title: "Uren terug. Geld dat je kunt narekenen.",
    intro: "We laten bij elk getal zien hoe het is berekend, zodat je het zelf kunt beoordelen.",
    sourcePrefix: "Zo komen we hierop:",
    items: [
      {
        placeholder: true,
        source: "1.100 facturen per maand × 6 minuten, waarvan de helft wordt overgenomen",
        value: 55,
        suffix: " uur",
        label: "per maand terug voor je team, voor één taak",
      },
      {
        placeholder: true,
        source: `55 uur × €45 per uur, min ${eur(prices.support)} ondersteuning, × 12 maanden`,
        value: 18900,
        prefix: "€",
        suffix: "",
        label: "netto besparing per jaar",
      },
      {
        placeholder: true,
        source: `${eur(prices.quickscan + prices.trial)} eenmalig ÷ €1.575 netto besparing per maand`,
        value: 12,
        prefix: "~",
        suffix: " maanden",
        label: "tot de investering is terugverdiend",
      },
      {
        placeholder: true,
        source: "4–6 weken bouwen en testen, daarna 3–4 weken naast je team",
        value: 10,
        prefix: "≤",
        suffix: " weken",
        label: "van start van de proef tot een gemeten resultaat",
      },
    ],
  },
  safety: {
    eyebrow: "Is het veilig?",
    title: "Jij houdt de regie. Altijd.",
    intro:
      "De zorg die we het vaakst horen: “wat als hij iets doet wat niet de bedoeling is?” Zo voorkomen we dat.",
    items: [
      {
        icon: "⌖",
        title: "Hij doet alleen wat jij toestaat",
        body: "We spreken vooraf schriftelijk af welke handelingen de assistent mag doen. Al het andere kán hij simpelweg niet.",
      },
      {
        icon: "◐",
        title: "Eerst kijken, dan pas wijzigen",
        body: "Hij begint met alleen gegevens lezen. Wijzigen mag pas als jij dat goedvindt, en onomkeerbare stappen keurt altijd een mens goed.",
      },
      {
        icon: "☰",
        title: "Alles wordt vastgelegd",
        body: "Elke handeling wordt bijgehouden: wat hij deed, wanneer en waarom. Je kunt het altijd nakijken.",
      },
      {
        icon: "⏻",
        title: "Jij hebt de noodknop",
        body: "Je kunt de assistent op elk moment zelf stilzetten, zonder ons te hoeven bellen.",
      },
      {
        icon: "⌂",
        title: "Je gegevens blijven van jou",
        body: "We tekenen een verwerkersovereenkomst, werken in je eigen omgeving of in de EU, en je gegevens worden nooit gebruikt om AI te trainen.",
      },
      {
        icon: "✓",
        title: "Geen resultaat, geen risico",
        body: "Haalt de proef het afgesproken foutpercentage niet, dan herstellen wij dat eerst op onze kosten. Lukt het dan nog niet, dan kun je stoppen en krijg je de tweede termijn terug.",
      },
    ],
  },
  pricing: {
    eyebrow: "Wat het kost",
    title: "Begin klein. Ga alleen door als het loont.",
    intro:
      "Vaste prijzen per stap. Na elke stap beslis jij, op basis van echte cijfers, of je verdergaat.",
    recommended: "Gemeten resultaat",
    priceTbd: "Prijs volgt",
    plans: [
      {
        placeholder: false,
        tier: "Quickscan",
        amount: eur(prices.quickscan),
        blurb: "We zoeken uit welke taken het automatiseren waard zijn, en wat dat je oplevert.",
        features: [
          "1–2 weken, vaste prijs",
          "Gemeten aan hoe je team nu werkt",
          "Een heldere besparingsberekening per taak",
          "Een eerlijk “nee” als het niet loont",
        ],
        cta: "Start met een scan",
      },
      {
        placeholder: false,
        tier: "Proef met één taak",
        amount: eur(prices.trial),
        blurb: "Eén taak geautomatiseerd in je eigen software, met een gemeten resultaat.",
        features: [
          "8–10 weken, vaste prijs",
          "Gebouwd en getest op een kopie van je systeem",
          "3–4 weken meedraaien naast je team",
          "Een voor-en-na-rapport",
          "50% bij de start, 50% bij oplevering",
        ],
        cta: "Plan een proef",
        featured: true,
      },
      {
        placeholder: false,
        tier: "Doorlopende ondersteuning",
        amount: eur(prices.support),
        unit: "/maand",
        blurb: "Wij houden het draaiende en helpen je met de volgende taak.",
        features: [
          "Bewaking, onderhoud en reparaties",
          "AI-gebruik inbegrepen tot een afgesproken maximum",
          "Tot twee gebouwde taken in de lucht",
          "Elk kwartaal een besparingsoverzicht",
          "Minimaal 12 maanden, 3 maanden opzegtermijn",
        ],
        cta: "Neem contact op",
      },
    ],
    addon: `Een extra taak bouwen kost ${eur(prices.addon)} per taak.`,
    vatNote: "Alle prijzen zijn exclusief btw.",
    founding: {
      label: "Founding-klanten",
      title: `De eerste drie proeven met ${prices.foundingDiscount * 100}% korting`,
      body: `Wees een van onze eerste drie klanten: je proef kost ${eur(foundingTrial)} in plaats van ${eur(prices.trial)}. In ruil schrijven we samen een praktijkverhaal, mogen we je naam noemen en stel je ons voor aan twee bedrijven die je kent.`,
      cta: "Vraag naar een founding-plek",
    },
  },
  faq: {
    eyebrow: "Vragen",
    title: "Wat mensen ons meestal vragen.",
    items: [
      {
        q: `Wat is ${P} precies?`,
        a: `${P} is ons platform dat je bestaande software verbindt met een AI-assistent. Het bepaalt wat de assistent mag doen, vraagt waar nodig een mens om goedkeuring en legt alles vast. Jij merkt er weinig van: je team vraagt de assistent iets, en het werk gebeurt in de programma's die je al hebt.`,
      },
      {
        q: "Wat is agentic AI, en is dat niet gewoon een hype?",
        a: "Agentic AI is AI die niet alleen antwoord geeft, maar zelf stappen uitvoert, zoals een factuur invoeren of een bestelling controleren. Er is veel hype rond AI, daarom beginnen wij met één taak en meten we wat het oplevert. Je betaalt voor uren die je kunt narekenen, niet voor beloftes.",
      },
      {
        q: "Moeten we iets van AI weten?",
        a: "Nee. Jij vertelt welk werk te veel tijd kost; wij zorgen voor de techniek. Je medewerkers blijven werken in de programma's die ze kennen, en we geven een korte training.",
      },
      {
        q: "Moeten we onze software vervangen?",
        a: "Nee, dat is juist het idee. De assistent werkt met de programma's die je al gebruikt, ook oudere.",
      },
      {
        q: "Gaan er banen verloren?",
        a: "Dat is jouw keuze, maar in de praktijk gaat het om het saaie, herhalende deel van iemands dag. De tijd die vrijkomt gaat naar werk waar echt een mens voor nodig is, of je hoeft een vacature niet opnieuw in te vullen. In de quickscan rekenen we beide uit.",
      },
      {
        q: "Neemt de assistent beslissingen over mensen?",
        a: "Nee. We bouwen geen assistenten die beslissen over personen, zoals sollicitaties, beoordelingen of toelating. Hij doet administratief werk binnen vaste afspraken.",
      },
      {
        q: "Hoe zit het met privacy?",
        a: "De assistent ziet alleen wat hij voor de taak nodig heeft. We tekenen vooraf een verwerkersovereenkomst, gebruiken AI-diensten met verwerking in de EU en een verbod op trainen met jouw gegevens, en leggen alle afspraken schriftelijk vast.",
      },
      {
        q: "En als het niet loont?",
        a: "Dan zeggen we dat in de quickscan, voordat je geld uitgeeft aan bouwen. Niet elke taak is het automatiseren waard. De quickscan betaal je wel: dat eerlijke antwoord is precies wat je koopt.",
      },
      {
        q: "Zitten we daarna aan jullie vast?",
        a: `Nee. Wat we voor jou inrichten (de afspraken, rechten en tests) is van jou, en je krijgt een eeuwigdurende licentie om de opgeleverde software te gebruiken en door een andere partij te laten beheren. De ondersteuning loopt minimaal 12 maanden, daarna met 3 maanden opzegtermijn.`,
      },
      {
        q: "Wat moet ik onze IT'er vertellen?",
        a: `Dat ${P} MCP-servers inzet: een open standaard (Model Context Protocol) waarmee AI-assistenten bestaande software gebruiken via afgebakende handelingen, met rechten, goedkeuring en een volledig logboek. We werken graag samen met je IT-leverancier en leggen de details rechtstreeks uit.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Stap in, met een gratis kennismaking.",
    intro:
      "Vertel ons welke taak de meeste tijd opslokt. We zeggen eerlijk of we kunnen helpen en wat het ongeveer oplevert. Geen verplichtingen, geen technisch verhaal.",
    emailPrompt: "Liever mailen?",
    close: "Sluiten",
  },
  form: {
    name: "Naam",
    company: "Organisatie",
    email: "E-mailadres (werk)",
    program: "Om welk programma gaat het?",
    programPlaceholder: "bijv. ons boekhoudprogramma",
    task: "Welke taak kost te veel tijd?",
    submit: "Vraag een gratis kennismaking aan",
    note: "We reageren binnen één werkdag. De kennismaking is gratis.",
    sent: "Je mailprogramma is geopend met de gegevens ingevuld. Druk alleen nog op verzenden.",
    mailSubject: "Kennismakingsverzoek van",
  },
  footer: {
    service: "De dienst",
    more: "Meer",
    contact: "Contact",
    contactLink: "Contact",
    registration: "KvK / btw: volgt",
  },
};
