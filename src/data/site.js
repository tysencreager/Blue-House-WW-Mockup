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
// Currently using a free Unsplash photo as a placeholder. Replace this URL
// with your own photo (drop it at /public/images/hero.jpg and use
// '/images/hero.jpg') once you have one you love.
// =========================================================================
export const heroImage =
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=2400&q=80'

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

// NOTE: The `src` URLs below point to free-to-use Unsplash photos as
// placeholders so you can preview the design with real photography. They
// aren't actually photos of Lance's work — swap them with real ones using
// the steps above before sharing the live site widely.
const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const galleryItems = [
  { id: 1, title: 'Live-Edge Walnut Dining Table',     category: 'Furniture',  src: u('1551298370-9d3d53740c72'), alt: 'Live-edge walnut dining table with steel hairpin legs',           aspect: 'landscape' },
  { id: 2, title: 'Floor-to-Ceiling Library Built-In', category: 'Built-Ins',  src: u('1581858726788-75bc0f6a952d', 1200), alt: 'White oak library built-in with rolling ladder',          aspect: 'portrait'  },
  { id: 3, title: 'Shaker-Style Kitchen',              category: 'Cabinetry',  src: u('1493663284031-b7e3aefcae8e'), alt: 'Shaker-style painted kitchen with butcher block island',          aspect: 'landscape' },
  { id: 4, title: 'Reclaimed Oak Console',             category: 'Furniture',  src: u('1567538096630-e0c55bd6374c'), alt: 'Reclaimed oak entryway console with iron hardware',               aspect: 'landscape' },
  { id: 5, title: 'Mudroom Lockers',                   category: 'Built-Ins',  src: u('1556228453-efd6c1ff04f6', 1200), alt: 'Custom mudroom lockers with bench seating and cubbies',     aspect: 'portrait'  },
  { id: 6, title: 'Walnut Bath Vanity',                category: 'Cabinetry',  src: u('1582582494705-f8ce0b0c24f0'), alt: 'Floating walnut bathroom vanity with vessel sinks',               aspect: 'landscape' },
  { id: 7, title: 'Farmhouse Bench',                   category: 'Furniture',  src: u('1538688525198-9b88f6f53126'), alt: 'Reclaimed pine farmhouse dining bench',                           aspect: 'landscape' },
  { id: 8, title: 'Office Wall Unit',                  category: 'Built-Ins',  src: u('1505691938895-1758d7feb511', 1200), alt: 'Home office wall unit with integrated desk and shelving', aspect: 'portrait'  },
  { id: 9, title: 'Custom Pantry',                     category: 'Cabinetry',  src: u('1556909114-f6e7ad7d3136'), alt: 'Walk-in pantry with painted cabinets and butcher block counters', aspect: 'landscape' },
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
