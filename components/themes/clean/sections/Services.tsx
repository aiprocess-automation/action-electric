import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div key={s.id}>
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-primary)]">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
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
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {headline}
      </h2>
    </div>
  )
}
