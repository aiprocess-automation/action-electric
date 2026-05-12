import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl font-light tracking-[0.05em] text-slate-900 sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="text-xs font-light uppercase tracking-[0.2em] text-slate-700 hover:text-slate-900"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
