import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl border-y border-slate-300 py-20 text-center">
        <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-loose text-slate-600">
            {data.subhead}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton cta={data.primaryCta} />
          {data.secondaryCta && (
            <CtaButton cta={data.secondaryCta} variant="secondary" />
          )}
        </div>
      </div>
    </section>
  )
}
