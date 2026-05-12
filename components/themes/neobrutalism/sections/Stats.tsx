import type { SectionOfType } from '@/lib/config'

export function Stats({ section }: { section: SectionOfType<'stats'> }) {
  const { data } = section
  return (
    <section className="border-y-[3px] border-black bg-[var(--color-primary)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {data.headline && (
          <h2 className="mb-8 font-display text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {data.items.map((s) => (
            <li key={s.label} className="text-[#1C293C]">
              <div className="font-display text-5xl font-black leading-none sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-bold uppercase tracking-widest text-[#1C293C]/80">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
