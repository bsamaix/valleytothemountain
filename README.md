# Valley to the Mountain

The official website for **Valley to the Mountain** — a faith-driven mentorship
show with host **Bobby Samai**, serving young men (ages 9–17) along Oregon's I-5
corridor from Eugene to Salem and roughly 25 miles east and west.

🌐 Intended domain: **www.valleytothemountain.com**

---

## What's in here

A fast, accessible, **static website** — plain HTML, CSS, and a little JavaScript.
No build step, no framework, no database. It can be hosted free on Netlify,
Vercel, Cloudflare Pages, or GitHub Pages.

```
.
├── index.html        # Home
├── story.html        # Bobby's testimony (Valley to the Mountain)
├── show.html         # About the show + safety + FAQ
├── apply.html        # Guardian application + consent / media release
├── support.html      # The 12-month plan + non-profit vision
├── contact.html      # Contact form + details
├── 404.html          # Friendly not-found page
├── css/styles.css    # Design system (premium dark + gold)
├── js/main.js        # Mobile nav, scroll reveals, form validation
├── assets/           # Logo + your photos (see assets/README.md)
└── netlify.toml       # Optional Netlify config
```

---

## Preview it locally

From this folder, run any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

---

## ✅ Before you go live — a checklist

This site is a strong starting point, but a few things need **your** attention,
especially because the show involves minors:

1. **Add your photos.** See `assets/README.md` for the exact filenames.
2. **Review the story.** `story.html` contains your testimony with
   `[bracketed placeholder]` notes wherever you should confirm or adjust wording
   before publishing — especially the personal/family paragraphs.
3. **Add your links.** Search the project for `add link` / `add channel link`
   and drop in your YouTube, Instagram, and donation URLs.
4. **Connect the forms** so you actually receive applications & messages
   (instructions below).
5. **Have an attorney review** the consent and media-release language on
   `apply.html` and your minor-safety policies. The wording on the site
   describes good intentions — a lawyer should make it legally sound before any
   minor is filmed.
6. **Set up background checks** and any other safeguards you reference.

---

## 📨 Making the forms actually work

Right now the **Apply** and **Contact** forms validate input and show a friendly
confirmation, but they do **not** send submissions anywhere yet. Pick one option:

### Option A — Netlify Forms (easiest if you host on Netlify)

1. Deploy the site to Netlify (drag-and-drop the folder, or connect this repo).
2. In `apply.html`, edit the `<form>` tag to add the Netlify attributes:
   ```html
   <form class="form" data-app-form name="show-application" method="POST"
         netlify netlify-honeypot="bot-field" novalidate>
   ```
   and remove `data-demo="true"` so it submits for real. Do the same for the
   `contact` form in `contact.html`.
3. Netlify will email you each submission and store them in your dashboard.

### Option B — Formspree (works on any host)

1. Create a free form at <https://formspree.io> and copy your form's endpoint
   (looks like `https://formspree.io/f/abcdwxyz`).
2. In `apply.html`, set the form action and remove the demo flag:
   ```html
   <form class="form" data-app-form method="POST"
         action="https://formspree.io/f/abcdwxyz" novalidate>
   ```
   Repeat for the contact form.

> Tip: For sensitive guardian/consent data, make sure whichever service you use
> meets your privacy expectations, and tell families how their info is handled.

---

## 🚀 Deploying

**Netlify / Vercel / Cloudflare Pages:** connect this Git repo (or drag the
folder in). No build command needed — it's a static site; the publish directory
is the project root.

**GitHub Pages:** enable Pages on this repo, serving from the branch root.

**Custom domain:** point `www.valleytothemountain.com` at your host per their
DNS instructions, then enable HTTPS (free, automatic on all the hosts above).

---

## Editing tips

- Colors, fonts, and spacing all live as variables at the top of `css/styles.css`.
- The header and footer are repeated in each HTML file — if you change a nav
  link, update it in every page (there are 6).
- `[bracketed gold tags]` on the live pages mark things to replace; search the
  HTML for `placeholder-tag` to find them all.

Built with care. *From the valley to the mountain.* 🏔️
