import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-[#e6dfd5] bg-[var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-medium text-white hover:bg-[#4a352a]"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
