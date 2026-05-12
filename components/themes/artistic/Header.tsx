import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-primary)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-display text-xl uppercase tracking-tight text-[var(--color-primary)] sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="text-sm font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
