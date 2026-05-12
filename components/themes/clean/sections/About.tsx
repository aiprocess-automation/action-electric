import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {data.headline}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {data.badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
              >
                <span className="text-[var(--color-primary)]">
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
