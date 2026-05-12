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
        className="relative bg-white px-6 pb-24 pt-16 sm:pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {data.headline}
            </h1>
            {data.subhead && (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
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
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                {data.trustItems.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg
                      className="size-4 text-[var(--color-primary)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="overflow-hidden rounded-2xl">
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
      className="bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && <Eyebrow centered>{data.eyebrow}</Eyebrow>}
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          {data.headline}
        </h1>
        {data.subhead && (
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
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
      className={`mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] ${centered ? '' : ''}`}
    >
      {children}
    </div>
  )
}
