import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

/**
 * Neobrutalism CTAs: thick black borders + hard offset shadows that are
 * larger than Energetic's. Yellow primary on violet text; secondary is
 * white with same border treatment.
 */
export function CtaButton({
  cta,
  variant = 'primary',
  className = '',
}: {
  cta: Cta
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center px-7 py-4 text-base font-bold border-[3px] border-black transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-[#1C293C] shadow-[8px_8px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
      : 'bg-white text-[#1C293C] shadow-[8px_8px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
