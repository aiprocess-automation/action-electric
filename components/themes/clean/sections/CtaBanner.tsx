import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-slate-50 p-12 text-center sm:p-16">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            {data.subhead}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton cta={data.primaryCta} />
          {data.secondaryCta && (
            <CtaButton cta={data.secondaryCta} variant="secondary" />
          )}
        </div>
      </div>
    </section>
  )
}
