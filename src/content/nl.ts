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
    approach: "Werkwijze",
    saves: "Wat het oplevert",
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
    ctaSecondary: "Hoe werkt het?",
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
  approach: {
    eyebrow: "Onze werkwijze",
    title: "Drie stappen, en daarna steeds beter.",
    intro:
      "Wij beginnen met één taak en bouwen van daaruit verder. Na de livegang begint de cirkel opnieuw: wat in de praktijk opvalt, maakt het systeem elke ronde beter.",
    steps: [
      {
        icon: "analyze",
        title: "1. Werkprocessen in kaart brengen",
        body: "Wij meten in uw systemen hoeveel werk er is en een medewerker laat zien hoe een taak gaat. U krijgt per taak een berekening van wat automatiseren oplevert, en een eerlijk nee als het niet loont.",
      },
      {
        icon: "swap",
        title: "2. Koppelingen ontwikkelen",
        body: `Met ${P} verbinden wij uw bestaande software veilig met een AI-assistent, ook oudere programma's. De assistent kan alleen wat u vooraf goedkeurt, en wij testen alles eerst op een kopie van uw systeem.`,
      },
      {
        icon: "grow",
        title: "3. Werk automatiseren",
        body: "De assistent neemt het werk over, eerst een paar weken naast uw team. Elke handeling staat in een logboek en onomkeerbare stappen keurt altijd een mens goed.",
      },
    ],
    loop: {
      title: "En dan: steeds beter",
      body: "Een fout, een nieuwe leverancier of een wens van uw team gaat terug naar stap 1. Wij maken er eerst een test van en verbeteren dan de koppeling. Zo wordt het systeem elke ronde betrouwbaarder en neemt het meer werk over.",
    },
    diagram: {
      label: "Kringloop: in kaart brengen, koppelen, automatiseren, en via feedback terug naar het begin",
      nodes: ["In kaart brengen", "Koppelen", "Automatiseren"],
      center: P,
      centerSub: "elke ronde beter",
      feedback: "Feedback en metingen",
    },
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
        icon: "power",
        title: "Een noodknop en een logboek",
        body: "Elke handeling wordt vastgelegd, en u kunt de assistent op elk moment zelf stilzetten, zonder ons te hoeven bellen.",
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
        blurb: "Stap 1: wij brengen in kaart welke taken het automatiseren waard zijn, en wat dat u oplevert.",
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
        blurb: "Stap 2 en 3 voor één taak: gekoppeld, geautomatiseerd en gemeten.",
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
        blurb: "De verbetercyclus: wij houden het draaiende en maken het steeds beter.",
        features: [
          "Bewaking, onderhoud en het oplossen van storingen",
          "AI-gebruik inbegrepen tot een afgesproken maximum",
          "Beheer van maximaal twee taken",
          "Doorlopend verbeteren op basis van feedback",
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
        q: "Moeten wij onze software vervangen?",
        a: "Nee, en dat is juist de bedoeling. De assistent werkt met de programma's die u al gebruikt, ook oudere.",
      },
      {
        q: "Gaan er banen verloren?",
        a: "Dat bepaalt u. In de praktijk neemt de assistent het saaie, herhalende deel van iemands dag over. De vrijgekomen tijd gaat naar werk waar echt een mens voor nodig is, of u hoeft een vacature niet opnieuw in te vullen. In de quickscan rekenen wij beide scenario's door.",
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
