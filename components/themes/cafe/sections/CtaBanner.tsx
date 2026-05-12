import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CtaBanner({ section }: { section: SectionOfType<'cta-banner'> }) {
  const { data } = section
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--color-primary)] p-10 text-center text-white sm:p-14">
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mx-auto mt-3 max-w-xl text-lg text-[#f3eee5]">
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
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-medium text-[var(--color-primary)] hover:bg-[#f3eee5]"
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
