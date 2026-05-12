import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s, i) => (
            <div key={s.id} className={i % 2 === 1 ? 'md:translate-y-8' : ''}>
              <span className="inline-flex size-12 items-center justify-center bg-[var(--color-primary)] text-white">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-2xl uppercase leading-tight text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHead({
  eyebrow,
  headline,
}: {
  eyebrow?: string | undefined
  headline: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
        {headline}
      </h2>
    </div>
  )
}
