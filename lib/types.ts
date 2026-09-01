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

export type HaploStep = {
  haplogroup: string;
  yearLabel: string;
  year: number;
  era: string;
  place: string;
  copy: string;
};

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

export type Chromosome = { id: string; snps: number };

export type HeroStat = {
  label: string;
  value: string;
  shortValue?: string;
  color?: "aurora" | "amber" | "ink" | "rose";
};

export type Profile = {
  slug: string;
  firstName: string;
  status: "published";
  tested: string;
  tagline: string;
  lede: string;
  heroImage: string;
  heroAlt: string;
  heroStats: HeroStat[];
  originsHeadline: { lead: string; accent: string };
  originsLede: string;
  origins: Origin[];
  ancientHeadline: { lead: string; mid: string; end: string };
  ancientLede: string;
  ancientOrigins: AncientOrigin[];
  haplogroup: {
    id: string;
    parent: string;
    pathLabel: string;
    formed: string;
    headline: string;
    tmrca: {
      meanLabel: string;
      ci95: string;
    };
    testers: {
      total: number;
      known: string;
    };
    rarityNote: string;
  };
  haploPath: HaploStep[];
  motherlineMapCaption: string;
  motherlineSpotlights: { img: string; title: string; copy: string }[];
  connectionsLede: string;
  connections: Connection[];
  chromosomes: Chromosome[];
  genome: {
    snps: number;
    build: string;
    painting: string;
  };
  kinship?: {
    otherSlug: string;
    otherName: string;
    role: string;
    href: string;
  };
};

export type ComingProfile = {
  slug: string;
  status: "coming";
  firstName?: string;
  teaser: string;
  image?: string;
};

export type CatalogEntry = Profile | ComingProfile;
