import type { SiteConfig } from '@/lib/schema'

export function Header({ business }: { business: SiteConfig['business'] }) {
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl uppercase tracking-tight text-white sm:text-2xl"
        >
          {business.name}
        </a>
        <a
          href={`tel:${phoneTel}`}
          className="bg-[var(--color-primary)] px-5 py-2.5 font-display text-sm uppercase tracking-wider text-white hover:bg-[#005d96]"
        >
          {business.phone}
        </a>
      </div>
    </header>
  )
}
