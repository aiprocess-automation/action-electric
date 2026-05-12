import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl border-y-4 border-[var(--color-primary)] py-16 text-center">
        <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
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
