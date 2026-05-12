import { useEffect, useState } from 'react'
import { business, logoImage } from '../data/site.js'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/95 backdrop-blur shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-narrow flex items-center justify-between py-4 sm:py-5 px-6 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-3 group"
          onClick={close}
          aria-label={business.name}
        >
          <img
            src={logoImage}
            alt=""
            className="h-9 sm:h-10 w-auto"
          />
          <span
            className={`hidden sm:inline font-display text-lg sm:text-xl font-semibold transition-colors ${
              scrolled || open ? 'text-ink' : 'text-cream drop-shadow'
            }`}
          >
            {business.shortName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-ocean ${
                  scrolled ? 'text-ink' : 'text-cream drop-shadow'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-ocean text-cream px-5 py-2 text-sm font-semibold shadow-soft hover:bg-ocean-dark transition-colors"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`md:hidden p-2 rounded ${scrolled || open ? 'text-ink' : 'text-cream'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-sand bg-cream">
          <ul className="container-narrow flex flex-col py-2 px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block py-3 text-ink font-medium border-b border-sand/60 last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contact"
                onClick={close}
                className="inline-flex items-center rounded-full bg-ocean text-cream px-5 py-2 text-sm font-semibold"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

