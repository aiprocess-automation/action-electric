import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="mt-24 border-t-4 border-[var(--color-primary)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-sm text-slate-700">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-3xl uppercase tracking-tight text-[var(--color-primary)]">
              {business.name}
            </div>
            <p className="mt-3 max-w-sm leading-relaxed">{business.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Contact
            </div>
            <p className="mt-3">{business.phone}</p>
            {business.email && <p>{business.email}</p>}
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Studio
            </div>
            <p className="mt-3 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{' '}
              {business.address.postal}
            </p>
          </div>
        </div>
        <div className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} {business.name}.
        </div>
      </div>
    </footer>
  )
}
