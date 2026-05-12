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
        className="relative isolate overflow-hidden bg-[#0A0A0A] text-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40"
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40 md:pt-48">
          <div className="max-w-2xl">
            {data.eyebrow && (
              <Eyebrow>{data.eyebrow}</Eyebrow>
            )}
            <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-6 max-w-xl text-lg text-white/80">
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
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium uppercase tracking-wider text-white/70">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-1.5 bg-[var(--color-primary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <span className="sr-only">{business.name}</span>
      </section>
    )
  }
  return (
    <section
      id="top"
      className="bg-[#0A0A0A] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">{data.subhead}</p>
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
      className={`mb-5 inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest text-white ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
