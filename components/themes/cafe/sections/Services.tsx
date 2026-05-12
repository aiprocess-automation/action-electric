import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div
              key={s.id}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#efe7da] transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-primary)]">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-[var(--color-primary)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5b4533]">
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
        <div className="mb-3 inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
        {headline}
      </h2>
    </div>
  )
}
