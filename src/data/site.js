// =========================================================================
// LANCE — EDIT YOUR SITE CONTENT HERE
// -------------------------------------------------------------------------
// Everything in this file is plain text. Change the words inside the quotes,
// save the file, and the website updates. You don't need to touch any other
// files unless you want to swap out photos (see /public/images below).
// =========================================================================

// =========================================================================
// HERO IMAGE
// -------------------------------------------------------------------------
// Image lives at /public/images/header-image.png. Swap the file or change
// the path below to update.
// =========================================================================
export const heroImage = '/images/header-image.png'

export const business = {
  name: 'Blue House Wood Works',
  tagline: 'Custom Woodworking, Crafted to Last',
  // Short intro that appears under the hero buttons. Keep it to one sentence.
  heroSubtext:
    'Handcrafted furniture, built-ins, and cabinetry made one piece at a time.',
  // Owner / contact details
  ownerName: 'Lance',
  email: 'hello@bluehousewoodworks.com',          // <-- LANCE: update this
  phone: '(555) 123-4567',                         // <-- LANCE: update this
  serviceArea: 'Serving the local area and surrounding communities',
  instagram: 'https://www.instagram.com/bluehouse.woodworks/',
}

// =========================================================================
// ABOUT SECTION
// =========================================================================
export const about = {
  heading: 'Built by hand. Built to last.',
  paragraphs: [
    'Blue House Wood Works is a small shop focused on custom woodworking for homes that deserve more than what comes off a showroom floor. Every piece is designed around the space it lives in and the people who use it.',
    'From farmhouse tables to floor-to-ceiling built-ins, the work is detail-driven, made from quality materials, and finished with care. No two jobs are the same — and that is exactly the point.',
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
//   2. Change the `src` below to "/images/your-file-name.jpg".
//   3. Suggested photo size: 1600 x 1200 px (4:3) or 1600 x 2000 px (4:5)
//      for portrait shots. Keep files under ~400KB for fast loading.
//   4. Always fill in `alt` — it's read aloud by screen readers and helps SEO.
// =========================================================================
export const galleryCategories = ['All', 'Furniture', 'Built-Ins', 'Cabinetry']

// Photos live at /public/images/. To swap one out, drop a new file in
// that folder and update the `src` path below. Leave `src` as null to fall
// back to the wood-tone gradient placeholder for that tile.
export const galleryItems = [
  { id: 1, title: 'Live-Edge Walnut Dining Table',     category: 'Furniture',  src: '/images/walnut-dining-table.webp', alt: 'Live-edge walnut dining table with steel hairpin legs',           aspect: 'landscape' },
  { id: 2, title: 'Floor-to-Ceiling Library Built-In', category: 'Built-Ins',  src: '/images/library.webp',             alt: 'White oak library built-in with rolling ladder',                  aspect: 'portrait'  },
  { id: 3, title: 'Shaker-Style Kitchen',              category: 'Cabinetry',  src: '/images/shaker-kitchen.png',       alt: 'Shaker-style painted kitchen with butcher block island',          aspect: 'landscape' },
  { id: 4, title: 'Reclaimed Oak Console',             category: 'Furniture',  src: '/images/oak-console.png',          alt: 'Reclaimed oak entryway console with iron hardware',               aspect: 'landscape' },
  { id: 5, title: 'Mudroom Lockers',                   category: 'Built-Ins',  src: '/images/mudroom-locker.png',       alt: 'Custom mudroom lockers with bench seating and cubbies',           aspect: 'portrait'  },
  { id: 6, title: 'Walnut Bath Vanity',                category: 'Cabinetry',  src: '/images/vanity.png',               alt: 'Floating walnut bathroom vanity with vessel sinks',               aspect: 'landscape' },
  // No photo provided for the Farmhouse Bench yet — the placeholder gradient
  // shows in its place. Drop a file in /public/images/ and point src here.
  { id: 7, title: 'Farmhouse Bench',                   category: 'Furniture',  src: null,                               alt: 'Reclaimed pine farmhouse dining bench',                           aspect: 'landscape' },
  { id: 8, title: 'Office Wall Unit',                  category: 'Built-Ins',  src: '/images/office.png',               alt: 'Home office wall unit with integrated desk and shelving',         aspect: 'portrait'  },
  { id: 9, title: 'Custom Pantry',                     category: 'Cabinetry',  src: '/images/pantry.png',               alt: 'Walk-in pantry with painted cabinets and butcher block counters', aspect: 'landscape' },
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
      'We had a tricky corner that no cabinet shop could figure out. Blue House came in, measured twice, and built exactly what we pictured.',
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
  'Custom Furniture',
  'Built-Ins / Shelving',
  'Kitchen Cabinetry',
  'Bathroom Vanity',
  'Mudroom / Entryway',
  'Other',
]
