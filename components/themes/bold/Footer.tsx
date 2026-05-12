import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-sm text-white/70">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-2xl uppercase tracking-tight text-white">
              {business.name}
            </div>
            <p className="mt-3 max-w-sm leading-relaxed">{business.tagline}</p>
          </div>
          <div>
            <div className="font-display text-xs uppercase tracking-widest text-[var(--color-primary)]">
              Contact
            </div>
            <p className="mt-3 text-white">{business.phone}</p>
            {business.email && <p>{business.email}</p>}
          </div>
          <div>
            <div className="font-display text-xs uppercase tracking-widest text-[var(--color-primary)]">
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
        <div className="mt-12 border-t border-white/10 pt-5 text-xs text-white/50">
          © {new Date().getFullYear()} {business.name}.
        </div>
      </div>
    </footer>
  )
}
