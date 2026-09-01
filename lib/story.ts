export const person = {
  firstName: "Pernille",
  tagline: "A map written in cells",
  tested: "FamilyTreeDNA · myOrigins v3 · mtFull Sequence",
} as const;

export type Origin = {
  id: string;
  label: string;
  percent: number;
  display?: string;
  color: string;
  image: string;
  kicker: string;
  summary: string;
  detail: string;
};

export const origins: Origin[] = [
  {
    id: "scandinavia",
    label: "Scandinavia",
    percent: 71,
    color: "#7ec8a3",
    image: "/images/scandinavia.jpg",
    kicker: "The main current",
    summary:
      "Most of Pernille’s autosomal ancestry sits in Scandinavia — Denmark, Sweden, Norway, and the wider Nordic peninsula. This is the landscape her recent generations come from.",
    detail:
      "FamilyTreeDNA’s myOrigins v3 places 71% of her autosomal DNA with Scandinavian reference populations. That is not a passport. It is a statistical resemblance: long shared stretches of chromosome that look most like people whose deep roots are in the North. Beech forest, winter coasts, and the Kattegat sit at the centre of this story.",
  },
  {
    id: "central-europe",
    label: "Central Europe",
    percent: 28,
    color: "#d4a054",
    image: "/images/central-europe.jpg",
    kicker: "The inland river",
    summary:
      "A substantial share points south of the Baltic — Germany, the Alps, the Danube basin, and the older farming heart of the continent.",
    detail:
      "Twenty-eight percent of Pernille’s autosomal DNA matches Central European references. That signal often travels with Neolithic farming, Bronze Age corridors, and later medieval movement across the North European plain. It is the second voice in her genome: not a contradiction of Scandinavia, but the inland current that kept meeting the North Sea.",
  },
  {
    id: "isles",
    label: "England, Wales & Scotland",
    percent: 1,
    display: "<2%",
    color: "#8ea4c8",
    image: "/images/british-isles.jpg",
    kicker: "A trace on the tide",
    summary:
      "A very small British Isles signal. A fair reading is leftover scraps of Helle’s Irish chapter under another name — or North Sea noise.",
    detail:
      "Less than two percent of the autosomal painting falls with England, Wales, and Scotland. FamilyTreeDNA flags traces like this as easy to misattribute. A fair reading is leftover scraps of Helle’s 19% “Ireland” under the neighbouring British label — those two clusters are the ones the method mixes up. It could also be ordinary North Sea noise. Either way it is a whisper, not a chapter.",
  },
];

export type AncientOrigin = {
  id: string;
  label: string;
  percent: number;
  color: string;
  image: string;
  emblem: string;
  era: string;
  when: string;
  summary: string;
  detail: string;
};

export const ancientOrigins: AncientOrigin[] = [
  {
    id: "hunter",
    label: "Hunter-Gatherer",
    percent: 50,
    color: "#c45c6a",
    image: "/images/hunter-gatherer.jpg",
    emblem: "/images/emblem-hunter.jpg",
    era: "Pleistocene → Mesolithic",
    when: "From ~45,000 years ago",
    summary:
      "Half of Pernille’s European autosomal ancestry still resembles the first modern humans who walked into a thawing continent.",
    detail:
      "After the last ice, hunter-gatherer bands lived from La Brana in Spain to Loschbour in Luxembourg and Motala in Sweden. Their mitochondrial and Y lineages still leave a mark in Northern Europe. In Pernille, that older forager layer is not a footnote — it is the largest ancient component FamilyTreeDNA reports.",
  },
  {
    id: "farmer",
    label: "Early Farmer",
    percent: 38,
    color: "#7ec8a3",
    image: "/images/farmer.jpg",
    emblem: "/images/emblem-farmer.jpg",
    era: "Neolithic",
    when: "~8,000–7,000 years ago",
    summary:
      "Wheat, pottery, and settled valleys. Farmers moved from the Near East along Anatolia into the Danube and on toward Spain.",
    detail:
      "The Linear Pottery and Funnelbeaker worlds changed Europe’s diet and its genes. Thirty-eight percent of Pernille’s ancient European ancestry tracks that farming expansion — the same broad movement that left polished adzes on river terraces and, much later, the Alpine mummy known as Ötzi.",
  },
  {
    id: "invader",
    label: "Metal Age Invader",
    percent: 13,
    color: "#d4a054",
    image: "/images/yamnaya.jpg",
    emblem: "/images/emblem-invader.jpg",
    era: "Bronze Age",
    when: "~5,800 years ago",
    summary:
      "A smaller, sharper pulse from the Pontic–Caspian steppe: horses, wagons, and bronze.",
    detail:
      "Yamnaya-related herders moved west in the Bronze Age and mixed with European farmers. FamilyTreeDNA folds that steppe stream into “Metal Age Invader.” In Pernille it is 13% — enough to be real, not enough to dominate. Bell Beaker and later Corded Ware worlds sit downstream of this arrival.",
  },
];

