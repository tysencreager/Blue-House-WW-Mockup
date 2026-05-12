# Blue House Wood Works — Website Mockup

A clean, single-page React mockup for Lance's custom woodworking business.
Built with **Vite + React + Tailwind**. Designed to be easy to customize and
deploy.

---

## Quick start

```bash
npm install
npm run dev          # opens http://localhost:5173
npm run build        # production build into /dist
npm run preview      # preview the production build locally
```

Deploy `/dist` to Netlify, Vercel, Cloudflare Pages, or any static host.

---

## How Lance customizes the site

All text and project data lives in **one file**:

```
src/data/site.js
```

Open it, change the words inside the quotes, save the file. The site updates.

Inside that file you can change:

- Business name, tagline, hero subtext
- Email, phone, service area, Instagram URL
- About paragraphs and the three "what we do" highlight cards
- Gallery filter categories and the project list (title, category, alt text)
- Testimonials (quote, name, project)
- Project-type options shown in the contact-form dropdown

You shouldn't need to touch any other file unless you want to change colors or
swap out photos.

---

## About the placeholder images

The hero and gallery currently point at free-to-use **Unsplash** photos so
Lance can preview the design with real photography. These are *not* photos
of his work — they're stand-ins. Swap them out (instructions below) before
sharing the live site widely. If any Unsplash URL ever 404s, the gradient
wood-tone tile automatically takes its place — the layout won't break.

---

## Adding your own photos

1. Create a folder called `public/images/` in the project root.
2. Drop in your photos (JPG or WebP). Suggested sizes:
   - **Hero image:** 2400 × 1400 px, landscape, under ~500 KB
   - **Gallery photos:** 1600 × 1200 px (landscape, 4:3) or 1600 × 2000 px
     (portrait, 4:5), under ~400 KB each
3. In `src/data/site.js`, change each gallery item's `src` from `null` to the
   path of your photo. For example:
   ```js
   { id: 1, title: 'Live-Edge Walnut Dining Table', category: 'Furniture',
     src: '/images/walnut-table.jpg', alt: '...', aspect: 'landscape' },
   ```
4. For the hero image, open `src/components/Hero.jsx`, find the comment that
   starts with `LANCE: Replace this gradient`, and uncomment the `<img>` block.

Until you add photos, the gallery shows tasteful wood/blue placeholder tiles
labeled with the project name — totally fine for sharing the mockup.

---

## Color palette

Defined in `tailwind.config.js`:

| Token        | Hex       | Used for                       |
|--------------|-----------|--------------------------------|
| `cream`      | `#FAF6F0` | Page background, light text    |
| `sand`       | `#F1E7D3` | Card borders, subtle sections  |
| `wood`       | `#8B5A2B` | Primary warm brown             |
| `wood-dark`  | `#6B4423` | Deeper brown, hero gradient    |
| `ocean`      | `#2C5F7F` | Primary blue accent, CTAs      |
| `ocean-dark` | `#1F4A66` | Contact section background     |
| `ink`        | `#2A1F17` | Body text, footer background   |

Typography: **Fraunces** (serif headers, modern-craftsman feel) paired with
**Inter** (clean sans-serif body). Loaded from Google Fonts in `index.html`.

---

## Connecting the contact form

The form validates and shows a "thanks" message, but doesn't send anywhere yet.
To make it live, open `src/components/Contact.jsx`, find the `onSubmit`
handler, and POST the `values` object to one of:

- **[Formspree](https://formspree.io/)** — easiest, no backend code
- **Netlify Forms** — add `data-netlify="true"` to the `<form>` if hosting on Netlify
- A custom email endpoint

---

## File tour

```
index.html
src/
  main.jsx              entry point
  App.jsx               composes the page
  index.css             Tailwind + base styles
  data/site.js          ALL editable content lives here
  components/
    Nav.jsx             sticky top nav, mobile menu
    Hero.jsx            full-bleed hero with CTAs
    About.jsx           intro + three highlight cards
    Gallery.jsx         filterable project grid
    Lightbox.jsx        full-screen image viewer (keyboard-friendly)
    Testimonials.jsx    quote cards
    Contact.jsx         form + contact details
    Footer.jsx          copyright, social, credit
```

---

## Accessibility notes

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- "Skip to content" link for keyboard users
- All images have `alt` text (fill in real descriptions when you swap photos)
- Lightbox supports `Esc` to close and arrow keys to navigate
- Focus states use a visible ocean-blue ring
- Form fields are properly labeled and announce errors

---

## Credit

Website by **Elevate Growth Solutions**. Update or remove that line in
`src/components/Footer.jsx` if you'd like.
