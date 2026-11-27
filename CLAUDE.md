# Κύδων Χανίων: Weightlifting section website

Informational website for the weightlifting section (Τμήμα Άρσης Βαρών) of **Α.Ο. Χανίων «Ο Κύδων»** (founded 1949, Chania, Crete). The main club site is https://kydonchania.gr. We don't own it or have access to it; this site is separate and links back to it.

## Decisions made so far
- **Purely informational.** No memberships, prices, booking forms or "free trial" calls to action.
- **Greek only** for now (`<html lang="el">`). An English version may come later.
- **Lowest cost:** Astro static site → GitHub Pages (free) + a custom domain (the only cost). Deployed by `.github/workflows/deploy.yml` on push to `main`.
- **Editing by non-developers** through Pages CMS (https://app.pagescms.org), configured in `.pages.yml` with Greek labels. Editors need GitHub accounts.
- **Branding:** use the club's own logo (Kydon coin emblem, `public/kydon-emblem.png` cropped from `public/kydon-logo-full.png`), not the Municipality of Chania press-kit files. Colours come from the team uniform: dark navy with red stripes. The double red stripe is the recurring motif. Logo blue is about #204080.
- **Fonts** must support Greek: Fira Sans Extra Condensed (display), Commissioner (body), JetBrains Mono (numbers/labels).
- **Training times** are shown on the Contact page as information only.
- **GDPR:** athletes under 18 need parental consent before their name or photo is published.

## Pages (URLs in Greeklish)
`/` Αρχική · `/istoria/` Ιστορία · `/anthropoi/` Άνθρωποι · `/nea/` Νέα (+ `/nea/<id>/`) · `/to-athlima/` Το Άθλημα (sport info + plate calculator) · `/epikoinonia/` Επικοινωνία

## Where content lives
- News: `src/content/articles/*.md`
- Coaches / athletes: `src/content/coaches/*.md`, `src/content/athletes/*.md` (athlete `category` is one of the Greek age categories in `src/lib/url.ts` → `CATEGORIES`)
- History text: `src/content/pages/istoria.md`
- Club details: `src/data/club.json`; training times: `src/data/schedule.json`; honours and records: `src/data/records.json`
- Uploaded photos: `public/uploads/`
- Styles: `src/styles/global.css` (colour tokens on `:root`, dark mode via `prefers-color-scheme` and `data-theme`)
- Always build internal links and image paths with `url()` from `src/lib/url.ts`, so the site works under a GitHub Pages base path.

## Still placeholder (marked as such on the site)
Section history, coaches, athletes, honours, records, training times, training venue, email and social links, and both example news articles. Real facts already in place: club name, 1949, address (Εθνικό Στάδιο Χανίων, Χανιά 731 00), phone 2821 045000 (the club's main line). A coach should confirm the age limits on `/to-athlima/`.

## Commands
- `npm install`: once, after cloning
- `npm run dev`: local preview at http://localhost:4321
- `npm run build`: production build into `dist/`; `npm run preview` serves it

Deployment and domain setup steps are in `README.md`.
