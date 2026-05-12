import type { SiteConfig } from '@/lib/schema'
import { Header as EnergeticHeader } from './themes/energetic/Header'
import { Header as RefinedHeader } from './themes/refined/Header'
import { Header as CafeHeader } from './themes/cafe/Header'
import { Header as BoldHeader } from './themes/bold/Header'
import { Header as CleanHeader } from './themes/clean/Header'
import { Header as ArtisticHeader } from './themes/artistic/Header'
import { Header as NeobrutalismHeader } from './themes/neobrutalism/Header'
import { Header as CorporateHeader } from './themes/corporate/Header'
import { Header as ElegantHeader } from './themes/elegant/Header'

export function Header({ data }: { data: SiteConfig }) {
  switch (data.theme) {
    case 'refined':
      return <RefinedHeader business={data.business} />
    case 'cafe':
      return <CafeHeader business={data.business} />
    case 'bold':
      return <BoldHeader business={data.business} />
    case 'clean':
      return <CleanHeader business={data.business} />
    case 'artistic':
      return <ArtisticHeader business={data.business} />
    case 'neobrutalism':
      return <NeobrutalismHeader business={data.business} />
    case 'corporate':
      return <CorporateHeader business={data.business} />
    case 'elegant':
      return <ElegantHeader business={data.business} />
    case 'energetic':
    default:
      return <EnergeticHeader business={data.business} />
  }
}
