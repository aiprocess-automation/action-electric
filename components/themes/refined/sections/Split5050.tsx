import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function Split5050({ section }: { section: SectionOfType<'split-50-50'> }) {
  const { data } = section
  const imageFirst = data.side === 'image-left'
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
        <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
          {data.text.eyebrow && (
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {data.text.eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
            {data.text.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3a3a3a]">
            {data.text.body}
          </p>
          {data.text.cta && (
            <div className="mt-8">
              <CtaButton cta={data.text.cta} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
