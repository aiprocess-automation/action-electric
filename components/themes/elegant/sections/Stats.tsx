import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-14 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4">
          {data.items.map((s) => (
            <li key={s.label} className="border-t border-slate-300 pt-5">
              <div className="font-display text-5xl font-light leading-none tracking-tight text-slate-900 sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-4 text-xs font-light uppercase tracking-[0.25em] text-slate-500">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
