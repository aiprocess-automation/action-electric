import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            {data.description}
          </p>
        )}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.files.map((f, i) => (
            <li key={f.url} className={i % 2 === 1 ? 'sm:translate-y-6' : ''}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-2 border-[var(--color-primary)] p-5 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center bg-[var(--color-primary)] text-white">
                  <PdfIcon />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg uppercase tracking-tight">
                    {f.label}
                  </span>
                  <span className="block text-xs uppercase tracking-widest opacity-75">
                    PDF{f.sizeLabel ? ` · ${f.sizeLabel}` : ''}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PdfIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
