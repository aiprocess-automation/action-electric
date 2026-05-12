import type { Section, SiteConfig } from '@/lib/config'
import { Hero as EnergeticHero } from './themes/energetic/sections/Hero'
import { Services as EnergeticServices } from './themes/energetic/sections/Services'
import { Reviews as EnergeticReviews } from './themes/energetic/sections/Reviews'
import { About as EnergeticAbout } from './themes/energetic/sections/About'
import { Stats as EnergeticStats } from './themes/energetic/sections/Stats'
import { CtaBanner as EnergeticCtaBanner } from './themes/energetic/sections/CtaBanner'
import { ContactHours as EnergeticContactHours } from './themes/energetic/sections/ContactHours'
import { Split5050 as EnergeticSplit5050 } from './themes/energetic/sections/Split5050'
import { CenteredText as EnergeticCenteredText } from './themes/energetic/sections/CenteredText'
import { PdfDownload as EnergeticPdfDownload } from './themes/energetic/sections/PdfDownload'
import { Hero as RefinedHero } from './themes/refined/sections/Hero'
import { Services as RefinedServices } from './themes/refined/sections/Services'
import { Reviews as RefinedReviews } from './themes/refined/sections/Reviews'
import { About as RefinedAbout } from './themes/refined/sections/About'
import { Stats as RefinedStats } from './themes/refined/sections/Stats'
import { CtaBanner as RefinedCtaBanner } from './themes/refined/sections/CtaBanner'
import { ContactHours as RefinedContactHours } from './themes/refined/sections/ContactHours'
import { Split5050 as RefinedSplit5050 } from './themes/refined/sections/Split5050'
import { CenteredText as RefinedCenteredText } from './themes/refined/sections/CenteredText'
import { PdfDownload as RefinedPdfDownload } from './themes/refined/sections/PdfDownload'
import { Hero as CafeHero } from './themes/cafe/sections/Hero'
import { Services as CafeServices } from './themes/cafe/sections/Services'
import { Reviews as CafeReviews } from './themes/cafe/sections/Reviews'
import { About as CafeAbout } from './themes/cafe/sections/About'
import { Stats as CafeStats } from './themes/cafe/sections/Stats'
import { CtaBanner as CafeCtaBanner } from './themes/cafe/sections/CtaBanner'
import { ContactHours as CafeContactHours } from './themes/cafe/sections/ContactHours'
import { Split5050 as CafeSplit5050 } from './themes/cafe/sections/Split5050'
import { CenteredText as CafeCenteredText } from './themes/cafe/sections/CenteredText'
import { PdfDownload as CafePdfDownload } from './themes/cafe/sections/PdfDownload'
import { Hero as BoldHero } from './themes/bold/sections/Hero'
import { Services as BoldServices } from './themes/bold/sections/Services'
import { Reviews as BoldReviews } from './themes/bold/sections/Reviews'
import { About as BoldAbout } from './themes/bold/sections/About'
import { Stats as BoldStats } from './themes/bold/sections/Stats'
import { CtaBanner as BoldCtaBanner } from './themes/bold/sections/CtaBanner'
import { ContactHours as BoldContactHours } from './themes/bold/sections/ContactHours'
import { Split5050 as BoldSplit5050 } from './themes/bold/sections/Split5050'
import { CenteredText as BoldCenteredText } from './themes/bold/sections/CenteredText'
import { PdfDownload as BoldPdfDownload } from './themes/bold/sections/PdfDownload'
import { Hero as CleanHero } from './themes/clean/sections/Hero'
import { Services as CleanServices } from './themes/clean/sections/Services'
import { Reviews as CleanReviews } from './themes/clean/sections/Reviews'
import { About as CleanAbout } from './themes/clean/sections/About'
import { Stats as CleanStats } from './themes/clean/sections/Stats'
import { CtaBanner as CleanCtaBanner } from './themes/clean/sections/CtaBanner'
import { ContactHours as CleanContactHours } from './themes/clean/sections/ContactHours'
import { Split5050 as CleanSplit5050 } from './themes/clean/sections/Split5050'
import { CenteredText as CleanCenteredText } from './themes/clean/sections/CenteredText'
import { PdfDownload as CleanPdfDownload } from './themes/clean/sections/PdfDownload'
import { Hero as ArtisticHero } from './themes/artistic/sections/Hero'
import { Services as ArtisticServices } from './themes/artistic/sections/Services'
import { Reviews as ArtisticReviews } from './themes/artistic/sections/Reviews'
import { About as ArtisticAbout } from './themes/artistic/sections/About'
import { Stats as ArtisticStats } from './themes/artistic/sections/Stats'
import { CtaBanner as ArtisticCtaBanner } from './themes/artistic/sections/CtaBanner'
import { ContactHours as ArtisticContactHours } from './themes/artistic/sections/ContactHours'
import { Split5050 as ArtisticSplit5050 } from './themes/artistic/sections/Split5050'
import { CenteredText as ArtisticCenteredText } from './themes/artistic/sections/CenteredText'
import { PdfDownload as ArtisticPdfDownload } from './themes/artistic/sections/PdfDownload'
import { Hero as NeobrutalismHero } from './themes/neobrutalism/sections/Hero'
import { Services as NeobrutalismServices } from './themes/neobrutalism/sections/Services'
import { Reviews as NeobrutalismReviews } from './themes/neobrutalism/sections/Reviews'
import { About as NeobrutalismAbout } from './themes/neobrutalism/sections/About'
import { Stats as NeobrutalismStats } from './themes/neobrutalism/sections/Stats'
import { CtaBanner as NeobrutalismCtaBanner } from './themes/neobrutalism/sections/CtaBanner'
import { ContactHours as NeobrutalismContactHours } from './themes/neobrutalism/sections/ContactHours'
import { Split5050 as NeobrutalismSplit5050 } from './themes/neobrutalism/sections/Split5050'
import { CenteredText as NeobrutalismCenteredText } from './themes/neobrutalism/sections/CenteredText'
import { PdfDownload as NeobrutalismPdfDownload } from './themes/neobrutalism/sections/PdfDownload'
import { Hero as CorporateHero } from './themes/corporate/sections/Hero'
import { Services as CorporateServices } from './themes/corporate/sections/Services'
import { Reviews as CorporateReviews } from './themes/corporate/sections/Reviews'
import { About as CorporateAbout } from './themes/corporate/sections/About'
import { Stats as CorporateStats } from './themes/corporate/sections/Stats'
import { CtaBanner as CorporateCtaBanner } from './themes/corporate/sections/CtaBanner'
import { ContactHours as CorporateContactHours } from './themes/corporate/sections/ContactHours'
import { Split5050 as CorporateSplit5050 } from './themes/corporate/sections/Split5050'
import { CenteredText as CorporateCenteredText } from './themes/corporate/sections/CenteredText'
import { PdfDownload as CorporatePdfDownload } from './themes/corporate/sections/PdfDownload'
import { Hero as ElegantHero } from './themes/elegant/sections/Hero'
import { Services as ElegantServices } from './themes/elegant/sections/Services'
import { Reviews as ElegantReviews } from './themes/elegant/sections/Reviews'
import { About as ElegantAbout } from './themes/elegant/sections/About'
import { Stats as ElegantStats } from './themes/elegant/sections/Stats'
import { CtaBanner as ElegantCtaBanner } from './themes/elegant/sections/CtaBanner'
import { ContactHours as ElegantContactHours } from './themes/elegant/sections/ContactHours'
import { Split5050 as ElegantSplit5050 } from './themes/elegant/sections/Split5050'
import { CenteredText as ElegantCenteredText } from './themes/elegant/sections/CenteredText'
import { PdfDownload as ElegantPdfDownload } from './themes/elegant/sections/PdfDownload'

