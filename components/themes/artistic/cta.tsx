import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

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
    'inline-flex items-center justify-center px-7 py-3 text-base font-semibold transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#2563EB]'
      : 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
