import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function Split5050({ section }: { section: SectionOfType<'split-50-50'> }) {
  const { data } = section
  const imageFirst = data.side === 'image-left'
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>
        <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
          {data.text.eyebrow && (
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              {data.text.eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {data.text.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            {data.text.body}
          </p>
          {data.text.cta && (
            <div className="mt-7">
              <CtaButton cta={data.text.cta} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
