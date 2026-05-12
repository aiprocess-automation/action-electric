import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="mt-16 border-t-[3px] border-black bg-[var(--color-secondary,#432DD7)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold uppercase">
              {business.name}
            </div>
            <p className="mt-2 text-white/80">{business.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Contact
            </div>
            <p className="mt-2">{business.phone}</p>
            {business.email && <p>{business.email}</p>}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Find us
            </div>
            <p className="mt-2 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{' '}
              {business.address.postal}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-4 text-white/60">
          © {new Date().getFullYear()} {business.name}.
        </div>
      </div>
    </footer>
  )
}
