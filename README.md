# Weightlifting club website

Static site built with [Astro](https://astro.build), hosted free on GitHub Pages.
Content (news, coaches, athletes, history, honours and records, training times, contact details) is edited through [Pages CMS](https://pagescms.org), a free editing panel that saves changes to this repository. Every save rebuilds and republishes the site automatically, in about a minute.

Running cost: the domain name only.

## Where things live

| What | File(s) |
|---|---|
| News articles | `src/content/articles/*.md` |
| Coaches | `src/content/coaches/*.md` |
| Athletes | `src/content/athletes/*.md` |
| History page text | `src/content/pages/istoria.md` |
| Club name and contact details | `src/data/club.json` |
| Training times | `src/data/schedule.json` |
| Honours and club records | `src/data/records.json` |
| "The sport" page (fixed text) | `src/pages/to-athlima.astro` |
| Logo | `public/kydon-emblem.png`, `public/kydon-logo-full.png` |
| Uploaded photos | `public/uploads/` |
| Page layout and design | `src/pages/`, `src/layouts/`, `src/styles/global.css` |

## Work on it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Publish on GitHub Pages (one-time setup)

1. Create an empty repository on GitHub, then push this folder:
   ```sh
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Until a domain is connected, the site lives at `https://<you>.github.io/<repo>/`.
   Go to **Settings → Secrets and variables → Actions → Variables** and add `BASE_PATH` = `/<repo>`.
   Then rerun the workflow from the **Actions** tab.

## Connect your domain

1. In **Settings → Pages → Custom domain**, enter `www.yourclub.gr` (or the bare domain) and save.
2. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `<you>.github.io`
   - bare domain → **A** records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Delete the `BASE_PATH` variable, and set `SITE_URL` = `https://www.yourclub.gr`. Rerun the workflow.
4. Once the certificate is issued, tick **Enforce HTTPS**.

## Let people edit content

1. Go to <https://app.pagescms.org>, sign in with GitHub and pick this repository.
2. Each editor needs a free GitHub account. Add them under **Settings → Collaborators** on GitHub, or invite them from Pages CMS.
3. Editors see sections (in Greek) for News, Coaches, Athletes, History, Honours & records, Training times and Club details, and can upload photos.

## Photos of minors

Under GDPR, get written consent from a parent or guardian before publishing the name or photo of an athlete under 18.