type Theme = SiteConfig['theme']

/**
 * Theme dispatch table. Adding a new theme = one row here + one section
 * type added to a theme = one column added across all themes.
 */
const COMPONENTS = {
  energetic: {
    hero: EnergeticHero,
    services: EnergeticServices,
    reviews: EnergeticReviews,
    about: EnergeticAbout,
    stats: EnergeticStats,
    'cta-banner': EnergeticCtaBanner,
    'contact-hours': EnergeticContactHours,
    'split-50-50': EnergeticSplit5050,
    'centered-text': EnergeticCenteredText,
    'pdf-download': EnergeticPdfDownload,
  },
  refined: {
    hero: RefinedHero,
    services: RefinedServices,
    reviews: RefinedReviews,
    about: RefinedAbout,
    stats: RefinedStats,
    'cta-banner': RefinedCtaBanner,
    'contact-hours': RefinedContactHours,
    'split-50-50': RefinedSplit5050,
    'centered-text': RefinedCenteredText,
    'pdf-download': RefinedPdfDownload,
  },
  cafe: {
    hero: CafeHero,
    services: CafeServices,
    reviews: CafeReviews,
    about: CafeAbout,
    stats: CafeStats,
    'cta-banner': CafeCtaBanner,
    'contact-hours': CafeContactHours,
    'split-50-50': CafeSplit5050,
    'centered-text': CafeCenteredText,
    'pdf-download': CafePdfDownload,
  },
  bold: {
    hero: BoldHero,
    services: BoldServices,
    reviews: BoldReviews,
    about: BoldAbout,
    stats: BoldStats,
    'cta-banner': BoldCtaBanner,
    'contact-hours': BoldContactHours,
    'split-50-50': BoldSplit5050,
    'centered-text': BoldCenteredText,
    'pdf-download': BoldPdfDownload,
  },
  clean: {
    hero: CleanHero,
    services: CleanServices,
    reviews: CleanReviews,
    about: CleanAbout,
    stats: CleanStats,
    'cta-banner': CleanCtaBanner,
    'contact-hours': CleanContactHours,
    'split-50-50': CleanSplit5050,
    'centered-text': CleanCenteredText,
    'pdf-download': CleanPdfDownload,
  },
  artistic: {
    hero: ArtisticHero,
    services: ArtisticServices,
    reviews: ArtisticReviews,
    about: ArtisticAbout,
    stats: ArtisticStats,
    'cta-banner': ArtisticCtaBanner,
    'contact-hours': ArtisticContactHours,
    'split-50-50': ArtisticSplit5050,
    'centered-text': ArtisticCenteredText,
    'pdf-download': ArtisticPdfDownload,
  },
  neobrutalism: {
    hero: NeobrutalismHero,
    services: NeobrutalismServices,
    reviews: NeobrutalismReviews,
    about: NeobrutalismAbout,
    stats: NeobrutalismStats,
    'cta-banner': NeobrutalismCtaBanner,
    'contact-hours': NeobrutalismContactHours,
    'split-50-50': NeobrutalismSplit5050,
    'centered-text': NeobrutalismCenteredText,
    'pdf-download': NeobrutalismPdfDownload,
  },
  corporate: {
    hero: CorporateHero,
    services: CorporateServices,
    reviews: CorporateReviews,
    about: CorporateAbout,
    stats: CorporateStats,
    'cta-banner': CorporateCtaBanner,
    'contact-hours': CorporateContactHours,
    'split-50-50': CorporateSplit5050,
    'centered-text': CorporateCenteredText,
    'pdf-download': CorporatePdfDownload,
  },
  elegant: {
    hero: ElegantHero,
    services: ElegantServices,
    reviews: ElegantReviews,
    about: ElegantAbout,
    stats: ElegantStats,
    'cta-banner': ElegantCtaBanner,
    'contact-hours': ElegantContactHours,
    'split-50-50': ElegantSplit5050,
    'centered-text': ElegantCenteredText,
    'pdf-download': ElegantPdfDownload,
  },
} as const

