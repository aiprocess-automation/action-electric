import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data, variant } = section
  if (variant === 'list-detailed') {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
          <ul className="mt-12 divide-y divide-slate-200">
            {data.items.map((s) => (
              <li key={s.id} className="flex items-start gap-5 py-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[var(--color-primary)]">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div
              key={s.id}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-md bg-blue-50 text-[var(--color-primary)]">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
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
        <div className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {headline}
      </h2>
    </div>
  )
}
