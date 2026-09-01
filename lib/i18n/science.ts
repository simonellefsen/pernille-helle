import type { Locale } from "./config";

export type TwigCopy = {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  image: string;
  imageAlt: string;
  cards: { title: string; copy: string }[];
  papers: { cite: string; point: string }[];
};

export type ScienceCopy = {
  twigs: Record<string, TwigCopy>;
  beyond: {
    kicker: string;
    title: string;
    accent: string;
    lede: string;
    modelTitle: string;
    modelCopy: string;
    traitTitle: string;
    traitLede: string;
    hetTitle: string;
    hetCopy: (name: string, pct: string) => string;
    rohTitle: string;
    rohCopy: (n: string, longest: string) => string;
    missing: string;
    derivedHom: string;
    het: string;
    ancestralHom: string;
    traits: Record<string, { label: string; note: string }>;
  };
  ibd: {
    kicker: string;
    title: string;
    accent: string;
    lede: (cm: string, segs: string, x: string) => string;
    expected: string;
    empty: string;
    hover: string;
    chrom: (id: string, cm: string, n: string) => string;
    note: string;
    silent: string;
  };
  ireland: {
    kicker: string;
    title: string;
    accent: string;
    lede: string;
    cards: { title: string; copy: string }[];
  };
  split: {
    kicker: string;
    title: string;
    accent: string;
    lede: string;
    mother: string;
    helle: string;
    grandfather: string;
    motherCopy: string;
    helleCopy: (pct: string, expected: string) => string;
    grandfatherCopy: string;
    originsTitle: string;
    originsLede: string;
    colHelle: string;
    colPernille: string;
    colOther: string;
    irelandTitle: string;
    irelandCopy: string;
    chromTitle: string;
    chromHelle: string;
    chromSilent: string;
    xTitle: string;
    xCopy: (hellePct: string, maternal: string) => string;
    mitoTitle: string;
    mitoCopy: string;
    note: string;
  };
};

