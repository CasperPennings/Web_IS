import type { Copy } from "../i18n/types";
import { prices, site } from "./site";

const P = site.platform;
const eur = (n: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
    .format(n);
const foundingTrial = prices.trial * (1 - prices.foundingDiscount);
const firstYear = prices.quickscan + prices.trial + 12 * prices.support;

export const nl: Copy = {
  locale: "nl-NL",
  meta: {
    title: `Administratief werk automatiseren met AI voor het mkb | ${P}`,
    description: `Laat een AI-assistent facturen, orders en ander herhalend werk verwerken in de software die u al gebruikt. Voor mkb-bedrijven met 20 tot 250 medewerkers. ${P} koppelt uw bestaande programma's veilig aan AI, met vaste prijzen en eerst een eerlijke berekening.`,
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
    cta: "Plan een gratis gesprek",
    ctaShort: "Contact",
    langLabel: "Taal",
  },
  hero: {
    eyebrow: "Voor mkb-bedrijven met 20 tot 250 medewerkers",
    titleStart: "Laat AI",
    rolling: ["het typewerk", "het factuurwerk", "de orderinvoer", "het controlewerk", "het routinewerk"],
    titleEnd: "overnemen.",
    sub: `Facturen overtypen, orders invoeren, gegevens controleren: met ${P} neemt een AI-assistent dit werk over in de software die u al gebruikt. U weet vooraf wat het oplevert, en u houdt zelf de regie.`,
    ctaPrimary: "Plan een gratis gesprek",
    ctaSecondary: "Bereken wat het oplevert",
    proof: ["Werkt met uw huidige software", "Vaste prijzen", "Garantie op de proef"],
    seo: " – administratief werk automatiseren voor het mkb",
    founding: `De eerste drie klanten krijgen ${prices.foundingDiscount * 100}% korting op de proef.`,
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
    cost: "Twee uur overtypen per dag kost u al snel bijna € 20.000 per jaar, voor werk waar niemand beter van wordt.",
    whyNow:
      "Tot voor kort was daar weinig aan te doen. Sinds kort kan AI bestaande programma's veilig bedienen, ook oudere. En goede administratieve krachten vinden wordt er niet makkelijker op.",
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
      "Bij deze cijfers duurt het meer dan een jaar voordat u de kosten terugverdient. Dan loont het waarschijnlijk niet om deze taak te automatiseren, en dat zeggen we u ook in het eerste gesprek, voordat u iets uitgeeft.",
    promising: "Dit ziet er kansrijk uit. In een gratis gesprek toetsen we samen of deze cijfers in de praktijk kloppen.",
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
      `Vaste prijzen per stap. Na elke stap beslist u, op basis van echte cijfers, of u verdergaat. Reken voor het eerste jaar op ${eur(firstYear)} in totaal, inclusief een jaar ondersteuning. Of dat loont voor uw taak, ziet u direct in de rekenhulp.`,
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
        cta: "Bespreek de quickscan",
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
        cta: "Bespreek de proef",
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
        cta: "Bespreek de ondersteuning",
      },
    ],
    addon: `Elke extra taak bouwen we voor ${eur(prices.addon)}.`,
    vatNote: "Alle prijzen zijn exclusief btw.",
    founding: {
      label: "Voor de eerste drie klanten",
      title: `Proef voor ${eur(foundingTrial)} in plaats van ${eur(prices.trial)}`,
      body: `De eerste drie klanten krijgen ${prices.foundingDiscount * 100}% korting op de proef. In ruil daarvoor schrijven we samen een praktijkverhaal, mogen we uw naam noemen en stelt u ons voor aan twee bedrijven uit uw netwerk.`,
      cta: "Bespreek het aanbod voor eerste klanten",
    },
  },
  faq: {
    eyebrow: "Vragen",
    title: "Veelgestelde vragen.",
    more: "Staat uw vraag er niet bij?",
    moreCta: "Stel uw vraag in een gratis gesprek",
    items: [
      {
        q: `Wat is ${P} precies?`,
        a: `${P} is ons platform dat uw bestaande software koppelt aan een AI-assistent. Het bepaalt wat de assistent mag doen, vraagt waar nodig een mens om goedkeuring en legt alles vast. U merkt er weinig van: uw team vraagt de assistent iets, en het werk gebeurt in de programma's die u al hebt.`,
      },
      {
        q: "Is dit niet gewoon weer een AI-hype?",
        a: "Begrijpelijke vraag: over AI wordt veel beloofd. Daarom beginnen we klein. We kiezen één taak, meten vooraf wat die kost en laten na de proef zien wat de assistent echt heeft overgenomen. U betaalt voor tijdwinst die u zelf kunt narekenen, niet voor mooie verhalen.",
      },
      {
        q: "Moeten we onze software vervangen?",
        a: "Nee, daar draait het juist om. De assistent werkt met de programma's die u al gebruikt, ook met oudere.",
      },
      {
        q: "Waarom niet gewoon Zapier of Make?",
        a: "Die werken goed als beide programma's een moderne koppeling hebben. Veel bedrijfssoftware, zeker oudere, heeft die niet. Daar komt " + P + " juist van pas.",
      },
      {
        q: "Wat is het verschil met een RPA-robot?",
        a: "Een RPA-robot klikt schermen na en loopt vast zodra er iets verandert op het scherm. Onze assistent werkt via vooraf afgesproken handelingen en kan beter omgaan met afwijkingen, zoals een factuur met een andere opmaak.",
      },
      {
        q: "Mijn softwareleverancier biedt zelf AI aan. Waarom dan dit?",
        a: "De AI van een leverancier werkt meestal alleen binnen dat ene pakket. Het tijdrovende werk zit vaak juist tussen pakketten: van de mail naar de boekhouding, of van het orderprogramma naar de planning.",
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
        a: `Alleen aan de afgesproken looptijd: de ondersteuning loopt minimaal 12 maanden, daarna kunt u stoppen met 3 maanden opzegtermijn. Alles wat we voor u inrichten, zoals de regels, rechten en tests, is van u. U krijgt een eeuwigdurende licentie om de software te blijven gebruiken en door een andere partij te laten beheren.`,
      },
      {
        q: "Wat moet ik onze IT-afdeling vertellen?",
        a: `Dat ${P} is gebouwd op het Model Context Protocol (MCP). Dat is een open standaard waarmee AI-assistenten bestaande software bedienen via vooraf afgebakende handelingen, met rechten, goedkeuring en een volledig logboek. We overleggen graag met uw IT-afdeling of -leverancier en lichten de techniek zelf toe.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Plan een gratis gesprek.",
    intro:
      "Vertel ons welke taak de meeste tijd kost. Wij zeggen eerlijk of we kunnen helpen en wat het ongeveer oplevert. In gewone taal, zonder technisch verhaal.",
    emailPrompt: "Liever mailen?",
    close: "Sluiten",
    nextTitle: "Wat er daarna gebeurt",
    next: [
      "U hoort binnen één werkdag van ons.",
      "In een kort gesprek bespreken we één taak en zeggen we eerlijk of die kansrijk is. Gratis en vrijblijvend.",
      "U krijgt een eerlijk advies, ook als automatiseren niet loont.",
    ],
  },
  form: {
    name: "Naam",
    company: "Organisatie",
    email: "Zakelijk e-mailadres",
    program: "Om welk programma gaat het? (optioneel)",
    programPlaceholder: "bijv. Exact, AFAS",
    phone: "Telefoon (optioneel, als u liever gebeld wordt)",
    task: "Welke taak kost te veel tijd? (optioneel)",
    taskPlaceholder: "bijv. inkoopfacturen overtypen in Exact, ±1.000 per maand",
    interest: "U heeft interesse in:",
    closeLabel: "Sluiten",
    requiredNote: "Alle velden zijn verplicht, tenzij anders aangegeven.",
    submit: "Vraag het gratis gesprek aan",
    note: "We reageren binnen één werkdag. Het gesprek is kosteloos.",
    sending: "Bezig met versturen…",
    sent: "Bedankt, uw aanvraag is verstuurd. We nemen binnen één werkdag contact met u op.",
    sentMail: "Uw mailprogramma is geopend en uw gegevens zijn al ingevuld. U hoeft alleen nog op Verzenden te klikken.",
    error: "Het versturen is niet gelukt. Probeer het nog eens, of mail ons op",
    mailSubject: "Aanvraag kennismaking –",
  },
  footer: {
    service: "Onze dienst",
    more: "Informatie",
    contact: "Contact",
    contactLink: "Contact",
  },
};
