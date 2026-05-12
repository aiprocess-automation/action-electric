import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-5 max-w-2xl text-lg text-white/80">{data.description}</p>
        )}
        <ul className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0A0A0A] p-6 transition-colors hover:bg-[#141414]"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center bg-[var(--color-primary)] text-white">
                  <PdfIcon />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg uppercase tracking-tight text-white">
                    {f.label}
                  </span>
                  <span className="block text-xs uppercase tracking-widest text-white/60">
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
