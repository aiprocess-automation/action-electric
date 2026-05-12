import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function Split5050({ section }: { section: SectionOfType<'split-50-50'> }) {
  const { data } = section
  const imageFirst = data.side === 'image-left'
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
          <div className="border-[3px] border-black bg-white shadow-[12px_12px_0_0_#000]">
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
            <div className="mb-3 inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
              {data.text.eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
            {data.text.headline}
          </h2>
          <p className="mt-4 text-lg text-[#1C293C]/85">{data.text.body}</p>
          {data.text.cta && (
            <div className="mt-6">
              <CtaButton cta={data.text.cta} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
