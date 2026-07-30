import { motion } from 'framer-motion'
import { ChevronDown, Headphones, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { images } from '@/data/concept-1/content'

export function HeroSection() {
  return (
    <section className="relative h-[calc(100svh-104px)] min-h-[520px] max-h-[900px] overflow-hidden md:h-[calc(100svh-108px)]">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images.heroPerson}
          alt=""
          className="hero-ken-burns absolute inset-0 h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Brand Color Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C2686]/95 via-slate-950/60 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C2686]/40 via-transparent to-[#4051C7]/30 opacity-70" />

      {/* Ambient Decorative Glows */}
      <div className="glow-orb-yellow absolute -left-20 top-1/4 size-80 opacity-40 pointer-events-none" />
      <div className="glow-orb-aqua absolute -right-20 bottom-10 size-96 opacity-40 pointer-events-none" />

      <div className="relative flex h-full flex-col justify-end px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-white"
          >
            {/* Flashy Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20 shadow-lg">
              <span className="size-2 rounded-full bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] animate-pulse" />
              <Sparkles className="size-3.5 text-[#FBDA61]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Избрана история
              </p>
            </div>

            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              По ореховите пътеки с{' '}
              <span className="bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] to-[#97D9E1] bg-clip-text text-transparent drop-shadow-sm">
                Ана-Мария Герасимова
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-white/90 md:text-lg lg:text-xl">
              История за традиции, семейни корени и нишката, която свързва
              поколенията в сърцето на Северозападна България.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-sm font-bold text-brand shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                <BookOpen className="mr-2 size-4 text-brand" />
                Прочетете историята
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:text-white"
              >
                <Headphones className="mr-2 size-4 text-white" />
                Слушайте <span className="mx-1.5 opacity-60">·</span> 12 мин
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold tracking-wide text-white/80">
              <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-white text-[10px]">
                ИГ
              </div>
              <span>От Инна Герова</span>
              <span className="size-1 rounded-full bg-white/50" />
              <span className="text-[#97D9E1]">Юли 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#editors-picks"
        className="scroll-hint group absolute bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
        aria-label="Scroll to featured stories"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-0 transition-opacity group-hover:opacity-100">
          Разгледайте
        </span>
        <ChevronDown className="size-5 text-[#74EBD5]" />
      </a>
    </section>
  )
}

