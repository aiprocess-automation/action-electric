import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl border-t border-b border-[var(--color-primary)] py-16 text-center">
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#3a3a3a]">
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
