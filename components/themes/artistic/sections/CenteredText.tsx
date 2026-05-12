import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
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
