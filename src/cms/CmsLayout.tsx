import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, Search, Bell, X } from 'lucide-react'
import { CmsSidebar } from '@/cms/components/CmsUI'

export function CmsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const crumb = location.pathname.replace(/^\/cms\/?/, '') || 'dashboard'

  return (
    <div className="flex h-svh overflow-hidden bg-zinc-50 font-sans text-zinc-900 antialiased">
      <div className="hidden lg:block">
        <CmsSidebar />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full">
            <CmsSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute right-4 top-4 z-20 rounded-lg bg-white p-2 text-zinc-700 shadow"
          >
            <X className="size-5" />
          </button>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
            <p className="truncate text-sm text-zinc-500">
              <Link to="/cms" className="hover:text-zinc-900">
                CMS
              </Link>
              <span className="mx-1.5 text-zinc-300">/</span>
              <span className="capitalize text-zinc-800">{crumb.split('/')[0]}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-400 sm:flex">
              <Search className="size-3.5" />
              <span>Search editorial…</span>
            </div>
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
            >
              <Bell className="size-4" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
