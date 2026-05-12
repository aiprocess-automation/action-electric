import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-slate-500">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-7 text-lg font-light leading-loose text-slate-600">
            {data.subhead}
          </p>
        )}
        {data.cta && (
          <div className="mt-10 inline-block">
            <CtaButton cta={data.cta} />
          </div>
        )}
      </div>
    </section>
  )
}
