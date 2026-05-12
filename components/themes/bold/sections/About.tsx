import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
          {data.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-3">
            {data.badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm uppercase tracking-wider text-white"
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