export const haplogroup = {
  id: "H10a1u",
  parent: "H10a1",
  pathLabel: "H → H10 → H10a → H10a1 → H10a1u",
  formed: "branched from H10a1 around 2250 BCE",
  tmrca: {
    meanYear: 1090,
    meanLabel: "1090 CE",
    roundedStory: "1100 CE",
    ybp: 936,
    ci95: "687–1422 CE",
    ci68: "904–1276 CE",
    ci99: "433–1552 CE",
  },
  testers: {
    total: 4,
    denmark: 2,
    unknown: 2,
  },
  badges: ["Middle Ages", "mtFull confirmed"],
  rarityNote:
    "This is a rare maternal twig. Only a handful of testers currently share H10a1u, and the known geographic pin is Denmark.",
} as const;

export type HaploStep = {
  haplogroup: string;
  yearLabel: string;
  year: number;
  era: string;
  place: string;
  copy: string;
};

export const haploPath: HaploStep[] = [
  {
    haplogroup: "H10a1u",
    yearLabel: "1100 CE",
    year: 1100,
    era: "Middle Ages",
    place: "Denmark",
    copy: "Pernille’s own maternal haplogroup. The mutation sits on an Early Bronze Age H10a1 background (around 2250 BCE), but the most recent woman shared by the four living testers likely lived around 1090 CE. That is a three-thousand-year thread with almost no surviving sisters. Two of the four testers name Denmark.",
  },
  {
    haplogroup: "H10a1",
    yearLabel: "2250 BCE",
    year: -2250,
    era: "Metal Ages",
    place: "Central Europe",
    copy: "The parent branch formed in the Early Bronze Age, when Unětice, Kisapostag, and related cultures were burying people across the Carpathian Basin and the Alpine foreland. Many of Pernille’s closest ancient maternal matches sit here.",
  },
  {
    haplogroup: "H10a",
    yearLabel: "2300 BCE",
    year: -2300,
    era: "Metal Ages",
    place: "Europe",
    copy: "A short step older than H10a1. Bronze-working Europe is already in motion: amber, copper, and long-distance marriage.",
  },
  {
    haplogroup: "H10",
    yearLabel: "4650 BCE",
    year: -4650,
    era: "Late Stone Age",
    place: "Europe",
    copy: "H10 is the last broad maternal ancestor Pernille shares with several famous later people — a Late Neolithic woman whose daughters would eventually include knights, kings, and a Danish line.",
  },
  {
    haplogroup: "H",
    yearLabel: "8000 BCE",
    year: -8000,
    era: "Stone Age",
    place: "Near East & Caucasus",
    copy: "Haplogroup H is the great European maternal family. It formed outside Europe, in the northern Near East and southern Caucasus, then spread west before the last glacial maximum. About four in ten European maternal lines are H today.",
  },
  {
    haplogroup: "HV",
    yearLabel: "10,000 BCE",
    year: -10000,
    era: "Stone Age",
    place: "West Asia",
    copy: "HV is the parent of H and V. The ice is retreating. People are still few, and every surviving daughter line is a near-miracle of transmission.",
  },
  {
    haplogroup: "R0",
    yearLabel: "37,000 BCE",
    year: -37000,
    era: "Upper Paleolithic",
    place: "West Eurasia",
    copy: "R0 sits deep under the later European and Near Eastern maternal tree. From here the line is already out of Africa, living in a colder world of megafauna and small bands.",
  },
  {
    haplogroup: "R",
    yearLabel: "56,000 BCE",
    year: -56000,
    era: "Upper Paleolithic",
    place: "Eurasia",
    copy: "R is one of the great Eurasian trunks. Almost every maternal line in Europe, India, and much of Asia is a granddaughter of R.",
  },
  {
    haplogroup: "N",
    yearLabel: "57,000 BCE",
    year: -57000,
    era: "Out of Africa",
    place: "Near East",
    copy: "N is the Eurasian sister of M. After the walk out of Africa, N’s descendants peopled the north and west.",
  },
  {
    haplogroup: "L3",
    yearLabel: "64,000 BCE",
    year: -64000,
    era: "Out of Africa",
    place: "East Africa",
    copy: "L3 is the African mother of all non-African maternal lines. A small number of her descendants left the continent. Pernille’s mitochondria still remember that departure.",
  },
  {
    haplogroup: "L (mt-Eve)",
    yearLabel: "141,000 BCE",
    year: -141000,
    era: "Stone Age",
    place: "East Africa",
    copy: "Mitochondrial Eve is not the first woman. She is the most recent woman from whom every living person inherits a maternal line. All of us — Pernille included — meet here.",
  },
  {
    haplogroup: "L'AA",
    yearLabel: "379,000 BCE",
    year: -379000,
    era: "Neanderthal split",
    place: "Eurasia / Africa",
    copy: "Before Homo sapiens, the maternal tree already forked. This is the deep node FamilyTreeDNA uses for the Neanderthal divergence — a cousin, not an ancestor in the direct motherline, but a reminder that the family is older than our species.",
  },
  {
    haplogroup: "L'AAAB",
    yearLabel: "725,000 BCE",
    year: -725000,
    era: "Denisovan split",
    place: "Deep time",
    copy: "The oldest rung on this chart. Sima de los Huesos and the Denisovan split live at this scale. Every modern human shares it.",
  },
];

