import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="bg-[var(--color-primary)] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-10 font-display text-3xl uppercase leading-tight tracking-tight sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {data.items.map((s) => (
            <li key={s.label}>
              <div className="font-display text-5xl uppercase leading-none sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-white/80">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
