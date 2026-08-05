import {
  CmsCard,
  CmsPageHeader,
  ComingSoon,
  StatusPill,
} from '@/cms/components/CmsUI'
import {
  cmsAuthors,
  cmsPlaces,
  cmsSeries,
  cmsTraditions,
} from '@/cms/data/mock'
import {
  Bot,
  ChartColumn,
  Mail,
  Package,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  Shield,
  Users,
} from 'lucide-react'

export function CmsAuthorsPage() {
  return (
    <div>
      <CmsPageHeader
        title="Authors"
        description="Profiles, expertise, and published output."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cmsAuthors.map((author) => (
          <CmsCard key={author.id} className="overflow-hidden">
            <div className="aspect-[3/4] bg-zinc-100">
              <img src={author.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-zinc-900">{author.name}</h2>
              <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-zinc-400">
                {author.role}
              </p>
              <p className="mt-3 text-sm text-zinc-600">{author.location}</p>
              <p className="mt-1 text-sm text-zinc-500">{author.expertise}</p>
              <p className="mt-4 text-xs text-zinc-400">{author.stories} stories</p>
            </div>
          </CmsCard>
        ))}
      </div>
    </div>
  )
}

export function CmsSeriesPage() {
  return (
    <div>
      <CmsPageHeader
        title="Series"
        description="Long stories told as episodes — visual planning board."
      />
      {cmsSeries.map((series) => (
        <CmsCard key={series.id} className="mb-4 p-5 md:p-6">
          <h2 className="text-xl font-semibold text-zinc-900">{series.title}</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {series.episodes.map((ep, index) => (
              <div
                key={ep.id}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                  Episode {index + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-900">{ep.title}</p>
                <div className="mt-3">
                  <StatusPill status={ep.status} />
                </div>
              </div>
            ))}
          </div>
        </CmsCard>
      ))}
    </div>
  )
}

export function CmsPlacesPage() {
  return (
    <div>
      <CmsPageHeader title="Places" description="Geography hubs linked to stories and events." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cmsPlaces.map((place) => (
          <CmsCard key={place.id} className="overflow-hidden">
            <div className="aspect-[16/10]">
              <img src={place.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900">{place.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{place.stories} linked stories</p>
            </div>
          </CmsCard>
        ))}
      </div>
    </div>
  )
}

export function CmsTraditionsPage() {
  return (
    <div>
      <CmsPageHeader title="Traditions" description="Living culture nodes with attached media." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cmsTraditions.map((item) => (
          <CmsCard key={item.id} className="overflow-hidden">
            <div className="aspect-[16/10]">
              <img src={item.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900">{item.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{item.articles} articles</p>
            </div>
          </CmsCard>
        ))}
      </div>
    </div>
  )
}

export function CmsMediaPage() {
  const images = [
    '/village.jpg',
    '/woman.jpg',
    '/mountains.jpg',
    '/river.jpg',
    '/festival.jpg',
    '/craftsman.jpg',
    '/bread.jpg',
    '/forest.jpg',
    '/local-jounal.jpg',
    '/happy.jpg',
    '/church.jpg',
    '/heroimg.jpg',
  ]
  return (
    <div>
      <CmsPageHeader
        title="Media Library"
        description="Google Photos–style grid for stories, authors, and products."
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {['All', 'Stories', 'Authors', 'Places', 'Products'].map((folder) => (
          <button
            key={folder}
            type="button"
            className="cursor-pointer rounded-full bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50"
          >
            {folder}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {images.map((src) => (
          <div key={src} className="aspect-square overflow-hidden rounded-xl bg-zinc-100">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CmsNewsletterPage() {
  return (
    <div>
      <CmsPageHeader title="Newsletter" description="Subscribers, campaigns, and automation." />
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { label: 'Subscribers', value: '4,812' },
          { label: 'Open campaigns', value: '3' },
          { label: 'Avg. open rate', value: '41%' },
        ].map((s) => (
          <CmsCard key={s.label} className="p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">{s.label}</p>
            <p className="mt-2 text-2xl font-semibold">{s.value}</p>
          </CmsCard>
        ))}
      </div>
      <ComingSoon
        icon={Mail}
        title="Campaign builder coming next"
        blurb="Segments and automation will live here once email delivery is connected."
      />
    </div>
  )
}

export function CmsStubPages() {
  return null
}

export function CmsSocialPage() {
  return (
    <div>
      <CmsPageHeader title="Social Automation" description="Article → AI → preview → approve → schedule." />
      <ComingSoon
        icon={Share2}
        title="One-page social workflow"
        blurb="Generate Facebook, Instagram, and TikTok drafts from any published story, then schedule with editorial approval."
      />
    </div>
  )
}

export function CmsSeoPage() {
  return (
    <div>
      <CmsPageHeader title="SEO" description="Catch missing meta, OG images, and alt text." />
      <ComingSoon
        icon={Search}
        title="SEO health desk"
        blurb="Surfaced issues like “5 articles missing SEO” from the dashboard will open into actionable queues here."
      />
    </div>
  )
}

export function CmsAnalyticsPage() {
  return (
    <div>
      <CmsPageHeader title="Analytics" description="Prizni’s own editorial dashboard — not a GA embed." />
      <ComingSoon
        icon={ChartColumn}
        title="Readers, stories, geography"
        blurb="Visitors, top stories, countries, devices, and returning readers will chart here with mock → live metrics."
      />
    </div>
  )
}

export function CmsShopPage() {
  return (
    <div>
      <CmsPageHeader title="Shop" description="Storefront overview for the Prizni boutique." />
      <ComingSoon icon={ShoppingBag} title="Commerce cockpit" blurb="Products, campaigns, and featured editions will surface here." />
    </div>
  )
}

export function CmsOrdersPage() {
  return (
    <div>
      <CmsPageHeader title="Orders" description="Order status and fulfillment." />
      <ComingSoon icon={Package} title="Orders queue" blurb="Shopify-like order table arrives with commerce integration." />
    </div>
  )
}

export function CmsProductsPage() {
  return (
    <div>
      <CmsPageHeader title="Products" description="Catalog, inventory, and pricing." />
      <ComingSoon icon={Package} title="Product catalog" blurb="SKUs for print editions and craft objects will be managed here." />
    </div>
  )
}

export function CmsUsersPage() {
  return (
    <div>
      <CmsPageHeader title="Users" description="Owners, editors, journalists, contributors, marketing." />
      <ComingSoon icon={Users} title="Team directory" blurb="Invite flows and role assignment — auth arrives in a later phase." />
    </div>
  )
}

export function CmsRolesPage() {
  return (
    <div>
      <CmsPageHeader title="Roles" description="Permissions matrix for the editorial OS." />
      <ComingSoon icon={Shield} title="Permission matrix" blurb="Owner / Editor / Journalist / Contributor / Translator / Marketing." />
    </div>
  )
}

export function CmsSettingsPage() {
  return (
    <div>
      <CmsPageHeader title="Settings" description="Brand, languages, SEO defaults, integrations." />
      <ComingSoon icon={Settings} title="System settings" blurb="General, brand, languages, email, payments, storage, and integrations." />
    </div>
  )
}

export function CmsAiPage() {
  return (
    <div>
      <CmsPageHeader title="AI Assistant" description="Paste a story → improve title, SEO, translation, social, audio." />
      <CmsCard className="p-5 md:p-6">
        <textarea
          rows={8}
          placeholder="Paste a story draft…"
          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-[#0C2686]"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            'Better title',
            'Summary',
            'SEO',
            'Tags',
            'Translation',
            'Audio',
            'Social',
            'Suggested image',
          ].map((item) => (
            <button
              key={item}
              type="button"
              className="cursor-pointer rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              ✓ {item}
            </button>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
          <Bot className="size-3.5" />
          Frontend workspace only — model calls come later.
        </p>
      </CmsCard>
    </div>
  )
}
