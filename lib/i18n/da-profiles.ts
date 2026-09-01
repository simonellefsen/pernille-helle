type TextBits = {
  tagline?: string;
  lede?: string;
  heroAlt?: string;
  tested?: string;
  originsHeadline?: { lead: string; accent: string };
  originsLede?: string;
  origins?: Record<string, { kicker?: string; summary?: string; detail?: string }>;
  ancientHeadline?: { lead: string; mid: string; end: string };
  ancientLede?: string;
  ancientOrigins?: Record<string, { era?: string; when?: string; summary?: string; detail?: string }>;
  haplogroup?: {
    formed?: string;
    headline?: string;
    known?: string;
    rarityNote?: string;
    painting?: string;
  };
  haploPath?: Record<string, { copy?: string }>;
  motherlineMapCaption?: string;
  motherlineSpotlights?: { title: string; copy: string }[];
  connectionsLede?: string;
  connections?: Record<string, { blurb?: string }>;
  genomePainting?: string;
  comingTeaser?: string;
};

export const daProfiles: Record<string, TextBits> = {
  pernille: {
    tagline: "Et kort skrevet i celler",
    lede: "Et genom fra Kattegat. Is i blodet, hvede i knoglerne, og en sjælden morlinje der stadig peger hjem mod Danmark.",
    heroAlt: "En vinterdansk kyst under et svagt nordlys",
    tested: "FamilyTreeDNA · myOrigins v3 · mtFull Sequence",
    originsHeadline: { lead: "Hundrede procent Europa.", accent: "Næsten det hele nordligt." },
    originsLede:
      "FamilyTreeDNA myOrigins v3 maler Pernille som helt europæisk. Klik på en skive. Tallene er skøn, ikke et slægtstræ — men de er høje.",
    origins: {
      scandinavia: {
        kicker: "Hovedstrømmen",
        summary:
          "Det meste af Pernilles autosomale afstamning ligger i Skandinavien — Danmark, Sverige, Norge og den bredere nordiske halvø. Det er landskabet, hendes nyere slægt kommer fra.",
        detail:
          "FamilyTreeDNAs myOrigins v3 placerer 71 % af hendes autosomale DNA hos skandinaviske referencepopulationer. Det er ikke et pas. Det er en statistisk lighed: lange fælles kromosomstykker, der mest ligner mennesker med dybe rødder i nord. Bøgeskov, vinterkyster og Kattegat står i centrum af den historie.",
      },
      "central-europe": {
        kicker: "Den indre flod",
        summary:
          "En væsentlig andel peger syd for Østersøen — Tyskland, Alperne, Donau-bækkenet og det ældre bondeland i Europa.",
        detail:
          "Otteogtyve procent af Pernilles autosomale DNA matcher centraleuropæiske referencer. Signalet følger ofte neolitisk agerbrug, bronzealderkorridorer og senere middelalderlig bevægelse over den nordeuropæiske slette. Det er den anden stemme i hendes genom: ikke et modsætningsforhold til Skandinavien, men den indre strøm der blev ved med at møde Nordsøen.",
      },
      isles: {
        kicker: "Et spor i tidevandet",
        summary:
          "Et meget lille signal fra De Britiske Øer. En rimelig læsning er rester af Helles irske kapitel under et andet navn — eller nordsø-støj.",
        detail:
          "Under to procent af den autosomale maling falder hos England, Wales og Skotland. FamilyTreeDNA advarer om, at spor som dette let kan fejlattribueres. En rimelig læsning er rester af Helles 19 % “Irland” under den nærliggende britiske etiket — de to klynger er dem, metoden blander sammen. Det kan også være almindelig nordsø-støj. Uanset hvad er det en hvisken, ikke et kapitel.",
      },
    },
    ancientHeadline: { lead: "Halv jæger.", mid: "Så markerne.", end: "Så hestene." },
    ancientLede:
      "Under det moderne kort ligger en langt ældre opskrift. FamilyTreeDNA splitter europæisk autosomalt DNA i tre dybe strømme. Pernilles blanding er usædvanligt tung på den første.",
    ancientOrigins: {
      hunter: {
        when: "Fra ca. 45.000 år siden",
        summary:
          "Halvdelen af Pernilles europæiske autosomale afstamning ligner stadig de første moderne mennesker, der gik ind på et tøende kontinent.",
        detail:
          "Efter sidste istid levede jæger-samler-bånd fra La Brana i Spanien til Loschbour i Luxembourg og Motala i Sverige. Deres mitokondrie- og Y-linjer sætter stadig præg i Nordeuropa. Hos Pernille er det ældre jægerlag ikke en fodnote — det er den største oldtidskomponent, FamilyTreeDNA rapporterer.",
      },
      farmer: {
        when: "Ca. 8.000–7.000 år siden",
        summary:
          "Hvede, keramik og faste dale. Bønder flyttede fra Nærorienten langs Anatolien ind i Donau og videre mod Spanien.",
        detail:
          "Linjebåndkeramik og tragtbægerkulturer ændrede Europas kost og gener. Otteogtredive procent af Pernilles oldtidseuropæiske afstamning følger den ekspansion — den samme brede bevægelse, der efterlod slebne økser på flodterrasser og, langt senere, den alpine mumie kendt som Ötzi.",
      },
      invader: {
        when: "Ca. 5.800 år siden",
        summary: "En mindre, skarpere puls fra den pontisk-kaspiske steppe: heste, vogne og bronze.",
        detail:
          "Yamnaya-beslægtede hyrder drog vestpå i bronzealderen og blandede sig med europæiske bønder. FamilyTreeDNA lægger den steppe-strøm i “Metal Age Invader.” Hos Pernille er det 13 % — nok til at være ægte, ikke nok til at dominere. Klokkebæger og senere snorekeramik ligger nedstrøms for den ankomst.",
      },
    },
    haplogroup: {
      formed: "forgrenede sig fra H10a1 omkring 2250 f.Kr.",
      headline: "En dansk morlinje fra middelalderen.",
      known: "2 nævner Danmark",
      rarityNote:
        "Det er en sjælden maternel kvist. Kun en håndfuld testere deler i øjeblikket H10a1u, og den kendte geografiske nål er Danmark.",
    },
    haploPath: {
      H10a1u: {
        copy: "Pernilles egen maternelle haplogruppe. Mutationen sidder på en ældre bronzealder-H10a1-baggrund (omkring 2250 f.Kr.), men den seneste kvinde, de fire nulevende testere deler, levede sandsynligvis omkring 1090 e.Kr. Det er en tretusindårig tråd med næsten ingen overlevende søstre. To af de fire testere nævner Danmark.",
      },
      H10a1: {
        copy: "Forældregrenen opstod i ældre bronzealder, da Unětice, Kisapostag og beslægtede kulturer begravede mennesker i Karpaterbækkenet og det alpine forland. Mange af Pernilles tætteste oldtidsmatcher på morlinjen sidder her.",
      },
      H10a: {
        copy: "Et kort trin ældre end H10a1. Bronzealderens Europa er allerede i bevægelse: rav, kobber og ægteskaber over lange afstande.",
      },
      H10: {
        copy: "H10 er den sidste brede maternelle ane, Pernille deler med flere senere kendte — en senneolitisk kvinde, hvis døtre til sidst kom til at omfatte riddere, konger og en dansk linje.",
      },
      H: {
        copy: "Haplogruppe H er den store europæiske morfamilie. Den opstod uden for Europa, i det nordlige Nærorient og det sydlige Kaukasus, og spredte sig vestpå før sidste glacialmaksimum. Omkring fire ud af ti europæiske morlinjer er H i dag.",
      },
      HV: {
        copy: "HV er forælder til H og V. Isen trækker sig tilbage. Menneskene er stadig få, og hver overlevende datterlinje er næsten et mirakel.",
      },
      R0: {
        copy: "R0 ligger dybt under det senere europæiske og nærorientalske mortræ. Her er linjen allerede ude af Afrika, i en koldere verden af megafauna og små grupper.",
      },
      R: {
        copy: "R er en af de store eurasiske stammer. Næsten hver morlinje i Europa, Indien og store dele af Asien er et barnebarn af R.",
      },
      N: {
        copy: "N er den eurasiske søster til M. Efter vandringen ud af Afrika befolkede N’s efterkommere nord og vest.",
      },
      L3: {
        copy: "L3 er den afrikanske mor til alle ikke-afrikanske morlinjer. Et lille antal af hendes efterkommere forlod kontinentet. Pernilles mitokondrier husker stadig den afrejse.",
      },
      "L (mt-Eve)": {
        copy: "Mitokondriel Eve er ikke den første kvinde. Hun er den seneste kvinde, som alle nulevende mennesker arver en morlinje fra. Vi alle — også Pernille — mødes her.",
      },
      "L'AA": {
        copy: "Før Homo sapiens var mortræet allerede splittet. Dette er det dybe knudepunkt, FamilyTreeDNA bruger til neandertaler-skellet — en fætter, ikke en ane på den direkte morlinje, men en påmindelse om at familien er ældre end vores art.",
      },
      "L'AAAB": {
        copy: "Det ældste trin på dette diagram. Sima de los Huesos og Denisova-skellet lever i den skala. Alle moderne mennesker deler det.",
      },
    },
    motherlineMapCaption:
      "En skematisk vandring: Østafrika → Nærorienten → haplogruppe H → Danmark. Ikke et GPS-spor — en mitokondriel rute af døtre.",
    motherlineSpotlights: [
      {
        title: "En sjælden kvist",
        copy: "Det er en sjælden maternel kvist. Kun en håndfuld testere deler i øjeblikket H10a1u, og den kendte geografiske nål er Danmark.",
      },
      {
        title: "H før isen",
        copy: "Haplogruppe H opstod uden for Europa, i det nordlige Nærorient og det sydlige Kaukasus, og spredte sig vestpå. I dag er den omkring 40 % af europæiske morlinjer.",
      },
      {
        title: "Hjemmevand",
        copy: "Den levende geografi for H10a1u er dansk. Oldtids-slægtninge på H10a1 dukker op fra Langeland til Karpaterbækkenet — en bronzealderfamilie, der senere fandt øerne.",
      },
    ],
    connectionsLede:
      "FamilyTreeDNA lister bemærkelsesværdige og arkæologiske personer, der deler en maternel ane med Pernille. Det er ikke fætre i nogen families forstand. Det er sjove fakta om en tråd, der er tusinder af år lang. Levende match-navne vises ikke her.",
    connections: {
      sweyn: {
        blurb:
          "Danmarks sidste vikingekonge, søn af Estrid. Pernille og Svend deler en maternel ane i haplogruppe H — en stenalderkvinde, ikke en hof-bedstemor. Nærheden er symbolsk, og dansk.",
      },
      birger: {
        blurb:
          "Jarlen der hjalp med at grundlægge Stockholm og styrede Sverige gennem det 13. århundrede. Igen er det fælles knudepunkt haplogruppe H, tusinder af år før dem begge.",
      },
      bayard: {
        blurb:
          "Ridderen uden frygt og dadel. Han og Pernille deler det tættere H10-knudepunkt — stadig senneolitikum, stadig et sjovt faktum, og sjældnere: omkring én ud af 115 FamilyTreeDNA-kunder sidder så tæt på Bayard på morlinjen.",
      },
      wenman: {
        blurb:
          "En tidlig engelsk nybygger i Jamestown, identificeret arkæogenomisk i 2024. Han sidder på H10e; Pernille sidder på H10a1u. De mødes i H10, omkring én ud af 115 kunder så tæt. Stadig neolitisk, stadig et sjovt faktum.",
      },
      henry: {
        blurb:
          "Sidste ottonske kejser, kronet i Rom i 1014. Hans maternelle kvist er H7b2a1'3; Pernilles er H10a1u. De mødes i H.",
      },
      agnes: {
        blurb:
          "Datter af kejser Henrik 4., et hængsel mellem saliske, hohenstaufiske og babenbergske huse. Den fælles ane her er langt ældre: R0, i ældre palæolitikum.",
      },
      takabuti: {
        blurb:
          "En thebansk adelskvinde fra det 25. dynasti. Hendes haplogruppe sidder på H4a1. Den fælles mor er H, otte årtusinder før enten gravlæggelse eller fødsel.",
      },
      ditchling: {
        blurb:
          "En klokkebægermand begravet nær Ditchling Road. Bønder med stor senere indflydelse på den britiske genpulje. Forbindelsens haplogruppe H4a1a1a; fælles knude H.",
      },
      slonk: {
        blurb:
          "Yngre jernalder i Storbritannien. Omkring fireogtyve år ved døden, knyttet til jernalderens Britannien. Hans linje er H1rd.",
      },
      bogoevj: {
        blurb:
          "En vikingetidsmand fra Bogøvej på Langeland. En af de mest lokale oldtidsmatcher i filen: samme forældre-haplogruppe H10a1, samme hav. Y-linje I-L338.",
      },
      ulrich: {
        blurb:
          "En kvinde på 53–92 år, Unětice-kultur, ældre bronzealder. Hun sidder på samme H10a1-knude som Pernille — blandt de tætteste arkæologiske slægtninge i sættet.",
      },
      balaton: {
        blurb:
          "En teenage-dreng fra Kisapostag-kulturen. Ældre bronzealder i Ungarn, Y-linje I-P222. Endnu en H10a1-ledsager fra Karpaterbækkenet.",
      },
      gustorzyn: {
        blurb: "Trzciniec-kultur, yngre bronzealder i Polen. Y-linje I-L233. Morlinjen er stadig H10a1.",
      },
      kuckenburg: {
        blurb: "En 11–12-årig dreng fra Unstrut-gruppen, yngre bronzealder. Hans egen haplogruppe er H10a1m.",
      },
      dunaalmas: { blurb: "Jernalderens Hallstatt-verden ved Donau. Y-linje G-CTS342." },
      viminacium: { blurb: "En mand fra den romertids-nekropol i Viminacium, ved Donau-grænsen." },
      sedgeford: {
        blurb: "Tidlig middelalder i England. Hans linje er H10a1a1. Nordsøen er allerede en vej.",
      },
      goldenen: {
        blurb:
          "En kvinde fra den sene avarperiode i Mödling. To andre Goldenen Stiege-begravelser (225 og 410) deler den samme dybe morlinje.",
      },
      kivutkalns: {
        blurb:
          "En midaldrende mand fra en lilleø-kirkegård ved Daugava, begravet med sten og en bennål. Bronzealderens Letland, haplogruppe H10a.",
      },
      neanderthal: {
        blurb:
          "Alle nulevende mennesker deler dette knudepunkt. Neandertalere er fætre på en langt ældre maternel gren, ikke en privat familiehemmelighed. Forbindelsen er ægte og universel.",
      },
      sima: {
        blurb:
          "Bengraven. Ældste sekventerede hominin-DNA, med en mitokondriel historie tættere på denisovaer end på neandertalere. Igen: en fælles menneskelig dybde, ikke et personligt relikvie.",
      },
    },
    genomePainting:
      "Kromosommaling på kontinentskala er i praksis sammenhængende vesteuropæisk, med kun små ufordelte stræk.",
  },
  helle: {
    tagline: "Nord, indland og Irland",
    lede: "Et genom delt i tre over Vesteuropa — Skandinavien, den centraleuropæiske slette og en tydelig irsk strøm — med en nordisk mor-kvist fra det tiende århundrede.",
    heroAlt: "Atlanterhavsklipper på Irlands vestkyst ved skumring",
    originsHeadline: { lead: "Stadig hele Europa.", accent: "Men tre stemmer, ikke én." },
    originsLede:
      "FamilyTreeDNA myOrigins v3 maler Helle som helt europæisk og splitter hende næsten ligeligt mellem Skandinavien og Centraleuropa, med en væsentlig irsk tredjedel. Klik på en skive.",
    origins: {
      scandinavia: {
        kicker: "Den nordlige strøm",
        summary:
          "Enogfyrre procent af Helles autosomale afstamning matcher skandinaviske referencer — Danmark, Sverige, Norge og den bredere nordiske halvø.",
        detail:
          "Det er den samme Kattegat-verden som andre kits i arkivet, men det er ikke hele historien. For Helle er det én af to lige søjler, ikke et flertal på halvfjerds procent.",
      },
      "central-europe": {
        kicker: "Den indre flod",
        summary:
          "Yderligere enogfyrre procent peger mod Centraleuropa — Tyskland, Alperne, Donau-bækkenet og det ældre bondeland.",
        detail:
          "På linje med Skandinavien. Helles genom er et hængsel mellem den nordiske verden og den centraleuropæiske slette, en balance Pernilles kit ikke viser.",
      },
      ireland: {
        kicker: "Den vestlige dør",
        summary:
          "Nitten procent matcher irske referencer. Det er ikke et spor. Det er en tredje stemme, høj nok til at være et kapitel.",
        detail:
          "Nitten procent er bedsteforældre-skala, hvis man tager tallet som et menneske — eller en vestlig britisk-ø-klynge, FamilyTreeDNA har mærket Irland. Deres eget metodepapir siger, at at skille Irland fra Storbritannien sænker nøjagtigheden for begge. Pernille arvede intet af det, hvilket passer til få lange blokke, hendes far ikke gav videre, ikke et vikingetids-drys. Stadig et skøn, ikke en kirkebog.",
      },
    },
    ancientHeadline: { lead: "Næsten halv jæger.", mid: "Så markerne.", end: "En lettere steppe." },
    ancientLede:
      "Helles oldtidseuropæiske opskrift ligger tæt på det nordlige mønster: et stort jæger-samler-lag, en stærk bondestrøm og en mindre bronzealderpuls fra steppen.",
    ancientOrigins: {
      hunter: {
        when: "Fra ca. 45.000 år siden",
        summary:
          "Niogfyrre procent af Helles europæiske autosomale afstamning ligner stadig de første moderne mennesker, der gik ind på et tøende kontinent.",
        detail:
          "Efter sidste istid levede jæger-samler-bånd fra La Brana i Spanien til Loschbour i Luxembourg og Motala i Sverige. Hos Helle er det ældre jægerlag den største oldtidskomponent, FamilyTreeDNA rapporterer — lige under halvdelen.",
      },
      farmer: {
        when: "Ca. 8.000–7.000 år siden",
        summary:
          "Hvede, keramik og faste dale. Bønder flyttede fra Nærorienten langs Anatolien ind i Donau og videre mod Atlanten.",
        detail:
          "Fyrre procent af Helles oldtidseuropæiske afstamning følger den ekspansion — linjebåndkeramik, tragtbæger og den lange vandring af marker mod Irlands vest.",
      },
      invader: {
        when: "Ca. 5.800 år siden",
        summary: "En mindre puls fra den pontisk-kaspiske steppe: heste, vogne og bronze.",
        detail:
          "Yamnaya-beslægtede hyrder drog vestpå i bronzealderen. FamilyTreeDNA lægger den strøm i “Metal Age Invader.” Hos Helle er det 11 % — til stede, ikke dominerende.",
      },
    },
    haplogroup: {
      formed: "forgrenede sig fra H1e1b1f omkring 1700 f.Kr.",
      headline: "En nordisk morlinje fra omkring 950 e.Kr.",
      known: "Danmark 6, Norge 2, Sverige 1",
      rarityNote:
        "Femten testere deler i øjeblikket H1e1b1f1. De nævnte oprindelser er Danmark, Norge og Sverige — en skandinavisk kvist, bredere end Pernilles sjældnere H10a1u.",
    },
    haploPath: {
      H1e1b1f1: {
        copy: "Helles egen maternelle haplogruppe. Forælderen H1e1b1f er bronzealder (FamilyTreeDNA-middel 1700 f.Kr.). Den seneste kvinde, de femten nulevende testere deler, levede sandsynligvis omkring 950 e.Kr. (95 % 717–1176). Seks nævner Danmark, to Norge, én Sverige. Det er en vikingetidskvist på en langt ældre centraleuropæisk familie.",
      },
      H1e1b1f: {
        copy: "Forældregrenen opstod i bronzealderen. FamilyTreeDNA skønner H1e1b1f omkring 1700 f.Kr. (95 % interval groft 2455–1022 f.Kr.).",
      },
      H1e1b1: {
        copy: "Et senneolitisk knudepunkt. Mange af Helles tættere oldtidsmatcher sidder under H1e1b1, omkring 3350 f.Kr.",
      },
      H1e1: {
        copy: "H1e1 er en velberejst europæisk morfamilie. FamilyTreeDNA arkiverer stadig Beethoven her; hår sekventeret i 2023 er H1b1, så det reelle fælles knudepunkt med komponisten er H1.",
      },
      H1: {
        copy: "H1 er en af de store europæiske døtre af H, der bredte sig med postglacialt og neolitisk Europa.",
      },
      H: {
        copy: "Haplogruppe H opstod uden for Europa, i det nordlige Nærorient og det sydlige Kaukasus, og spredte sig vestpå. Omkring fire ud af ti europæiske morlinjer er H i dag.",
      },
      HV: { copy: "HV er forælder til H og V. Isen trækker sig tilbage. Menneskene er stadig få." },
      R0: { copy: "R0 ligger dybt under det senere europæiske og nærorientalske mortræ." },
      N: {
        copy: "N er den eurasiske søster til M. Efter vandringen ud af Afrika befolkede N’s efterkommere nord og vest.",
      },
      L3: { copy: "L3 er den afrikanske mor til alle ikke-afrikanske morlinjer." },
      "L (mt-Eve)": {
        copy: "Mitokondriel Eve er ikke den første kvinde. Hun er den seneste kvinde, som alle nulevende mennesker arver en morlinje fra.",
      },
      "L'AAAB": { copy: "Det ældste trin på dette diagram. Alle moderne mennesker deler det." },
    },
    motherlineMapCaption:
      "En skematisk vandring: Østafrika → Nærorienten → haplogruppe H → H1e1b1f1 i Skandinavien.",
    motherlineSpotlights: [
      {
        title: "En nordisk kvist",
        copy: "Femten testere deler H1e1b1f1. Nævnte oprindelser: Danmark, Norge og Sverige. Bredere end visse sjældnere H10-kviste, stadig en lille familie.",
      },
      {
        title: "Gennem H1",
        copy: "H1 breder sig over postglacialt Europa. Helles linje er et sent, nordligt blad på det store træ.",
      },
      {
        title: "Hjemmevand",
        copy: "Den levende geografi for denne haplogruppe er skandinavisk. Det autosomale irske kapitel sidder ved siden af, ikke inde i mitokondrierne.",
      },
    ],
    connectionsLede:
      "FamilyTreeDNA lister bemærkelsesværdige og arkæologiske personer, der deler en maternel ane med Helle. Det er ikke fætre i nogen families forstand. Levende match-navne vises ikke her.",
    connections: {
      beethoven: {
        blurb:
          "FamilyTreeDNA lister stadig Beethoven på H1e1. Ægte hår sekventeret i 2023 (Begg m.fl.) er H1b1+16362C. Helle møder den linje i H1, omkring 5200 f.Kr. — et sjovt faktum ét trin højere end Discover-siden siger, stadig ikke et familieportræt.",
      },
      sweyn: {
        blurb: "Danmarks sidste vikingekonge. Det fælles knudepunkt er haplogruppe H, tusinder af år før dem begge.",
      },
      birger: {
        blurb: "Jarlen der hjalp med at grundlægge Stockholm. Igen er den fælles ane H, i stenalderen.",
      },
      agnes: {
        blurb:
          "Et hængsel mellem saliske, hohenstaufiske og babenbergske huse. Den fælles ane her er langt ældre: R0.",
      },
      slonk: {
        blurb:
          "Yngre jernalder i Storbritannien. En ung mand knyttet til jernalderens Britannien, der møder Helles linje i haplogruppe H.",
      },
      avar: {
        blurb:
          "Flere sene avarbegravelser i Mödling sidder på Helles tættere H1e1b1-knude — et karpaterbækken-kapitel af samme morlinje (Wang m.fl. 2025).",
      },
      stambolovo: {
        blurb:
          "En tidlig jernalderkvinde i Stambolovo (I15848, Lazaridis m.fl. 2022). Hendes egen kvist er H1e1b1j. Omkring én ud af 2.100 kunder sidder så tæt. En balkansk jernalder-søster til familien, der senere navngiver H1e1b1f1.",
      },
      brucken: {
        blurb:
          "En ca. 11-årig pige fra den thüringiske verden (Gretzinger m.fl. 2025). Samme H1e1b1-knude som avarerne og den bulgarske jernalderkvinde — Centraleuropa holder stadig morlinjen i folkevandringstiden.",
      },
      neanderthal: {
        blurb:
          "Alle nulevende mennesker deler dette knudepunkt. En fætter på en langt ældre maternel gren, ikke en privat familiehemmelighed.",
      },
      sima: {
        blurb: "Bengraven. Ældste sekventerede hominin-DNA. En fælles menneskelig dybde, ikke et personligt relikvie.",
      },
    },
    genomePainting:
      "Kromosommaling på kontinentskala er vesteuropæisk, med skandinaviske, centraleuropæiske og irske komponenter snarere end én blok.",
  },
};

export const daComingTeaser = "Det næste kit lander her. Samme fornavnsregel, samme kapitler.";
