import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-10 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {data.items.map((s) => (
            <li
              key={s.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="font-display text-3xl font-semibold leading-none text-[var(--color-primary)] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-600">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
