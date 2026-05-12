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
        className="relative bg-white px-6 pb-24 pt-12 sm:pt-16"
      >
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-6xl uppercase leading-[0.92] tracking-[-0.02em] text-[var(--color-primary)] sm:text-7xl md:text-[7rem]">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
                {data.subhead}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton cta={data.primaryCta} />
              {data.secondaryCta && (
                <CtaButton cta={data.secondaryCta} variant="secondary" />
              )}
            </div>
          </div>
          <div className="md:col-span-5 md:translate-y-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>
        {data.trustItems.length > 0 && (
          <ul className="mx-auto mt-16 flex max-w-6xl flex-wrap gap-x-6 gap-y-2 border-t-2 border-[var(--color-primary)] pt-5 text-sm uppercase tracking-widest text-slate-700">
            {data.trustItems.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <span className="sr-only">{business.name}</span>
      </section>
    )
  }
  return (
    <section id="top" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-6xl uppercase leading-[0.92] tracking-[-0.02em] text-[var(--color-primary)] sm:text-7xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
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
      className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
