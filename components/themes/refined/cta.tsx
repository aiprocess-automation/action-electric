import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

/**
 * Refined CTAs: hairline border, no hard offset shadow, restrained
 * letter-spacing. Subtle hover state. Primary uses the ink-blue
 * primary token; secondary is a hairline ghost button.
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
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#16294a]'
      : 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
