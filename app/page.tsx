import { getContent } from '@/lib/content'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionRenderer } from '@/components/SectionRenderer'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const data = await getContent()
  return (
    <>
      <Header data={data} />
      <main>
        <SectionRenderer
          sections={data.sections}
          business={data.business}
          theme={data.theme}
        />
      </main>
      <Footer data={data} />
    </>
  )
}
