import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[var(--color-surface-2)] p-10">
        {data.headline && (
          <h2 className="mb-8 max-w-2xl font-display text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {data.items.map((s) => (
            <li key={s.label}>
              <div className="font-display text-4xl font-bold leading-none text-[var(--color-primary)] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#7a6553]">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
