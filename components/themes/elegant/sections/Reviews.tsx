import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow && (
            <div className="mb-7 text-xs font-light uppercase tracking-[0.3em] text-slate-500">
              {data.eyebrow}
            </div>
          )}
          <blockquote className="font-display text-3xl font-light italic leading-[1.3] text-slate-900 sm:text-4xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-9 text-sm font-light tracking-wider text-slate-600">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
          {data.headline}
        </h2>
        <ul className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li key={r.id}>
              <Stars n={r.rating} />
              <blockquote className="mt-4 font-light italic leading-loose text-slate-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-5 text-xs font-light uppercase tracking-[0.2em] text-slate-500">
                — {r.author} · Google
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} star rating`} className="text-slate-700">
      {'★'.repeat(n)}
      <span className="text-slate-300">{'★'.repeat(5 - n)}</span>
    </span>
  )
}
