import {
  ancientOrigins,
  chromosomes,
  connections,
  genome,
  haploPath,
  haplogroup,
  origins,
  person,
} from "@/lib/story";
import type { Profile } from "@/lib/types";

export const pernille: Profile = {
  slug: "pernille",
  firstName: person.firstName,
  status: "published",
  tested: person.tested,
  tagline: person.tagline,
  lede: "A genome from the North Sea. Ice in the blood, wheat in the bones, and a rare maternal line that still points home to Denmark.",
  heroImage: "/images/hero-coast.jpg",
  heroAlt: "A winter Danish coastline under a faint aurora",
  heroStats: [
    { label: "Scandinavia", value: `${origins[0].percent}%`, color: "aurora" },
    { label: "Motherline", value: haplogroup.id, color: "amber" },
    {
      label: "Markers",
      value: genome.snps.toLocaleString("en-GB"),
      shortValue: `${Math.round(genome.snps / 1000)}k`,
      color: "ink",
    },
  ],
  originsHeadline: {
    lead: "One hundred percent Europe.",
    accent: "Almost all of it northern.",
  },
  originsLede:
    "FamilyTreeDNA myOrigins v3 paints Pernille as entirely European. Click a slice. The numbers are estimates, not a family tree — but they are loud.",
  origins,
  ancientHeadline: {
    lead: "Half forager.",
    mid: "Then the fields.",
    end: "Then the horses.",
  },
  ancientLede:
    "Under the modern map is a much older recipe. FamilyTreeDNA splits European autosomal DNA into three deep streams. Pernille’s mix is unusually heavy on the first.",
  ancientOrigins,
  haplogroup: {
    id: haplogroup.id,
    parent: haplogroup.parent,
    pathLabel: haplogroup.pathLabel,
    formed: haplogroup.formed,
    headline: "A Danish motherline from the Middle Ages.",
    tmrca: {
      meanLabel: haplogroup.tmrca.meanLabel,
      ci95: haplogroup.tmrca.ci95,
    },
    testers: {
      total: haplogroup.testers.total,
      known: `${haplogroup.testers.denmark} naming Denmark`,
    },
    rarityNote: haplogroup.rarityNote,
  },
  haploPath,
  motherlineMapCaption:
    "A schematic walk: East Africa → Near East → haplogroup H → Denmark. Not a GPS track — a mitochondrial route of daughters.",
  motherlineSpotlights: [
    {
      img: "/images/emblem-maternal.jpg",
      title: "A rare twig",
      copy: haplogroup.rarityNote,
    },
    {
      img: "/images/caucasus.jpg",
      title: "H before the ice",
      copy: "Haplogroup H formed outside Europe, in the northern Near East and southern Caucasus, then spread west. Today it is about 40% of European maternal lines.",
    },
    {
      img: "/images/viking-langeland.jpg",
      title: "Home water",
      copy: "The living geography of H10a1u is Danish. Ancient H10a1 kin turn up from Langeland to the Carpathian Basin — a Bronze Age family that later found the islands.",
    },
  ],
  connectionsLede:
    "FamilyTreeDNA lists notable and archaeological people who share a maternal ancestor with Pernille. These are not cousins in any family sense. They are fun facts about a thread that is thousands of years long. Living match names are not shown here.",
  connections,
  chromosomes,
  genome: { ...genome },
  kinship: {
    otherSlug: "helle",
    otherName: "Helle",
    role: "paternal grandmother",
    href: "/shared",
  },
};
