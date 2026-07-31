import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, MapPin, Share2, Bookmark } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface StoryReaderModalProps {
  isOpen: boolean
  onClose: () => void
  storyTitle?: string
  lang: 'bg' | 'en'
}

export function StoryReaderModal({ isOpen, onClose, storyTitle, lang }: StoryReaderModalProps) {
  const defaultStory = journalContent.featuredStory
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target) {
        const totalHeight = target.scrollHeight - target.clientHeight
        if (totalHeight > 0) {
          setReadingProgress((target.scrollTop / totalHeight) * 100)
        }
      }
    }
    const container = document.getElementById('story-reader-container')
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  if (!isOpen) return null

  const displayTitle = storyTitle || (lang === 'bg' ? defaultStory.titleBg : defaultStory.title)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#FDFBF7] flex flex-col"
      >
        {/* Top Reading Progress Bar */}
        <div className="h-1 w-full bg-[#EAE6DF] shrink-0">
          <div
            className="h-full bg-[#0C2686] transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Minimal Reader Top Bar */}
        <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#EAE6DF] bg-[#FDFBF7] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl tracking-[0.2em] font-light uppercase text-[#1A1A1A]">
              PRIZNI
            </span>
            <span className="h-4 w-px bg-[#1A1A1A]/20" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#0C2686] font-medium hidden sm:inline">
              Journal Article
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-[#1A1A1A]/60 hover:text-[#0C2686] transition-colors p-2 rounded-full hover:bg-black/5">
              <Share2 className="size-4 stroke-[1.5]" />
            </button>
            <button className="text-[#1A1A1A]/60 hover:text-[#0C2686] transition-colors p-2 rounded-full hover:bg-black/5">
              <Bookmark className="size-4 stroke-[1.5]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#1A1A1A] hover:text-[#0C2686] transition-colors rounded-full border border-black/10 hover:border-black"
            >
              <X className="size-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Article Scroll Body */}
        <div
          id="story-reader-container"
          className="flex-1 overflow-y-auto px-6 py-12 md:py-20 bg-[#FDFBF7]"
        >
          <article className="max-w-3xl mx-auto">
            {/* Category & Meta */}
            <div className="flex items-center justify-center gap-4 mb-8 font-sans text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/60">
              <span className="text-[#0C2686] font-medium">{defaultStory.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {defaultStory.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3 text-[#0C2686]" />
                {defaultStory.location}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-normal leading-[1.12] text-center mb-10">
              {displayTitle}
            </h1>

            {/* Author Byline */}
            <div className="text-center mb-12">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-1">
                Words by {defaultStory.author}
              </p>
              <p className="font-sans text-xs text-[#1A1A1A]/60 font-light">
                Published in {defaultStory.date} Issue
              </p>
            </div>

            {/* Main Editorial Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] mb-14 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <img
                src={defaultStory.image}
                alt={displayTitle}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 right-4 text-[10px] font-sans uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded">
                Photography by PRIZNI Archive
              </div>
            </div>

            {/* Article Content with Drop Cap */}
            <div className="space-y-8 font-sans text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed">
              <p className="first-letter:font-heading first-letter:text-6xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#0C2686]">
                {defaultStory.fullContent[0]}
              </p>
              <p>{defaultStory.fullContent[1]}</p>

              {/* Large Pull Quote Callout */}
              <blockquote className="my-12 py-8 px-6 md:px-10 border-l-2 border-[#0C2686] bg-[#0C2686]/5 rounded-r-xl">
                <p className="font-heading text-2xl md:text-3xl text-[#1A1A1A] font-normal leading-snug italic mb-3">
                  "{defaultStory.fullContent[2]}"
                </p>
                <cite className="font-sans text-xs uppercase tracking-widest text-[#0C2686] not-italic">
                  — Grandfather Ivan, Belogradchik Region
                </cite>
              </blockquote>

              <p>{defaultStory.fullContent[3]}</p>
            </div>

            {/* End of Article Footer */}
            <div className="mt-16 pt-12 border-t border-[#EAE6DF] text-center">
              <span className="font-heading text-3xl tracking-[0.2em] text-[#1A1A1A]/30 uppercase block mb-4">
                PRIZNI
              </span>
              <p className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-8">
                End of Editorial Story
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] font-medium text-white bg-[#0C2686] px-8 py-3.5 rounded-full hover:bg-[#1A1A1A] transition-colors"
              >
                Return to Journal
              </button>
            </div>
          </article>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
