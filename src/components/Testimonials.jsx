import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-cream">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-ocean font-semibold mb-4">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-ink font-semibold leading-tight">
            Word of mouth is the only marketing we’ve ever needed.
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="relative rounded-2xl bg-sand/40 border border-sand p-7 sm:p-8 shadow-sm"
            >
              <Quote />
              <blockquote className="text-ink/85 text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-sand/80">
                <p className="font-display text-ink font-semibold">{t.name}</p>
                <p className="text-sm text-ocean">{t.project}</p>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <svg
      aria-hidden="true"
      className="absolute top-5 right-5 text-ocean/20"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm9 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
    </svg>
  )
}
