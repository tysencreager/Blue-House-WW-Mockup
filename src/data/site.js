// =========================================================================
// LANCE — EDIT YOUR SITE CONTENT HERE
// -------------------------------------------------------------------------
// Everything in this file is plain text. Change the words inside the quotes,
// save the file, and the website updates. You don't need to touch any other
// files unless you want to swap out photos (see /public/images below).
// =========================================================================

// =========================================================================
// LOGO + HERO IMAGE
// -------------------------------------------------------------------------
// Both files live in /public/images/. Swap the files or change the paths
// to update. The logo image is currently hotlinked from postimg.cc — for
// production reliability, download it and drop it at
// /public/images/ludlow-logo.png, then update the path below.
// =========================================================================
export const logoImage = 'https://i.postimg.cc/BQx64vPx/Ludlow-Logo.png'
export const heroImage = '/images/header-image.webp'

export const business = {
  name: 'Ludlow Staircase & Railing',
  shortName: 'Ludlow',
  tagline: 'Custom Staircases & Railings, Built to Last',
  // Short intro that appears under the hero buttons. Keep it to one sentence.
  heroSubtext:
    'Handcrafted staircases, railings, furniture, and built-ins made one piece at a time.',
  // Owner / contact details
  ownerName: 'Lance',
  email: 'hello@ludlowstaircase.com',              // <-- LANCE: update this
  phone: '(555) 123-4567',                          // <-- LANCE: update this
  serviceArea: 'Serving the local area and surrounding communities',
  instagram: 'https://www.instagram.com/bluehouse.woodworks/', // <-- LANCE: update if the handle changes with the rebrand
}

// =========================================================================
// ABOUT SECTION
// =========================================================================
export const about = {
  heading: 'Built by hand. Built to last.',
  paragraphs: [
    'Ludlow Staircase & Railing is a small shop focused on custom woodworking for homes that deserve more than what comes off a showroom floor. Every piece is designed around the space it lives in and the people who use it.',
    'From staircases and railings to floor-to-ceiling built-ins, the work is detail-driven, made from quality materials, and finished with care. No two jobs are the same — and that is exactly the point.',
  ],
  highlights: [
    { label: 'Custom Furniture', detail: 'Tables, benches, beds, and pieces designed to fit your space.' },
    { label: 'Built-Ins & Shelving', detail: 'Wall units, mudrooms, libraries, and storage that feels original to the home.' },
    { label: 'Cabinetry', detail: 'Kitchens, baths, and entertainment centers built to your specs.' },
  ],
}

// =========================================================================
// GALLERY
// -------------------------------------------------------------------------
// LANCE: To add your own photos:
//   1. Drop image files into the /public/images folder (create it if needed).
//   2. Change the `src` below to "/images/your-file-name.webp".
//   3. Suggested photo size: 1600 x 1200 px (4:3) or 1600 x 2000 px (4:5)
//      for portrait shots. Keep files under ~200KB for fast loading.
//   4. Always fill in `alt` — it's read aloud by screen readers and helps SEO.
// =========================================================================
export const galleryCategories = ['All', 'Furniture', 'Built-Ins', 'Cabinetry']

// Photos live at /public/images/. To swap one out, drop a new file in
// that folder and update the `src` path below. Leave `src` as null to fall
// back to the wood-tone gradient placeholder for that tile.
export const galleryItems = [
  { id: 1, title: 'Live-Edge Walnut Dining Table',     category: 'Furniture',  src: '/images/walnut-dining-table.webp', alt: 'Live-edge walnut dining table with steel hairpin legs',           aspect: 'landscape' },
  { id: 2, title: 'Floor-to-Ceiling Library Built-In', category: 'Built-Ins',  src: '/images/library.webp',             alt: 'White oak library built-in with rolling ladder',                  aspect: 'portrait'  },
  { id: 3, title: 'Shaker-Style Kitchen',              category: 'Cabinetry',  src: '/images/shaker-kitchen.webp',      alt: 'Shaker-style painted kitchen with butcher block island',          aspect: 'landscape' },
  { id: 4, title: 'Reclaimed Oak Console',             category: 'Furniture',  src: '/images/oak-console.webp',         alt: 'Reclaimed oak entryway console with iron hardware',               aspect: 'landscape' },
  { id: 5, title: 'Mudroom Lockers',                   category: 'Built-Ins',  src: '/images/mudroom-locker.webp',      alt: 'Custom mudroom lockers with bench seating and cubbies',           aspect: 'portrait'  },
  { id: 6, title: 'Walnut Bath Vanity',                category: 'Cabinetry',  src: '/images/vanity.webp',              alt: 'Floating walnut bathroom vanity with vessel sinks',               aspect: 'landscape' },
  // Farmhouse Bench is hotlinked from postimg.cc — download and commit
  // it to /public/images/ before going to production.
  { id: 7, title: 'Farmhouse Bench',                   category: 'Furniture',  src: 'https://i.postimg.cc/xTSfxSpX/Screenshot-2026-05-12-124059.png', alt: 'Reclaimed pine farmhouse dining bench',                           aspect: 'landscape' },
  { id: 8, title: 'Office Wall Unit',                  category: 'Built-Ins',  src: '/images/office.webp',              alt: 'Home office wall unit with integrated desk and shelving',         aspect: 'portrait'  },
  { id: 9, title: 'Custom Pantry',                     category: 'Cabinetry',  src: '/images/pantry.webp',              alt: 'Walk-in pantry with painted cabinets and butcher block counters', aspect: 'landscape' },
]

// =========================================================================
// TESTIMONIALS
// =========================================================================
export const testimonials = [
  {
    quote:
      'Lance built a dining table for our family that we will pass down to our kids. The craftsmanship is unreal and the whole process felt personal.',
    name: 'The Hartley Family',
    project: 'Live-Edge Dining Table',
  },
  {
    quote:
      'We had a tricky corner that no cabinet shop could figure out. Ludlow came in, measured twice, and built exactly what we pictured.',
    name: 'Megan & Tom R.',
    project: 'Kitchen Cabinetry',
  },
  {
    quote:
      'Honest, communicative, and the finished built-in looks like it was always part of the house. Couldn’t be happier.',
    name: 'Sarah K.',
    project: 'Living Room Built-In',
  },
  {
    quote:
      'Quality work, fair price, and Lance actually showed up when he said he would. That is rare. We are already planning the next project.',
    name: 'Dave M.',
    project: 'Mudroom Lockers',
  },
]

// =========================================================================
// CONTACT FORM
// =========================================================================
export const projectTypes = [
  'Custom Staircase',
  'Railings',
  'Custom Furniture',
  'Built-Ins / Shelving',
  'Kitchen Cabinetry',
  'Bathroom Vanity',
  'Mudroom / Entryway',
  'Other',
]
