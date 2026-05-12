import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

/**
 * Cafe CTAs: pill-shaped with rounded full corners, warm brown
 * primary, soft warmth — never aggressive. Hover state is a subtle
 * shade-shift, no harsh transforms.
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
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-medium transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#4a352a]'
      : 'bg-[var(--color-surface-2)] text-[var(--color-primary)] hover:bg-[var(--color-secondary,#d8d0c4)]'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
