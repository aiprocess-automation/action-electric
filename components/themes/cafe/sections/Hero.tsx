import type { SectionOfType, SiteConfig } from '@/lib/config'
import { CtaButton } from '../cta'

export function Hero({
  section,
  business,
}: {
  section: SectionOfType<'hero'>
  business: SiteConfig['business']
}) {
  const { variant, data } = section
  if (variant === 'photo-led' && data.image) {
    return (
      <section
        id="top"
        className="relative overflow-hidden bg-[var(--color-surface)] px-6 pb-20 pt-12 sm:pt-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-[var(--color-primary)] sm:text-5xl md:text-6xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5b4533]">
                {data.subhead}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton cta={data.primaryCta} />
              {data.secondaryCta && (
                <CtaButton cta={data.secondaryCta} variant="secondary" />
              )}
            </div>
            {data.trustItems.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#7a6553]">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[var(--color-primary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>
        <span className="sr-only">{business.name}</span>
      </section>
    )
  }
  return (
    <section
      id="top"
      className="relative bg-[var(--color-surface)] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-[var(--color-primary)] sm:text-5xl md:text-6xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#5b4533]">
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
      <span className="sr-only">{business.name}</span>
    </section>
  )
}

function Eyebrow({
  children,
  centered,
}: {
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <div
      className={`mb-3 inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
