import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { JournalShell } from '@/components/concept-3/JournalShell'
import { ListingHeader } from '@/components/concept-3/ListingHeader'
import { journalContent } from '@/data/concept-3/content'
import { getArticleBySourceId } from '@/data/concept-3/articles'

export default function StoriesPage() {
  return (
    <JournalShell>
      {({ lang }) => {
        const stories = journalContent.humanStories
        return (
          <main>
            <ListingHeader
              lang={lang}
              eyebrow={lang === 'bg' ? 'Хора & Съдби' : 'People & Voices'}
              title={lang === 'bg' ? 'Човешки истории' : 'Human Stories'}
              description={
                lang === 'bg'
                  ? 'Всички портрети и дълги разкази — гласовете, лицата и съдбите на Северозапада.'
                  : 'Every portrait and long-form piece — the voices, faces, and lives of the Northwest.'
              }
              countLabel={
                lang === 'bg' ? `${stories.length} истории` : `${stories.length} stories`
              }
            />

            <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story, index) => {
                  const href = getArticleBySourceId(story.id)?.path ?? `/stories/${story.id}`
                  return (
                    <motion.div
                      key={story.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Link to={href} className="group block">
                        <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[16px] bg-[#1A1A1A]">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 font-sans text-[11px] text-white/85">
                            <MapPin className="size-3" />
                            {story.location}
                          </div>
                        </div>
                        <h2 className="font-heading text-2xl font-normal leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#0C2686]">
                          {lang === 'bg' ? story.titleBg : story.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/65">
                          {story.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/50">
                          <span>{story.author}</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3" />
                            {lang === 'bg' ? story.readTimeBg : story.readTime}
                          </span>
                        </div>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#0C2686]">
                          {lang === 'bg' ? 'Прочетете' : 'Read'}
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </main>
        )
      }}
    </JournalShell>
  )
}
