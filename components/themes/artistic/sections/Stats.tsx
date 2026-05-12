import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-12 max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-5xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4">
          {data.items.map((s, i) => (
            <li
              key={s.label}
              className={i % 2 === 1 ? 'sm:translate-y-6' : ''}
            >
              <div className="font-display text-5xl uppercase leading-none text-[var(--color-primary)] sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
