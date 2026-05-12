import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-[var(--color-surface)] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow && (
            <div className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {data.eyebrow}
            </div>
          )}
          <blockquote className="font-display text-3xl font-medium italic leading-[1.3] tracking-tight text-[var(--color-primary)] sm:text-4xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-8 text-sm tracking-wide text-[#5a5a5a]">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  // testimonial-stack
  return (
    <section className="bg-[var(--color-surface)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li
              key={r.id}
              className="border-l border-[var(--color-accent)] pl-5"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-3 text-[15px] italic leading-relaxed text-[#3a3a3a]">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[#7a7a7a]">
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
      <span className="text-[#d6d2c5]">{'★'.repeat(5 - n)}</span>
    </span>
  )
}
