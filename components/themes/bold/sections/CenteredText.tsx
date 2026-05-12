import type { SectionOfType } from '@/lib/config'
import { CtaButton } from '../cta'

export function CenteredText({
  section,
}: {
  section: SectionOfType<'centered-text'>
}) {
  const { data } = section
  return (
    <section className="bg-[#0A0A0A] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        {data.eyebrow && (
          <div className="mb-4 inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
          {data.headline}
        </h2>
        {data.subhead && (
          <p className="mt-5 text-lg leading-relaxed text-white/80">
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
