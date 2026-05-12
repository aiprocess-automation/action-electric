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
        className="border-b-[3px] border-black bg-[var(--color-surface)] px-6 pb-16 pt-12 sm:pt-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#1C293C] sm:text-6xl md:text-7xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-5 max-w-xl text-lg text-[#1C293C]/80">
                {data.subhead}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton cta={data.primaryCta} />
              {data.secondaryCta && (
                <CtaButton cta={data.secondaryCta} variant="secondary" />
              )}
            </div>
            {data.trustItems.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold uppercase tracking-wider text-[#1C293C]">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="size-2 bg-[var(--color-primary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-[3px] border-black bg-white shadow-[12px_12px_0_0_#000]">
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
      className="border-b-[3px] border-black bg-[var(--color-primary)] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#1C293C] sm:text-6xl md:text-7xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#1C293C]/85">
            {data.subhead}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton cta={data.primaryCta} variant="secondary" />
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
      className={`mb-3 inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C] ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
