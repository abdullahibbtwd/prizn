import { motion } from 'framer-motion'
import { Calendar, MapPin, Bell, ChevronRight } from 'lucide-react'
import { culturalEvents } from '@/data/concept-2/content'
import { Button } from '@/components/ui/button'

export function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden bg-[#F8EDFF] py-16 md:py-24">
      {/* Top Gradient Divider Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D9AFD9] via-[#97D9E1] to-[#4051C7]" />

      {/* Floating Glow */}
      <div className="blob-gradient-4 absolute -left-20 top-20 size-[380px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#7E22CE]">
                Календар & Събития
              </span>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#581C87] sm:text-4xl md:text-5xl">
              Културни събори и фестивали
            </h2>
            <p className="mt-2 max-w-xl text-base text-ink/75">
              Елате и изживейте традициите отблизо - дати, места и програма.
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {culturalEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-events group p-4 flex flex-col justify-between"
            >
              <span className="card-float" aria-hidden="true">
                <i /><i /><i />
              </span>
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md">
                    <Calendar className="size-4 text-[#7E22CE]" />
                    <div className="leading-none text-center">
                      <span className="block text-sm font-extrabold text-[#7E22CE]">{event.day}</span>
                      <span className="block text-[9px] font-bold text-ink/70 uppercase">{event.month}</span>
                    </div>
                  </div>

                  <span className="absolute top-3 right-3 rounded-full bg-[#7E22CE]/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    {event.tag}
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7E22CE]">
                    <MapPin className="size-3.5" />
                    {event.location}
                  </div>

                  <h3 className="mt-2 font-heading text-2xl font-bold text-ink transition-colors group-hover:text-[#7E22CE]">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex items-center justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 rounded-full border-[#7E22CE]/20 bg-[#F8EDFF] px-4 text-xs font-bold text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white transition-all"
                >
                  <Bell className="mr-1.5 size-3.5" />
                  Напомни ми
                </Button>

                <a
                  href={`#event-${event.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#7E22CE] hover:underline"
                >
                  Подробности <ChevronRight className="size-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
