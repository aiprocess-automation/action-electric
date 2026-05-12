import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-[#e5e1d6] bg-[var(--color-surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-[var(--color-primary)] sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="text-sm font-medium tracking-wide text-[var(--color-primary)] hover:text-[#16294a]"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
