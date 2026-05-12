import { business } from '../data/site.js'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-narrow px-6 sm:px-8 py-14 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <p className="font-display text-xl text-cream font-semibold">{business.name}</p>
          <p className="mt-2 text-sm leading-relaxed max-w-xs">
            {business.tagline}. Small shop, careful work.
          </p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${business.name} on Instagram`}
            className="inline-flex items-center gap-2 text-sm hover:text-cream"
          >
            <InstagramIcon />
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-narrow px-6 sm:px-8 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-cream/60">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>
            Website by{' '}
            <a
              href="#"
              className="underline decoration-cream/30 underline-offset-4 hover:text-cream"
            >
              Elevate Growth Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  )
}
