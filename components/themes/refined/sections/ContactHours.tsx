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
    <section
      id="contact"
      className="bg-[var(--color-surface)] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Contact
            </h3>
            <dl className="mt-5 space-y-4 text-[#3a3a3a]">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-[#7a7a7a]">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${phoneTel}`}
                    className="font-display text-2xl font-medium text-[var(--color-primary)] hover:text-[#16294a]"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-[#7a7a7a]">
                  Address
                </dt>
                <dd className="mt-1 leading-relaxed">
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
              <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Hours
              </h3>
              <table className="mt-5 w-full text-sm">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#e5e1d6] last:border-0"
                    >
                      <td className="py-3 pr-4 text-[#3a3a3a]">{h.day}</td>
                      <td className="py-3 text-[#5a5a5a]">
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