export type Connection = {
  id: string;
  name: string;
  dates: string;
  kind: "notable" | "ancient" | "deep";
  rarity: "rare" | "common";
  shared: string;
  sharedYear: string;
  place: string;
  image: string;
  blurb: string;
};

export const connections: Connection[] = [
  {
    id: "sweyn",
    name: "Sweyn II of Denmark",
    dates: "1019–1076 CE",
    kind: "notable",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "Denmark",
    image: "/images/viking-langeland.jpg",
    blurb:
      "The last Viking king of Denmark, son of Estrid. Pernille and Sweyn share a maternal ancestor in haplogroup H — a Stone Age woman, not a court grandmother. The closeness is symbolic, and Danish.",
  },
  {
    id: "birger",
    name: "Birger Jarl",
    dates: "1210–1266 CE",
    kind: "notable",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "Sweden",
    image: "/images/sweden-winter.jpg",
    blurb:
      "The jarl who helped found Stockholm and steered Sweden through the thirteenth century. Again the shared node is haplogroup H, thousands of years before either of them.",
  },
  {
    id: "bayard",
    name: "Pierre Terrail, seigneur de Bayard",
    dates: "1476–1524 CE",
    kind: "notable",
    rarity: "rare",
    shared: "H10",
    sharedYear: "4650 BCE",
    place: "France",
    image: "/images/france-bridge.jpg",
    blurb:
      "The knight without fear and beyond reproach. He and Pernille share the closer H10 node — still Late Neolithic, still a fun fact, and rarer: about one in 115 FamilyTreeDNA customers sit this close to Bayard on the motherline.",
  },
  {
    id: "wenman",
    name: "Sir Ferdinando Wenman",
    dates: "1576–1610 CE",
    kind: "notable",
    rarity: "rare",
    shared: "H10",
    sharedYear: "4650 BCE",
    place: "Jamestown, Virginia",
    image: "/images/british-isles.jpg",
    blurb:
      "An early English settler at Jamestown, identified archaeogenomically in 2024. He sits on H10e; Pernille sits on H10a1u. They meet at H10, about one in 115 customers this close. Still Neolithic, still a fun fact.",
  },
  {
    id: "henry",
    name: "Saint Henry (Henry II)",
    dates: "973–1024 CE",
    kind: "notable",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "East Francia",
    image: "/images/central-europe.jpg",
    blurb:
      "Last Ottonian emperor, crowned in Rome in 1014. His maternal twig is H7b2a1'3; Pernille’s is H10a1u. They meet at H.",
  },
  {
    id: "agnes",
    name: "Agnes of Waiblingen",
    dates: "1072–1143 CE",
    kind: "notable",
    rarity: "rare",
    shared: "R0",
    sharedYear: "37,000 BCE",
    place: "Germany",
    image: "/images/central-europe.jpg",
    blurb:
      "Daughter of Emperor Henry IV, a hinge between Salian, Hohenstaufen, and Babenberg houses. The shared ancestor here is far older: R0, in the Upper Paleolithic.",
  },
  {
    id: "takabuti",
    name: "Takabuti",
    dates: "690–660 BCE",
    kind: "notable",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "Thebes, Egypt",
    image: "/images/nile-thebes.jpg",
    blurb:
      "A Theban noblewoman of the Twenty-fifth Dynasty. Her haplogroup sits on H4a1. The shared mother is H, eight millennia before either burial or birth.",
  },
  {
    id: "ditchling",
    name: "Ditchling man",
    dates: "2287–2041 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "Brighton, England",
    image: "/images/british-isles.jpg",
    blurb:
      "A Bell Beaker man buried near Ditchling Road. Farmers with a large later impact on the British gene pool. Connection haplogroup H4a1a1a; shared node H.",
  },
  {
    id: "slonk",
    name: "Slonk Hill man",
    dates: "391–203 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H",
    sharedYear: "8000 BCE",
    place: "Brighton, England",
    image: "/images/british-isles.jpg",
    blurb:
      "Late Iron Age Britain. About twenty-four years old at death, associated with Iron Age Britain. His line is H1rd.",
  },
  {
    id: "bogoevj",
    name: "Bogøvej 106777",
    dates: "750–1050 CE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Langeland, Denmark",
    image: "/images/viking-langeland.jpg",
    blurb:
      "A Viking Age man from Bogøvej on Langeland. This is one of the most local ancient matches in the file: same parent haplogroup H10a1, same sea. Y-line I-L338.",
  },
  {
    id: "ulrich",
    name: "Ulrichskirchen 4",
    dates: "2300–1600 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Lower Austria",
    image: "/images/farmer.jpg",
    blurb:
      "A woman of 53–92 years, Unětice culture, Early Bronze Age. She sits on the same H10a1 node as Pernille — among the closest archaeological relatives in the set.",
  },
  {
    id: "balaton",
    name: "Balatonkeresztúr S4",
    dates: "2250–1750 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Somogy, Hungary",
    image: "/images/bronze-plain.jpg",
    blurb:
      "A teenage boy of the Kisapostag culture. Early Bronze Age Hungary, Y-line I-P222. Another H10a1 companion from the Carpathian Basin.",
  },
  {
    id: "gustorzyn",
    name: "Gustorzyn 693",
    dates: "1450–1200 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Kujawy-Pomorze, Poland",
    image: "/images/bronze-plain.jpg",
    blurb:
      "Trzciniec culture, Late Bronze Age Poland. Y-line I-L233. The motherline still H10a1.",
  },
  {
    id: "kuckenburg",
    name: "Kuckenburg 8",
    dates: "972–841 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Saxony-Anhalt, Germany",
    image: "/images/bronze-plain.jpg",
    blurb:
      "An 11–12-year-old boy of the Unstrut group, Late Bronze Age. His own haplogroup is H10a1m.",
  },
  {
    id: "dunaalmas",
    name: "Dunaalmás 18227",
    dates: "620–530 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Esztergom, Hungary",
    image: "/images/bronze-plain.jpg",
    blurb:
      "Iron Age Hallstatt world on the Danube. Y-line G-CTS342.",
  },
  {
    id: "viminacium",
    name: "Viminacium 15531",
    dates: "258–413 CE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Kostolac, Serbia",
    image: "/images/central-europe.jpg",
    blurb:
      "A man from the Roman-era necropolis at Viminacium, on the Danube frontier.",
  },
  {
    id: "sedgeford",
    name: "Sedgeford 9",
    dates: "662–876 CE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Norfolk, England",
    image: "/images/british-isles.jpg",
    blurb:
      "Early medieval England. His line is H10a1a1. The North Sea is already a road.",
  },
  {
    id: "goldenen",
    name: "Goldenen Stiege 100",
    dates: "600–800 CE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a1",
    sharedYear: "2250 BCE",
    place: "Lower Austria",
    image: "/images/central-europe.jpg",
    blurb:
      "A woman of the Late Avar period at Mödling. Two other Goldenen Stiege burials (225 and 410) share the same deep motherline.",
  },
  {
    id: "kivutkalns",
    name: "Kivutkalns 19",
    dates: "720–401 BCE",
    kind: "ancient",
    rarity: "rare",
    shared: "H10a",
    sharedYear: "2300 BCE",
    place: "Latvia",
    image: "/images/scandinavia.jpg",
    blurb:
      "A middle-aged man from a small-island cemetery on the Daugava, buried with stones and a bone needle. Bronze Age Latvia, haplogroup H10a.",
  },
  {
    id: "neanderthal",
    name: "Neanderthal",
    dates: "~40,000 years ago",
    kind: "deep",
    rarity: "common",
    shared: "L'AA",
    sharedYear: "379,000 BCE",
    place: "Eurasia",
    image: "/images/hunter-gatherer.jpg",
    blurb:
      "Every living person shares this node. Neanderthals are cousins on a far older maternal fork, not a private family secret. The connection is real and universal.",
  },
  {
    id: "sima",
    name: "Sima de los Huesos",
    dates: "600,000–180,000 BCE",
    kind: "deep",
    rarity: "common",
    shared: "L'AAAB",
    sharedYear: "725,000 BCE",
    place: "Atapuerca, Spain",
    image: "/images/caucasus.jpg",
    blurb:
      "The Pit of Bones. Oldest sequenced hominin DNA, with a mitochondrial story closer to Denisovans than to Neanderthals. Again: a shared human depth, not a personal relic.",
  },
];

