import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface HumanStoriesSectionProps {
  lang: 'bg' | 'en'
  onOpenStory: (title: string) => void
}

export function HumanStoriesSection({ lang, onOpenStory }: HumanStoriesSectionProps) {
  const stories = journalContent.humanStories

  return (
    <section id="human-stories" className="bg-[#FDFBF7] py-20 md:py-28 px-6 md:px-12 border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
              {lang === 'bg' ? 'Хора & Съдби' : 'People & Voices'}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] font-light">
              {lang === 'bg' ? 'Човешки истории' : 'Human Stories'}
            </h2>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/50 max-w-xs">
            {lang === 'bg'
              ? 'Дълги портрети от села, брегове и работилници.'
              : 'Long portraits from villages, riverbanks, and workshops.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              onClick={() => onOpenStory(lang === 'bg' ? story.titleBg : story.title)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#1A1A1A] mb-5">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-sans text-white/85">
                  <MapPin className="size-3" />
                  {story.location}
                </div>
              </div>

              <h3 className="font-heading text-2xl text-[#1A1A1A] font-normal leading-snug group-hover:text-[#0C2686] transition-colors">
                {lang === 'bg' ? story.titleBg : story.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-[#1A1A1A]/65 font-light leading-relaxed line-clamp-2">
                {story.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/50">
                <span>{story.author}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {lang === 'bg' ? story.readTimeBg : story.readTime}
                </span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#0C2686] font-medium">
                {lang === 'bg' ? 'Прочетете' : 'Read'}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
