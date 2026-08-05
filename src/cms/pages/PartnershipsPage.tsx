import {
  CmsCard,
  CmsPageHeader,
  StatusPill,
} from '@/cms/components/CmsUI'
import { cmsPartnerships } from '@/cms/data/mock'

const pipeline = ['new', 'contacted', 'negotiating', 'won', 'lost'] as const

export default function CmsPartnershipsPage() {
  return (
    <div>
      <CmsPageHeader
        title="Partnerships"
        description="CRM-style pipeline for museums, tourism boards, and sponsors."
      />

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-5">
        {pipeline.map((status) => (
          <CmsCard key={status} className="p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400 capitalize">
              {status}
            </p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">
              {cmsPartnerships.filter((p) => p.status === status).length}
            </p>
          </CmsCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {cmsPartnerships.map((p) => (
          <CmsCard key={p.id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{p.business}</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {p.contact} · {p.type}
                </p>
              </div>
              <StatusPill status={p.status} />
            </div>
            <p className="mt-4 text-xs text-zinc-400">Updated {p.updatedAt}</p>
          </CmsCard>
        ))}
      </div>
    </div>
  )
}
