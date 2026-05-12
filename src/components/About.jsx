import { about } from '../data/site.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5">
          <p className="uppercase tracking-[0.2em] text-xs text-ocean font-semibold mb-4">
            About the Shop
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-ink font-semibold leading-tight">
            {about.heading}
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="lg:col-span-7 space-y-5 text-ink/80 text-lg leading-relaxed"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>

      <div className="container-narrow mt-16 grid sm:grid-cols-3 gap-6">
        {about.highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 100}>
            <div className="group rounded-2xl border border-sand bg-white p-6 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full">
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-lg bg-ocean/10 text-ocean flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h10M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl text-ink font-semibold mb-2">{h.label}</h3>
              <p className="text-ink/70 leading-relaxed text-base">{h.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
