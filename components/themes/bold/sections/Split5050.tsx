import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function Split5050({ section }: { section: SectionOfType<'split-50-50'> }) {
  const { data } = section
  const imageFirst = data.side === 'image-left'
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <div
          className={`${imageFirst ? 'md:order-1' : 'md:order-2'} aspect-[4/3] md:aspect-auto`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`${imageFirst ? 'md:order-2' : 'md:order-1'} flex items-center px-6 py-16 sm:px-12`}
        >
          <div className="max-w-md">
            {data.text.eyebrow && (
              <div className="mb-4 inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
                {data.text.eyebrow}
              </div>
            )}
            <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl">
              {data.text.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              {data.text.body}
            </p>
            {data.text.cta && (
              <div className="mt-7">
                <CtaButton cta={data.text.cta} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
