import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div
              key={s.id}
              className="bg-[#0A0A0A] p-8 transition-colors hover:bg-[#141414]"
            >
              <span className="inline-flex size-12 items-center justify-center bg-[var(--color-primary)] text-white">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-6 font-display text-xl uppercase tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
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
        <div className="mb-4 inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest text-white">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
        {headline}
      </h2>
    </div>
  )
}
