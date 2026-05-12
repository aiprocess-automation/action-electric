import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="mt-20 border-t border-[#e6dfd5] bg-[var(--color-surface-2)]">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-[#5b4533]">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-xl font-semibold text-[var(--color-primary)]">
              {business.name}
            </div>
            <p className="mt-3 max-w-sm leading-relaxed">{business.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              Find us
            </div>
            <p className="mt-3 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{' '}
              {business.address.postal}
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              Say hello
            </div>
            <p className="mt-3">{business.phone}</p>
            {business.email && <p>{business.email}</p>}
          </div>
        </div>
        <div className="mt-10 border-t border-[#e6dfd5] pt-5 text-xs text-[#7a6553]">
          © {new Date().getFullYear()} {business.name}. Made with care.
        </div>
      </div>
    </footer>
  )
}
