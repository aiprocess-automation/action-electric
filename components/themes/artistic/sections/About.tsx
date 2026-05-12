import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
          {data.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-widest text-slate-700">
            {data.badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span className="text-[var(--color-accent)]">
                  <Icon name={b.icon} size={16} />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
