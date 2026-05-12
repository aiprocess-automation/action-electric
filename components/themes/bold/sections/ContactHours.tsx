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
      className="bg-[#0A0A0A] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="inline-block bg-[var(--color-primary)] px-3 py-1 font-display text-xs uppercase tracking-widest">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
          <div className="bg-[#0A0A0A] p-8">
            <h3 className="font-display text-xs uppercase tracking-widest text-[var(--color-primary)]">
              Contact
            </h3>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${phoneTel}`}
                    className="font-display text-2xl uppercase tracking-tight text-white hover:text-[var(--color-primary)]"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  Address
                </dt>
                <dd className="mt-1 leading-relaxed text-white/80">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{' '}
                  {business.address.postal}
                </dd>
              </div>
            </dl>
          </div>
          {data.showHoursTable && business.hours.length > 0 && (
            <div className="bg-[#0A0A0A] p-8">
              <h3 className="font-display text-xs uppercase tracking-widest text-[var(--color-primary)]">
                Hours
              </h3>
              <table className="mt-5 w-full text-sm">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/10 last:border-0"
                    >
                      <td className="py-3 pr-4 font-display uppercase tracking-wider text-white">
                        {h.day}
                      </td>
                      <td className="py-3 text-white/70">
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
