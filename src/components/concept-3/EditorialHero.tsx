import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface EditorialHeroProps {
  lang: 'bg' | 'en'
}

const SLIDE_MS = 8000
const FADE_S = 1.4
const ZOOM_S = 10

export function EditorialHero({ lang }: EditorialHeroProps) {
  const content = journalContent.hero
  const images =
    content.heroImages?.length > 0
      ? content.heroImages
      : [content.heroImage]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [images.length, index])

  // Preload the next frame so crossfades stay sharp
  useEffect(() => {
    if (images.length < 2) return
    const next = new Image()
    next.src = images[(index + 1) % images.length]
  }, [index, images])

  const scrollToLetter = () => {
    const el = document.getElementById('editors-letter')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between items-center text-white px-6 py-12 md:py-16">
      {/* Cover slider — same slow zoom + matte overlay as before */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: FADE_S, ease: 'easeInOut' },
              scale: { duration: ZOOM_S, ease: 'easeOut' },
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Luxury Matte Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />

      {/* Top Brand Mark */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 pt-16 md:pt-12 text-center"
      >
        <span className="font-heading text-lg md:text-xl tracking-[0.4em] uppercase font-light text-white/90">
          {content.brand}
        </span>
      </motion.div>

      {/* Center Hero Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm"
        >
          {lang === 'bg' ? content.bgTitle : content.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-white/40" />
          <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/80 font-light">
            {lang === 'bg' ? content.editionBg : content.edition}
          </span>
          <div className="h-px w-8 bg-white/40" />
        </motion.div>
      </div>

      {/* Bottom Action - Begin Reading + cover picker for client review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 pb-6 md:pb-8 text-center flex flex-col items-center gap-5"
      >
        <button
          onClick={scrollToLetter}
          className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-white/90 hover:text-white border border-white/30 hover:border-white rounded-full px-7 py-3.5 backdrop-blur-xs transition-all duration-300 hover:bg-white/10"
        >
          <span>{lang === 'bg' ? content.ctaBg : content.cta}</span>
          <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-1 stroke-[1.5]" />
        </button>

        {images.length > 1 && (
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label={lang === 'bg' ? 'Корица' : 'Cover image'}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${lang === 'bg' ? 'Корица' : 'Cover'} ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