export const science: Record<Locale, ScienceCopy> = {
  en: {
    twigs: {
      H10a1u: {
      kicker: "A closer look at H10a1u",
      title: "A thousand-year twig",
      accent: " on a three-thousand-year thread.",
      lede: "FamilyTreeDNA dates the living mother of H10a1u to about 1090 CE. That is young. The mutation itself is not. The interesting part is the silence in between.",
      image: "/images/medieval-denmark.jpg",
      imageAlt: "A reconstructed medieval Danish village of turf-roofed timber houses by a winter fjord, with a small wooden church at dusk",
      cards: [
        {
          title: "2250 BCE, then a long hush",
          copy: "H10a1u branched from H10a1 in the Early Bronze Age. FamilyTreeDNA needs at least two non-identical testers before it names a twig, so 1090 CE is the most recent woman shared by the four people on the branch today — not the year the mutation appeared. For about three millennia the line survived as a thin thread. Most of her Bronze Age sisters left larger families. This one did not, until a medieval Danish woman whose daughters still have testers.",
        },
        {
          title: "A clock on four people",
          copy: "The 95% interval is 687–1422 CE: late Viking Age through the High Middle Ages. With only four testers the clock is noisy; add a tester and the date will move. Two of the four name Denmark. No ancient genome has been called H10a1u itself — the twig is too rare and too recent for archaeology to have caught it yet.",
        },
        {
          title: "H10 came with the fields",
          copy: "Haplogroup H was almost absent in Mesolithic hunter-gatherers and rose as farming spread. A 2013 Nature Communications study of ancient H genomes found that much of today’s H diversity was already in place by the mid-Neolithic. H10 itself turns up among Early Neolithic farmers in Central Europe. A 2018 study of 24,216 Danes found haplogroup H in about 45% of the country, the product of several Neolithic founder events, not one village.",
        },
        {
          title: "H10a1 walked the Bronze Age",
          copy: "The parent branch is a Central European Bronze Age family: Únětice in Lower Austria, Kisapostag in Hungary, Trzciniec in Poland, later a Viking Age man at Bogøvej on Langeland (CGG106777). That is the corridor that eventually reaches Denmark. Pernille’s H10a1u is one named daughter of that family, not a separate origin story.",
        },
        {
          title: "Around 1100 CE in Denmark",
          copy: "If the living root sat in Denmark, she lived after official Christianization, in the century of stone churches and early royal administration — the world that becomes the Valdemars. Mitochondria cannot prove her parish. They can say the surviving daughters of this twig still point here.",
        },
        {
          title: "A Mitotree name",
          copy: "H10a1u is a FamilyTreeDNA Mitotree label. YFull’s public MTree currently splits H10a1 into other letters (H10a1a, H10a1c, H10a1d…) and does not list a u. Fine-scale names move as more full sequences arrive. The biology is the shared mutations; the letter is a filing system.",
        },
      ],
      papers: [
        {
          cite: "Brotherton et al., Nature Communications 2013",
          point: "Ancient haplogroup H genomes: H rare in Mesolithic Europe, diversified by the mid-Neolithic.",
        },
        {
          cite: "Bybjerg-Grauholm et al., PLOS ONE 2018",
          point: "24,216 Danes: H ~45%, multiple founder events; H carriers look strongly Danish on the autosomes.",
        },
        {
          cite: "Allentoft et al., Nature 2024",
          point: "100 ancient Danish genomes: Ertebølle hunter-gatherers replaced by Funnelbeaker farmers, then by steppe-related people. Local Mesolithic DNA left little in later Danes.",
        },
      ],
      },
      H1e1b1f1: {
        kicker: "A closer look at H1e1b1f1",
        title: "A Viking-Age twig",
        accent: " on a Late Neolithic family.",
        lede: "FamilyTreeDNA dates the living mother of H1e1b1f1 to about 950 CE. That is the late Viking Age. The parent branch is more than two millennia older. Fifteen testers, not four — and this time the parent family already has names in the Danish Middle Ages.",
        image: "/images/viking-age-denmark.jpg",
        imageAlt: "A late tenth-century Danish coastal settlement of turf-roofed longhouses by a grey fjord at dusk",
        cards: [
          {
            title: "1700 BCE, then a long hush",
            copy: "H1e1b1f1 branched from H1e1b1f in the Bronze Age — FamilyTreeDNA’s mean is 1705 BCE (95% 2455–1022 BCE). The 950 CE date is the most recent woman shared by the fifteen testers on this named twig, not the year the mutation appeared. YFull defines the parent H1e1b1f by A9545G and makes it younger (formed ~300 BCE, TMRCA ~1200 CE). Clocks disagree; the biology is a thin northern thread that only bushy-tips in the last thousand years.",
          },
          {
            title: "A clock on fifteen people",
            copy: "The 95% interval is 717–1176 CE: mid-Viking Age through the early Valdemars. Fifteen testers tighten the clock relative to a four-person twig. Six name Denmark, two Norway, one Sweden, six unknown. The living geography is Scandinavian. No ancient genome has been called H1e1b1f1 itself — the last letter is too young — but the parent family is already on Danish ground in the Middle Ages.",
          },
          {
            title: "H1 is the great western daughter",
            copy: "H1 is marked by G3010A and is the largest European daughter of H. A 2005 Genome Research study placed its expansion in post-glacial western Europe, with a strong Iberian signal. In Denmark H1 is common: about 15% of a forensic Danish sample, and H1 makes up roughly 38% of all H in 24,216 Danes. H1e (G5460A) is much rarer there — about 0.5% in that forensic set. Helle’s line is a late northern leaf on a very large western tree.",
          },
          {
            title: "H1e1b1 walked the Iron Age",
            copy: "The closer archaeological kin sit at H1e1b1, around 3350 BCE: an Early Iron Age woman at Stambolovo in Bulgaria (I15848, Lazaridis 2022), an ~11-year-old Thuringian girl at Brücken in Saxony-Anhalt (436–542 CE, Gretzinger 2025), and several Late Avar burials at Mödling–Goldene Stiege in Lower Austria (600–800 CE, Wang 2025). That is a Central European motherline that later has a Scandinavian named daughter — not a line that began in a Viking hall.",
          },
          {
            title: "Already in Denmark around 950",
            copy: "YFull places an ancient Danish mitogenome (MK059610) on H1e1b1f, and a sister twig H1e1b1d is a cluster of Danish sequences. An early medieval burial at Sankt Mathias has been called H1e1b1. The parent family was in Denmark in the same centuries as the living TMRCA. If the woman around 950 CE sat in Scandinavia, she lived in Harald Bluetooth’s and Sweyn Forkbeard’s world — conversion, royal power, and the North Sea as a road.",
          },
          {
            title: "Beethoven is not H1e1",
            copy: "FamilyTreeDNA still lists Ludwig van Beethoven as an H1e1 “notable connection.” Hair sequenced in 2023 (Begg et al., Current Biology) is haplogroup H1b1+16362C. The shared node with Helle is H1, around 5200 BCE, not H1e1. Discover pages lag published genomes. The fun fact survives only one step higher on the tree.",
          },
        ],
        papers: [
          {
            cite: "Pereira et al., Genome Research 2005",
            point: "H1 and H3 as post-glacial western European expansions, with a strong Iberian signal.",
          },
          {
            cite: "Bybjerg-Grauholm et al., PLOS ONE 2018",
            point: "24,216 Danes: H ~45%; H1 is the largest H subclade in the country.",
          },
          {
            cite: "Begg et al., Current Biology 2023",
            point: "Beethoven’s authentic hair is H1b1+16362C, not the H1e1 that some public trees still show.",
          },
          {
            cite: "Lazaridis et al. 2022; Gretzinger et al. 2025; Wang et al. 2025",
            point: "Ancient H1e1b1 in Iron Age Bulgaria, Thuringian Saxony-Anhalt, and Avar-period Mödling.",
          },
        ],
      },
    },
    beyond: {
      kicker: "Beyond myOrigins",
      title: "What the chip still holds.",
      accent: " FamilyTreeDNA did not plot this.",
      lede: "The raw autosomal file is a map of 700,000 sites. Ethnicity percentages are one reading of it. Newer population genomics — and a grandmother sitting on the same chip — let us read others.",
      modelTitle: "The three-way mix is not the academic three-way",
      modelCopy:
        "FamilyTreeDNA splits European autosomes into Hunter-Gatherer, Early Farmer, and Metal Age Invader. Since Haak 2015 and Allentoft 2024 the research model is different: Western hunter-gatherers (WHG), Anatolian farmers, and Yamnaya-related steppe (itself Eastern hunter-gatherers plus Caucasus). In that framework present-day Danes usually carry a large farming layer, a substantial steppe layer, and a smaller WHG layer. A 50% “hunter-gatherer” / 13% “invader” result is a proprietary clustering, not evidence that half the genome is Ertebølle. The 2024 Danish transect shows two near-total turnovers: local Mesolithic people left little. Most “forager” ancestry in a modern Dane arrived with farmers from the south, or folded inside steppe ancestry from the east.",
      traitTitle: "Ancestry-informative sites on the chip",
      traitLede:
        "A handful of well-studied SNPs were typed. These are population associations, not a medical report and not a portrait.",
      hetTitle: "Diversity on the array",
      hetCopy: (name, pct) =>
        `${name}’s called markers are ${pct}% heterozygous. That is a normal European figure on this kind of microarray, which is enriched for common variants.`,
      rohTitle: "Runs of homozygosity",
      rohCopy: (n, longest) =>
        `${n} stretches longer than 1.5 Mb, longest ${longest} cM. That pattern fits a northern European without a recent cousin marriage — not a closed village.`,
      missing: "Not on this chip",
      derivedHom: "Homozygous for the derived allele",
      het: "Heterozygous",
      ancestralHom: "Homozygous for the ancestral allele",
      traits: {
        lactase: {
          label: "Lactase persistence",
          note: "European -13910C>T. TT/CT associated with digesting milk in adulthood.",
        },
        eyes: {
          label: "Eye colour",
          note: "GG strongly associated with blue/grey eyes in Europeans; AA with brown.",
        },
        skin24a5: {
          label: "Light skin (SLC24A5)",
          note: "The A allele is nearly fixed in Europe and is the main light-skin variant.",
        },
        skin45a2: {
          label: "Light skin (SLC45A2)",
          note: "European light-skin allele; still variable in southern Europe.",
        },
        irf4: {
          label: "Hair / freckling",
          note: "T associated with lighter hair and freckling in Europeans.",
        },
        mc1r7: {
          label: "Red hair (R151C)",
          note: "A well-known red-hair loss-of-function allele.",
        },
        mc1r8: {
          label: "Red hair (R160W)",
          note: "A second common red-hair allele.",
        },
        earwax: {
          label: "Earwax type",
          note: "TT dry earwax (East Asian); CC wet earwax (typical in Europe).",
        },
        edar: {
          label: "EDAR V370A",
          note: "East Asian hair-thickness allele; ancestral in Europe.",
        },
        secretor: {
          label: "ABO secretor status",
          note: "AA associated with non-secretor status in Europeans.",
        },
      },
    },
    ibd: {
      kicker: "Shared haplotypes",
      title: "The DNA Helle actually passed.",
      accent: " Not an ethnicity pie.",
      lede: (cm, segs, x) =>
        `Where the two kits cannot be opposite homozygotes for a long run, they can still share a haplotype. Those candidate segments sum to ${cm} cM on the autosomes (${segs} stretches) and ${x} cM on X. A paternal grandmother is expected to share about 1,500–2,000 cM autosomally, in a handful of long pieces broken by recombination in the father.`,
      expected: "Grandmother–granddaughter expectation",
      empty: "No long segment on this chromosome — the father likely passed the other grandfather’s copy, or only scraps below the length threshold.",
      hover: "Each amber block is a run without opposite homozygotes, ≥5 cM.",
      chrom: (id, cm, n) => `Chromosome ${id} · ${cm} cM in ${n} segment${n === "1" ? "" : "s"}`,
      note: "Unphased identity-by-state, gaps over 1 Mb break a run, lengths from a sex-averaged chromosome map. This is not FamilyTreeDNA’s match list and not a court exhibit. Opposite sites cannot sit inside a shared segment. Two opposite calls on X are more likely chip errors than a break in a father’s X.",
      silent: "No long IBD",
    },
    ireland: {
      kicker: "The 19% Irish question",
      title: "A western chapter.",
      accent: " Not a passport.",
      lede: "Nineteen percent is large enough to be a person, or a mislabelled west. FamilyTreeDNA can be wrong about the name on the slice even when the slice itself is real.",
      cards: [
        {
          title: "Grandparent-scale, if you take the number literally",
          copy: "A fully Irish grandparent would leave about 25% on average (often roughly 18–32% after recombination). A fully Irish great-grandparent would leave about 12.5%. Nineteen percent sits between those two. It could be one mixed-Irish grandparent, one Irish plus another partly Irish great-grandparent, or several more distant western lines adding up. It is not a trace. FamilyTreeDNA flags traces under 2%. This is a third of her western European pie.",
        },
        {
          title: "The label is the fragile part",
          copy: "FamilyTreeDNA’s own myOrigins 3.0 paper says splitting Ireland from Great Britain reduces accuracy for both. Two thousand years of Gaels, Picts, Anglo-Saxons, Normans and later traffic blur the clusters. Their public example: a daughter can score more “Great Britain” than both parents combined, and less “Ireland” than either, because the two populations are close. So 19% “Ireland” is better read as a western British-Isles-like signal. It may be Irish. It may be western Scottish, Ulster, or a mix. The chip is not a parish register.",
        },
        {
          title: "The leftover may be Pernille’s <2% Britain",
          copy: "A random quarter of 19% would still be about 5% in the granddaughter. She has 0% Ireland and under 2% England, Wales & Scotland. Those two FamilyTreeDNA clusters are the ones the method paper says get swapped. So the tiny British trace is a fair candidate for the scraps of Helle’s western chapter that did pass — painted with the neighbouring name. It is not enough: 5% expected, <2% seen. Most of the 19% still never arrived. And traces are the easiest slices to invent, so the <2% might also be ordinary North Sea noise. Plausible remnant, not a proof.",
        },
        {
          title: "Not Viking Dublin by itself",
          copy: "Danish–Irish contact in the ninth to eleventh centuries is real. A thousand years later that would be a whisper unless many lines carried it. Nineteen percent is too loud for “a Viking in Dublin” as the sole source. If the number is genealogical, the person is more likely in the last two or three centuries than in the sagas. If the number is a painting error, the west is still there — just not necessarily Ireland on a map.",
        },
      ],
    },
    split: {
      kicker: "Mother and father’s mother",
      title: "What differs.",
      accent: " What could not have come from Helle.",
      lede: "Pernille has two copies of each autosome: one from her mother, one from her father. The father’s copy is a shuffle of Helle and the paternal grandfather. Mitochondria and one X follow different rules. That is enough to say what is Helle’s gift, what is the mother’s line, and what never passed.",
      mother: "Mother",
      helle: "Helle",
      grandfather: "Father’s father",
      motherCopy:
        "Half the autosomes, the whole motherline (H10a1u), and one X. She is not on this chip, so her haplotype cannot be painted as blocks — only inferred where Helle’s copy is already known.",
      helleCopy: (pct, expected) =>
        `About ${pct}% of the autosomes assigned as long shared haplotypes (expectation ~${expected}%). Nearly the whole paternal X. None of the mitochondria.`,
      grandfatherCopy:
        "The rest of the paternal autosomes: chromosomes where father passed the other grandfather’s copy, plus any Helle segments shorter than the cutoff. Not named on this site.",
      originsTitle: "Recent geography, pulled apart",
      originsLede:
        "If the mother and the paternal grandfather were similar to each other, their mix is (Pernille − ¼ Helle) ÷ ¾. Deep time barely moves. The recent map does.",
      colHelle: "Helle",
      colPernille: "Pernille",
      colOther: "The other ¾",
      irelandTitle: "Ireland did not pass",
      irelandCopy:
        "Helle is 19% Irish. A random quarter of that would still be ~5% in Pernille. She has 0% Ireland and a <2% England/Wales/Scotland trace. Those two labels are the ones myOrigins itself says it mixes up. The trace may be leftover western DNA under the neighbouring name. It is still far too small: most of the 19% did not pass. The loud Irish chapter is Helle’s.",
      chromTitle: "Which chromosomes the father handed on",
      chromHelle: "Mostly Helle’s copy",
      chromSilent: "No long Helle block — the other grandfather",
      xTitle: "The X is the tell",
      xCopy: (hellePct, maternal) =>
        `${hellePct}% of the X map is compatible with Helle. That is the X her son received and gave to his daughter. At ${maternal} sites Helle is homozygous and Pernille is not: the extra allele is from Pernille’s mother. Two opposite calls on the whole X are more likely chip errors than a break.`,
      mitoTitle: "Mitochondria stay with the mother",
      mitoCopy:
        "H10a1u is Pernille’s mother’s line. H1e1b1f1 is Helle’s. They meet only at haplogroup H, around 8000 BCE. A father’s mother cannot give mitochondria to a granddaughter.",
      note: "Unphased chips cannot separate the mother’s haplotype from the paternal grandfather’s in regions that are not assigned to Helle. The 20% Helle figure is a lower bound: short shared stretches are counted with the grandfather. Percentages are myOrigins v3 estimates, not a pedigree.",
    },
  },
  da: {
    twigs: {
      H10a1u: {
      kicker: "Et nærmere kig på H10a1u",
      title: "En tusindårig kvist",
      accent: " på en tretusindårig tråd.",
      lede: "FamilyTreeDNA daterer den nulevende mor til H10a1u til omkring 1090 e.Kr. Det er ungt. Mutationen selv er det ikke. Det interessante er stilheden derimellem.",
      image: "/images/medieval-denmark.jpg",
      imageAlt: "En rekonstrueret middelalderlig dansk landsby med tømmerhuse og tørvetage ved en vinterfjord, med en lille trækirke i skumringen",
      cards: [
        {
          title: "2250 f.Kr., derefter en lang stilhed",
          copy: "H10a1u forgrenede sig fra H10a1 i ældre bronzealder. FamilyTreeDNA kræver mindst to ikke-identiske testere, før en kvist får navn, så 1090 e.Kr. er den seneste kvinde, de fire nulevende på grenen deler — ikke året mutationen opstod. I omkring tre årtusinder overlevede linjen som en tynd tråd. De fleste bronzealder-søstre efterlod større familier. Denne gjorde ikke, før en middelalderlig dansk kvinde, hvis døtre stadig har testere.",
        },
        {
          title: "Et ur på fire mennesker",
          copy: "95 %-intervallet er 687–1422 e.Kr.: sen vikingetid gennem højmiddelalderen. Med kun fire testere er uret støjende; én tester mere, og datoen rykker. To af de fire nævner Danmark. Intet oldtidsgenom er kaldt H10a1u — kvisten er for sjælden og for ung til, at arkæologien har fanget den endnu.",
        },
        {
          title: "H10 kom med markerne",
          copy: "Haplogruppe H var næsten fraværende hos mesolitiske jæger-samlere og steg, da agerbruget spredte sig. Et Nature Communications-studie fra 2013 af oldtidens H-genomer viste, at meget af nutidens H-diversitet allerede var på plads i mellemneolitikum. H10 selv dukker op blandt tidlige neolitiske bønder i Centraleuropa. Et studie fra 2018 af 24.216 danskere fandt haplogruppe H hos omkring 45 % af landet, resultatet af flere neolitiske grundlæggerbegivenheder, ikke én landsby.",
        },
        {
          title: "H10a1 vandrede i bronzealderen",
          copy: "Forældregrenen er en centraleuropæisk bronzealderfamilie: Únětice i Niederösterreich, Kisapostag i Ungarn, Trzciniec i Polen, senere en vikingetidsmand fra Bogøvej på Langeland (CGG106777). Det er korridoren, der til sidst når Danmark. Pernilles H10a1u er en navngiven datter af den familie, ikke en separat oprindelseshistorie.",
        },
        {
          title: "Omkring 1100 e.Kr. i Danmark",
          copy: "Hvis den nulevende rod sad i Danmark, levede hun efter den officielle kristning, i århundredet med stenkirker og tidlig kongelig administration — den verden, der bliver Valdemarernes. Mitokondrier kan ikke bevise hendes sogn. De kan sige, at de overlevende døtre af denne kvist stadig peger herhen.",
        },
        {
          title: "Et Mitotree-navn",
          copy: "H10a1u er en FamilyTreeDNA Mitotree-etiket. YFulls offentlige MTree splitter i øjeblikket H10a1 i andre bogstaver (H10a1a, H10a1c, H10a1d…) og lister ikke et u. De finkornede navne rykker, efterhånden som flere fulde sekvenser kommer. Biologien er de fælles mutationer; bogstavet er et arkivsystem.",
        },
      ],
      papers: [
        {
          cite: "Brotherton m.fl., Nature Communications 2013",
          point: "Oldtidens haplogruppe H-genomer: H sjælden i mesolitisk Europa, diversificeret i mellemneolitikum.",
        },
        {
          cite: "Bybjerg-Grauholm m.fl., PLOS ONE 2018",
          point: "24.216 danskere: H ~45 %, flere grundlæggerbegivenheder; H-bærere ser stærkt danske ud på autosomerne.",
        },
        {
          cite: "Allentoft m.fl., Nature 2024",
          point: "100 olddanske genomer: Ertebølle-jægere afløst af tragtbægerbønder, derefter af steppe-beslægtede. Lokalt mesolitisk DNA efterlod lidt i senere danskere.",
        },
      ],
      },
      H1e1b1f1: {
        kicker: "Et nærmere kig på H1e1b1f1",
        title: "En vikingetidskvist",
        accent: " på en senneolitisk familie.",
        lede: "FamilyTreeDNA daterer den nulevende mor til H1e1b1f1 til omkring 950 e.Kr. Det er sen vikingetid. Forældregrenen er mere end to årtusinder ældre. Femten testere, ikke fire — og denne gang har forældrefamilien allerede navne i den danske middelalder.",
        image: "/images/viking-age-denmark.jpg",
        imageAlt: "En dansk kystbebyggelse fra slutningen af 900-tallet med tørretækte langhuse ved en grå fjord i skumringen",
        cards: [
          {
            title: "1700 f.Kr., derefter en lang stilhed",
            copy: "H1e1b1f1 forgrenede sig fra H1e1b1f i bronzealderen — FamilyTreeDNAs middel er 1705 f.Kr. (95 % 2455–1022 f.Kr.). Datoen 950 e.Kr. er den seneste kvinde, de femten testere på denne navngivne kvist deler, ikke året mutationen opstod. YFull definerer forælderen H1e1b1f ved A9545G og gør den yngre (dannet ~300 f.Kr., TMRCA ~1200 e.Kr.). Uhrene er uenige; biologien er en tynd nordlig tråd, der først busker i det sidste årtusind.",
          },
          {
            title: "Et ur på femten mennesker",
            copy: "95 %-intervallet er 717–1176 e.Kr.: midt-vikingetid gennem de tidlige Valdemarer. Femten testere strammer uret i forhold til en kvist med fire. Seks nævner Danmark, to Norge, én Sverige, seks ukendt. Den levende geografi er skandinavisk. Intet oldtidsgenom er kaldt H1e1b1f1 — det sidste bogstav er for ungt — men forældrefamilien er allerede på dansk jord i middelalderen.",
          },
          {
            title: "H1 er den store vestlige datter",
            copy: "H1 er mærket af G3010A og er den største europæiske datter af H. Et Genome Research-studie fra 2005 lagde dens ekspansion i postglacialt Vesteuropa, med et stærkt iberisk signal. I Danmark er H1 almindelig: omkring 15 % af et forensisk dansk sample, og H1 udgør groft 38 % af al H hos 24.216 danskere. H1e (G5460A) er langt sjældnere dér — omkring 0,5 % i det forensiske sæt. Helles linje er et sent nordligt blad på et meget stort vestligt træ.",
          },
          {
            title: "H1e1b1 vandrede i jernalderen",
            copy: "De tættere arkæologiske slægtninge sidder ved H1e1b1, omkring 3350 f.Kr.: en tidlig jernalderkvinde i Stambolovo i Bulgarien (I15848, Lazaridis 2022), en ca. 11-årig thüringisk pige i Brücken i Sachsen-Anhalt (436–542 e.Kr., Gretzinger 2025) og flere senavariske begravelser ved Mödling–Goldene Stiege i Niederösterreich (600–800 e.Kr., Wang 2025). Det er en centraleuropæisk morlinje, der senere får en skandinavisk navngiven datter — ikke en linje der begyndte i en vikingehal.",
          },
          {
            title: "Allerede i Danmark omkring 950",
            copy: "YFull placerer et olddansk mitogenom (MK059610) på H1e1b1f, og en søsterkvist H1e1b1d er en klynge af danske sekvenser. En tidlig middelalderlig begravelse ved Sankt Mathias er kaldt H1e1b1. Forældrefamilien var i Danmark i de samme århundreder som den nulevende TMRCA. Hvis kvinden omkring 950 e.Kr. sad i Skandinavien, levede hun i Harald Blåtands og Svend Tveskægs verden — omvendelse, kongemagt og Nordsøen som vej.",
          },
          {
            title: "Beethoven er ikke H1e1",
            copy: "FamilyTreeDNA lister stadig Ludwig van Beethoven som en H1e1-“bemærkelsesværdig forbindelse.” Hår sekventeret i 2023 (Begg m.fl., Current Biology) er haplogruppe H1b1+16362C. Det fælles knudepunkt med Helle er H1, omkring 5200 f.Kr., ikke H1e1. Discover-sider halter efter offentliggjorte genomer. Det sjove faktum overlever kun ét trin højere på træet.",
          },
        ],
        papers: [
          {
            cite: "Pereira m.fl., Genome Research 2005",
            point: "H1 og H3 som postglaciale vesteuropæiske ekspansioner, med et stærkt iberisk signal.",
          },
          {
            cite: "Bybjerg-Grauholm m.fl., PLOS ONE 2018",
            point: "24.216 danskere: H ~45 %; H1 er den største H-undergruppe i landet.",
          },
          {
            cite: "Begg m.fl., Current Biology 2023",
            point: "Beethovens ægte hår er H1b1+16362C, ikke det H1e1 nogle offentlige træer stadig viser.",
          },
          {
            cite: "Lazaridis m.fl. 2022; Gretzinger m.fl. 2025; Wang m.fl. 2025",
            point: "Oldtids-H1e1b1 i jernalderens Bulgarien, thüringisk Sachsen-Anhalt og avar-tidens Mödling.",
          },
        ],
      },
    },
    beyond: {
      kicker: "Bagom myOrigins",
      title: "Det chippen stadig gemmer.",
      accent: " FamilyTreeDNA tegnede ikke dette.",
      lede: "Den rå autosomale fil er et kort over 700.000 steder. Etnicitetsprocenter er én læsning. Nyere populationsgenomik — og en bedstemor på samme chip — lader os læse andre.",
      modelTitle: "Tredelingen er ikke den akademiske tredeling",
      modelCopy:
        "FamilyTreeDNA splitter europæiske autosomer i jæger-samler, tidlig bonde og metalalderens indvandrer. Siden Haak 2015 og Allentoft 2024 er forskningsmodellen en anden: vestlige jæger-samlere (WHG), anatolske bønder og Yamnaya-beslægtet steppe (selv østlige jæger-samlere plus Kaukasus). I den ramme bærer nulevende danskere typisk et stort bondelag, et væsentligt steppelag og et mindre WHG-lag. Et resultat på 50 % “jæger-samler” / 13 % “indvandrer” er en proprietær klynge, ikke bevis for at halvdelen af genomet er Ertebølle. Det danske tværsnit fra 2024 viser to næsten totale udskiftninger: de lokale mesolitiske mennesker efterlod lidt. Det meste “jæger”-afstamning hos en moderne dansker kom med bønder sydfra, eller ligger foldet ind i steppeafstamning østfra.",
      traitTitle: "Afstamningsinformative steder på chippen",
      traitLede:
        "En håndfuld velstuderede SNP’er blev typet. Det er populationsassociationer, ikke en lægeerklæring og ikke et portræt.",
      hetTitle: "Diversitet på arrayet",
      hetCopy: (name, pct) =>
        `${name}s kaldte markører er ${pct} % heterozygote. Det er et normalt europæisk tal på denne slags microarray, som er beriget for almindelige varianter.`,
      rohTitle: "Homozygote stræk",
      rohCopy: (n, longest) =>
        `${n} stræk længere end 1,5 Mb, længst ${longest} cM. Mønstret passer til en nordeuropæer uden et nyligt fætter-ægteskab — ikke en lukket landsby.`,
      missing: "Ikke på denne chip",
      derivedHom: "Homozygot for det afledte allel",
      het: "Heterozygot",
      ancestralHom: "Homozygot for det ancestrale allel",
      traits: {
        lactase: {
          label: "Laktasepersistens",
          note: "Europæisk -13910C>T. TT/CT associeret med at fordøje mælk som voksen.",
        },
        eyes: {
          label: "Øjenfarve",
          note: "GG stærkt associeret med blå/grå øjne hos europæere; AA med brune.",
        },
        skin24a5: {
          label: "Lys hud (SLC24A5)",
          note: "A-allelet er næsten fast i Europa og er den vigtigste lys-hud-variant.",
        },
        skin45a2: {
          label: "Lys hud (SLC45A2)",
          note: "Europæisk lys-hud-allel; stadig variabel i Sydeuropa.",
        },
        irf4: {
          label: "Hår / fregner",
          note: "T associeret med lysere hår og fregner hos europæere.",
        },
        mc1r7: {
          label: "Rødt hår (R151C)",
          note: "Et velkendt rødhårs-allel med tab af funktion.",
        },
        mc1r8: {
          label: "Rødt hår (R160W)",
          note: "Et andet almindeligt rødhårs-allel.",
        },
        earwax: {
          label: "Ørevoks",
          note: "TT tørt ørevoks (østasiatisk); CC vådt ørevoks (typisk i Europa).",
        },
        edar: {
          label: "EDAR V370A",
          note: "Østasiatisk hårtykkelses-allel; ancestralt i Europa.",
        },
        secretor: {
          label: "ABO-sekretorstatus",
          note: "AA associeret med non-sekretorstatus hos europæere.",
        },
      },
    },
    ibd: {
      kicker: "Delte haplotyper",
      title: "Det DNA, Helle faktisk gav videre.",
      accent: " Ikke en etnicitetstærte.",
      lede: (cm, segs, x) =>
        `Hvor de to kits ikke kan være modsatte homozygoter i et langt stræk, kan de stadig dele en haplotype. De kandidat-segmenter summer til ${cm} cM på autosomerne (${segs} stræk) og ${x} cM på X. En fars mor forventes at dele omkring 1.500–2.000 cM autosomalt, i en håndfuld lange stykker brudt af rekombination hos faderen.`,
      expected: "Forventning bedstemor–sønnedatter",
      empty: "Intet langt segment på dette kromosom — faderen har sandsynligvis givet den anden bedstefars kopi videre, eller kun stumper under længdetærsklen.",
      hover: "Hver ravfarvet blok er et stræk uden modsatte homozygoter, ≥5 cM.",
      chrom: (id, cm, n) => `Kromosom ${id} · ${cm} cM i ${n} segment${n === "1" ? "" : "er"}`,
      note: "Ufaselt identity-by-state, huller over 1 Mb bryder et stræk, længder fra et kønsgennemsnitligt kromosomkort. Dette er ikke FamilyTreeDNAs matchliste og ikke et retsdokument. Modsatte steder kan ikke ligge i et delt segment. To modsatte kald på X er snarere chipfejl end et brud i et fars-X.",
      silent: "Ingen lang IBD",
    },
    ireland: {
      kicker: "De 19 % irske",
      title: "Et vestligt kapitel.",
      accent: " Ikke et pas.",
      lede: "Nitten procent er stort nok til at være et menneske — eller et fejlmærket vest. FamilyTreeDNA kan tage fejl af navnet på skiven, selv når skiven selv er ægte.",
      cards: [
        {
          title: "Bedsteforældre-skala, hvis man tager tallet bogstaveligt",
          copy: "En fuldt irsk bedsteforælder ville i gennemsnit efterlade omkring 25 % (ofte groft 18–32 % efter rekombination). En fuldt irsk oldeforælder omkring 12,5 %. Nitten procent ligger derimellem. Det kan være én delvis irsk bedsteforælder, én irsk plus en anden delvis irsk oldeforælder, eller flere fjernere vestlige linjer der lægges sammen. Det er ikke et spor. FamilyTreeDNA flagger spor under 2 %. Dette er en tredjedel af hendes vesteuropæiske tærte.",
        },
        {
          title: "Etiketten er den skrøbelige del",
          copy: "FamilyTreeDNAs eget myOrigins 3.0-papir siger, at at skille Irland fra Storbritannien sænker nøjagtigheden for begge. To tusinde års gælere, piktere, angelsaksere, normannere og senere trafik slører klyngerne. Deres eget eksempel: en datter kan score mere “Great Britain” end begge forældre tilsammen og mindre “Ireland” end nogen af dem, fordi de to populationer ligger tæt. Så 19 % “Irland” læses bedre som et vestligt britisk-ø-lignende signal. Det kan være irsk. Det kan være vestskotsk, Ulster eller en blanding. Chippen er ikke en kirkebog.",
        },
        {
          title: "Resten kan være Pernilles <2 % Britannien",
          copy: "En tilfældig fjerdedel af 19 % ville stadig være omkring 5 % hos sønnedatteren. Hun har 0 % Irland og under 2 % England, Wales og Skotland. De to FamilyTreeDNA-klynger er dem, metodepapiret siger bliver byttet om. Så det lille britiske spor er en rimelig kandidat til de stumper af Helles vestlige kapitel, der gik videre — malet med nabonavnet. Det slår ikke til: 5 % forventet, <2 % set. Det meste af de 19 % ankom aldrig. Og spor er de skiver, der lettest opfindes, så de <2 % kan også være almindelig nordsø-støj. Plausibel rest, ikke et bevis.",
        },
        {
          title: "Ikke vikingetidens Dublin alene",
          copy: "Dansk-irsk kontakt i 800- og 1000-tallet er ægte. Tusind år senere ville det være en hvisken, medmindre mange linjer bar det. Nitten procent er for højt til “en viking i Dublin” som eneste kilde. Hvis tallet er genealogisk, sidder personen snarere i de sidste to-tre århundreder end i sagaerne. Hvis tallet er en malerifejl, er vesten der stadig — bare ikke nødvendigvis Irland på et kort.",
        },
      ],
    },
    split: {
      kicker: "Mor og fars mor",
      title: "Hvad der adskiller sig.",
      accent: " Hvad der ikke kan komme fra Helle.",
      lede: "Pernille har to kopier af hvert autosom: én fra sin mor, én fra sin far. Farens kopi er en blanding af Helle og farfaderen. Mitokondrier og ét X følger andre regler. Det er nok til at sige, hvad der er Helles gave, hvad der er morens linje, og hvad der aldrig gik videre.",
      mother: "Mor",
      helle: "Helle",
      grandfather: "Farfar",
      motherCopy:
        "Halvdelen af autosomerne, hele morlinjen (H10a1u) og ét X. Hun er ikke på denne chip, så hendes haplotype kan ikke males som blokke — kun sluttes, hvor Helles kopi allerede er kendt.",
      helleCopy: (pct, expected) =>
        `Omkring ${pct} % af autosomerne tildelt som lange delte haplotyper (forventning ~${expected} %). Næsten hele det paternelle X. Ingen af mitokondrierne.`,
      grandfatherCopy:
        "Resten af de paternelle autosomer: kromosomer, hvor faderen gav den anden bedstefars kopi videre, plus eventuelle Helle-segmenter kortere end tærsklen. Ikke navngivet på dette site.",
      originsTitle: "Den nære geografi, trukket fra hinanden",
      originsLede:
        "Hvis moren og farfaderen lignede hinanden, er deres blanding (Pernille − ¼ Helle) ÷ ¾. Dyb tid rykker sig næsten ikke. Det nære kort gør.",
      colHelle: "Helle",
      colPernille: "Pernille",
      colOther: "De andre ¾",
      irelandTitle: "Irland gik ikke videre",
      irelandCopy:
        "Helle er 19 % irsk. En tilfældig fjerdedel af det ville stadig være ~5 % hos Pernille. Hun har 0 % Irland og et spor på <2 % England/Wales/Skotland. De to etiketter er dem, myOrigins selv siger, den blander sammen. Sporet kan være resterende vestligt DNA under nabonavnet. Det er stadig alt for lille: det meste af de 19 % gik ikke videre. Det høje irske kapitel er Helles.",
      chromTitle: "Hvilke kromosomer faderen rakte videre",
      chromHelle: "Mest Helles kopi",
      chromSilent: "Ingen lang Helle-blok — den anden bedstefar",
      xTitle: "X er tegnet",
      xCopy: (hellePct, maternal) =>
        `${hellePct} % af X-kortet er foreneligt med Helle. Det er det X, hendes søn fik og gav til sin datter. Ved ${maternal} steder er Helle homozygot og Pernille ikke: det ekstra allel er fra Pernilles mor. To modsatte kald på hele X er snarere chipfejl end et brud.`,
      mitoTitle: "Mitokondrier bliver hos mor",
      mitoCopy:
        "H10a1u er Pernilles mors linje. H1e1b1f1 er Helles. De mødes først i haplogruppe H, omkring 8000 f.Kr. En fars mor kan ikke give mitokondrier til en sønnedatter.",
      note: "Ufaselte chips kan ikke skille morens haplotype fra farfaderens i områder, der ikke er tildelt Helle. Tallet på 20 % Helle er en nedre grænse: korte delte stræk tælles med farfaderen. Procenter er myOrigins v3-skøn, ikke en stamtavle.",
    },
  },
};

export function getScience(locale: Locale): ScienceCopy {
  return science[locale] ?? science.en;
}
