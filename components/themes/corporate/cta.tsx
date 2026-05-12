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
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white shadow-sm hover:bg-[#1d4ed8]'
      : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
  return (
    <a href={ctaHref(cta)} className={`${base} ${styles} ${className}`}>
      {cta.label}
    </a>
  )
}
