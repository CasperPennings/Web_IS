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
    title: `${P} van Intelligent Software – Laat AI uw routinewerk overnemen`,
    description: `Een AI-assistent die herhalend computerwerk overneemt in de software die u al gebruikt. ${P} koppelt uw bestaande programma's veilig aan AI. Met vaste prijzen en vooraf een eerlijke berekening van de opbrengst.`,
  },
  common: {
    example: "Voorbeeld",
    examplesCaption:
      "Voorbeeldcijfers, gebaseerd op het verwerken van inkoopfacturen. Zodra we resultaten van echte klanten hebben, ziet u die hier.",
    skip: "Direct naar de inhoud",
    logoLabel: "Intelligent Software – terug naar boven",
  },
  nav: {
    label: "Hoofdmenu",
    approach: "Werkwijze",
    saves: "Wat het oplevert",
    costs: "Kosten",
    questions: "Vragen",
    cta: "Plan een kennismaking",
    ctaShort: "Contact",
    langLabel: "Taal",
  },
  hero: {
    eyebrow: "AI die niet alleen praat, maar ook werkt",
    titleStart: "Laat AI",
    rolling: ["het typewerk", "het factuurwerk", "de orderinvoer", "het controlewerk", "het routinewerk"],
    titleEnd: "overnemen.",
    sub: `Met ${P} koppelen we uw bestaande software veilig aan een AI-assistent die herhalend computerwerk overneemt. U weet vooraf wat de automatisering oplevert, en u houdt zelf de regie.`,
    ctaPrimary: "Plan een gratis kennismaking",
    ctaSecondary: "Bereken wat het oplevert",
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
  problem: {
    eyebrow: "Herkenbaar?",
    title: "Uw medewerkers zijn uren kwijt aan het overtypen van gegevens.",
    intro:
      "De meeste organisaties draaien op software die prima werkt, maar nooit is gemaakt om samen te werken. Wat de programma's niet doen, doen uw medewerkers met de hand.",
    points: [
      {
        title: "Alles twee keer intypen",
        body: "Gegevens komen binnen per mail of op papier, en iemand typt ze over in uw administratie. Elke dag weer.",
      },
      {
        title: "Programma's die niet op elkaar aansluiten",
        body: "De financiële administratie, het personeelssysteem en het orderprogramma zijn losse eilandjes. Uw medewerkers zijn de brug ertussen.",
      },
      {
        title: "Alles vervangen is geen optie",
        body: "Nieuwe software kost jaren en een fortuin, en iedereen moet opnieuw leren werken. U wilt nú verlichting, met de programma's die u al hebt.",
      },
    ],
  },
  approach: {
    eyebrow: "Onze werkwijze",
    title: "Ontdekken, verbinden, automatiseren. En blijven verbeteren.",
    intro:
      "We beginnen met één taak en bouwen van daaruit verder. Draait de assistent eenmaal, dan begint de ronde opnieuw: wat we in de praktijk zien, gebruiken we om alles steeds beter te maken.",
    steps: [
      {
        icon: "analyze",
        title: "1. Ontdekken waar de tijd zit",
        body: "We meten in uw systemen hoeveel werk er ligt, en een medewerker laat ons zien hoe de taak nu gaat. U krijgt per taak een berekening van de opbrengst, en een eerlijk ‘nee’ als automatiseren niet loont.",
      },
      {
        icon: "swap",
        title: "2. Verbinden met uw software",
        body: `Met ${P} koppelen we uw software, ook oudere programma's, veilig aan een AI-assistent. De assistent kan alleen doen wat u vooraf hebt goedgekeurd, en we testen alles eerst op een kopie van uw systeem.`,
      },
      {
        icon: "grow",
        title: "3. Automatiseren, met u aan het roer",
        body: "De assistent neemt het werk over, de eerste weken nog onder toezicht van uw team. Elke handeling komt in een logboek, en stappen die niet terug te draaien zijn, keurt altijd eerst een mens goed.",
      },
    ],
    loop: {
      title: "En dan: leren en verbeteren",
      body: "Gaat er iets mis, komt er een leverancier bij of heeft uw team een wens? Dan beginnen we weer bij stap 1. We leggen het geval vast als test en verbeteren daarna de koppeling. Zo wordt de assistent elke ronde betrouwbaarder en neemt hij meer werk over.",
    },
    diagram: {
      label: "Kringloop: ontdekken, verbinden, automatiseren, en met de lessen uit de praktijk terug naar het begin",
      nodes: ["Ontdekken", "Verbinden", "Automatiseren"],
      center: P,
      centerSub: "elke ronde beter",
      feedback: "Leren uit de praktijk",
    },
  },
  calc: {
    eyebrow: "Wat levert het u op?",
    title: "Reken het zelf uit.",
    intro:
      "Kies een taak die uw team vaak doet en schat hoeveel tijd die kost. Onder de uitkomst ziet u hoe we rekenen. Loont het niet, dan ziet u dat meteen.",
    tasks: "Aantal keer per maand",
    tasksHint: "bijv. het aantal facturen",
    minutes: "Minuten per keer",
    rate: "Uurkosten medewerker, incl. werkgeverslasten",
    unitTimes: "× per maand",
    unitMin: "min",
    unitRate: "€ / uur",
    shareQuestion: "Hoeveel van het werk kan de assistent overnemen?",
    shareOptions: ["Voorzichtig · 30%", "Gemiddeld · 50%", "Optimistisch · 70%"],
    fixedLine: `Gerekend met onze vaste prijzen: eenmalig ${eur(prices.quickscan)} quickscan + ${eur(prices.trial)} proef, daarna ${eur(prices.support)} per maand. Excl. btw.`,
    cta: "Bespreek deze berekening in een gratis gesprek",
    ctaNote: "We rekenen het samen na met uw echte cijfers.",
    prefill: "Een taak die ongeveer {tasks} keer per maand voorkomt, {minutes} minuten per keer. De rekenhulp gaf een besparing van {year} per jaar.",
    stickyYear: "per jaar",
    stickyPayback: "mnd terugverdientijd",
    footnote: "De uurkosten zijn inclusief werkgeverslasten (grofweg het uurloon × 1,3). De terugverdientijd gaat in zodra de assistent meedraait.",
    hoursUnit: "uur per maand",
    hoursLabel: "tijdwinst voor uw team",
    yearLabel: "bespaard per jaar, na aftrek van de maandkosten",
    monthsUnit: "maanden",
    paybackLabel: "tot de eenmalige kosten zijn terugverdiend",
    notice:
      "Bij deze cijfers duurt het meer dan een jaar voordat u de kosten terugverdient. Dan loont het waarschijnlijk niet om deze taak te automatiseren, en dat zeggen we u ook in het kennismakingsgesprek, voordat u iets uitgeeft.",
    formulaTitle: "Zo rekenen we",
    formula:
      "Aantal keer per maand × minuten per keer ÷ 60 × uurkosten × het deel dat de assistent overneemt, min de maandkosten.",
    srSummary: "{hours} uur per maand, {year} per jaar bespaard, terugverdiend in {payback} maanden.",
  },
  safety: {
    eyebrow: "Is het veilig?",
    title: "U houdt de regie. Altijd.",
    intro:
      "De zorg die we het vaakst horen: ‘Wat als de assistent iets doet wat niet de bedoeling is?’ Zo voorkomen we dat.",
    items: [
      {
        icon: "filter",
        title: "De assistent doet alleen wat u toestaat",
        body: "We leggen vooraf schriftelijk vast welke handelingen de assistent mag uitvoeren. Al het andere kán hij gewoonweg niet.",
      },
      {
        icon: "power",
        title: "Een noodknop en een logboek",
        body: "Elke handeling wordt vastgelegd. En u kunt de assistent altijd zelf stilzetten, zonder eerst ons te bellen.",
      },
      {
        icon: "lock",
        title: "Uw gegevens blijven van u",
        body: "We tekenen een verwerkersovereenkomst en werken op uw eigen systemen of in een Europees datacenter. Uw gegevens worden nooit gebruikt om AI te trainen.",
      },
      {
        icon: "guarantee",
        title: "Garantie op de proef",
        body: "Haalt de proef het afgesproken foutpercentage niet, dan verbeteren we de assistent eerst op onze kosten. Lukt het dan nog niet, dan kunt u stoppen en krijgt u de tweede helft van de proefprijs terug.",
      },
    ],
  },
  pricing: {
    eyebrow: "Wat het kost",
    title: "Begin klein. Ga alleen door als het loont.",
    intro:
      "Vaste prijzen per stap. Na elke stap beslist u, op basis van echte cijfers, of u verdergaat.",
    recommended: "Hier begint u",
    priceTbd: "Prijs volgt",
    plans: [
      {
        placeholder: false,
        tier: "Stap 1 · Quickscan",
        amount: eur(prices.quickscan),
        blurb: "Stap 1: we brengen in kaart welke taken het automatiseren waard zijn, en wat dat u oplevert.",
        features: [
          "1–2 weken, vaste prijs",
          "Meting in uw systemen en meekijken bij de taak",
          "Een heldere besparingsberekening per taak",
          "Een eerlijk ‘nee’ als het niet loont",
        ],
        cta: "Start met de quickscan",
        featured: true,
      },
      {
        placeholder: false,
        tier: "Stap 2 · Proef met één taak",
        amount: eur(prices.trial),
        blurb: "Stap 2 en 3 voor één taak: gekoppeld, geautomatiseerd en gemeten.",
        features: [
          "8–10 weken, vaste prijs",
          "Gebouwd en getest op een kopie van uw systeem",
          "3–4 weken proefdraaien met uw team",
          "Een rapport met de situatie vóór en na",
          "50% bij de start, 50% bij oplevering",
        ],
        cta: "Vraag naar de proef",
      },
      {
        placeholder: false,
        tier: "Daarna · Ondersteuning",
        amount: eur(prices.support),
        unit: "/maand",
        blurb: "De verbetercyclus: we houden de assistent draaiende en maken hem steeds beter.",
        features: [
          "Bewaking, onderhoud en het oplossen van storingen",
          "AI-gebruik inbegrepen tot een afgesproken maximum",
          "Beheer van maximaal twee taken",
          "Doorlopend verbeteren met de ervaringen van uw team",
          "Elk kwartaal een besparingsoverzicht",
          "Looptijd minimaal 12 maanden, daarna 3 maanden opzegtermijn",
        ],
        cta: "Vraag naar de ondersteuning",
      },
    ],
    addon: `Elke extra taak bouwen we voor ${eur(prices.addon)}.`,
    vatNote: "Alle prijzen zijn exclusief btw.",
    founding: {
      label: "Voor de eerste drie klanten",
      title: `Proef voor ${eur(foundingTrial)} in plaats van ${eur(prices.trial)}`,
      body: `De eerste drie klanten krijgen ${prices.foundingDiscount * 100}% korting op de proef. In ruil daarvoor schrijven we samen een praktijkverhaal, mogen we uw naam noemen en stelt u ons voor aan twee bedrijven uit uw netwerk.`,
      cta: "Meld u aan als eerste klant",
    },
  },
  faq: {
    eyebrow: "Vragen",
    title: "Veelgestelde vragen.",
    more: "Staat uw vraag er niet bij?",
    moreCta: "Stel hem in een gratis gesprek",
    items: [
      {
        q: `Wat is ${P} precies?`,
        a: `${P} is ons platform dat uw bestaande software koppelt aan een AI-assistent. Het bepaalt wat de assistent mag doen, vraagt waar nodig een mens om goedkeuring en legt alles vast. U merkt er weinig van: uw team vraagt de assistent iets, en het werk gebeurt in de programma's die u al hebt.`,
      },
      {
        q: "Wat is agentic AI, en is dat niet gewoon een hype?",
        a: "Agentic AI is AI die niet alleen antwoord geeft, maar zelf stappen uitvoert, zoals een factuur invoeren of een bestelling controleren. Over AI wordt veel beloofd. Daarom beginnen we met één taak en meten we wat die oplevert. U betaalt voor tijdwinst die u kunt narekenen, niet voor mooie verhalen.",
      },
      {
        q: "Moeten we onze software vervangen?",
        a: "Nee, daar draait het juist om. De assistent werkt met de programma's die u al gebruikt, ook met oudere.",
      },
      {
        q: "Gaan er banen verloren?",
        a: "Dat bepaalt u. In de praktijk neemt de assistent het saaie, herhalende deel van iemands dag over. De vrijgekomen tijd gaat naar werk waar echt een mens voor nodig is. Of u hoeft iemand die vertrekt niet te vervangen. In de quickscan rekenen we beide scenario's door.",
      },
      {
        q: "Hoe zit het met privacy?",
        a: "De assistent ziet alleen wat hij voor de taak nodig heeft. We tekenen vooraf een verwerkersovereenkomst en werken alleen met AI-diensten die uw gegevens in de EU verwerken. Uw gegevens worden nooit gebruikt om AI te trainen, en alle afspraken leggen we schriftelijk vast.",
      },
      {
        q: "En als het niet loont?",
        a: "Dan hoort u dat in de quickscan, voordat u geld uitgeeft aan de bouw. Niet elke taak is het automatiseren waard. De quickscan betaalt u wel: dat eerlijke antwoord is precies wat u koopt.",
      },
      {
        q: "Zitten we daarna aan u vast?",
        a: `Nee. Alles wat we voor u inrichten, zoals de regels, rechten en tests, is van u. U krijgt een eeuwigdurende licentie om de opgeleverde software te gebruiken en door een andere partij te laten beheren. De ondersteuning loopt minimaal 12 maanden; daarna geldt een opzegtermijn van 3 maanden.`,
      },
      {
        q: "Wat moet ik onze IT-afdeling vertellen?",
        a: `Dat ${P} is gebouwd op het Model Context Protocol (MCP). Dat is een open standaard waarmee AI-assistenten bestaande software bedienen via vooraf afgebakende handelingen, met rechten, goedkeuring en een volledig logboek. We overleggen graag met uw IT-afdeling of -leverancier en lichten de techniek zelf toe.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Plan een vrijblijvend kennismakingsgesprek.",
    intro:
      "Vertel ons welke taak de meeste tijd kost. Wij zeggen eerlijk of we kunnen helpen en wat het ongeveer oplevert. In gewone taal, zonder technisch verhaal.",
    emailPrompt: "Liever mailen?",
    close: "Sluiten",
    nextTitle: "Wat er daarna gebeurt",
    next: [
      "U hoort binnen één werkdag van ons.",
      "In een kort gesprek bespreken we de taak en de software die u gebruikt.",
      "U krijgt een eerlijk advies, ook als automatiseren niet loont.",
    ],
  },
  form: {
    name: "Naam",
    company: "Organisatie",
    email: "Zakelijk e-mailadres",
    program: "Om welk programma gaat het?",
    programPlaceholder: "bijv. Exact, AFAS",
    phone: "Telefoon (optioneel, als u liever gebeld wordt)",
    task: "Welke taak kost te veel tijd? (optioneel)",
    taskPlaceholder: "bijv. inkoopfacturen overtypen in Exact, ±1.000 per maand",
    interest: "U heeft interesse in:",
    closeLabel: "Sluiten",
    requiredNote: "Alle velden zijn verplicht, tenzij anders aangegeven.",
    submit: "Vraag een kennismakingsgesprek aan",
    note: "We reageren binnen één werkdag. Het gesprek is kosteloos.",
    sending: "Bezig met versturen…",
    sent: "Bedankt, uw aanvraag is verstuurd. We nemen binnen één werkdag contact met u op.",
    sentMail: "Uw mailprogramma is geopend en uw gegevens zijn al ingevuld. U hoeft alleen nog op Verzenden te klikken.",
    error: "Het versturen is niet gelukt. Probeer het nog eens, of mail ons op",
    mailSubject: "Aanvraag kennismaking –",
  },
  footer: {
    service: "Onze dienst",
    more: "Meer",
    contact: "Contact",
    contactLink: "Contact",
  },
};
