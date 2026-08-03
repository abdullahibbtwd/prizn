import { SectionHeading, FloralWatermark } from '@/components/concept-1/shared'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { traditions } from '@/data/concept-1/content'
import { cn } from '@/lib/utils'

export function Traditions() {
  const topBarClasses = [
    'gradient-top-yp',
    'gradient-top-pa',
    'gradient-top-lc',
    'gradient-top-ms',
    'gradient-top-brand',
  ]

  const cardBgClasses = [
    'card-bg-subtle-yp',
    'card-bg-subtle-pa',
    'card-bg-subtle-lc',
    'card-bg-subtle-ms',
    'card-bg-subtle-brand',
  ]

  return (
    <section id="traditions" className="relative bg-traditions px-4 py-20 md:px-8 md:py-28 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="glow-orb-yellow absolute left-10 top-1/4 size-80 opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Традиции"
          subtitle="Наследствени практики, предавани през поколения - все още живи в домовете и празниците."
          badgeText="Културно наследство"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {traditions.map((item, i) => (
            <article
              key={item.title}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl border border-border/70',
                topBarClasses[i % topBarClasses.length],
                cardBgClasses[i % cardBgClasses.length],
              )}
            >
              <FloralWatermark className="-right-6 -bottom-6" />

              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                <OptimizedImage
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>
              <div className="relative z-10 p-5">
                <h3 className="font-heading text-xl font-bold text-ink group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


