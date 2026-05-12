import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-[#141414] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow && (
            <div className="mb-5 inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
              {data.eyebrow}
            </div>
          )}
          <blockquote className="font-display text-3xl uppercase leading-tight tracking-tight sm:text-4xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-7 text-xs uppercase tracking-widest text-white/70">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-[#141414] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
          {data.headline}
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li key={r.id} className="border border-white/10 p-6">
              <Stars n={r.rating} />
              <blockquote className="mt-3 leading-relaxed text-white/80">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-5 font-display text-xs uppercase tracking-widest text-white/60">
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
    <span aria-label={`${n} star rating`} className="text-[var(--color-primary)]">
      {'★'.repeat(n)}
      <span className="text-white/30">{'★'.repeat(5 - n)}</span>
    </span>
  )
}
