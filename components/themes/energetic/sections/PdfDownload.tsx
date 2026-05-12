import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="bg-orange-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="inline-block border-2 border-black bg-amber-300 px-2 py-1 text-xs font-bold uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-4 max-w-2xl text-lg text-zinc-800">{data.description}</p>
        )}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000] transition-transform hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center border-4 border-black bg-orange-600 text-white">
                  <PdfIcon />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-base font-black uppercase">
                    {f.label}
                  </span>
                  <span className="block text-xs text-zinc-600">
                    PDF{f.sizeLabel ? ` · ${f.sizeLabel}` : ''} · click to download
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
