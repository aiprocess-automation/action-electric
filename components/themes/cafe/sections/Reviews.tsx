import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-[var(--color-surface-2)] px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-[#efe7da]">
          {data.eyebrow && (
            <div className="mb-5 inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              {data.eyebrow}
            </div>
          )}
          <blockquote className="font-display text-2xl font-semibold leading-snug text-[var(--color-primary)] sm:text-3xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-6 text-sm text-[#7a6553]">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-[var(--color-surface-2)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li
              key={r.id}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#efe7da]"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-3 leading-relaxed text-[#5b4533]">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs uppercase tracking-widest text-[#7a6553]">
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
    <span aria-label={`${n} star rating`} className="text-[#d2a657]">
      {'★'.repeat(n)}
      <span className="text-[#d6cfc1]">{'★'.repeat(5 - n)}</span>
    </span>
  )
}
