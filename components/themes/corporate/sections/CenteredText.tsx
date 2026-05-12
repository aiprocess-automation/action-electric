import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {data.subhead}
          </p>
        )}
        {data.cta && (
          <div className="mt-7 inline-block">
            <CtaButton cta={data.cta} />
          </div>
        )}
      </div>
    </section>
  )
}
