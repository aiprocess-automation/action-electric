import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#1d4ed8] p-12 text-center text-white shadow-lg sm:p-14">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            {data.subhead}
          </p>
        )}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={
              data.primaryCta.action === 'tel'
                ? `tel:${data.primaryCta.target}`
                : data.primaryCta.action === 'scroll'
                  ? `#${data.primaryCta.target ?? ''}`
                  : (data.primaryCta.target ?? '#')
            }
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-slate-100"
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
