import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-4 max-w-2xl text-lg text-[#1C293C]/85">{data.description}</p>
        )}
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-[3px] border-black bg-white p-5 shadow-[8px_8px_0_0_#000] transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center border-[3px] border-black bg-[var(--color-primary)] text-[#1C293C]">
                  <PdfIcon />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-base font-black uppercase">
                    {f.label}
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#1C293C]/60">
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
