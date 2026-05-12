import type { SiteConfig } from '@/lib/schema'

export function Footer({ business }: { business: SiteConfig['business'] }) {
  return (
    <footer className="mt-32 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-sm text-slate-600">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-light tracking-[0.05em] text-slate-900">
              {business.name}
            </div>
            <p className="mt-4 max-w-sm font-light leading-loose">
              {business.tagline}
            </p>
          </div>
          <div>
            <div className="text-xs font-light uppercase tracking-[0.25em] text-slate-500">
              Contact
            </div>
            <p className="mt-4 font-light">{business.phone}</p>
            {business.email && <p className="font-light">{business.email}</p>}
          </div>
          <div>
            <div className="text-xs font-light uppercase tracking-[0.25em] text-slate-500">
              Visit
            </div>
            <p className="mt-4 font-light leading-loose">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{' '}
              {business.address.postal}
            </p>
          </div>
        </div>
        <div className="mt-16 text-xs font-light text-slate-400">
          © {new Date().getFullYear()} {business.name}.
        </div>
      </div>
    </footer>
  )
}
