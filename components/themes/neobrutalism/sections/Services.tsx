import type { SectionOfType } from '@/lib/config'
import { Icon } from '../icon'

export function Services({ section }: { section: SectionOfType<'services'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={data.eyebrow} headline={data.headline} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((s) => (
            <div
              key={s.id}
              className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000]"
            >
              <span className="inline-flex size-12 items-center justify-center border-[3px] border-black bg-[var(--color-primary)] text-[#1C293C]">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-black uppercase">
                {s.title}
              </h3>
              <p className="mt-2 text-[#1C293C]/80">{s.description}</p>
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
    <div>
      {eyebrow && (
        <div className="mb-3 inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        {headline}
      </h2>
    </div>
  )
}
