import { motion } from 'framer-motion'
import { Wheat, Flame, Sparkles, UtensilsCrossed, ArrowRight, SunMedium } from 'lucide-react'
import { traditionsList } from '@/data/concept-2/content'

export function TraditionsSection() {
  const getTraditionIcon = (iconName: string) => {
    switch (iconName) {
      case 'bread':
        return <UtensilsCrossed className="size-6 text-[#B45309]" />
      case 'carpet':
        return <Sparkles className="size-6 text-[#D97706]" />
      case 'pottery':
        return <Flame className="size-6 text-[#D97706]" />
      case 'wheat':
        return <Wheat className="size-6 text-[#B45309]" />
      default:
        return <SunMedium className="size-6 text-[#B45309]" />
    }
  }

  return (
    <section id="traditions" className="relative overflow-hidden bg-[#FFF5E8] py-16 md:py-24">
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] to-[#0C2686]" />

      {/* Ambient Glow Blob */}
      <div className="blob-gradient-2 absolute -right-10 top-1/3 size-[400px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 shadow-sm border border-[#FBDA61]/40">
            <Wheat className="size-4 text-[#B45309]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Родова Памет & Наследство
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#7C2D12] sm:text-4xl md:text-5xl">
            Традиции и занаяти
          </h2>
          <p className="mt-3 text-base text-ink/80 md:text-lg">
            Умения, които се предават от ръка на ръка и от сърце на сърце през поколенията.
          </p>
        </div>

        {/* Traditions Showcase Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {traditionsList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-traditions group p-4 flex flex-col justify-between"
            >
              <span className="card-float" aria-hidden="true">
                <i /><i /><i />
              </span>
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[18px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Line Icon badge */}
                  <div className="absolute top-3 left-3 flex size-11 items-center justify-center rounded-2xl bg-white/95 shadow-md border border-[#FBDA61]/30 backdrop-blur-md">
                    {getTraditionIcon(item.icon)}
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-heading text-xl font-bold text-ink transition-colors group-hover:text-[#B45309]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#B45309]">Научете повече</span>
                <span className="flex size-7 items-center justify-center rounded-full bg-[#FFF5E8] text-[#B45309] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
