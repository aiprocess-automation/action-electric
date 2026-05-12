import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl border-[3px] border-black bg-[var(--color-secondary,#432DD7)] p-10 text-white shadow-[12px_12px_0_0_#000] sm:p-14">
        <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-3 text-lg text-white/85">{data.subhead}</p>
        )}
        <div className="mt-7 flex flex-wrap gap-4">
          <CtaButton cta={data.primaryCta} />
          {data.secondaryCta && (
            <CtaButton cta={data.secondaryCta} variant="secondary" />
          )}
        </div>
      </div>
    </section>
  )
}
