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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled || open
          ? 'bg-cream/85 border-ink/5 shadow-sm'
          : 'bg-cream/55 border-cream/40'
      }`}
    >
      <nav
        className="container-narrow flex items-center justify-between py-3 sm:py-4 px-6 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 sm:gap-3 min-w-0 group"
          onClick={close}
          aria-label={business.name}
        >
          <img
            src={logoImage}
            alt=""
            className="h-8 sm:h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-[13px] sm:text-lg lg:text-xl font-semibold text-ocean-dark whitespace-nowrap leading-tight">
            {business.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 lg:gap-8 shrink-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-ink hover:text-ocean transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-ocean text-cream px-5 py-2 text-sm font-semibold shadow-soft hover:bg-ocean-dark hover:-translate-y-0.5 transition-all"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded text-ink"
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
        <div id="mobile-nav" className="md:hidden border-t border-ink/5 bg-cream/95 backdrop-blur-md">
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
