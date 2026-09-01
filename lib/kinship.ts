export const originCompare = [
  { id: "scandinavia", label: "Scandinavia", pernille: 71, helle: 41, color: "#7ec8a3" },
  { id: "central-europe", label: "Central Europe", pernille: 28, helle: 41, color: "#d4a054" },
  { id: "ireland", label: "Ireland", pernille: 0, helle: 19, color: "#6f9b78" },
  {
    id: "isles",
    label: "England, Wales & Scotland",
    pernille: 1,
    helle: 0,
    color: "#8ea4c8",
    pernilleDisplay: "<2%",
  },
];

export const ancientCompare = [
  { id: "hunter", label: "Hunter-Gatherer", pernille: 50, helle: 49, color: "#c45c6a" },
  { id: "farmer", label: "Early Farmer", pernille: 38, helle: 40, color: "#7ec8a3" },
  { id: "invader", label: "Metal Age Invader", pernille: 13, helle: 11, color: "#d4a054" },
];

export const motherlineFork = {
  shared: { id: "H", when: "8000 BCE", place: "Near East & Caucasus" },
  pernille: { id: "H10a1u", when: "1100 CE", via: "H10 → H10a → H10a1" },
  helle: { id: "H1e1b1f1", when: "950 CE", via: "H1 → H1e → H1e1b1f" },
};
