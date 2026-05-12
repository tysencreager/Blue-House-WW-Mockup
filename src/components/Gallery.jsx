import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../data/site.js'
import Lightbox from './Lightbox.jsx'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter],
  )

  return (
    <section id="work" className="section bg-sand/40">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.2em] text-xs text-ocean font-semibold mb-4">
              Recent Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-ink font-semibold leading-tight">
              A small sample of past projects.
            </h2>
            <p className="mt-4 text-ink/70 text-lg">
              Every piece is one-of-one. Filter by category to see the kind of work that fits your project.
            </p>
          </div>

          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => {
              const selected = cat === filter
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    selected
                      ? 'bg-ocean text-cream border-ocean'
                      : 'bg-cream text-ink border-sand hover:border-ocean/50'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item, idx) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group block w-full text-left"
                aria-label={`Open ${item.title}`}
              >
                <GalleryTile item={item} />
                <div className="pt-3">
                  <p className="text-sm text-ocean font-medium">{item.category}</p>
                  <p className="font-display text-lg text-ink">{item.title}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </section>
  )
}

function GalleryTile({ item }) {
  const aspectClass = item.aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-soft bg-wood ${aspectClass}`}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        // LANCE: Placeholder — replace `src` in src/data/site.js to use a real photo.
        <PlaceholderArt label={item.title} category={item.category} />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cream/95 text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 3h6v6M21 3l-8 8M9 21H3v-6M3 21l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function PlaceholderArt({ label, category }) {
  // Decorative wood-grain-style placeholder so the mockup feels alive
  // even before Lance adds his real photos.
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-cream p-6 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_8px)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-wood-dark via-wood to-ocean-dark"
      />
      <div className="relative z-10">
        <p className="uppercase tracking-[0.2em] text-[10px] text-cream/80 mb-2">
          {category}
        </p>
        <p className="font-display text-lg sm:text-xl text-cream">{label}</p>
        <p className="mt-3 text-xs text-cream/70">Photo placeholder</p>
      </div>
    </div>
  )
}
