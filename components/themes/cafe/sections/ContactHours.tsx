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
      className="bg-[var(--color-surface)] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="inline-block rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#efe7da]">
            <h3 className="font-display text-xl font-semibold text-[var(--color-primary)]">
              Visit us
            </h3>
            <dl className="mt-4 space-y-3 text-[#5b4533]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[#7a6553]">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-lg font-semibold text-[var(--color-primary)]"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[#7a6553]">
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
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#efe7da]">
              <h3 className="font-display text-xl font-semibold text-[var(--color-primary)]">
                Hours
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#efe7da] last:border-0"
                    >
                      <td className="py-2 pr-4 font-medium text-[#5b4533]">{h.day}</td>
                      <td className="py-2 text-[#7a6553]">
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
