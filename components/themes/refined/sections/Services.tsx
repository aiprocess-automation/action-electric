import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div key={s.id} className="flex gap-5">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]">
                <Icon name={s.icon} size={18} />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-[var(--color-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3a3a3a]">
                  {s.description}
                </p>
              </div>
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
        <div className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
        {headline}
      </h2>
    </div>
  )
}
