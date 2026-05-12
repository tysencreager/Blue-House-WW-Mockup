import { useCallback, useEffect, useRef, useState } from 'react'

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [failed, setFailed] = useState(false)
  const item = items[index]
  const hasPrev = index > 0
  const hasNext = index < items.length - 1

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    setFailed(false)
  }, [index])

  const next = useCallback(() => {
    if (hasNext) onChange(index + 1)
  }, [hasNext, index, onChange])

  const prev = useCallback(() => {
    if (hasPrev) onChange(index - 1)
  }, [hasPrev, index, onChange])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [next, prev, onClose])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className={`fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4 sm:p-8 transition-opacity duration-200 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {hasPrev && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <figure
        onClick={(e) => e.stopPropagation()}
        className={`max-w-5xl w-full max-h-full flex flex-col items-center transition-all duration-300 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className={`relative w-full max-h-[78vh] rounded-2xl overflow-hidden bg-wood ${item.aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-wood-dark via-wood to-ocean-dark" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-6">
            <p className="uppercase tracking-[0.2em] text-xs text-cream/80 mb-2">{item.category}</p>
            <p className="font-display text-2xl sm:text-3xl">{item.title}</p>
          </div>
          {item.src && !failed && (
            <img
              src={item.src}
              alt={item.alt}
              onError={() => setFailed(true)}
              className="absolute inset-0 w-full h-full object-contain bg-ink"
            />
          )}
        </div>
        <figcaption className="mt-4 text-center text-cream">
          <p className="font-display text-xl">{item.title}</p>
          <p className="text-cream/70 text-sm mt-1">
            {item.category} · {index + 1} of {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
