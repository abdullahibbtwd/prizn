import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ImagePlus,
  Languages,
  Sparkles,
  Type,
} from 'lucide-react'
import {
  CmsCard,
  CmsPageHeader,
  GhostButton,
  PrimaryButton,
  StatusPill,
} from '@/cms/components/CmsUI'
import { cmsStories } from '@/cms/data/mock'
import { cn } from '@/lib/utils'

const aiActions = [
  'Generate title',
  'Improve writing',
  'Generate tags',
  'Translate',
  'Generate summary',
  'Facebook post',
  'Instagram post',
  'TikTok script',
]

export default function CmsStoryEditorPage() {
  const { id } = useParams()
  const existing = useMemo(
    () => cmsStories.find((s) => s.id === id),
    [id],
  )
  const isNew = id === 'new' || !existing

  const [title, setTitle] = useState(
    existing?.title ?? '',
  )
  const [subtitle, setSubtitle] = useState(
    existing?.subtitle ?? '',
  )
  const [body, setBody] = useState(
    existing
      ? 'There is a specific rhythm to dawn in the villages surrounding Belogradchik…'
      : '',
  )
  const [status, setStatus] = useState(existing?.status ?? 'draft')
  const [saved, setSaved] = useState(false)

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/cms/stories"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" />
          Back to stories
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill status={status} />
          <GhostButton onClick={() => setSaved(true)}>Save draft</GhostButton>
          <PrimaryButton
            onClick={() => {
              setStatus('published')
              setSaved(true)
            }}
          >
            Publish
          </PrimaryButton>
        </div>
      </div>

      <CmsPageHeader
        title={isNew ? 'New story' : 'Edit story'}
        description="Notion-like editorial canvas — frontend mock with autosave-ready structure."
      />

      {saved && (
        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          Saved locally (mock) — backend wiring comes later.
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <CmsCard className="p-5 md:p-7">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full bg-transparent font-heading text-3xl font-normal tracking-tight text-zinc-900 outline-none placeholder:text-zinc-300 md:text-4xl"
            />
            <input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Subtitle"
              className="mt-3 w-full bg-transparent text-base text-zinc-500 outline-none placeholder:text-zinc-300"
            />

            <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50">
              {existing?.image ? (
                <img
                  src={existing.image}
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-zinc-400">
                  <ImagePlus className="size-6" />
                  <span className="text-xs uppercase tracking-[0.16em]">Hero image</span>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-b border-zinc-100 pb-4">
              {['Paragraph', 'Gallery', 'Audio', 'Quote', 'Map', 'Embed'].map((block) => (
                <button
                  key={block}
                  type="button"
                  className="cursor-pointer rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 hover:bg-zinc-50"
                >
                  {block}
                </button>
              ))}
            </div>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={14}
              placeholder="Write the story…"
              className="mt-4 w-full resize-y bg-transparent text-[15px] leading-7 text-zinc-800 outline-none placeholder:text-zinc-300"
            />
          </CmsCard>
        </div>

        <aside className="space-y-4">
          <CmsCard className="p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Publish
            </h3>
            <label className="mt-3 block text-xs text-zinc-500">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
              className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none"
            >
              {['draft', 'review', 'scheduled', 'published', 'archived'].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <label className="mt-3 block text-xs text-zinc-500">Slug</label>
            <input
              defaultValue={
                existing
                  ? existing.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)
                  : ''
              }
              className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none"
            />
            <label className="mt-3 block text-xs text-zinc-500">Publish date</label>
            <input
              type="datetime-local"
              className="mt-1 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none"
            />
            <div className="mt-4 space-y-2">
              {['Featured', 'Sponsored', 'In series'].map((flag) => (
                <label key={flag} className="flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
                  <input type="checkbox" defaultChecked={flag === 'In series' && Boolean(existing?.series)} className="accent-[#0C2686]" />
                  {flag}
                </label>
              ))}
            </div>
          </CmsCard>

          <CmsCard className="p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Meta
            </h3>
            <div className="mt-3 space-y-3">
              <input placeholder="Category" defaultValue={existing?.category} className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
              <input placeholder="Tags" className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
              <input placeholder="Location" className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
              <input placeholder="Author" defaultValue={existing?.author} className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
              <input placeholder="Reading time" defaultValue="8 min" className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
            </div>
          </CmsCard>

          <CmsCard className="p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#0C2686]" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                AI
              </h3>
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              {aiActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-zinc-700 transition-colors hover:bg-zinc-50',
                  )}
                >
                  {action.includes('Translate') ? (
                    <Languages className="size-3.5 text-zinc-400" />
                  ) : (
                    <Type className="size-3.5 text-zinc-400" />
                  )}
                  {action}
                </button>
              ))}
            </div>
          </CmsCard>

          <CmsCard className="p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              SEO
            </h3>
            <textarea
              rows={3}
              placeholder="Meta description"
              className="mt-3 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none"
            />
            <input
              placeholder="OG image URL"
              className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none"
            />
          </CmsCard>
        </aside>
      </div>
    </div>
  )
}
