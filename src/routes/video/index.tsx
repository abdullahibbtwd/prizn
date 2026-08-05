import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { JournalShell } from '@/components/concept-3/JournalShell'
import { ListingHeader } from '@/components/concept-3/ListingHeader'
import { journalContent } from '@/data/concept-3/content'
import { getArticleBySourceId } from '@/data/concept-3/articles'

export default function VideoPage() {
  return (
    <JournalShell>
      {({ lang }) => {
        const items = journalContent.video
        return (
          <main>
            <ListingHeader
              lang={lang}
              eyebrow={lang === 'bg' ? 'Филмов отдел' : 'Film desk'}
              title={lang === 'bg' ? 'Видео' : 'Video'}
              description={
                lang === 'bg'
                  ? 'Къси филми от ателиета, пътеки и речни пресичания — кадърът като теренна бележка.'
                  : 'Short films from workshops, trails, and river crossings — the frame as a field note.'
              }
              countLabel={
                lang === 'bg' ? `${items.length} видеа` : `${items.length} films`
              }
            />

            <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {items.map((item, index) => {
                  const href = getArticleBySourceId(item.id)?.path ?? `/video/${item.id}`
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.06 }}
                    >
                      <Link to={href} className="group block">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#1A1A1A]">
                          <img
                            src={item.image}
                            alt={lang === 'bg' ? item.titleBg : item.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                          <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-0.5 size-5 fill-white text-white" />
                          </div>
                          <span className="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-[0.2em] text-white/80">
                            {item.duration}
                          </span>
                        </div>
                        <h2 className="mt-4 font-heading text-2xl font-normal text-[#1A1A1A] transition-colors group-hover:text-[#0C2686] md:text-3xl">
                          {lang === 'bg' ? item.titleBg : item.title}
                        </h2>
                        <p className="mt-2 font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/60">
                          {item.excerpt}
                        </p>
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
