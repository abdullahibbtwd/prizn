import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FileText,
  Clock3,
  CalendarDays,
  Eye,
  Sparkles,
  CheckSquare,
} from 'lucide-react'
import {
  CmsCard,
  CmsPageHeader,
  PrimaryButton,
} from '@/cms/components/CmsUI'
import {
  cmsAiSuggestions,
  cmsMostRead,
  cmsStories,
  cmsSubmissions,
  cmsTasks,
} from '@/cms/data/mock'

export default function CmsDashboard() {
  const drafts = cmsStories.filter((s) => s.status === 'draft').length
  const scheduled = cmsStories.filter((s) => s.status === 'scheduled').length
  const pending = cmsStories.filter((s) => s.status === 'review').length +
    cmsSubmissions.filter((s) => s.status === 'new' || s.status === 'review').length
  const publishedToday = cmsStories.filter((s) => s.status === 'published').length

  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div>
      <CmsPageHeader
        title={`${greeting}, Albena`}
        description={`Today · ${today}`}
        actions={
          <Link to="/cms/stories/new">
            <PrimaryButton>
              <FileText className="size-4" />
              New story
            </PrimaryButton>
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {[
          { label: "Today's traffic", value: '24,580', hint: '↑ 12%', icon: Eye },
          { label: 'Published', value: String(publishedToday), hint: 'live stories', icon: FileText },
          { label: 'Drafts', value: String(drafts), hint: 'in progress', icon: Clock3 },
          { label: 'Pending review', value: String(pending), hint: 'needs you', icon: CheckSquare },
          { label: 'Scheduled', value: String(scheduled), hint: 'upcoming', icon: CalendarDays },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <CmsCard key={stat.label} className="p-4 md:p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                  {stat.label}
                </p>
                <Icon className="size-4 text-zinc-300" />
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.hint}</p>
            </CmsCard>
          )
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CmsCard className="p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold text-zinc-900">Most read today</h2>
          <ol className="mt-4 space-y-3">
            {cmsMostRead.map((item, index) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-xs font-medium text-zinc-500">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-800">{item.title}</p>
                  <p className="text-xs text-zinc-400">{item.views.toLocaleString()} views</p>
                </div>
              </li>
            ))}
          </ol>
        </CmsCard>

        <CmsCard className="p-5 lg:col-span-1">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#0C2686]" />
            <h2 className="text-sm font-semibold text-zinc-900">AI suggestions</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {cmsAiSuggestions.map((item) => (
              <li
                key={item}
                className="flex items-start justify-between gap-3 rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2.5"
              >
                <p className="text-sm text-zinc-700">{item}</p>
                <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-zinc-400" />
              </li>
            ))}
          </ul>
          <Link
            to="/cms/ai"
            className="mt-4 inline-flex text-xs font-medium text-[#0C2686] hover:underline"
          >
            Open AI Assistant
          </Link>
        </CmsCard>

        <CmsCard className="p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold text-zinc-900">Today’s tasks</h2>
          <ul className="mt-4 space-y-2.5">
            {cmsTasks.map((task) => (
              <li key={task} className="flex items-start gap-2.5">
                <span className="mt-1 size-3.5 shrink-0 rounded border border-zinc-300" />
                <p className="text-sm text-zinc-700">{task}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/cms/submissions"
            className="mt-4 inline-flex text-xs font-medium text-[#0C2686] hover:underline"
          >
            Review submissions
          </Link>
        </CmsCard>
      </div>
    </div>
  )
}
