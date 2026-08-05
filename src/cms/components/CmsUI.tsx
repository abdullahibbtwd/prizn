import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  ChartColumn,
  CircleHelp,
  FolderKanban,
  Handshake,
  HeartHandshake,
  LayoutDashboard,
  MapPin,
  Newspaper,
  Package,
  PenLine,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  Sparkles,
  Users,
  Library,
  Layers,
  Landmark,
  Mail,
  Shield,
  Bot,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CmsNavItem {
  label: string
  to: string
  icon: LucideIcon
}

export interface CmsNavGroup {
  label: string
  items: CmsNavItem[]
}

export const cmsNavGroups: CmsNavGroup[] = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', to: '/cms', icon: LayoutDashboard }],
  },
  {
    label: 'Content',
    items: [
      { label: 'Stories', to: '/cms/stories', icon: BookOpen },
      { label: 'Series', to: '/cms/series', icon: Layers },
      { label: 'Places', to: '/cms/places', icon: MapPin },
      { label: 'Traditions', to: '/cms/traditions', icon: Landmark },
      { label: 'Authors', to: '/cms/authors', icon: Users },
      { label: 'Media Library', to: '/cms/media', icon: Library },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Write for Us', to: '/cms/submissions', icon: PenLine },
      { label: 'Donations', to: '/cms/donations', icon: HeartHandshake },
      { label: 'Partnerships', to: '/cms/partnerships', icon: Handshake },
      { label: 'Newsletter', to: '/cms/newsletter', icon: Mail },
    ],
  },
  {
    label: 'Marketing',
    items: [
      { label: 'Social Automation', to: '/cms/social', icon: Share2 },
      { label: 'SEO', to: '/cms/seo', icon: Search },
      { label: 'Analytics', to: '/cms/analytics', icon: ChartColumn },
    ],
  },
  {
    label: 'Commerce',
    items: [
      { label: 'Shop', to: '/cms/shop', icon: ShoppingBag },
      { label: 'Orders', to: '/cms/orders', icon: Package },
      { label: 'Products', to: '/cms/products', icon: FolderKanban },
    ],
  },
  {
    label: 'System',
    items: [
      { label: 'Users', to: '/cms/users', icon: Users },
      { label: 'Roles', to: '/cms/roles', icon: Shield },
      { label: 'Settings', to: '/cms/settings', icon: Settings },
      { label: 'AI Assistant', to: '/cms/ai', icon: Bot },
    ],
  },
]

interface CmsSidebarProps {
  onNavigate?: () => void
}

export function CmsSidebar({ onNavigate }: CmsSidebarProps) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-14 items-center gap-2 border-b border-zinc-200 px-5">
        <div className="flex size-7 items-center justify-center rounded-md bg-[#0C2686] text-[10px] font-semibold tracking-wider text-white">
          P
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-zinc-900">PRIZNI</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Editorial OS</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {cmsNavGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1.5 px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/cms'}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors',
                        isActive
                          ? 'bg-zinc-100 font-medium text-zinc-900'
                          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900',
                      )
                    }
                  >
                    <Icon className="size-4 stroke-[1.5] text-zinc-500" />
                    {item.label}
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-zinc-200 p-4">
        <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#0C2686]/10 text-xs font-semibold text-[#0C2686]">
            AN
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-900">Albena Nikolova</p>
            <p className="truncate text-[11px] text-zinc-500">Editor-in-Chief</p>
          </div>
        </div>
        <a
          href="/"
          className="mt-3 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-[#0C2686]"
        >
          <Newspaper className="size-3.5" />
          View journal
        </a>
      </div>
    </aside>
  )
}

export function CmsPageHeader({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        )}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  )
}

export function CmsCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-xl border border-zinc-200 bg-white', className)}>
      {children}
    </div>
  )
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    draft: 'bg-zinc-100 text-zinc-700',
    review: 'bg-amber-50 text-amber-800',
    scheduled: 'bg-sky-50 text-sky-800',
    published: 'bg-emerald-50 text-emerald-800',
    archived: 'bg-zinc-100 text-zinc-500',
    new: 'bg-violet-50 text-violet-800',
    changes: 'bg-orange-50 text-orange-800',
    approved: 'bg-emerald-50 text-emerald-800',
    rejected: 'bg-rose-50 text-rose-800',
    completed: 'bg-emerald-50 text-emerald-800',
    pending: 'bg-amber-50 text-amber-800',
    failed: 'bg-rose-50 text-rose-800',
    contacted: 'bg-sky-50 text-sky-800',
    negotiating: 'bg-amber-50 text-amber-800',
    won: 'bg-emerald-50 text-emerald-800',
    lost: 'bg-zinc-100 text-zinc-500',
  }
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium capitalize',
        map[status] ?? 'bg-zinc-100 text-zinc-600',
      )}
    >
      {status}
    </span>
  )
}

export function ComingSoon({
  title,
  blurb,
  icon: Icon = Sparkles,
}: {
  title: string
  blurb: string
  icon?: LucideIcon
}) {
  return (
    <CmsCard className="flex flex-col items-start gap-4 p-8 md:p-10">
      <div className="flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50">
        <Icon className="size-5 text-zinc-500" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">{blurb}</p>
      </div>
      <p className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
        <CircleHelp className="size-3.5" />
        Frontend mock — data wiring comes later
      </p>
    </CmsCard>
  )
}

export function PrimaryButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#0C2686] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-900',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function GhostButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
