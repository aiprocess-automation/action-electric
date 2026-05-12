import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-12 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
          {data.items.map((s) => (
            <li
              key={s.label}
              className="border-t border-[var(--color-accent)] pt-5"
            >
              <div className="font-display text-4xl font-medium leading-none text-[var(--color-primary)] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-[#5a5a5a]">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
