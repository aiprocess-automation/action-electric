import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="mb-3 inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-4 text-lg leading-relaxed text-[#5b4533]">
            {data.subhead}
          </p>
        )}
        {data.cta && (
          <div className="mt-6 inline-block">
            <CtaButton cta={data.cta} />
          </div>
        )}
      </div>
    </section>
  )
}
