import type { SectionOfType } from '@/lib/config'

export function Reviews({ section }: { section: SectionOfType<'reviews'> }) {
  const { data, variant } = section
  const items = data.items
  if (variant === 'single-quote' && items[0]) {
    const r = items[0]
    return (
      <section className="bg-[var(--color-surface)] px-6 py-20">
        <div className="mx-auto max-w-3xl border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_0_#000]">
          {data.eyebrow && <Eyebrow text={data.eyebrow} />}
          <blockquote className="mt-3 font-display text-2xl font-black uppercase leading-snug sm:text-3xl">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="mt-5 text-sm font-bold uppercase tracking-widest">
            — {r.author} <Stars n={r.rating} /> · Google
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && <Eyebrow text={data.eyebrow} />}
        <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {data.headline}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li
              key={r.id}
              className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000]"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-3 text-[#1C293C]/85">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1C293C]/60">
                — {r.author} · Google
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
      {text}
    </div>
  )
}

function Stars({ n }: { n: number }) {
  return (
    <div aria-label={`${n} star rating`} className="text-[var(--color-primary)]">
      {'★'.repeat(n)}
      <span className="text-[#1C293C]/20">{'★'.repeat(5 - n)}</span>
    </div>
  )
}
