import { motion } from 'framer-motion'
import { BookOpen, ChevronRight } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface CuratedCollectionsProps {
  lang: 'bg' | 'en'
  onSelectCollection: (title: string) => void
}

export function CuratedCollections({ lang, onSelectCollection }: CuratedCollectionsProps) {
  const collections = journalContent.collections.slice(0, 3)

  return (
    <section id="discover" className="bg-[#FDFBF7] py-20 md:py-28 px-6 md:px-12 border-t border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
              {lang === 'bg' ? 'Селекция от редактора' : "Editor's Picks"}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] font-normal">
              {lang === 'bg' ? 'Открийте' : 'Discover'}
            </h2>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/50 max-w-xs">
            {lang === 'bg'
              ? 'Тематично организирани истории за бавно четене.'
              : 'Thoughtfully grouped long-form stories for slow reading.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => onSelectCollection(lang === 'bg' ? item.titleBg : item.title)}
              className="group cursor-pointer rounded-[16px] border border-[#EAE6DF] bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:border-[#0C2686]/30 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden rounded-xl bg-[#1A1A1A] mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-sans font-medium text-[#1A1A1A] flex items-center gap-1.5">
                    <BookOpen className="size-3 text-[#0C2686]" />
                    <span>{lang === 'bg' ? item.countBg : item.count}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] font-normal mb-3 group-hover:text-[#0C2686] transition-colors">
                  {lang === 'bg' ? item.titleBg : item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#1A1A1A]/65 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF]/60 flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#0C2686]">
                <span>{lang === 'bg' ? 'Разгледайте' : 'Explore'}</span>
                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
