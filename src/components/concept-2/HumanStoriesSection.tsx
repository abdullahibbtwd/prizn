import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User, MapPin } from 'lucide-react'
import { humanStories } from '@/data/concept-2/content'
import { cn } from '@/lib/utils'

export function HumanStoriesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Всички')

  const categories = ['Всички', 'Хора', 'Село', 'Традиция', 'История']

  const filteredStories = selectedFilter === 'Всички'
    ? humanStories
    : humanStories.filter(s => s.category === selectedFilter)

  return (
    <section id="human-stories" className="relative overflow-hidden bg-[#EEF3FF] py-16 md:py-24">
      {/* Decorative Top Gradient Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#74EBD5]" />

      {/* Floating Ambient Glow */}
      <div className="blob-gradient-1 absolute -right-20 top-20 size-[400px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gradient Line */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#0C2686] to-[#4051C7]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0C2686]">
                Персонализирани разкази
              </span>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#0C2686] sm:text-4xl md:text-5xl">
              Човешки истории
            </h2>
            <p className="mt-2 max-w-xl text-base text-ink/75">
              Живите съдби и гласове, които градят духа на Северозапада.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-4 md:pt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300',
                  selectedFilter === cat
                    ? 'bg-[#0C2686] text-white shadow-md'
                    : 'bg-white/80 text-ink/70 hover:bg-white hover:text-[#0C2686]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid with 24px Rounded Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredStories.map((story, idx) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-stories group flex flex-col justify-between"
            >
              <span className="card-float" aria-hidden="true">
                <i /><i /><i />
              </span>
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Category Pill with Colored Dot */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-sm border backdrop-blur-md',
                        story.badgeColor.bg,
                        story.badgeColor.text,
                        story.badgeColor.border
                      )}
                    >
                      <span className={cn('size-2 rounded-full', story.badgeColor.dot)} />
                      {story.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs font-medium text-white/90">
                    <MapPin className="size-3 text-[#74EBD5]" />
                    {story.location}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold leading-snug text-ink transition-colors group-hover:text-[#0C2686] md:text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink/70 line-clamp-2">
                    {story.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-brand/10 bg-white/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-ink/65">
                  <span className="flex items-center gap-1 font-medium">
                    <User className="size-3.5 text-[#0C2686]" />
                    {story.author}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="size-3.5 text-[#0C2686]" />
                    {story.readTime}
                  </span>
                </div>

                <a
                  href={`#read-${story.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0C2686] transition-transform group-hover:translate-x-1"
                >
                  Прочетете <ArrowRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
