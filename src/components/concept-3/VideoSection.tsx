import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'
import { getArticleBySourceId } from '@/data/concept-3/articles'
import { ViewAllLink } from '@/components/concept-3/ViewAllLink'

interface VideoSectionProps {
  lang: 'bg' | 'en'
}

export function VideoSection({ lang }: VideoSectionProps) {
  const [featured, ...rest] = journalContent.video
  const side = rest.slice(0, 2)

  return (
    <section id="video" className="relative overflow-hidden bg-[#1A1A1A] px-6 py-24 text-white md:px-12 md:py-32">
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 -translate-x-1/3 rounded-full bg-[#0C2686]/25 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#9FACE6]">
              {lang === 'bg' ? 'Филмов отдел' : 'Film desk'}
            </span>
            <h2 className="font-heading text-4xl font-light md:text-5xl">
              {lang === 'bg' ? 'Видео' : 'Video'}
            </h2>
            <p className="mt-3 max-w-md font-sans text-xs font-light uppercase tracking-[0.16em] text-white/45">
              {lang === 'bg'
                ? 'Къси филми от ателиета, пътеки и речни пресичания.'
                : 'Short films from workshops, trails, and river crossings.'}
            </p>
          </div>
          <ViewAllLink
            to="/video"
            lang={lang}
            className="text-[#9FACE6] hover:text-white hover:opacity-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="lg:col-span-7"
            >
              <Link
                to={getArticleBySourceId(featured.id)?.path ?? `/video/${featured.id}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-[16px] bg-black"
              >
                <img
                  src={featured.image}
                  alt={lang === 'bg' ? featured.titleBg : featured.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 size-6 fill-white text-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-white/65">
                    {featured.duration}
                    {' · '}
                    {lang === 'bg' ? featured.locationBg : featured.location}
                  </span>
                  <h3 className="mt-2 font-heading text-3xl font-light md:text-4xl">
                    {lang === 'bg' ? featured.titleBg : featured.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="flex flex-col gap-6 lg:col-span-5">
            {side.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + index * 0.08 }}
              >
                <Link
                  to={getArticleBySourceId(item.id)?.path ?? `/video/${item.id}`}
                  className="group grid grid-cols-[140px_1fr] gap-4 sm:grid-cols-[160px_1fr] sm:gap-5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-black">
                    <img
                      src={item.image}
                      alt={lang === 'bg' ? item.titleBg : item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="flex size-9 items-center justify-center rounded-full border border-white/35 bg-white/10 backdrop-blur-sm">
                        <Play className="ml-0.5 size-3.5 fill-white text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#9FACE6]">
                      {item.duration}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-normal transition-colors group-hover:text-[#9FACE6] md:text-2xl">
                      {lang === 'bg' ? item.titleBg : item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-sans text-sm font-light leading-relaxed text-white/55">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
