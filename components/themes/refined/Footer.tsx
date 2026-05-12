import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="mt-24 border-t border-[#e5e1d6] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-[#3a3a3a]">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-xl font-medium tracking-tight text-[var(--color-primary)]">
              {business.name}
            </div>
            <p className="mt-3 max-w-sm leading-relaxed">{business.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Contact
            </div>
            <p className="mt-3">{business.phone}</p>
            {business.email && <p>{business.email}</p>}
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Find us
            </div>
            <p className="mt-3 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{' '}
              {business.address.postal}
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-[#e5e1d6] pt-6 text-xs text-[#7a7a7a]">
          © {new Date().getFullYear()} {business.name}.
        </div>
      </div>
    </footer>
  )
}
