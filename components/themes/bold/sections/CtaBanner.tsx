import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="bg-[var(--color-primary)] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            {data.subhead}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={
              data.primaryCta.action === 'tel'
                ? `tel:${data.primaryCta.target}`
                : data.primaryCta.action === 'scroll'
                  ? `#${data.primaryCta.target ?? ''}`
                  : (data.primaryCta.target ?? '#')
            }
            className="inline-flex items-center justify-center bg-white px-7 py-4 font-display text-base uppercase tracking-wider text-[var(--color-primary)] hover:bg-white/90"
          >
            {data.primaryCta.label}
          </a>
          {data.secondaryCta && (
            <CtaButton cta={data.secondaryCta} variant="secondary" />
          )}
        </div>
      </div>
    </section>
  )
}
