import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">{data.description}</p>
        )}
        <ul className="mt-10 divide-y divide-[#e5e1d6] border-y border-[#e5e1d6]">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-5 transition-colors hover:bg-[var(--color-surface)]"
              >
                <span className="flex items-center gap-4">
                  <PdfIcon />
                  <span>
                    <span className="block font-display text-lg font-medium tracking-tight text-[var(--color-primary)]">
                      {f.label}
                    </span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-[#7a7a7a]">
                      PDF{f.sizeLabel ? ` · ${f.sizeLabel}` : ''}
                    </span>
                  </span>
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Download →
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
