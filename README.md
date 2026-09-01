# Pernille & Helle

A bilingual DNA story for two close family members — Pernille and her paternal grandmother Helle — told by first name only.

Chapters: autosomal origins, ancient Europe, two motherlines, notable/ancient kin, chromosome skylines, and a shared-ancestry page (including the X that only a father’s mother can give).

Raw FamilyTreeDNA exports and screenshots stay local and are **not** committed.

## Develop

```bash
npm install
npm run dev
```

- `/` — home (redirects to `/en` or `/da` from the browser language, then a `NEXT_LOCALE` cookie)
- `/en`, `/da` — English (default) and Danish
- `/en/pernille`, `/da/helle` — one genome each
- `/en/shared`, `/da/shared` — grandmother and granddaughter compared

## Data boundary

- Do not add `ftdna/` to git.
- First names only. No living match names. No raw genotypes.
- Haplogroup “notable connections” are deep-time maternal fun facts, not close kinship.
