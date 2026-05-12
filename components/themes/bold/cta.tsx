import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

/**
 * Bold CTAs: square corners, heavyweight type, no soft edges. Primary
 * is the activator colour on dark backgrounds; secondary is white-on-
 * dark with a thin white border.
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
    'inline-flex items-center justify-center px-7 py-4 font-display text-base uppercase tracking-wider transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#005d96]'
      : 'border border-white/40 text-white hover:bg-white hover:text-[#0A0A0A]'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