export function SectionRenderer({
  sections,
  business,
  theme,
}: {
  sections: Section[]
  business: SiteConfig['business']
  theme: Theme
}) {
  const themeComponents = COMPONENTS[theme] ?? COMPONENTS.energetic
  return (
    <>
      {sections.map((s, i) => {
        switch (s.type) {
          case 'hero': {
            const C = themeComponents.hero
            return <C key={i} section={s} business={business} />
          }
          case 'services': {
            const C = themeComponents.services
            return <C key={i} section={s} />
          }
          case 'reviews': {
            const C = themeComponents.reviews
            return <C key={i} section={s} />
          }
          case 'about': {
            const C = themeComponents.about
            return <C key={i} section={s} />
          }
          case 'stats': {
            const C = themeComponents.stats
            return <C key={i} section={s} />
          }
          case 'cta-banner': {
            const C = themeComponents['cta-banner']
            return <C key={i} section={s} />
          }
          case 'contact-hours': {
            const C = themeComponents['contact-hours']
            return <C key={i} section={s} business={business} />
          }
          case 'split-50-50': {
            const C = themeComponents['split-50-50']
            return <C key={i} section={s} />
          }
          case 'centered-text': {
            const C = themeComponents['centered-text']
            return <C key={i} section={s} />
          }
          case 'pdf-download': {
            const C = themeComponents['pdf-download']
            return <C key={i} section={s} />
          }
          // Defined in the schema but not yet shipped in any theme.
          case 'process-steps':
          case 'gallery':
          case 'faq':
          case 'service-area':
          case 'certifications':
          case 'media-and-text':
          case 'image-banner':
          case 'pull-quote':
          case 'two-column-text':
          case 'numbered-list':
          case 'logo-strip':
            return null
          default: {
            const _exhaustive: never = s
            void _exhaustive
            return null
          }
        }
      })}
    </>
  )
}
