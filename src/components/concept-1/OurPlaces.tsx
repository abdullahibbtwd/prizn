import { SectionHeading } from '@/components/concept-1/shared'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { places } from '@/data/concept-1/content'
import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'

export function OurPlaces() {
  return (
    <section id="our-places" className="relative px-4 py-20 md:px-8 md:py-28 overflow-hidden">
      {/* Ambient Glow */}
      <div className="glow-orb-brand absolute right-0 top-1/3 size-96 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Нашите места"
          subtitle="Пейзажи и забележителности, които оформят душата на северозапада."
          badgeText="Дестинации"
        />

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:auto-rows-[260px] md:grid-cols-2 md:gap-6">
          {places.map((place) => (
            <article
              key={place.name}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/60 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl',
                place.span === 'tall' && 'md:row-span-2',
                place.span === 'wide' && 'md:col-span-2 md:row-span-1',
              )}
            >
              <OptimizedImage
                src={place.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                    <MapPin className="size-3 text-[#74EBD5]" />
                    Регион
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    {place.name}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

