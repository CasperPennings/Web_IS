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
    title: `Intelligent Software – Laat AI je computerwerk doen, met ${P}`,
    description: `Een AI-assistent die het herhalende computerwerk overneemt, in de software die je al gebruikt. ${P} koppelt je bestaande programma's veilig aan AI. Vaste prijzen, en eerst meten wat het oplevert.`,
  },
  common: {
    example: "Voorbeeld",
    examplesCaption:
      "Voorbeeldcijfers, gebaseerd op het verwerken van inkoopfacturen. Zodra we echte klantresultaten hebben, vervangen die deze cijfers.",
    logoLabel: "Intelligent Software – terug naar boven",
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
    eyebrow: "Dit is je kans: doe mee met de AI-revolutie",
    titleStart: "Laat AI",
    rolling: ["het typewerk", "de facturen", "de orderinvoer", "het controlewerk", "het saaie werk"],
    titleEnd: "doen.",
    sub: `AI kan nu meer dan praten: het kan zelf werk uitvoeren. Met ${P} koppelen we je bestaande software veilig aan een AI-assistent die het herhalende computerwerk overneemt. Zo is je team elke week uren minder kwijt aan overtypen. En voordat je investeert, weet je precies wat het oplevert.`,
    ctaPrimary: "Bereken wat het oplevert",
    ctaSecondary: `Wat is ${P}?`,
    proof: ["Werkt met je huidige software", "Vaste prijzen", "Eerst meten, dan bouwen"],
  },
  chat: {
    question: "Kun je de inkoopfacturen van deze week verwerken?",
    agent: "Jouw assistent",
    thinking: "bezig in het boekhoudprogramma…",
    reply:
      "Klaar. Ik heb 37 facturen ingevoerd en vergeleken met de bestellingen. Twee klopten niet; die heb ik apart gezet, zodat je ze even kunt bekijken.",
    caption: "Voorbeeldgesprek",
  },
  whyNow: {
    eyebrow: "Waarom nu",
    titleStart: "De",
    titleHighlight: "AI-revolutie",
    titleEnd: "is begonnen. Dit is je moment om mee te doen.",
    intro:
      "Tot voor kort kon AI vooral teksten schrijven en vragen beantwoorden. Nu kan een AI-assistent zelf aan de slag: gegevens opzoeken, invoeren en controleren in de programma's die je al gebruikt. Dat heet agentic AI: AI die zelf handelt. En dat verandert kantoorwerk ingrijpend.",
    points: [
      {
        icon: "01",
        title: "AI doet het werk nu zelf",
        body: "ChatGPT vertelt je hoe je een factuur boekt. Onze assistent leest de factuur, zoekt de bestelling op en boekt hem, terwijl jij meekijkt.",
      },
      {
        icon: "02",
        title: "Niet meer alleen voor grote bedrijven",
        body: `Grote bedrijven laten dit bouwen door hun eigen IT-afdeling. Met ${P} kan een middelgrote organisatie dat ook, zonder eigen programmeurs en zonder nieuwe software.`,
      },
      {
        icon: "03",
        title: "Wie nu begint, loopt voor",
        body: "Elke taak die je overdraagt, scheelt maand na maand weer uren. En je team leert nu al met AI werken, in plaats van over een paar jaar een achterstand te moeten inhalen.",
      },
      {
        icon: "04",
        title: "Geen gok",
        body: "Je begint met één taak, tegen een vaste prijs, en we meten wat het oplevert. Loont het niet, dan zeggen we dat voordat je investeert.",
      },
    ],
    closing: "Geen hype, maar resultaat: tijdwinst die je zelf kunt narekenen.",
  },
  platform: {
    eyebrow: "Het platform",
    title: `${P}: de brug tussen je software en AI.`,
    intro: `${P} (Latijn: ‘van de brug’) is ons platform dat je bestaande programma's veilig koppelt aan een AI-assistent, ook als ze oud zijn of niet met elkaar praten. Je hoeft niets te vervangen: de assistent werkt in de software die je team al kent.`,
    flow: [
      { title: "Jouw software", body: "Boekhouding, ordersysteem (ERP), leerlingadministratie, Excel en oudere programma's" },
      { title: P, body: "Laat alleen afgesproken handelingen door, vraagt waar nodig om goedkeuring en houdt alles bij" },
      { title: "AI-assistent", body: "Begrijpt de vraag van je team en voert de stappen uit" },
    ],
    status: "verbonden",
    features: [
      {
        icon: "swap",
        title: "Werkt met oud en nieuw",
        body: "Hij werkt via een koppeling, rechtstreeks in de database of, als het niet anders kan, via het scherm, net als een medewerker. Dus ook met oudere programma's.",
      },
      {
        icon: "grow",
        title: "Groeit met je mee",
        body: "Begin met één taak. Werkt die, dan voeg je de volgende toe, zonder opnieuw te beginnen.",
      },
      {
        icon: "test",
        title: "Eerst op een testkopie",
        body: "Elke nieuwe taak testen we eerst op een kopie van je systeem, nooit meteen op je echte administratie.",
      },
      {
        icon: "blocks",
        title: "Herbruikbare bouwstenen",
        body: "Elke koppeling die we bouwen, hergebruiken we. Zo gaat elke volgende taak sneller en wordt hij betrouwbaarder.",
      },
      {
        icon: "layers",
        title: "Niet afhankelijk van één AI",
        body: `${P} werkt met AI-modellen van meerdere aanbieders. Wordt er één duurder of slechter, dan stappen we over.`,
      },
      {
        icon: "open",
        title: "Open standaard",
        body: `${P} is gebouwd op een open, veelgebruikte standaard. Je zit dus ook niet vast aan ons.`,
      },
    ],
    itNote: `Voor je IT'er: ${P} is gebouwd op het Model Context Protocol (MCP), de open standaard waarmee AI-modellen software gebruiken via afgebakende tools, met rechten per handeling, menselijke goedkeuring voor onomkeerbare wijzigingen en een volledig auditlog. Het draait in je eigen omgeving of in een EU-regio naar keuze.`,
  },
  problem: {
    eyebrow: "Herkenbaar?",
    title: "Je medewerkers zijn uren kwijt aan het overtypen van gegevens.",
    intro:
      "De meeste organisaties draaien op software die prima werkt, maar nooit is gemaakt om samen te werken. Wat de programma's niet doen, doen je medewerkers met de hand.",
    points: [
      {
        title: "Alles twee keer intypen",
        body: "Informatie komt binnen per mail of op papier, en iemand typt die over in je administratie. Elke dag, met de hand.",
      },
      {
        title: "Programma's die niet met elkaar praten",
        body: "De financiële administratie, het personeelssysteem en het orderprogramma zijn losse eilandjes. Je medewerkers zijn de brug ertussen.",
      },
      {
        title: "Alles vervangen is geen optie",
        body: "Nieuwe software kost jaren en een fortuin, en iedereen moet opnieuw leren werken. Je wilt dat het werk nú lichter wordt, met de programma's die je al hebt.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Voor en na",
    title: "Dezelfde taak, zonder het handwerk.",
    intro: "Een alledaags voorbeeld: inkoopfacturen verwerken bij een groothandel.",
    beforeLabel: "Nu, met de hand",
    afterLabel: "Met de assistent",
    before: [
      "Elke factuur openen en de bedragen overtypen in het boekhoudprogramma (~4 min per stuk)",
      "De bijbehorende bestelling opzoeken in een ander programma om te controleren (~2 min per stuk)",
      "Typefouten komen pas aan het eind van de maand aan het licht",
    ],
    after: [
      "De assistent leest de facturen en voert ze voor je in (enkele seconden per stuk)",
      "Hij vergelijkt elke factuur automatisch met de bestelling",
      "Wat niet klopt, wordt apart gezet, zodat een medewerker ernaar kan kijken",
    ],
  },
  worksWith: {
    eyebrow: "Werkt met wat je al hebt",
    title: "Je programma's blijven. Het geregel verdwijnt.",
    intro:
      "Kan een medewerker een taak stap voor stap op de computer uitvoeren, dan kan de assistent die meestal ook leren.",
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
      "Weekrapporten maken",
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
        body: "We bouwen en testen de assistent op een kopie van je systeem. Daarna draait hij 3 à 4 weken mee met je team, en meten we het resultaat.",
      },
      {
        icon: "4",
        title: "Het blijft draaien",
        body: "Werkt het, dan houden wij de assistent in de gaten, lossen we storingen op en helpen we je met de volgende taak.",
      },
    ],
  },
  calc: {
    eyebrow: "Wat levert het jou op?",
    title: "Vul je eigen cijfers in.",
    intro:
      "Kies één taak die je team vaak doet en schat hoeveel tijd die kost. Onder de uitkomst zie je hoe we rekenen. Is het niet de moeite waard, dan zeggen we dat ook.",
    tasks: "Hoe vaak per maand?",
    minutes: "Hoeveel minuten per keer?",
    rate: "Kosten van een uur werk (€)",
    build: "Eenmalige kosten: quickscan + proef (€)",
    run: "Maandelijkse ondersteuning (€)",
    shareQuestion: "Hoeveel van het werk kan de assistent overnemen?",
    low: "Voorzichtige schatting",
    high: "Optimistische schatting",
    footnote: `Een uur werk is inclusief werkgeverslasten (grofweg salaris × 1,3). De eenmalige kosten zijn de quickscan (${eur(prices.quickscan)}) plus de proef (${eur(prices.trial)}). De maandkosten zijn die van de ondersteuning, inclusief AI-gebruik tot een afgesproken maximum. Alle bedragen zijn exclusief btw. De terugverdientijd telt vanaf het moment dat de assistent meedraait.`,
    hoursUnit: "uur per maand",
    hoursLabel: "tijdwinst voor je team",
    yearLabel: "bespaard per jaar, na aftrek van de maandkosten",
    monthsUnit: "maanden",
    paybackLabel: "tot de eenmalige kosten zijn terugverdiend",
    notice:
      "Met deze cijfers verdien je de kosten pas na meer dan een jaar terug. Dan is het waarschijnlijk niet de moeite waard om deze taak te automatiseren. Dat vertellen we je ook in de kennismaking, voordat je iets uitgeeft.",
    formula:
      "besparing per maand = aantal keer per maand × minuten per keer ÷ 60 × kosten per uur × deel dat wordt overgenomen − maandkosten",
  },
  cases: {
    eyebrow: "Voorbeelden",
    title: "Zo ziet het er in de praktijk uit.",
    intro:
      "Fictieve maar realistische voorbeelden. Zodra onze eerste klanten ermee werken, maken deze plaats voor echte praktijkverhalen.",
    items: [
      {
        placeholder: true,
        client: "Groothandel, ~150 medewerkers",
        task: "Inkoopfacturen invoeren",
        before: "Twee mensen waren het grootste deel van hun week bezig met het intypen en controleren van ruim 1.000 facturen per maand.",
        result: "Van zo'n 6 minuten per factuur naar een controle van enkele seconden",
      },
      {
        placeholder: true,
        client: "Distributeur, ~120 medewerkers",
        task: "Orders uit de mail overzetten",
        before: "Bestellingen kwamen binnen als pdf en werden met de hand in het ordersysteem ingevoerd.",
        result: "Orders staan klaar in het systeem; een medewerker keurt alleen nog goed",
      },
      {
        placeholder: true,
        client: "Middelbare school, ~1.200 leerlingen",
        task: "Nieuwe aanmeldingen verwerken",
        before: "De administratie typte elk online aanmeldformulier over in de leerlingadministratie.",
        result: "Aanmeldingen komen automatisch in de leerlingadministratie; medewerkers controleren alleen nog",
      },
    ],
  },
  results: {
    eyebrow: "Wat het oplevert",
    title: "Meer tijd. Een besparing die je zelf kunt narekenen.",
    intro: "We laten bij elk getal zien hoe het is berekend, zodat je het zelf kunt beoordelen.",
    sourcePrefix: "Zo rekenen we:",
    items: [
      {
        placeholder: true,
        source: "1.100 facturen per maand × 6 minuten, waarvan de helft wordt overgenomen",
        value: 55,
        suffix: " uur",
        label: "per maand tijdwinst voor je team, met één taak",
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
        label: "tot de eenmalige kosten zijn terugverdiend",
      },
      {
        placeholder: true,
        source: "4–6 weken bouwen en testen, daarna 3–4 weken naast je team",
        value: 10,
        prefix: "≤",
        suffix: " weken",
        label: "van de start van de proef tot een gemeten resultaat",
      },
    ],
  },
  safety: {
    eyebrow: "Is het veilig?",
    title: "Jij houdt de regie. Altijd.",
    intro:
      "De zorg die we het vaakst horen: ‘Wat als de assistent iets doet wat niet de bedoeling is?’ Zo voorkomen we dat.",
    items: [
      {
        icon: "filter",
        title: "Hij doet alleen wat jij toestaat",
        body: "We spreken vooraf schriftelijk af welke handelingen de assistent mag doen. Al het andere kán hij simpelweg niet.",
      },
      {
        icon: "eye",
        title: "Eerst kijken, dan pas wijzigen",
        body: "In het begin leest hij alleen gegevens. Wijzigen mag pas als jij dat goedvindt, en onomkeerbare stappen keurt altijd een mens goed.",
      },
      {
        icon: "log",
        title: "Alles wordt vastgelegd",
        body: "Elke handeling wordt bijgehouden: wat hij deed, wanneer en waarom. Je kunt het altijd nakijken.",
      },
      {
        icon: "power",
        title: "Jij hebt de noodknop",
        body: "Je kunt de assistent op elk moment zelf stilzetten, zonder ons te hoeven bellen.",
      },
      {
        icon: "lock",
        title: "Je gegevens blijven van jou",
        body: "We tekenen een verwerkersovereenkomst, werken op je eigen systemen of in een Europees datacenter, en je gegevens worden nooit gebruikt om AI te trainen.",
      },
      {
        icon: "guarantee",
        title: "Geen resultaat, geen risico",
        body: "Haalt de proef het afgesproken foutpercentage niet, dan verbeteren wij de assistent eerst op onze kosten. Lukt het dan nog niet, dan kun je stoppen en krijg je de tweede termijn terug.",
      },
    ],
  },
  pricing: {
    eyebrow: "Wat het kost",
    title: "Begin klein. Ga alleen door als het loont.",
    intro:
      "Vaste prijzen per stap. Na elke stap beslis jij, op basis van echte cijfers, of je verdergaat.",
    recommended: "Het bewijs",
    priceTbd: "Prijs volgt",
    plans: [
      {
        placeholder: false,
        tier: "Quickscan",
        amount: eur(prices.quickscan),
        blurb: "We zoeken uit welke taken het automatiseren waard zijn, en wat dat je oplevert.",
        features: [
          "1–2 weken, vaste prijs",
          "Gebaseerd op hoe je team nu werkt",
          "Een heldere besparingsberekening per taak",
          "Een eerlijk ‘nee’ als het niet loont",
        ],
        cta: "Start met de quickscan",
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
          "Een rapport met de situatie vóór en na",
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
          "Bewaking, onderhoud en het oplossen van storingen",
          "AI-gebruik inbegrepen tot een afgesproken maximum",
          "Beheer van maximaal twee taken",
          "Elk kwartaal een besparingsoverzicht",
          "Looptijd minimaal 12 maanden, daarna 3 maanden opzegtermijn",
        ],
        cta: "Neem contact op",
      },
    ],
    addon: `Elke extra taak bouwen we voor ${eur(prices.addon)}.`,
    vatNote: "Alle prijzen zijn exclusief btw.",
    founding: {
      label: "Eerste klanten",
      title: `De eerste drie proeven met ${prices.foundingDiscount * 100}% korting`,
      body: `Word een van onze eerste drie klanten: je proef kost ${eur(foundingTrial)} in plaats van ${eur(prices.trial)}. Daar vragen we drie dingen voor terug: we schrijven samen een praktijkverhaal, we mogen je naam noemen en je stelt ons voor aan twee bedrijven uit je netwerk.`,
      cta: "Vraag naar een van de drie plekken",
    },
  },
  faq: {
    eyebrow: "Vragen",
    title: "Wat mensen ons het vaakst vragen.",
    items: [
      {
        q: `Wat is ${P} precies?`,
        a: `${P} is ons platform dat je bestaande software koppelt aan een AI-assistent. Het bepaalt wat de assistent mag doen, vraagt waar nodig een mens om goedkeuring en legt alles vast. Je merkt er weinig van: je team vraagt de assistent iets, en het werk gebeurt in de programma's die je al hebt.`,
      },
      {
        q: "Wat is agentic AI, en is dat niet gewoon een hype?",
        a: "Agentic AI is AI die niet alleen antwoord geeft, maar zelf stappen uitvoert, zoals een factuur invoeren of een bestelling controleren. Er is veel hype rond AI. Daarom beginnen wij met één taak en meten we wat het oplevert. Je betaalt voor tijdwinst die je kunt narekenen, niet voor beloftes.",
      },
      {
        q: "Moeten we iets van AI weten?",
        a: "Nee. Jij vertelt welk werk te veel tijd kost; wij zorgen voor de techniek. Je medewerkers blijven werken in de programma's die ze kennen, en we geven een korte training.",
      },
      {
        q: "Moeten we onze software vervangen?",
        a: "Nee, en dat is juist de bedoeling. De assistent werkt met de programma's die je al gebruikt, ook oudere.",
      },
      {
        q: "Gaan er banen verloren?",
        a: "Dat bepaal jij. In de praktijk neemt de assistent het saaie, herhalende deel van iemands dag over. De vrijgekomen tijd gaat naar werk waar echt een mens voor nodig is, of je hoeft een vacature niet opnieuw in te vullen. In de quickscan rekenen we beide scenario's door.",
      },
      {
        q: "Neemt de assistent beslissingen over mensen?",
        a: "Nee. We bouwen geen assistenten die over mensen beslissen, bijvoorbeeld bij sollicitaties, beoordelingen of toelating. Hij doet administratief werk binnen vaste afspraken.",
      },
      {
        q: "Hoe zit het met privacy?",
        a: "De assistent ziet alleen wat hij voor de taak nodig heeft. We tekenen vooraf een verwerkersovereenkomst, werken alleen met AI-diensten die je gegevens in de EU verwerken en er nooit AI mee trainen, en leggen alle afspraken schriftelijk vast.",
      },
      {
        q: "En als het niet loont?",
        a: "Dan zeggen we dat in de quickscan, voordat je geld uitgeeft aan bouwen. Niet elke taak is het automatiseren waard. De quickscan betaal je wel: dat eerlijke antwoord is precies wat je koopt.",
      },
      {
        q: "Zitten we daarna aan jullie vast?",
        a: `Nee. Wat we voor je inrichten (de afspraken, rechten en tests) is van jou, en je krijgt een eeuwigdurende licentie om de opgeleverde software te gebruiken en door een andere partij te laten beheren. De ondersteuning loopt minimaal 12 maanden, daarna met 3 maanden opzegtermijn.`,
      },
      {
        q: "Wat moet ik onze IT'er vertellen?",
        a: `Dat ${P} werkt met het Model Context Protocol (MCP): een open standaard waarmee AI-assistenten bestaande software gebruiken via afgebakende handelingen, met rechten, goedkeuring en een volledig logboek. We werken graag samen met je IT-leverancier en lichten de details zelf toe.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Begin met een gratis kennismaking.",
    intro:
      "Vertel ons welke taak de meeste tijd opslokt. We zeggen eerlijk of we kunnen helpen en wat het ongeveer oplevert. Geen verplichtingen, geen technisch verhaal.",
    emailPrompt: "Liever mailen?",
    close: "Sluiten",
  },
  form: {
    name: "Naam",
    company: "Organisatie",
    email: "Zakelijk e-mailadres",
    program: "Om welk programma gaat het?",
    programPlaceholder: "bijv. ons boekhoudprogramma",
    task: "Welke taak kost te veel tijd?",
    submit: "Vraag een gratis kennismaking aan",
    note: "We reageren binnen één werkdag. De kennismaking is gratis.",
    sent: "Je mailprogramma is geopend en je gegevens zijn al ingevuld. Klik alleen nog op Verzenden.",
    mailSubject: "Aanvraag kennismaking –",
  },
  footer: {
    service: "De dienst",
    more: "Meer",
    contact: "Contact",
    contactLink: "Contact",
    registration: "KvK- en btw-nummer: volgen",
  },
};
