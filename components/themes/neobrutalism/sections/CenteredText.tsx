import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="mt-2 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-4 text-lg text-[#1C293C]/85">{data.subhead}</p>
        )}
        {data.cta && (
          <div className="mt-6 inline-block">
            <CtaButton cta={data.cta} />
          </div>
        )}
      </div>
    </section>
  )
}
