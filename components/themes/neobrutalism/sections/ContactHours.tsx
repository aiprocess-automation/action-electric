import type { SectionOfType, SiteConfig } from '@/lib/config'

export function ContactHours({
  section,
  business,
}: {
  section: SectionOfType<'contact-hours'>
  business: SiteConfig['business']
}) {
  const { data } = section
  const phoneTel = business.phone.replace(/[^+0-9]/g, '')
  return (
    <section id="contact" className="bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="inline-block border-[3px] border-black bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C293C]">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
            <h3 className="font-display text-xl font-black uppercase">Contact</h3>
            <dl className="mt-4 space-y-3 text-[#1C293C]">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#1C293C]/60">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-lg font-bold underline"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#1C293C]/60">
                  Address
                </dt>
                <dd>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{' '}
                  {business.address.postal}
                </dd>
              </div>
            </dl>
          </div>
          {data.showHoursTable && business.hours.length > 0 && (
            <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl font-black uppercase">Hours</h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr key={i} className="border-b border-[#1C293C]/10 last:border-0">
                      <td className="py-1.5 pr-4 font-bold">{h.day}</td>
                      <td className="py-1.5 text-[#1C293C]/80">
                        {h.open}
                        {h.close ? ` – ${h.close}` : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
