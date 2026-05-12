import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-black bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="font-display text-xl font-bold uppercase tracking-tight text-[#1C293C] sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="border-[3px] border-black bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[#1C293C] shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000]"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
