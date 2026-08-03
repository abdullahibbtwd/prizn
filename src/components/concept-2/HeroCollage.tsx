import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Compass, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroCollageItems } from '@/data/concept-2/content'

export function HeroCollage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-white to-[#EEF3FF] py-12 md:py-16 lg:py-20">
      {/* Decorative Ambient Floating Gradient Blobs */}
      <div className="blob-gradient-1 animate-blob-slow absolute -left-20 top-10 size-[420px] rounded-full pointer-events-none" />
      <div className="blob-gradient-2 animate-blob-slow absolute -right-20 bottom-10 size-[450px] rounded-full pointer-events-none" style={{ animationDelay: '-4s' }} />
      <div className="blob-gradient-4 animate-blob-slow absolute left-1/3 top-1/2 size-[350px] rounded-full pointer-events-none" style={{ animationDelay: '-8s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header & Tagline */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0C2686]/15 bg-gradient-to-r from-[#EEF3FF] via-[#EAFBF4] to-[#FFF5E8] px-4 py-1.5 shadow-sm"
          >
            <Sparkles className="size-3.5 text-[#0C2686]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C2686]">
              Концепция 2 - Живият Северозапад
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-extrabold tracking-tight text-[#1F2937] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]"
          >
            Неразказаните истории <br className="hidden sm:block" />
            на{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#18BEF2] bg-clip-text text-transparent">
              Северозапада
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#18BEF2]/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-ink/80 sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            Интерактивно културно изживяване за хората, вековните традиции, 
            занаятите и духа на родната земя.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="h-12 rounded-full bg-[#0C2686] px-7 text-sm font-bold text-white shadow-lg shadow-[#0C2686]/20 transition-all duration-300 hover:bg-[#4051C7] hover:scale-105"
            >
              <a href="#human-stories">
                Открийте историите
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-full border-2 border-[#0C2686]/20 bg-white px-7 text-sm font-bold text-[#0C2686] transition-all duration-300 hover:border-[#0C2686] hover:bg-[#EEF3FF] hover:scale-105"
            >
              <a href="#our-places">
                <Compass className="mr-2 size-4 text-[#18BEF2]" />
                Разгледайте местата
              </a>
            </Button>
          </motion.div>
        </div>

        {/* 4-Photo Hero Collage Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 md:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Tile 1: Portrait */}
          <div className="group relative overflow-hidden rounded-[24px] bg-white p-2 shadow-xl border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
              <img
                src={heroCollageItems[0].image}
                alt={heroCollageItems[0].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-[#EEF3FF]/90 px-3 py-1 text-[11px] font-extrabold text-[#0C2686] backdrop-blur-md">
                ● {heroCollageItems[0].tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8AF4C2]">
                  <MapPin className="size-3" />
                  {heroCollageItems[0].location}
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug">{heroCollageItems[0].title}</h3>
                <p className="text-xs text-white/80 line-clamp-1">{heroCollageItems[0].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Tile 2: Mountain */}
          <div className="group relative overflow-hidden rounded-[24px] bg-white p-2 shadow-xl border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
              <img
                src={heroCollageItems[1].image}
                alt={heroCollageItems[1].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-[#EAFBF4]/90 px-3 py-1 text-[11px] font-extrabold text-[#047857] backdrop-blur-md">
                ● {heroCollageItems[1].tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#74EBD5]">
                  <MapPin className="size-3" />
                  {heroCollageItems[1].location}
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug">{heroCollageItems[1].title}</h3>
                <p className="text-xs text-white/80 line-clamp-1">{heroCollageItems[1].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Tile 3: Tradition */}
          <div className="group relative overflow-hidden rounded-[24px] bg-white p-2 shadow-xl border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
              <img
                src={heroCollageItems[2].image}
                alt={heroCollageItems[2].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-[#FFF5E8]/90 px-3 py-1 text-[11px] font-extrabold text-[#B45309] backdrop-blur-md">
                ● {heroCollageItems[2].tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#FBDA61]">
                  <MapPin className="size-3" />
                  {heroCollageItems[2].location}
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug">{heroCollageItems[2].title}</h3>
                <p className="text-xs text-white/80 line-clamp-1">{heroCollageItems[2].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Tile 4: Village */}
          <div className="group relative overflow-hidden rounded-[24px] bg-white p-2 shadow-xl border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-1 lg:col-span-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px]">
              <img
                src={heroCollageItems[3].image}
                alt={heroCollageItems[3].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-[#F8EDFF]/90 px-3 py-1 text-[11px] font-extrabold text-[#7E22CE] backdrop-blur-md">
                ● {heroCollageItems[3].tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#D9AFD9]">
                  <MapPin className="size-3" />
                  {heroCollageItems[3].location}
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug">{heroCollageItems[3].title}</h3>
                <p className="text-xs text-white/80 line-clamp-1">{heroCollageItems[3].subtitle}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
