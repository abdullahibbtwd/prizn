import { motion } from 'framer-motion'
import { Mountain, Sparkles, Trees, Waves, ChevronRight, Compass } from 'lucide-react'
import { ourPlaces } from '@/data/concept-2/content'
import { Button } from '@/components/ui/button'

export function OurPlacesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mountain':
        return <Mountain className="size-5 text-[#18BEF2]" />
      case 'sparkles':
        return <Sparkles className="size-5 text-[#18BEF2]" />
      case 'trees':
        return <Trees className="size-5 text-[#18BEF2]" />
      case 'waves':
        return <Waves className="size-5 text-[#18BEF2]" />
      default:
        return <Compass className="size-5 text-[#18BEF2]" />
    }
  }

  return (
    <section id="our-places" className="relative overflow-hidden bg-[#EAFBF4] py-16 md:py-24">
      {/* Top Gradient Divider Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#18BEF2] via-[#8AF4C2] to-[#74EBD5]" />

      {/* Floating Ambient Glow */}
      <div className="blob-gradient-3 absolute -left-20 bottom-10 size-[380px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#18BEF2] to-[#8AF4C2]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#047857]">
                География и природни чудеса
              </span>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#047857] sm:text-4xl md:text-5xl">
              Нашите места
            </h2>
            <p className="mt-2 max-w-xl text-base text-ink/75">
              От червеникавите скали на Белоградчик до тайнствения Дунавски бряг.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-[#18BEF2]/30 bg-white px-5 text-xs font-bold text-[#047857] shadow-sm hover:bg-[#18BEF2]/10 md:inline-flex"
          >
            <a href="#interactive-map">
              <Compass className="mr-2 size-4 text-[#18BEF2]" />
              Отвори интерактивната карта
            </a>
          </Button>
        </div>

        {/* Places Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ourPlaces.map((place, idx) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-places group p-3 flex flex-col justify-between"
            >
              <span className="card-float" aria-hidden="true">
                <i /><i /><i />
              </span>
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Tag & Icon */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full bg-white/95 p-1.5 shadow-md">
                      {getIcon(place.icon)}
                    </span>
                    <span className="rounded-full bg-[#18BEF2]/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      {place.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#18BEF2]">
                    {place.sub}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-ink transition-colors group-hover:text-[#18BEF2]">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={`#explore-${place.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#047857] transition-all group-hover:translate-x-1"
                >
                  Разгледайте пътеките <ChevronRight className="size-4 text-[#18BEF2]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
