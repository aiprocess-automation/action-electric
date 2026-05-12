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
        className="bg-white px-6 pb-32 pt-20 sm:pt-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-5xl font-light leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-6xl md:text-7xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-7 max-w-lg text-lg font-light leading-loose text-slate-600">
                {data.subhead}
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton cta={data.primaryCta} />
              {data.secondaryCta && (
                <CtaButton cta={data.secondaryCta} variant="secondary" />
              )}
            </div>
            {data.trustItems.length > 0 && (
              <ul className="mt-10 space-y-2 text-sm font-light text-slate-600">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="inline-block h-px w-8 bg-slate-400" />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>
        <span className="sr-only">{business.name}</span>
      </section>
    )
  }
  return (
    <section id="top" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-5xl font-light leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-6xl md:text-7xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-loose text-slate-600">
            {data.subhead}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
      className={`mb-5 text-xs font-light uppercase tracking-[0.3em] text-slate-500 ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
