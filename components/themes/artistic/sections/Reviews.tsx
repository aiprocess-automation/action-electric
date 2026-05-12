import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-[var(--color-primary)] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          {data.eyebrow && (
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {data.eyebrow}
            </div>
          )}
          <blockquote className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-widest text-white/80">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-[var(--color-primary)] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 max-w-2xl font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
          {data.headline}
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li
              key={r.id}
              className="border-l-2 border-[var(--color-accent)] pl-5"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-3 leading-relaxed text-white/90">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs uppercase tracking-widest text-white/70">
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
    <span aria-label={`${n} star rating`} className="text-[var(--color-accent)]">
      {'★'.repeat(n)}
      <span className="text-white/30">{'★'.repeat(5 - n)}</span>
    </span>
  )
}
