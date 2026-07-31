import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface OurPlacesSectionProps {
  lang: 'bg' | 'en'
  onDiscoverPlace: (placeName: string) => void
}

export function OurPlacesSection({ lang, onDiscoverPlace }: OurPlacesSectionProps) {
  const places = journalContent.places

  return (
    <section id="places" className="bg-[#FDFBF7] py-24 md:py-36 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
            {lang === 'bg' ? 'Нашите Места' : 'Our Places'}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] font-light">
            {lang === 'bg' ? 'Пейзажи & Забележителности' : 'Landscapes of the Northwest'}
          </h2>
        </div>

        {/* Apple Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => onDiscoverPlace(lang === 'bg' ? place.nameBg : place.name)}
              className="group relative cursor-pointer overflow-hidden rounded-[16px] border border-[#EAE6DF] bg-[#1A1A1A] h-[480px] md:h-[540px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)]"
            >
              {/* Background Image */}
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Matte Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Text Layout - Apple Style Floating Info */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/70">
                    {place.readTime}
                  </span>
                  <div className="size-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1A1A1A] transition-all duration-300">
                    <ArrowUpRight className="size-5 stroke-[1.5]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-4xl md:text-5xl font-light mb-3 text-white">
                    {lang === 'bg' ? place.nameBg : place.name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/80 font-light max-w-md leading-relaxed mb-6">
                    {lang === 'bg' ? place.subBg : place.sub}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] font-medium text-white group-hover:text-[#FBDA61] transition-colors">
                    <span>{lang === 'bg' ? place.actionBg : place.action}</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
