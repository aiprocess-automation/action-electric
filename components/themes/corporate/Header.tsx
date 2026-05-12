import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
