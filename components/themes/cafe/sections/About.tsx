import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#5b4533]">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {data.badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-2)] px-4 py-2 text-sm text-[var(--color-primary)]"
              >
                <Icon name={b.icon} size={16} />
                {b.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
