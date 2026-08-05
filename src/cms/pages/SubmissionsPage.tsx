import { useState } from 'react'
import {
  CmsCard,
  CmsPageHeader,
  GhostButton,
  PrimaryButton,
  StatusPill,
} from '@/cms/components/CmsUI'
import { cmsSubmissions } from '@/cms/data/mock'
import { cn } from '@/lib/utils'

export default function CmsSubmissionsPage() {
  const [selectedId, setSelectedId] = useState(cmsSubmissions[0]?.id)
  const [items, setItems] = useState(cmsSubmissions)
  const selected = items.find((s) => s.id === selectedId) ?? items[0]
  const [toast, setToast] = useState('')

  const updateStatus = (status: (typeof items)[0]['status'], message: string) => {
    if (!selected) return
    setItems((prev) =>
      prev.map((item) => (item.id === selected.id ? { ...item, status } : item)),
    )
    setToast(message)
  }

  return (
    <div>
      <CmsPageHeader
        title="Write for Us"
        description="Review contributor submissions and convert approved ones into draft stories."
      />

      {toast && (
        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          {toast}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_minmax(0,1fr)]">
        <CmsCard className="overflow-hidden">
          <div className="border-b border-zinc-200 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Inbox · {items.length}
          </div>
          <div className="divide-y divide-zinc-100">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  'flex w-full cursor-pointer gap-3 px-4 py-3 text-left transition-colors hover:bg-zinc-50',
                  selected?.id === item.id && 'bg-zinc-50',
                )}
              >
                <img src={item.image} alt="" className="size-12 rounded-lg object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-900">{item.title}</p>
                  <p className="truncate text-xs text-zinc-500">
                    {item.name} · {item.village}
                  </p>
                  <div className="mt-1.5">
                    <StatusPill status={item.status} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CmsCard>

        {selected && (
          <CmsCard className="p-5 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <StatusPill status={selected.status} />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
                  {selected.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {selected.name} · {selected.village} · {selected.email}
                </p>
              </div>
              <p className="text-xs text-zinc-400">Submitted {selected.submittedAt}</p>
            </div>

            <img
              src={selected.image}
              alt=""
              className="mt-6 aspect-[16/9] w-full rounded-xl object-cover"
            />

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Category</p>
                <p className="mt-1 text-zinc-800">{selected.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Files</p>
                <p className="mt-1 text-zinc-800">2 photos · 1 document</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              Contribution preview (mock). Editors can approve into a draft story without
              copy-pasting — wired later to create a linked draft in Stories.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <PrimaryButton
                onClick={() =>
                  updateStatus('approved', 'Converted to draft story (mock). Open Stories to continue.')
                }
              >
                Convert to draft
              </PrimaryButton>
              <GhostButton onClick={() => updateStatus('changes', 'Requested changes (mock).')}>
                Request changes
              </GhostButton>
              <GhostButton onClick={() => updateStatus('approved', 'Approved (mock).')}>
                Approve
              </GhostButton>
              <GhostButton
                className="text-rose-700"
                onClick={() => updateStatus('rejected', 'Rejected (mock).')}
              >
                Reject
              </GhostButton>
            </div>
          </CmsCard>
        )}
      </div>
    </div>
  )
}
