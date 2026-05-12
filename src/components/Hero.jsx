import { useState } from 'react'
import { business, heroImage } from '../data/site.js'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section
      id="top"
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Gradient is always present as the base layer so the hero looks
          good even before the photo loads (or if it fails). */}
      <div className="absolute inset-0 bg-gradient-to-br from-wood-dark via-wood to-ocean-dark" />

      {/* LANCE: To use your own hero photo, drop a wide image at
          /public/images/hero.jpg (suggested 2400 x 1400 px, under ~500KB)
          and set heroImage in src/data/site.js to '/images/hero.jpg'. */}
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          } motion-safe:animate-[heroZoom_18s_ease-out_both]`}
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,246,240,0.18),transparent_55%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/40" />

      <div className="container-narrow relative z-10 px-6 sm:px-8 py-32 sm:py-40 text-cream">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-sand/90 mb-6 motion-safe:animate-[heroFadeUp_700ms_120ms_ease-out_both]">
          {business.name}
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl motion-safe:animate-[heroFadeUp_900ms_240ms_ease-out_both]">
          {business.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-cream/90 motion-safe:animate-[heroFadeUp_900ms_420ms_ease-out_both]">
          {business.heroSubtext}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 motion-safe:animate-[heroFadeUp_900ms_580ms_ease-out_both]">
          <a
            href="#work"
            className="group inline-flex items-center rounded-full bg-cream text-ink px-7 py-3 font-semibold shadow-soft hover:bg-sand transition-all hover:-translate-y-0.5"
          >
            View Our Work
            <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-cream/70 text-cream px-7 py-3 font-semibold hover:bg-cream/10 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/80 hover:text-cream motion-safe:animate-[heroBounce_2.4s_ease-in-out_infinite]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
