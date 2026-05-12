import type { Cta } from '@/lib/schema'

export function ctaHref(cta: Cta): string {
  if (cta.action === 'tel') return `tel:${cta.target ?? ''}`
  if (cta.action === 'email') return `mailto:${cta.target ?? ''}`
  if (cta.action === 'scroll') return `#${cta.target ?? ''}`
  return cta.target ?? '#'
}

/**
 * Clean CTAs: subtle radius, restrained colour, small shadow on hover.
 * Modern flat default — looks like every well-made 2026 SaaS button.
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
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#1d4ed8]'
      : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
