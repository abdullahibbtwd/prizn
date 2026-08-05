import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search } from 'lucide-react'
import {
  CmsCard,
  CmsPageHeader,
  GhostButton,
  PrimaryButton,
  StatusPill,
} from '@/cms/components/CmsUI'
import { cmsStories, type CmsStoryStatus } from '@/cms/data/mock'
import { cn } from '@/lib/utils'

const filters: Array<'all' | CmsStoryStatus | 'sponsored'> = [
  'all',
  'draft',
  'review',
  'published',
  'scheduled',
  'sponsored',
]

export default function CmsStoriesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')
  const [query, setQuery] = useState('')

  const stories = useMemo(() => {
    return cmsStories.filter((story) => {
      const matchesQuery =
        !query ||
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.author.toLowerCase().includes(query.toLowerCase())
      if (!matchesQuery) return false
      if (filter === 'all') return true
      if (filter === 'sponsored') return Boolean(story.sponsored)
      return story.status === filter
    })
  }, [filter, query])

  return (
    <div>
      <CmsPageHeader
        title="Stories"
        description="The heart of the editorial desk — drafts, reviews, and published work."
        actions={
          <Link to="/cms/stories/new">
            <PrimaryButton>
              <Plus className="size-4" />
              New story
            </PrimaryButton>
          </Link>
        }
      />

      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                'cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors',
                filter === item
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50',
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-500 md:min-w-[260px]">
          <Search className="size-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories…"
            className="w-full bg-transparent text-zinc-800 outline-none placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-zinc-400">{stories.length} stories</p>
        <div className="flex gap-2">
          <GhostButton className="py-1.5 text-xs">Bulk actions</GhostButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stories.map((story) => (
          <CmsCard key={story.id} className="overflow-hidden transition-shadow hover:shadow-sm">
            <Link to={`/cms/stories/${story.id}`} className="block">
              <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={story.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <StatusPill status={story.status} />
                  <span className="text-[11px] text-zinc-400">{story.language}</span>
                </div>
                <h2 className="mt-3 line-clamp-2 text-[15px] font-semibold leading-snug text-zinc-900">
                  {story.title}
                </h2>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{story.subtitle}</p>
                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 text-xs text-zinc-500">
                  <span>{story.author}</span>
                  <span>{story.views.toLocaleString()} views</span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {story.category}
                  {story.series ? ` · ${story.series}` : ''}
                  {story.sponsored ? ' · Sponsored' : ''}
                </p>
              </div>
            </Link>
          </CmsCard>
        ))}
      </div>
    </div>
  )
}
