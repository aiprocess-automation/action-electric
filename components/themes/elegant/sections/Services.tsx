import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div key={s.id}>
              <span className="inline-flex size-10 items-center justify-center text-slate-700">
                <Icon name={s.icon} size={20} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-light tracking-tight text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 font-light leading-loose text-slate-600">
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
        <div className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.01em] text-slate-900 sm:text-5xl">
        {headline}
      </h2>
    </div>
  )
}
