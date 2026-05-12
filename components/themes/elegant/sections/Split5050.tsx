import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function Split5050({ section }: { section: SectionOfType<'split-50-50'> }) {
  const { data } = section
  const imageFirst = data.side === 'image-left'
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="aspect-[3/4] h-full w-full object-cover"
          />
        </div>
        <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
          {data.text.eyebrow && (
            <div className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-slate-500">
              {data.text.eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            {data.text.headline}
          </h2>
          <p className="mt-7 text-lg font-light leading-loose text-slate-700">
            {data.text.body}
          </p>
          {data.text.cta && (
            <div className="mt-10">
              <CtaButton cta={data.text.cta} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