export const chromosomes: { id: string; snps: number }[] = [
  { id: "1", snps: 58930 },
  { id: "2", snps: 57409 },
  { id: "3", snps: 46978 },
  { id: "4", snps: 40274 },
  { id: "5", snps: 41901 },
  { id: "6", snps: 47934 },
  { id: "7", snps: 37905 },
  { id: "8", snps: 36849 },
  { id: "9", snps: 32647 },
  { id: "10", snps: 38888 },
  { id: "11", snps: 36468 },
  { id: "12", snps: 35381 },
  { id: "13", snps: 27724 },
  { id: "14", snps: 23227 },
  { id: "15", snps: 21536 },
  { id: "16", snps: 22670 },
  { id: "17", snps: 20160 },
  { id: "18", snps: 21632 },
  { id: "19", snps: 14987 },
  { id: "20", snps: 18327 },
  { id: "21", snps: 10184 },
  { id: "22", snps: 10431 },
  { id: "X", snps: 17908 },
];

export const genome = {
  snps: chromosomes.reduce((sum, c) => sum + c.snps, 0),
  build: "Build 37 autosomal export",
  painting:
    "Chromosome painting at continent scale is essentially continuous Western European, with only small unassigned stretches.",
} as const;

export const chapters = [
  { id: "open", label: "Open" },
  { id: "origins", label: "Origins" },
  { id: "ancient", label: "Deep time" },
  { id: "motherline", label: "Motherline" },
  { id: "kin", label: "Kin" },
  { id: "genome", label: "Genome" },
  { id: "notes", label: "Notes" },
] as const;
