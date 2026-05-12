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
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {data.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {data.eyebrow}
          </div>
        )}
        {data.headline && (
          <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)] sm:text-6xl">
            {data.headline}
          </h2>
        )}
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Contact
            </h3>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${phoneTel}`}
                    className="font-display text-3xl uppercase tracking-tight text-[var(--color-primary)]"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">Studio</dt>
                <dd className="mt-1 leading-relaxed text-slate-700">
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Hours
              </h3>
              <table className="mt-5 w-full text-sm">
                <tbody>
                  {business.hours.map((h, i) => (
                    <tr key={i} className="border-b border-slate-200 last:border-0">
                      <td className="py-3 pr-4 font-display uppercase tracking-tight text-slate-900">
                        {h.day}
                      </td>
                      <td className="py-3 text-slate-600">
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
