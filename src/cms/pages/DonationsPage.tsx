import {
  CmsCard,
  CmsPageHeader,
  StatusPill,
} from '@/cms/components/CmsUI'
import { cmsDonations } from '@/cms/data/mock'

export default function CmsDonationsPage() {
  const total = cmsDonations
    .filter((d) => d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0)
  const month = total
  const today = cmsDonations
    .filter((d) => d.createdAt === '2026-08-05' && d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0)

  return (
    <div>
      <CmsPageHeader
        title="Donations"
        description="Track support for campaigns and field work."
      />

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { label: 'Today', value: `${today} BGN` },
          { label: 'This month', value: `${month} BGN` },
          { label: 'Lifetime (mock)', value: `${total + 4820} BGN` },
        ].map((stat) => (
          <CmsCard key={stat.label} className="p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">{stat.value}</p>
          </CmsCard>
        ))}
      </div>

      <CmsCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] uppercase tracking-[0.14em] text-zinc-400">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Campaign</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {cmsDonations.map((d) => (
                <tr key={d.id} className="hover:bg-zinc-50/80">
                  <td className="px-4 py-3 font-medium text-zinc-800">{d.name}</td>
                  <td className="px-4 py-3 text-zinc-700">{d.amount} BGN</td>
                  <td className="px-4 py-3 text-zinc-600">{d.campaign}</td>
                  <td className="px-4 py-3">
                    <StatusPill status={d.status} />
                  </td>
                  <td className="px-4 py-3 text-zinc-500">{d.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CmsCard>
    </div>
  )
}
