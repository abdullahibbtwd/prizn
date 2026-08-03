import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface TraditionsSectionProps {
  lang: 'bg' | 'en'
  onSelectTradition: (title: string) => void
}

export function TraditionsSection({ lang, onSelectTradition }: TraditionsSectionProps) {
  const traditions = journalContent.traditions.slice(0, 3)

  return (
    <section id="traditions" className="bg-[#FDFBF7] py-16 md:py-24 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
              {lang === 'bg' ? 'Памет & Култура' : 'Cultural Heritage'}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] font-light">
              {lang === 'bg' ? 'Традиции' : 'Traditions'}
            </h2>
          </div>
          <a
            href="#traditions"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#0C2686] hover:opacity-70 transition-opacity"
          >
            {lang === 'bg' ? 'Вижте всички' : 'View all'}
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {traditions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              onClick={() => onSelectTradition(lang === 'bg' ? item.titleBg : item.title)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[14px] bg-[#1A1A1A] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#1A1A1A]/45">
                {item.sub}
              </span>
              <h3 className="mt-1 font-heading text-xl md:text-2xl text-[#1A1A1A] font-normal group-hover:text-[#0C2686] transition-colors">
                {lang === 'bg' ? item.titleBg : item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
