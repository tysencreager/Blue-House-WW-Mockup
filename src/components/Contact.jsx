import { useState } from 'react'
import { business, projectTypes } from '../data/site.js'

const initial = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.email.trim()) {
      e.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = 'That email address doesn’t look right.'
    }
    if (!values.message.trim()) e.message = 'Tell Lance a little about your project.'
    return e
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    setStatus('submitting')
    // LANCE: The form just simulates a send for now. To make it real,
    // wire this up to your form provider of choice (Formspree, Netlify
    // Forms, a small server endpoint, etc.) and POST `values` to it.
    await new Promise((r) => setTimeout(r, 700))
    setStatus('sent')
    setValues(initial)
  }

  return (
    <section id="contact" className="section bg-ocean-dark text-cream">
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="uppercase tracking-[0.2em] text-xs text-sand font-semibold mb-4">
            Start a Project
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream font-semibold leading-tight">
            Have something in mind? Let’s talk.
          </h2>
          <p className="mt-5 text-cream/80 text-lg leading-relaxed">
            Tell {business.ownerName} a bit about what you’re imagining — size, materials, timeline — and you’ll hear back within a couple of days.
          </p>

          <dl className="mt-10 space-y-5 text-cream/90">
            <ContactItem label="Email" href={`mailto:${business.email}`} value={business.email} />
            <ContactItem label="Phone" href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`} value={business.phone} />
            <ContactItem label="Instagram" href={business.instagram} value="@bluehouse.woodworks" external />
            <div>
              <dt className="text-xs uppercase tracking-widest text-sand/80">Service Area</dt>
              <dd className="mt-1">{business.serviceArea}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="lg:col-span-7 rounded-2xl bg-cream text-ink p-6 sm:p-8 shadow-soft"
          aria-label="Contact Blue House Wood Works"
        >
          {status === 'sent' && (
            <div
              role="status"
              className="mb-6 rounded-lg bg-ocean/10 border border-ocean/30 px-4 py-3 text-ocean-dark text-sm"
            >
              Thanks — your message is on its way. Lance will be in touch soon.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              id="name"
              value={values.name}
              onChange={update('name')}
              error={errors.name}
              required
              autoComplete="name"
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={values.email}
              onChange={update('email')}
              error={errors.email}
              required
              autoComplete="email"
            />
            <Field
              label="Phone"
              id="phone"
              type="tel"
              value={values.phone}
              onChange={update('phone')}
              error={errors.phone}
              autoComplete="tel"
              optional
            />
            <SelectField
              label="Project Type"
              id="projectType"
              value={values.projectType}
              onChange={update('projectType')}
              options={projectTypes}
              optional
            />
          </div>

          <div className="mt-5">
            <Field
              label="Tell us about your project"
              id="message"
              as="textarea"
              rows={5}
              value={values.message}
              onChange={update('message')}
              error={errors.message}
              required
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-ink/60">
              We’ll only use this to reply about your project.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center rounded-full bg-ocean text-cream px-7 py-3 font-semibold shadow-soft hover:bg-ocean-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function ContactItem({ label, value, href, external }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-sand/80">{label}</dt>
      <dd className="mt-1">
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-cream hover:text-sand underline decoration-cream/30 underline-offset-4"
        >
          {value}
        </a>
      </dd>
    </div>
  )
}

function Field({ label, id, as = 'input', error, optional, required, ...rest }) {
  const Tag = as
  const describedBy = error ? `${id}-error` : undefined
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {optional && <span className="text-ink/50 font-normal"> (optional)</span>}
        {required && <span className="text-ocean" aria-hidden="true"> *</span>}
      </span>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        required={required}
        className={`w-full rounded-lg border bg-cream px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean ${
          error ? 'border-red-500' : 'border-sand'
        } ${as === 'textarea' ? 'resize-y min-h-[120px]' : ''}`}
        {...rest}
      />
      {error && (
        <span id={describedBy} className="mt-1 block text-sm text-red-600">
          {error}
        </span>
      )}
    </label>
  )
}

function SelectField({ label, id, value, onChange, options, optional }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {optional && <span className="text-ink/50 font-normal"> (optional)</span>}
      </span>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
      >
        <option value="">Select one…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
