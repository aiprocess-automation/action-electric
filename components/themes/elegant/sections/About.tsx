import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function About({ section }: { section: SectionOfType<'about'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-3xl">
        {data.eyebrow && (
          <div className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
          {data.headline}
        </h2>
        <p className="mt-7 text-lg font-light leading-loose text-slate-700">
          {data.narrative}
        </p>
        {data.badges.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm font-light text-slate-600">
            {data.badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span className="text-slate-700">
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
