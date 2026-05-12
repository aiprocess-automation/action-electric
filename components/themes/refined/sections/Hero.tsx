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
        className="relative bg-[var(--color-surface)] px-6 pb-20 pt-16 sm:pt-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[var(--color-primary)] sm:text-5xl md:text-6xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#3a3a3a]">
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
              <ul className="mt-8 space-y-1.5 text-sm text-[#5a5a5a]">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block h-px w-6 bg-[var(--color-accent)]"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
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
  // phone-prominent fallback (rare for Refined archetypes).
  return (
    <section
      id="top"
      className="relative bg-[var(--color-surface)] px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[var(--color-primary)] sm:text-5xl md:text-6xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
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
      className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)] ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
