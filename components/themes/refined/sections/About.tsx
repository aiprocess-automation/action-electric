import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#3a3a3a]">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#5a5a5a]">
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
