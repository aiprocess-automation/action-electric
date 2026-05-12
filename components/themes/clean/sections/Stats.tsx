import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {data.items.map((s) => (
            <li key={s.label}>
              <div className="font-display text-4xl font-semibold leading-none text-slate-900 sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-slate-600">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
