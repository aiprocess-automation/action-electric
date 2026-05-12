import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
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
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <span className="text-[var(--color-primary)]">
                  <Icon name={b.icon} size={18} />
                </span>
                <span className="font-medium">{b.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
