import type { SiteConfig } from '@/lib/schema'
import { Footer as EnergeticFooter } from './themes/energetic/Footer'
import { Footer as RefinedFooter } from './themes/refined/Footer'
import { Footer as CafeFooter } from './themes/cafe/Footer'
import { Footer as BoldFooter } from './themes/bold/Footer'
import { Footer as CleanFooter } from './themes/clean/Footer'
import { Footer as ArtisticFooter } from './themes/artistic/Footer'
import { Footer as NeobrutalismFooter } from './themes/neobrutalism/Footer'
import { Footer as CorporateFooter } from './themes/corporate/Footer'
import { Footer as ElegantFooter } from './themes/elegant/Footer'

export function Footer({ data }: { data: SiteConfig }) {
  switch (data.theme) {
    case 'refined':
      return <RefinedFooter business={data.business} />
    case 'cafe':
      return <CafeFooter business={data.business} />
    case 'bold':
      return <BoldFooter business={data.business} />
    case 'clean':
      return <CleanFooter business={data.business} />
    case 'artistic':
      return <ArtisticFooter business={data.business} />
    case 'neobrutalism':
      return <NeobrutalismFooter business={data.business} />
    case 'corporate':
      return <CorporateFooter business={data.business} />
    case 'elegant':
      return <ElegantFooter business={data.business} />
    case 'energetic':
    default:
      return <EnergeticFooter business={data.business} />
  }
}
