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
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-5 text-lg leading-relaxed text-[#3a3a3a]">
            {data.subhead}
          </p>
        )}
        {data.cta && (
          <div className="mt-8 inline-block">
            <CtaButton cta={data.cta} />
          </div>
        )}
      </div>
    </section>
  )
}
