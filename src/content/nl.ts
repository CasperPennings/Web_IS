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
    title: `Intelligent Software – Laat AI uw computerwerk overnemen, met ${P}`,
    description: `Een AI-assistent die het herhalende computerwerk overneemt, in de software die u al gebruikt. ${P} koppelt uw bestaande programma's veilig aan AI. Vaste prijzen, en vooraf inzicht in wat het oplevert.`,
  },
  common: {
    example: "Voorbeeld",
    examplesCaption:
      "Voorbeeldcijfers, gebaseerd op het verwerken van inkoopfacturen. Zodra wij echte klantresultaten hebben, vervangen die deze cijfers.",
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
    cta: "Plan een kennismaking",
    ctaShort: "Contact",
    langLabel: "Taal",
  },
  hero: {
    eyebrow: "De volgende stap in AI, voor uw organisatie",
    titleStart: "Laat AI",
    rolling: ["het typewerk", "de facturen", "de orderinvoer", "het controlewerk", "het routinewerk"],
    titleEnd: "overnemen.",
    sub: `AI kan inmiddels zelfstandig taken uitvoeren in bestaande software. Met ${P} koppelen wij uw systemen veilig aan een AI-assistent die herhalend computerwerk overneemt. Uw medewerkers krijgen tijd voor werk dat ertoe doet, en u weet vooraf wat het oplevert.`,
    ctaPrimary: "Bereken wat het oplevert",
    ctaSecondary: `Wat is ${P}?`,
    proof: ["Werkt met uw huidige software", "Vaste prijzen", "Eerst meten, dan bouwen"],
  },
  chat: {
    question: "Kun je de inkoopfacturen van deze week verwerken?",
    agent: "Uw assistent",
    thinking: "bezig in het boekhoudprogramma…",
    reply:
      "Klaar. Ik heb 37 facturen ingevoerd en vergeleken met de bestellingen. Twee klopten niet; die heb ik apart gezet, zodat u ze kunt bekijken.",
    caption: "Voorbeeldgesprek",
  },
  whyNow: {
    eyebrow: "Waarom nu",
    titleStart: "De",
    titleHighlight: "AI-revolutie",
    titleEnd: "is begonnen. Dit is het moment om mee te doen.",
    intro:
      "Tot voor kort kon AI vooral teksten schrijven en vragen beantwoorden. Nu kan een AI-assistent zelf aan de slag: gegevens opzoeken, invoeren en controleren in de programma's die u al gebruikt. Dat heet agentic AI: AI die zelf handelt. En dat verandert kantoorwerk ingrijpend.",
    points: [
      {
        icon: "01",
        title: "AI doet het werk nu zelf",
        body: "ChatGPT legt uit hoe u een factuur boekt. Onze assistent leest de factuur, zoekt de bestelling op en boekt hem, terwijl u meekijkt.",
      },
      {
        icon: "02",
        title: "Niet meer alleen voor grote bedrijven",
        body: `Grote bedrijven laten dit bouwen door hun eigen IT-afdeling. Met ${P} kan een middelgrote organisatie dat ook, zonder eigen programmeurs en zonder nieuwe software.`,
      },
      {
        icon: "03",
        title: "Wie nu begint, loopt voor",
        body: "Elke taak die u overdraagt, scheelt maand na maand weer uren. En uw team leert nu al met AI werken, in plaats van over een paar jaar een achterstand te moeten inhalen.",
      },
      {
        icon: "04",
        title: "Geen gok",
        body: "U begint met één taak, tegen een vaste prijs, en wij meten wat het oplevert. Loont het niet, dan zeggen wij dat voordat u investeert.",
      },
    ],
    closing: "Geen hype, maar resultaat: tijdwinst die u zelf kunt narekenen.",
  },
  platform: {
    eyebrow: "Het platform",
    title: `${P}: de brug tussen uw software en AI.`,
    intro: `${P} (Latijn: ‘van de brug’) is ons platform dat uw bestaande programma's veilig koppelt aan een AI-assistent, ook als ze oud zijn of niet met elkaar praten. U hoeft niets te vervangen: de assistent werkt in de software die uw team al kent.`,
    flow: [
      { title: "Uw software", body: "Boekhouding, ordersysteem (ERP), leerlingadministratie, Excel en oudere programma's" },
      { title: P, body: "Laat alleen afgesproken handelingen door, vraagt waar nodig om goedkeuring en houdt alles bij" },
      { title: "AI-assistent", body: "Begrijpt de vraag van uw team en voert de stappen uit" },
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
        title: "Groeit met u mee",
        body: "U begint met één taak. Werkt die, dan voegt u de volgende toe, zonder opnieuw te beginnen.",
      },
      {
        icon: "test",
        title: "Eerst op een testkopie",
        body: "Elke nieuwe taak testen wij eerst op een kopie van uw systeem, nooit meteen op uw echte administratie.",
      },
      {
        icon: "blocks",
        title: "Herbruikbare bouwstenen",
        body: "Elke koppeling die wij bouwen, hergebruiken wij. Zo gaat elke volgende taak sneller en wordt hij betrouwbaarder.",
      },
      {
        icon: "layers",
        title: "Niet afhankelijk van één AI",
        body: `${P} werkt met AI-modellen van meerdere aanbieders. Wordt er één duurder of slechter, dan stappen wij over.`,
      },
      {
        icon: "open",
        title: "Open standaard",
        body: `${P} is gebouwd op een open, veelgebruikte standaard. U zit dus ook niet aan ons vast.`,
      },
    ],
    itNote: `Voor uw IT-afdeling: ${P} is gebouwd op het Model Context Protocol (MCP), de open standaard waarmee AI-modellen software gebruiken via afgebakende tools, met rechten per handeling, menselijke goedkeuring voor onomkeerbare wijzigingen en een volledig auditlog. Het draait in uw eigen omgeving of in een EU-regio naar keuze.`,
  },
  problem: {
    eyebrow: "Herkenbaar?",
    title: "Uw medewerkers zijn uren kwijt aan het overtypen van gegevens.",
    intro:
      "De meeste organisaties draaien op software die prima werkt, maar nooit is gemaakt om samen te werken. Wat de programma's niet doen, doen uw medewerkers met de hand.",
    points: [
      {
        title: "Alles twee keer intypen",
        body: "Informatie komt binnen per mail of op papier, en iemand typt die over in uw administratie. Elke dag, met de hand.",
      },
      {
        title: "Programma's die niet met elkaar praten",
        body: "De financiële administratie, het personeelssysteem en het orderprogramma zijn losse eilandjes. Uw medewerkers zijn de brug ertussen.",
      },
      {
        title: "Alles vervangen is geen optie",
        body: "Nieuwe software kost jaren en een fortuin, en iedereen moet opnieuw leren werken. U wilt dat het werk nú lichter wordt, met de programma's die u al hebt.",
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
      "De assistent leest de facturen en voert ze in (enkele seconden per stuk)",
      "Hij vergelijkt elke factuur automatisch met de bestelling",
      "Wat niet klopt, wordt apart gezet, zodat een medewerker ernaar kan kijken",
    ],
  },
  worksWith: {
    eyebrow: "Werkt met wat u al hebt",
    title: "Uw programma's blijven. Het handwerk verdwijnt.",
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
    title: "Vier stappen. Na elke stap beslist u.",
    intro: "U ziet wat het oplevert voordat u zich ergens aan verbindt.",
    steps: [
      {
        icon: "1",
        title: "Kennismakingsgesprek",
        body: "Een vrijblijvend gesprek van een half uur. U vertelt welke taak de meeste tijd kost; wij zeggen eerlijk of wij kunnen helpen.",
      },
      {
        icon: "2",
        title: "Quickscan (1–2 weken)",
        body: "Wij meten de volumes in uw systemen en een medewerker laat zelf zien hoe de taak gaat. Daarmee berekenen wij wat automatiseren oplevert, voordat u iets uitgeeft aan bouwen.",
      },
      {
        icon: "3",
        title: "Proef met één taak (8–10 weken)",
        body: "Wij bouwen en testen de assistent op een kopie van uw systeem. Daarna draait hij 3 à 4 weken mee met uw team, en meten wij het resultaat.",
      },
      {
        icon: "4",
        title: "Het blijft draaien",
        body: "Werkt het, dan bewaken wij de assistent, lossen wij storingen op en helpen wij u met de volgende taak.",
      },
    ],
  },
  workday: {
    eyebrow: "De quickscan",
    title: "Wij meten het werk, niet uw medewerkers.",
    intro: `Medewerkers weten zelf vaak niet meer hoeveel tijd routinewerk kost; het is gewoonte geworden. ${P} Scan brengt dat in kaart zonder iemand te volgen: wij kijken naar de cijfers in uw systemen en laten de medewerker zelf zien hoe een taak gaat.`,
    steps: [
      {
        icon: "analyze",
        title: "1. Meten in uw systemen",
        body: "Uw boekhouding en ordersysteem houden zelf bij hoeveel facturen en orders er binnenkomen en hoe lang ze blijven liggen. Daaruit halen wij de volumes, zonder iemand op te nemen.",
      },
      {
        icon: "record",
        title: "2. De medewerker doet het voor",
        body: "Een medewerker neemt zelf twee of drie keer een taak op, start en stopt de opname zelf en gebruikt waar mogelijk testgegevens. Zo zien wij precies welke stappen de taak heeft.",
      },
      {
        icon: "design",
        title: "3. Ontwerpen",
        body: "Voor de taken die het meeste opleveren ontwerpen wij een automatisering, met een besparingsberekening. U kiest welke taak als eerste wordt gebouwd.",
      },
    ],
    privacyTitle: "Zorgvuldig met uw medewerkers en hun gegevens",
    privacy: [
      "Geen opname van een hele werkdag: de medewerker bepaalt zelf wat wordt vastgelegd",
      "Uitkomsten per taak, nooit per persoon, en de medewerker ziet ze als eerste",
      "Bedoeld om werk te verbeteren, nooit om medewerkers te beoordelen",
      "Optioneel en alleen na instemming: een paar dagen bijhouden welke programma's openstaan, zonder schermbeelden of toetsaanslagen",
      "Alles wordt in de EU verwerkt en na afloop van de quickscan verwijderd",
    ],
  },
  calc: {
    eyebrow: "Wat levert het u op?",
    title: "Reken het zelf uit.",
    intro:
      "Kies één taak die uw team vaak uitvoert en schat hoeveel tijd die kost. Onder de uitkomst ziet u hoe wij rekenen. Is het niet de moeite waard, dan zeggen wij dat ook.",
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
    hoursLabel: "tijdwinst voor uw team",
    yearLabel: "bespaard per jaar, na aftrek van de maandkosten",
    monthsUnit: "maanden",
    paybackLabel: "tot de eenmalige kosten zijn terugverdiend",
    notice:
      "Met deze cijfers verdient u de kosten pas na meer dan een jaar terug. Dan is het waarschijnlijk niet de moeite waard om deze taak te automatiseren. Dat vertellen wij u ook in het kennismakingsgesprek, voordat u iets uitgeeft.",
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
    title: "Meer tijd. Een besparing die u zelf kunt narekenen.",
    intro: "Bij elk getal laten wij zien hoe het is berekend, zodat u het zelf kunt beoordelen.",
    sourcePrefix: "Zo rekenen wij:",
    items: [
      {
        placeholder: true,
        source: "1.100 facturen per maand × 6 minuten, waarvan de helft wordt overgenomen",
        value: 55,
        suffix: " uur",
        label: "per maand tijdwinst voor uw team, met één taak",
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
        source: "4–6 weken bouwen en testen, daarna 3–4 weken naast uw team",
        value: 10,
        prefix: "≤",
        suffix: " weken",
        label: "van de start van de proef tot een gemeten resultaat",
      },
    ],
  },
  safety: {
    eyebrow: "Is het veilig?",
    title: "U houdt de regie. Altijd.",
    intro:
      "De zorg die wij het vaakst horen: ‘Wat als de assistent iets doet wat niet de bedoeling is?’ Zo voorkomen wij dat.",
    items: [
      {
        icon: "filter",
        title: "Hij doet alleen wat u toestaat",
        body: "Wij leggen vooraf schriftelijk vast welke handelingen de assistent mag uitvoeren. Al het andere kán hij simpelweg niet.",
      },
      {
        icon: "eye",
        title: "Eerst kijken, dan pas wijzigen",
        body: "In het begin leest hij alleen gegevens. Wijzigen mag pas als u daarmee instemt, en onomkeerbare stappen keurt altijd een mens goed.",
      },
      {
        icon: "log",
        title: "Alles wordt vastgelegd",
        body: "Elke handeling wordt vastgelegd: wat hij deed, wanneer en waarom. U kunt het altijd nakijken.",
      },
      {
        icon: "power",
        title: "U hebt de noodknop",
        body: "U kunt de assistent op elk moment zelf stilzetten, zonder ons te hoeven bellen.",
      },
      {
        icon: "lock",
        title: "Uw gegevens blijven van u",
        body: "Wij tekenen een verwerkersovereenkomst, werken op uw eigen systemen of in een Europees datacenter, en uw gegevens worden nooit gebruikt om AI te trainen.",
      },
      {
        icon: "guarantee",
        title: "Geen resultaat, geen risico",
        body: "Haalt de proef het afgesproken foutpercentage niet, dan verbeteren wij de assistent eerst op onze kosten. Lukt het dan nog niet, dan kunt u stoppen en krijgt u de tweede termijn terug.",
      },
    ],
  },
  pricing: {
    eyebrow: "Wat het kost",
    title: "Begin klein. Ga alleen door als het loont.",
    intro:
      "Vaste prijzen per stap. Na elke stap beslist u, op basis van echte cijfers, of u verdergaat.",
    recommended: "Het bewijs",
    priceTbd: "Prijs volgt",
    plans: [
      {
        placeholder: false,
        tier: "Quickscan",
        amount: eur(prices.quickscan),
        blurb: "Wij brengen in kaart welke taken het automatiseren waard zijn, en wat dat u oplevert.",
        features: [
          "1–2 weken, vaste prijs",
          "Meting in uw systemen en een voorbeeld van de taak",
          "Een heldere besparingsberekening per taak",
          "Een eerlijk ‘nee’ als het niet loont",
        ],
        cta: "Start met de quickscan",
      },
      {
        placeholder: false,
        tier: "Proef met één taak",
        amount: eur(prices.trial),
        blurb: "Eén taak geautomatiseerd in uw eigen software, met een gemeten resultaat.",
        features: [
          "8–10 weken, vaste prijs",
          "Gebouwd en getest op een kopie van uw systeem",
          "3–4 weken meedraaien naast uw team",
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
        blurb: "Wij houden het draaiende en helpen u met de volgende taak.",
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
    addon: `Elke extra taak bouwen wij voor ${eur(prices.addon)}.`,
    vatNote: "Alle prijzen zijn exclusief btw.",
    founding: {
      label: "Eerste klanten",
      title: `De eerste drie proeven met ${prices.foundingDiscount * 100}% korting`,
      body: `Word een van onze eerste drie klanten: uw proef kost ${eur(foundingTrial)} in plaats van ${eur(prices.trial)}. Daar vragen wij drie dingen voor terug: wij schrijven samen een praktijkverhaal, wij mogen uw naam noemen en u stelt ons voor aan twee bedrijven uit uw netwerk.`,
      cta: "Vraag naar een van de drie plekken",
    },
  },
  faq: {
    eyebrow: "Vragen",
    title: "Veelgestelde vragen.",
    items: [
      {
        q: `Wat is ${P} precies?`,
        a: `${P} is ons platform dat uw bestaande software koppelt aan een AI-assistent. Het bepaalt wat de assistent mag doen, vraagt waar nodig een mens om goedkeuring en legt alles vast. U merkt er weinig van: uw team vraagt de assistent iets, en het werk gebeurt in de programma's die u al hebt.`,
      },
      {
        q: "Wat is agentic AI, en is dat niet gewoon een hype?",
        a: "Agentic AI is AI die niet alleen antwoord geeft, maar zelf stappen uitvoert, zoals een factuur invoeren of een bestelling controleren. Er is veel hype rond AI. Daarom beginnen wij met één taak en meten wij wat het oplevert. U betaalt voor tijdwinst die u kunt narekenen, niet voor beloftes.",
      },
      {
        q: "Moeten wij iets van AI weten?",
        a: "Nee. U vertelt ons welk werk te veel tijd kost; wij zorgen voor de techniek. Uw medewerkers blijven werken in de programma's die zij kennen, en wij geven een korte training.",
      },
      {
        q: "Moeten wij onze software vervangen?",
        a: "Nee, en dat is juist de bedoeling. De assistent werkt met de programma's die u al gebruikt, ook oudere.",
      },
      {
        q: "Gaan er banen verloren?",
        a: "Dat bepaalt u. In de praktijk neemt de assistent het saaie, herhalende deel van iemands dag over. De vrijgekomen tijd gaat naar werk waar echt een mens voor nodig is, of u hoeft een vacature niet opnieuw in te vullen. In de quickscan rekenen wij beide scenario's door.",
      },
      {
        q: "Wordt er meegekeken met mijn medewerkers?",
        a: "Nee. Wij meten het werk in uw systemen, en een medewerker neemt alleen zelf een taak op als voorbeeld. Er wordt geen hele werkdag opgenomen en uitkomsten gaan per taak, nooit per persoon. Alleen als u kiest voor het optioneel bijhouden welke programma's openstaan, vragen wij vooraf om instemming van de ondernemingsraad.",
      },
      {
        q: "Neemt de assistent beslissingen over mensen?",
        a: "Nee. Wij bouwen geen assistenten die over mensen beslissen, bijvoorbeeld bij sollicitaties, beoordelingen of toelating. Hij doet administratief werk binnen vaste afspraken.",
      },
      {
        q: "Hoe zit het met privacy?",
        a: "De assistent ziet alleen wat hij voor de taak nodig heeft. Wij tekenen vooraf een verwerkersovereenkomst, werken alleen met AI-diensten die uw gegevens in de EU verwerken en er nooit AI mee trainen, en leggen alle afspraken schriftelijk vast.",
      },
      {
        q: "En als het niet loont?",
        a: "Dan zeggen wij dat in de quickscan, voordat u geld uitgeeft aan bouwen. Niet elke taak is het automatiseren waard. De quickscan betaalt u wel: dat eerlijke antwoord is precies wat u koopt.",
      },
      {
        q: "Zitten wij daarna aan u vast?",
        a: `Nee. Wat wij voor u inrichten (de afspraken, rechten en tests) is van u, en u krijgt een eeuwigdurende licentie om de opgeleverde software te gebruiken en door een andere partij te laten beheren. De ondersteuning loopt minimaal 12 maanden, daarna met 3 maanden opzegtermijn.`,
      },
      {
        q: "Wat moet ik onze IT-afdeling vertellen?",
        a: `Dat ${P} werkt met het Model Context Protocol (MCP): een open standaard waarmee AI-assistenten bestaande software gebruiken via afgebakende handelingen, met rechten, goedkeuring en een volledig logboek. Wij werken graag samen met uw IT-leverancier en lichten de details zelf toe.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Plan een vrijblijvend kennismakingsgesprek.",
    intro:
      "Vertel ons welke taak de meeste tijd kost. Wij zeggen eerlijk of wij kunnen helpen en wat het ongeveer oplevert. Zonder verplichtingen en zonder technisch verhaal.",
    emailPrompt: "Liever mailen?",
    close: "Sluiten",
  },
  form: {
    name: "Naam",
    company: "Organisatie",
    email: "Zakelijk e-mailadres",
    program: "Om welk programma gaat het?",
    programPlaceholder: "bijv. de boekhouding",
    task: "Welke taak kost te veel tijd?",
    submit: "Vraag een kennismakingsgesprek aan",
    note: "Wij reageren binnen één werkdag. Het gesprek is kosteloos.",
    sent: "Uw mailprogramma is geopend en uw gegevens zijn al ingevuld. Klik alleen nog op Verzenden.",
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
