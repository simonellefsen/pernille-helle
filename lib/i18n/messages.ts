import type { Locale } from "./config";

export type Messages = {
  meta: {
    siteTitle: string;
    siteDescription: string;
    siteOg: string;
    profileTitle: (name: string) => string;
    sharedTitle: string;
    sharedDescription: string;
  };
  home: {
    kicker: string;
    titleAccent1: string;
    titleAccent2: string;
    lede: string;
    stories: string;
    openGenome: string;
    sharedKicker: string;
    sharedTitle: string;
    sharedLede: string;
    coming: string;
    nextKit: string;
    waiting: string;
  };
  nav: {
    allStories: string;
    stories: string;
    shared: string;
    jump: string;
    close: string;
    chapters: { id: string; label: string }[];
    langEn: string;
    langDa: string;
    language: string;
  };
  hero: {
    storySuffix: string;
    begin: string;
  };
  origins: {
    kicker: string;
    ringAria: string;
  };
  ancient: {
    kicker: string;
  };
  motherline: {
    kicker: string;
    intro: string;
    scrub: string;
    timeline: string;
    tmrca: string;
    testers: string;
    knownOrigins: string;
    path: string;
    mapAlt: string;
    interval: (range: string) => string;
  };
  connections: {
    kicker: string;
    title: string;
    titleAccent: string;
    all: string;
    historical: string;
    ancientDna: string;
    deepTime: string;
    rare: string;
    common: string;
    sharedAncestor: (node: string, year: string) => string;
  };
  genome: {
    kicker: string;
    markers: string;
    skyline: string;
    intro: string;
    chromosome: (id: string) => string;
    snpShare: (share: string) => string;
    hover: string;
  };
  notes: {
    kicker: string;
    title: string;
    p1: string;
    p2: (haplo: string) => string;
    p3: (name: string) => string;
    p4: (name: string) => string;
    kinshipBefore: (name: string) => string;
    kinshipAfter: (other: string, role: string) => string;
    sharedLink: string;
    footer: (name: string) => string;
  };
  kinshipBanner: {
    grandmother: (other: string, name: string) => string;
    granddaughter: (name: string, other: string) => string;
    rest: string;
    cta: string;
  };
  kinshipRoles: {
    "paternal grandmother": string;
    "paternal granddaughter": string;
  };
  originLabels: Record<string, string>;
  ancientLabels: Record<string, string>;
  era: Record<string, string>;
  place: Record<string, string>;
  shared: {
    heroKicker: string;
    heroAccent: string;
    heroLede: string;
    allStories: string;
    helleStory: string;
    pernilleStory: string;
    relationKicker: string;
    relationTitle: string;
    helleRole: string;
    helleCopy: string;
    expected: string;
    expectedTitle: string;
    expectedCopy: string;
    pernilleRole: string;
    pernilleCopy: string;
    originsKicker: string;
    originsTitle: string;
    originsAccent: string;
    originsLede: string;
    rowHint: string;
    deepKicker: string;
    deepTitle: string;
    deepLede: string;
    mitoKicker: string;
    mitoTitle: string;
    mitoAccent: string;
    autoKicker: string;
    autoTitle: (n: string) => string;
    autoLede: (identical: string, opposite: string, x: string) => string;
    autoNote: string;
    togetherKicker: string;
    togetherTitle: string;
    togetherLede: string;
    heroAlt: string;
    threadsAlt: string;
    forkKicker: string;
    forkCopy: string;
    forkCaption: string;
    forkAria: string;
    identical: string;
    oneAllele: string;
    opposite: string;
    chromLabel: (id: string) => string;
    oppositeIdentical: (opp: string, ident: string) => string;
    xCopy: string;
    wholeCopy: string;
    rareCopy: string;
    restCopy: string;
    originBlurb: string;
    irelandBlurb: string;
    islesBlurb: string;
    scandBlurb: string;
    compareNames: string;
  };
  stats: {
    scandinavia: string;
    centralEurope: string;
    ireland: string;
    motherline: string;
    markers: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      siteTitle: "Pernille & Helle",
      siteDescription:
        "Two close genomes: Pernille and her paternal grandmother Helle. Autosomal origins, ancient Europe, motherlines, and what they share.",
      siteOg: "Grandmother and granddaughter. First names only.",
      profileTitle: (name) => `${name} — a DNA story`,
      sharedTitle: "Pernille & Helle — shared ancestry",
      sharedDescription:
        "Helle is Pernille’s father’s mother. They share autosomal DNA, a nearly identical ancient European recipe, and haplogroup H — not the same recent motherline.",
    },
    home: {
      kicker: "Close family",
      titleAccent1: "Grandmother.",
      titleAccent2: "Granddaughter.",
      lede: "Pernille and her father’s mother Helle, named only by first name. Two genomes, one family: autosomal origins, ancient Europe, two motherlines, and the stretch of chromosome a paternal grandmother can leave.",
      stories: "The family",
      openGenome: "Open a genome.",
      sharedKicker: "Paternal grandmother",
      sharedTitle: "Helle & Pernille",
      sharedLede:
        "What they share in origins, deep time, haplogroup H, and 678,311 compared markers — including the X that only a father’s mother can give.",
      coming: "Coming",
      nextKit: "Next kit",
      waiting: "Waiting for ftdna/",
    },
    nav: {
      allStories: "Home",
      stories: "Family",
      shared: "Shared",
      jump: "Jump",
      close: "Close",
      chapters: [
        { id: "open", label: "Open" },
        { id: "origins", label: "Origins" },
        { id: "ancient", label: "Deep time" },
        { id: "motherline", label: "Motherline" },
        { id: "kin", label: "Kin" },
        { id: "genome", label: "Genome" },
        { id: "notes", label: "Notes" },
      ],
      langEn: "EN",
      langDa: "DA",
      language: "Language",
    },
    hero: { storySuffix: "’s DNA story", begin: "Begin" },
    origins: { kicker: "Autosomal ancestry", ringAria: "Ancestry ring" },
    ancient: { kicker: "Ancient European origins" },
    motherline: {
      kicker: "Mitochondrial haplogroup",
      intro:
        "Mitochondria pass from mother to child, almost unchanged. {name}’s full sequence is {id}, which {formed}. The most recent woman of this exact branch likely lived around {tmrca}{interval}. {testers} testers currently sit on the twig — {known}.",
      scrub: "Scrub the motherline",
      timeline: "Haplogroup timeline",
      tmrca: "TMRCA",
      testers: "Testers",
      knownOrigins: "Known origins",
      path: "Path",
      mapAlt: "East African rift at dawn, standing in for mitochondrial Eve’s landscape",
      interval: (range) => ` (95% interval ${range})`,
    },
    connections: {
      kicker: "Shared maternal ancestors",
      title: "Kin across centuries —",
      titleAccent: " and millennia.",
      all: "All",
      historical: "Historical",
      ancientDna: "Ancient DNA",
      deepTime: "Deep time",
      rare: "Rare connection",
      common: "Shared by everyone",
      sharedAncestor: (node, year) => `shared ancestor ${node} (${year})`,
    },
    genome: {
      kicker: "Autosomal microarray",
      markers: "markers.",
      skyline: " A skyline of chromosomes.",
      intro:
        "The raw genotype file stays private. What you can explore is the shape of the test: how many SNPs were read on each chromosome.",
      chromosome: (id) => `Chromosome ${id}`,
      snpShare: (share) => `SNPs · ${share}% of the file`,
      hover: "Hover or tap a bar.",
    },
    notes: {
      kicker: "How to read this",
      title: "A story, not a verdict.",
      p1: "Ethnicity percentages and ancient components come from FamilyTreeDNA myOrigins version 3. They compare stretches of autosomal DNA with reference populations. They will shift as those references grow. Smaller slices are the most fragile. Shared haplotype blocks between kits were called independently from the raw autosomal CSVs: long runs without opposite homozygotes, not FamilyTreeDNA’s match list.",
      p2: (haplo) =>
        `Haplogroup ${haplo} is from mtFull Sequence. Notable and ancient “connections” mean a shared maternal ancestor at the stated node, often many thousands of years ago. This site does not claim close kinship with kings, mummies, or archaeological strangers.`,
      p3: (name) =>
        `${name} is named only by first name. Living genetic matches are not listed.`,
      p4: (name) =>
        `Landscapes and still lifes were generated for this telling. The DNA helix overlay was modelled in Blender. None of the pictures are portraits of ${name}.`,
      kinshipBefore: (name: string) => `${name} is also part of a `,
      kinshipAfter: (other: string, role: string) => ` with ${other} (${role}).`,
      sharedLink: "shared ancestry",
      footer: (name) => `${name} · data from FamilyTreeDNA, retold for the screen.`,
    },
    kinshipBanner: {
      grandmother: (other, name) => `${other} is ${name}’s father’s mother.`,
      granddaughter: (name, other) => `${name} is ${other}’s father’s mother.`,
      rest: "They share autosomal DNA and a deep haplogroup H — not the same recent motherline.",
      cta: "What they share",
    },
    kinshipRoles: {
      "paternal grandmother": "paternal grandmother",
      "paternal granddaughter": "paternal granddaughter",
    },
    originLabels: {
      scandinavia: "Scandinavia",
      "central-europe": "Central Europe",
      ireland: "Ireland",
      isles: "England, Wales & Scotland",
    },
    ancientLabels: {
      hunter: "Hunter-Gatherer",
      farmer: "Early Farmer",
      invader: "Metal Age Invader",
    },
    era: {
      "Middle Ages": "Middle Ages",
      "Metal Ages": "Metal Ages",
      "Late Stone Age": "Late Stone Age",
      "Stone Age": "Stone Age",
      "Stone Age / Metal Ages": "Stone Age / Metal Ages",
      "Upper Paleolithic": "Upper Paleolithic",
      "Out of Africa": "Out of Africa",
      "Neanderthal split": "Neanderthal split",
      "Denisovan split": "Denisovan split",
      "Deep time": "Deep time",
      Neolithic: "Neolithic",
      "Bronze Age": "Bronze Age",
      "Pleistocene → Mesolithic": "Pleistocene → Mesolithic",
    },
    place: {
      Denmark: "Denmark",
      Scandinavia: "Scandinavia",
      "Central Europe": "Central Europe",
      Europe: "Europe",
      "Near East & Caucasus": "Near East & Caucasus",
      "West Asia": "West Asia",
      "West Eurasia": "West Eurasia",
      Eurasia: "Eurasia",
      "Near East": "Near East",
      "East Africa": "East Africa",
      "Eurasia / Africa": "Eurasia / Africa",
      "Deep time": "Deep time",
      Sweden: "Sweden",
      France: "France",
      Germany: "Germany",
      "Thebes, Egypt": "Thebes, Egypt",
      "Brighton, England": "Brighton, England",
      "Langeland, Denmark": "Langeland, Denmark",
      "Lower Austria": "Lower Austria",
      "Somogy, Hungary": "Somogy, Hungary",
      "Kujawy-Pomorze, Poland": "Kujawy-Pomorze, Poland",
      "Saxony-Anhalt, Germany": "Saxony-Anhalt, Germany",
      "Haskovo, Bulgaria": "Haskovo, Bulgaria",
      "Esztergom, Hungary": "Esztergom, Hungary",
      "Kostolac, Serbia": "Kostolac, Serbia",
      "Norfolk, England": "Norfolk, England",
      Latvia: "Latvia",
      "Atapuerca, Spain": "Atapuerca, Spain",
      "East Francia": "East Francia",
      "Bonn / Vienna": "Bonn / Vienna",
      "Jamestown, Virginia": "Jamestown, Virginia",
    },
    shared: {
      heroKicker: "A family in two kits",
      heroAccent: "Father’s mother. Granddaughter.",
      heroLede:
        "About a quarter of Pernille’s autosomal DNA is expected to come from Helle. The X chromosome almost proves the path: the X Pernille got from her father is the X Helle gave to her son.",
      allStories: "Home",
      helleStory: "Helle’s story",
      pernilleStory: "Pernille’s story",
      relationKicker: "The relationship",
      relationTitle: "One generation on the paternal side.",
      helleRole: "Father’s mother",
      helleCopy:
        "Her son received half her autosomes and her X. He passed half of that — and the same X — to his daughter.",
      expected: "Expected sharing",
      expectedTitle: "~25% autosomal",
      expectedCopy:
        "Grandmother and granddaughter share one of four grandparental chromosome sets, on average. Not a measured FamilyTreeDNA match file — a pedigree expectation.",
      pernilleRole: "Granddaughter",
      pernilleCopy:
        "The other three grandparents, including her mother’s whole motherline, come from elsewhere. That is why the mitochondria diverge.",
      originsKicker: "Ancestral origins",
      originsTitle: "The same house.",
      originsAccent: " Different rooms.",
      originsLede:
        "Both kits are 100% European. Both are built from Scandinavia and Central Europe. Helle adds Ireland; Pernille is more northern.",
      rowHint: "Each row: Pernille left · Helle right",
      deepKicker: "Deep time",
      deepTitle: "Almost the same ancient recipe.",
      deepLede:
        "Hunter, farmer, steppe — the proportions sit within a couple of points. The grandmother’s deep Europe is still visible in the granddaughter.",
      mitoKicker: "Mitochondria",
      mitoTitle: "Two motherlines.",
      mitoAccent: " One ancient H.",
      autoKicker: "The autosomes",
      autoTitle: (n) => `${n} markers, compared.`,
      autoLede: (identical, opposite, x) =>
        `Where both kits called a SNP, ${identical}% have the same genotype and only ${opposite}% are opposite homozygotes. Opposite sites cannot sit inside a shared segment. Chromosome X is the tell: two opposite sites in ${x} — the paternal X.`,
      autoNote:
        "Identity-by-state on an unphased microarray, plus candidate shared haplotypes called as long runs without opposite homozygotes. Not a published IBD match list. A window onto sharing, not a court exhibit. Raw genotypes stay in the private folder.",
      togetherKicker: "Read together",
      togetherTitle: "Open each genome.",
      togetherLede:
        "Helle’s Irish third and Pernille’s stronger Scandinavia are both true. The shared story is the overlap: Europe, the forager-farmer mix, haplogroup H, and a father’s X.",
      heroAlt: "Two generations walking a winter Danish shore, seen from behind",
      threadsAlt: "Two silk threads twisting together then forking apart",
      forkKicker: "They do not share a recent motherline",
      forkCopy:
        "Mitochondria come from the mother. Helle is the father’s mother, so her H1e1b1f1 line did not pass to Pernille. Pernille’s H10a1u comes from her own mother’s line. The two threads only meet at haplogroup H, around 8000 BCE.",
      forkCaption: "Near East & Caucasus. Then the lines split: H10 → H10a → H10a1 versus H1 → H1e → H1e1b1f.",
      forkAria: "Motherline fork at haplogroup H",
      identical: "Identical genotype",
      oneAllele: "One allele in common",
      opposite: "Opposite homozygotes",
      chromLabel: (id) => `Chromosome ${id}`,
      oppositeIdentical: (opp, ident) => `opposite · ${ident}% identical`,
      xCopy:
        "Almost no opposite homozygotes on X. That is the signature of a father’s mother: Pernille’s paternal X is the X Helle gave to her son.",
      wholeCopy: "No opposite homozygotes on this chromosome. A shared segment can cover the whole thing.",
      rareCopy: "Opposite genotypes are vanishingly rare here — a long stretch is compatible with sharing.",
      restCopy:
        "Opposite homozygotes mark places they cannot be sharing a DNA segment. The rest is compatible with sharing, including ordinary European background.",
      originBlurb:
        "Both are 100% European. Scandinavia and Central Europe are the shared rooms of the house. Helle’s western slice is labelled Ireland; Pernille’s leftover west is a trace of England, Wales & Scotland. Click a row.",
      irelandBlurb:
        " Helle’s 19% Irish and Pernille’s <2% England/Wales/Scotland may be the same western signal under two names — most of it never passed.",
      islesBlurb:
        " A trace on Pernille’s side. If it is leftover from Helle’s Irish chapter, FamilyTreeDNA painted the scraps as Britain instead of Ireland. Traces are also the easiest slices to invent.",
      scandBlurb: " Scandinavia is the louder shared current, especially in Pernille.",
      compareNames: "Pernille / Helle",
    },
    stats: {
      scandinavia: "Scandinavia",
      centralEurope: "Central Europe",
      ireland: "Ireland",
      motherline: "Motherline",
      markers: "Markers",
    },
  },
  da: {
    meta: {
      siteTitle: "Pernille og Helle",
      siteDescription:
        "To nære genomer: Pernille og hendes fars mor Helle. Autosomale rødder, oldtidens Europa, morlinjer, og det de deler.",
      siteOg: "Farmor og sønnedatter. Kun fornavne.",
      profileTitle: (name) => `${name} — en DNA-historie`,
      sharedTitle: "Pernille og Helle — fælles aner",
      sharedDescription:
        "Helle er Pernilles fars mor. De deler autosomalt DNA, næsten samme oldtidsopskrift og haplogruppe H — ikke den samme nære morlinje.",
    },
    home: {
      kicker: "Nær familie",
      titleAccent1: "Farmor.",
      titleAccent2: "Sønnedatter.",
      lede: "Pernille og hendes fars mor Helle, nævnt kun med fornavn. To genomer, én familie: autosomale rødder, oldtidens Europa, to morlinjer, og det kromosomstykke en fars mor kan give.",
      stories: "Familien",
      openGenome: "Åbn et genom.",
      sharedKicker: "Fars mor",
      sharedTitle: "Helle og Pernille",
      sharedLede:
        "Det de deler i rødder, dyb tid, haplogruppe H og 678.311 sammenlignede markører — inklusive det X, kun en fars mor kan give.",
      coming: "På vej",
      nextKit: "Næste kit",
      waiting: "Venter på ftdna/",
    },
    nav: {
      allStories: "Hjem",
      stories: "Familien",
      shared: "Fælles",
      jump: "Gå til",
      close: "Luk",
      chapters: [
        { id: "open", label: "Åbn" },
        { id: "origins", label: "Rødder" },
        { id: "ancient", label: "Dyb tid" },
        { id: "motherline", label: "Morlinje" },
        { id: "kin", label: "Slægt" },
        { id: "genome", label: "Genom" },
        { id: "notes", label: "Noter" },
      ],
      langEn: "EN",
      langDa: "DA",
      language: "Sprog",
    },
    hero: { storySuffix: "s DNA-historie", begin: "Begynd" },
    origins: { kicker: "Autosomal afstamning", ringAria: "Afstamningsring" },
    ancient: { kicker: "Oldtidens europæiske rødder" },
    motherline: {
      kicker: "Mitokondriel haplogruppe",
      intro:
        "Mitokondrier går fra mor til barn, næsten uændret. {name}s fulde sekvens er {id}, som {formed}. Den seneste kvinde på netop denne gren levede sandsynligvis omkring {tmrca}{interval}. {testers} testere sidder i øjeblikket på kvisten — {known}.",
      scrub: "Gå morlinjen igennem",
      timeline: "Haplogruppe-tidslinje",
      tmrca: "TMRCA",
      testers: "Testere",
      knownOrigins: "Kendte oprindelser",
      path: "Sti",
      mapAlt: "Østafrikansk riftdal ved daggry, som stand-in for mitokondriel Eves landskab",
      interval: (range) => ` (95 % interval ${range})`,
    },
    connections: {
      kicker: "Fælles maternelle aner",
      title: "Slægt gennem århundreder —",
      titleAccent: " og årtusinder.",
      all: "Alle",
      historical: "Historiske",
      ancientDna: "Oldtids-DNA",
      deepTime: "Dyb tid",
      rare: "Sjælden forbindelse",
      common: "Delt af alle",
      sharedAncestor: (node, year) => `fælles ane ${node} (${year})`,
    },
    genome: {
      kicker: "Autosomalt microarray",
      markers: "markører.",
      skyline: " En silhuet af kromosomer.",
      intro:
        "Den rå genotypefil forbliver privat. Det du kan udforske er testens form: hvor mange SNP’er der blev læst på hvert kromosom.",
      chromosome: (id) => `Kromosom ${id}`,
      snpShare: (share) => `SNP’er · ${share} % af filen`,
      hover: "Hold over eller tryk på en søjle.",
    },
    notes: {
      kicker: "Sådan læses det",
      title: "En historie, ikke en dom.",
      p1: "Etnicitetsprocenter og oldtidskomponenter kommer fra FamilyTreeDNA myOrigins version 3. De sammenligner stræk af autosomalt DNA med referencepopulationer. De vil rykke sig, efterhånden som referencerne vokser. De mindste skiver er de mest skrøbelige. Delte haplotypeblokke mellem kits er kaldt selvstændigt fra de rå autosomale CSV-filer: lange stræk uden modsatte homozygoter, ikke FamilyTreeDNAs matchliste.",
      p2: (haplo) =>
        `Haplogruppe ${haplo} kommer fra mtFull Sequence. Bemærkelsesværdige og arkæologiske “forbindelser” betyder en fælles maternel ane ved det angivne knudepunkt, ofte mange tusinde år tilbage. Sitet hævder ikke nært slægtskab med konger, mumier eller arkæologiske fremmede.`,
      p3: (name) =>
        `${name} nævnes kun med fornavn. Levende genetiske matches vises ikke.`,
      p4: (name) =>
        `Landskaber og stilleben er skabt til denne fortælling. DNA-helixen er modelleret i Blender. Ingen af billederne er portrætter af ${name}.`,
      kinshipBefore: (name: string) => `${name} indgår også i en `,
      kinshipAfter: (other: string, role: string) => ` med ${other} (${role}).`,
      sharedLink: "fælles ane-fortælling",
      footer: (name) => `${name} · data fra FamilyTreeDNA, genfortalt til skærmen.`,
    },
    kinshipBanner: {
      grandmother: (other, name) => `${other} er ${name}s fars mor.`,
      granddaughter: (name, other) => `${name} er ${other}s fars mor.`,
      rest: "De deler autosomalt DNA og en dyb haplogruppe H — ikke den samme nære morlinje.",
      cta: "Det de deler",
    },
    kinshipRoles: {
      "paternal grandmother": "fars mor",
      "paternal granddaughter": "sønnedatter",
    },
    originLabels: {
      scandinavia: "Skandinavien",
      "central-europe": "Centraleuropa",
      ireland: "Irland",
      isles: "England, Wales og Skotland",
    },
    ancientLabels: {
      hunter: "Jæger-samler",
      farmer: "Tidlig bonde",
      invader: "Metalalderens indvandrer",
    },
    era: {
      "Middle Ages": "Middelalder",
      "Metal Ages": "Metalalder",
      "Late Stone Age": "Yngre stenalder",
      "Stone Age": "Stenalder",
      "Stone Age / Metal Ages": "Stenalder / metalalder",
      "Upper Paleolithic": "Ældre palæolitikum",
      "Out of Africa": "Ud af Afrika",
      "Neanderthal split": "Neandertaler-skellet",
      "Denisovan split": "Denisova-skellet",
      "Deep time": "Dyb tid",
      Neolithic: "Neolitikum",
      "Bronze Age": "Bronzealder",
      "Pleistocene → Mesolithic": "Pleistocæn → mesolitikum",
    },
    place: {
      Denmark: "Danmark",
      Scandinavia: "Skandinavien",
      "Central Europe": "Centraleuropa",
      Europe: "Europa",
      "Near East & Caucasus": "Nærorienten og Kaukasus",
      "West Asia": "Vestasien",
      "West Eurasia": "Vestlige Eurasien",
      Eurasia: "Eurasien",
      "Near East": "Nærorienten",
      "East Africa": "Østafrika",
      "Eurasia / Africa": "Eurasien / Afrika",
      "Deep time": "Dyb tid",
      Sweden: "Sverige",
      France: "Frankrig",
      Germany: "Tyskland",
      "Thebes, Egypt": "Theben, Egypten",
      "Brighton, England": "Brighton, England",
      "Langeland, Denmark": "Langeland, Danmark",
      "Lower Austria": "Niederösterreich",
      "Somogy, Hungary": "Somogy, Ungarn",
      "Kujawy-Pomorze, Poland": "Kujawy-Pomorze, Polen",
      "Saxony-Anhalt, Germany": "Sachsen-Anhalt, Tyskland",
      "Haskovo, Bulgaria": "Haskovo, Bulgarien",
      "Esztergom, Hungary": "Esztergom, Ungarn",
      "Kostolac, Serbia": "Kostolac, Serbien",
      "Norfolk, England": "Norfolk, England",
      Latvia: "Letland",
      "Atapuerca, Spain": "Atapuerca, Spanien",
      "East Francia": "Østfranken",
      "Bonn / Vienna": "Bonn / Wien",
      "Jamestown, Virginia": "Jamestown, Virginia",
    },
    shared: {
      heroKicker: "En familie i to kits",
      heroAccent: "Fars mor. Sønnedatter.",
      heroLede:
        "Omkring en fjerdedel af Pernilles autosomale DNA forventes at komme fra Helle. X-kromosomet næsten beviser vejen: det X Pernille fik fra sin far, er det X Helle gav sin søn.",
      allStories: "Hjem",
      helleStory: "Helles historie",
      pernilleStory: "Pernilles historie",
      relationKicker: "Slægtskabet",
      relationTitle: "Én generation på farssiden.",
      helleRole: "Fars mor",
      helleCopy:
        "Hendes søn fik halvdelen af hendes autosomer og hendes X. Han gav halvdelen af det — og det samme X — videre til sin datter.",
      expected: "Forventet overlap",
      expectedTitle: "~25 % autosomalt",
      expectedCopy:
        "Bedstemor og sønnedatter deler i gennemsnit ét af fire bedsteforældre-kromosomsæt. Ikke en målt FamilyTreeDNA-matchfil — en stamtavleforventning.",
      pernilleRole: "Sønnedatter",
      pernilleCopy:
        "De tre andre bedsteforældre, inklusive hele hendes mors morlinje, kommer andetsteds fra. Derfor skilles mitokondrierne.",
      originsKicker: "Anernes geografi",
      originsTitle: "Samme hus.",
      originsAccent: " Forskellige rum.",
      originsLede:
        "Begge kits er 100 % europæiske. Begge er bygget af Skandinavien og Centraleuropa. Helle tilføjer Irland; Pernille er mere nordisk.",
      rowHint: "Hver række: Pernille til venstre · Helle til højre",
      deepKicker: "Dyb tid",
      deepTitle: "Næsten samme oldtidsopskrift.",
      deepLede:
        "Jæger, bonde, steppe — andelene ligger inden for et par procentpoint. Bedstemoderens dybe Europa er stadig synligt hos sønnedatteren.",
      mitoKicker: "Mitokondrier",
      mitoTitle: "To morlinjer.",
      mitoAccent: " Ét ældgammelt H.",
      autoKicker: "Autosomerne",
      autoTitle: (n) => `${n} markører, sammenlignet.`,
      autoLede: (identical, opposite, x) =>
        `Hvor begge kits kaldte en SNP, har ${identical} % samme genotype, og kun ${opposite} % er modsatte homozygoter. Modsatte steder kan ikke ligge i et delt segment. X-kromosomet er tegnet: to modsatte steder i ${x} — det paternelle X.`,
      autoNote:
        "Identity-by-state på et ufaselt microarray, plus kandidat-haplotyper kaldt som lange stræk uden modsatte homozygoter. Ikke en offentliggjort IBD-matchliste. Et vindue ind til deling, ikke et retsdokument. Rå genotyper bliver i den private mappe.",
      togetherKicker: "Læs sammen",
      togetherTitle: "Åbn hvert genom.",
      togetherLede:
        "Helles irske tredjedel og Pernilles stærkere Skandinavien er begge sande. Den fælles historie er overlap: Europa, jæger-bonde-blandingen, haplogruppe H og et fars-X.",
      heroAlt: "To generationer der går langs en vinterdansk kyst, set bagfra",
      threadsAlt: "To silketråde der snoer sig sammen og derefter skilles",
      forkKicker: "De deler ikke en nær morlinje",
      forkCopy:
        "Mitokondrier kommer fra mor. Helle er fars mor, så hendes H1e1b1f1-linje gik ikke videre til Pernille. Pernilles H10a1u kommer fra hendes egen mors linje. De to tråde mødes først i haplogruppe H, omkring 8000 f.Kr.",
      forkCaption: "Nærorienten og Kaukasus. Derefter splitter linjerne: H10 → H10a → H10a1 versus H1 → H1e → H1e1b1f.",
      forkAria: "Morlinje der forgrener sig ved haplogruppe H",
      identical: "Identisk genotype",
      oneAllele: "Ét allel til fælles",
      opposite: "Modsatte homozygoter",
      chromLabel: (id) => `Kromosom ${id}`,
      oppositeIdentical: (opp, ident) => `modsat · ${ident} % identisk`,
      xCopy:
        "Næsten ingen modsatte homozygoter på X. Det er signaturen på en fars mor: Pernilles paternelle X er det X, Helle gav sin søn.",
      wholeCopy: "Ingen modsatte homozygoter på dette kromosom. Et delt segment kan dække det hele.",
      rareCopy: "Modsatte genotyper er forsvindende sjældne her — et langt stræk er foreneligt med deling.",
      restCopy:
        "Modsatte homozygoter markerer steder, de ikke kan dele et DNA-segment. Resten er foreneligt med deling, inklusive almindelig europæisk baggrund.",
      originBlurb:
        "Begge er 100 % europæiske. Skandinavien og Centraleuropa er husets fælles rum. Helles vestlige skive er mærket Irland; Pernilles resterende vest er et spor af England, Wales og Skotland. Klik på en række.",
      irelandBlurb:
        " Helles 19 % irsk og Pernilles <2 % England/Wales/Skotland kan være det samme vestlige signal under to navne — det meste gik aldrig videre.",
      islesBlurb:
        " Et spor hos Pernille. Hvis det er rester af Helles irske kapitel, har FamilyTreeDNA malet stumperne som Britannien i stedet for Irland. Spor er også de skiver, der lettest opfindes.",
      scandBlurb: " Skandinavien er den højeste fælles strøm, især hos Pernille.",
      compareNames: "Pernille / Helle",
    },
    stats: {
      scandinavia: "Skandinavien",
      centralEurope: "Centraleuropa",
      ireland: "Irland",
      motherline: "Morlinje",
      markers: "Markører",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages.en;
}
