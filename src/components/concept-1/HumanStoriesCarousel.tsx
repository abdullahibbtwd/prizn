import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, FloralWatermark } from '@/components/concept-1/shared'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { humanStories } from '@/data/concept-1/content'
import { cn } from '@/lib/utils'

export function HumanStoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const badgeGradients = [
    'bg-gradient-to-r from-[#8AF4C2] to-[#18BEF2] text-slate-950 font-bold',
    'bg-gradient-to-r from-[#9FACE6] to-[#74EBD5] text-slate-950 font-bold',
    'bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] text-slate-950 font-bold',
    'bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1] text-slate-950 font-bold',
  ]

  const topBarClasses = [
    'gradient-top-ms',
    'gradient-top-pa',
    'gradient-top-yp',
    'gradient-top-lc',
  ]

  const cardBgClasses = [
    'card-bg-subtle-ms',
    'card-bg-subtle-pa',
    'card-bg-subtle-yp',
    'card-bg-subtle-lc',
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -300 : 300
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft } = scrollRef.current
    const index = Math.round(scrollLeft / 260)
    setActiveIndex(Math.min(index, humanStories.length - 1))
  }

  return (
    <section id="human-stories" className="relative overflow-hidden bg-canvas px-4 py-20 md:px-8 md:py-28">
      {/* Background Ambient Glow */}
      <div className="glow-orb-yellow absolute right-0 top-1/4 size-80 opacity-35 pointer-events-none" />
      <div className="glow-orb-brand absolute left-0 bottom-10 size-80 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header & Controls */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <SectionHeading
            title="Човешки истории"
            subtitle="Портрети на хората, които пазят паметта на Северозападна България."
            badgeText="Лични разкази"
            className="mb-0"
          />
          <div className="flex shrink-0 items-center gap-3">
            {/* Scroll Indicator Dots */}
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              {humanStories.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: i * 260, behavior: 'smooth' })
                    }
                  }}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    activeIndex === i
                      ? 'w-7 bg-gradient-to-r from-[#0C2686] to-[#4051C7]'
                      : 'w-2 bg-border/80 hover:bg-brand/50',
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-brand/20 bg-surface shadow-xs transition-all hover:bg-gradient-to-r hover:from-[#0C2686] hover:to-[#4051C7] hover:text-white hover:border-transparent"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-brand/20 bg-surface shadow-xs transition-all hover:bg-gradient-to-r hover:from-[#0C2686] hover:to-[#4051C7] hover:text-white hover:border-transparent"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-6 scrollbar-none md:-mx-8 md:px-8 snap-x snap-mandatory"
        >
          {humanStories.map((story, i) => (
            <article
              key={story.title}
              className="group w-[260px] shrink-0 cursor-pointer snap-start md:w-[280px]"
            >
              <div
                className={cn(
                  'relative overflow-hidden rounded-2xl border border-border/70 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl',
                  topBarClasses[i % topBarClasses.length],
                  cardBgClasses[i % cardBgClasses.length],
                )}
              >
                <FloralWatermark className="-right-6 -bottom-6" />

                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div
                    className={cn(
                      'absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider shadow-md backdrop-blur-xs',
                      badgeGradients[i % badgeGradients.length],
                    )}
                  >
                    <Heart className="size-3 fill-slate-950/30 text-slate-950" />
                    История
                  </div>

                  {/* Read Time Tag */}
                  <div className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                    <Clock className="size-3 text-[#74EBD5]" />
                    7 мин
                  </div>
                </div>

                {/* Content Details */}
                <div className="relative z-10 p-5">
                  <h3 className="font-heading text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    {story.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-3 text-xs font-medium text-muted-foreground">
                    <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-white font-bold text-[10px]">
                      <User className="size-3 text-white" />
                    </div>
                    <span className="font-semibold text-ink/80">От {story.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}



