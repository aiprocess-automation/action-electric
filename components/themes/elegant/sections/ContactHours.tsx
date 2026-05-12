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
    <section id="contact" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
              Contact
            </h3>
            <dl className="mt-7 space-y-6">
              <div>
                <dt className="text-xs font-light uppercase tracking-[0.2em] text-slate-500">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${phoneTel}`}
                    className="font-display text-2xl font-light tracking-tight text-slate-900 hover:text-slate-700"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-light uppercase tracking-[0.2em] text-slate-500">
                  Address
                </dt>
                <dd className="mt-2 font-light leading-loose text-slate-700">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{' '}
                  {business.address.postal}
                </dd>
              </div>
            </dl>
          </div>
          {data.showHoursTable && business.hours.length > 0 && (
            <div>
              <h3 className="text-xs font-light uppercase tracking-[0.3em] text-slate-500">
                Hours
              </h3>
              <table className="mt-7 w-full text-sm font-light">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr key={i} className="border-b border-slate-200 last:border-0">
                      <td className="py-3.5 pr-4 text-slate-900">{h.day}</td>
                      <td className="py-3.5 text-slate-600">
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
