import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface TraditionsSectionProps {
  lang: 'bg' | 'en'
  onSelectTradition: (title: string) => void
}

export function TraditionsSection({ lang, onSelectTradition }: TraditionsSectionProps) {
  const traditions = journalContent.traditions

  return (
    <section id="traditions" className="bg-[#FDFBF7] py-24 md:py-36 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
            {lang === 'bg' ? 'Памет & Култура' : 'Cultural Heritage'}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] font-light">
            {lang === 'bg' ? 'Традициите на Северозапада' : 'Living Traditions'}
          </h2>
        </div>

        {/* Large Elegant Cards with Minimal Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traditions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => onSelectTradition(lang === 'bg' ? item.titleBg : item.title)}
              className="group cursor-pointer rounded-[16px] border border-[#EAE6DF] bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)] hover:border-[#0C2686]/30 flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/70 block mb-1">
                    {item.sub}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-white font-normal">
                    {lang === 'bg' ? item.titleBg : item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 bg-white flex items-center justify-between">
                <p className="font-sans text-xs text-[#1A1A1A]/60 font-light line-clamp-2 pr-4">
                  {item.description}
                </p>
                <div className="shrink-0 size-8 rounded-full border border-[#EAE6DF] flex items-center justify-center text-[#0C2686] group-hover:bg-[#0C2686] group-hover:text-white transition-colors">
                  <Sparkles className="size-3.5 stroke-[1.5]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
