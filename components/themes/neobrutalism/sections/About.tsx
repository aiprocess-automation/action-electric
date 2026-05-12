import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {data.eyebrow && (
          <div className="inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {data.headline}
        </h2>
        <p className="mt-5 text-lg text-[#1C293C]/85">{data.narrative}</p>
        {data.badges.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {data.badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 border-[3px] border-black bg-white px-3 py-2 text-sm font-bold shadow-[4px_4px_0_0_#000]"
              >
                <span className="text-[var(--color-secondary,#432DD7)]">
                  <Icon name={b.icon} size={18} />
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
