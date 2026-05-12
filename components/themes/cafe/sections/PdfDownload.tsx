import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#5b4533]">{data.description}</p>
        )}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#efe7da] transition-shadow hover:shadow-md"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-primary)]">
                  <PdfIcon />
                </span>
                <span className="flex-1">
                  <span className="block font-display font-semibold text-[var(--color-primary)]">
                    {f.label}
                  </span>
                  <span className="block text-xs text-[#7a6553]">
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
