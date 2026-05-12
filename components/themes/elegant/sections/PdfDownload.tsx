import type { SectionOfType } from '@/lib/config'

export function PdfDownload({ section }: { section: SectionOfType<'pdf-download'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
          {data.headline}
        </h2>
        {data.description && (
          <p className="mt-7 max-w-2xl text-lg font-light leading-loose text-slate-700">
            {data.description}
          </p>
        )}
        <ul className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {data.files.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-6 transition-colors hover:bg-slate-50"
              >
                <span className="flex items-center gap-5">
                  <PdfIcon />
                  <span>
                    <span className="block font-display text-xl font-light tracking-tight text-slate-900">
                      {f.label}
                    </span>
                    <span className="block text-xs font-light uppercase tracking-[0.2em] text-slate-500">
                      PDF{f.sizeLabel ? ` · ${f.sizeLabel}` : ''}
                    </span>
                  </span>
                </span>
                <span className="text-xs font-light uppercase tracking-[0.2em] text-slate-700">
                  Download
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-700">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
