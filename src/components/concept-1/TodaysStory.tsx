import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { images } from '@/data/concept-1/content'

export function TodaysStory() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[440px] bg-muted md:min-h-[540px]">
        <OptimizedImage
          src={images.museum}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Brand Deep Blue to Royal Blue Gradient Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2686]/95 via-[#0C2686]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Ambient Decorative Orbs */}
        <div className="glow-orb-yellow absolute left-10 top-1/4 size-80 opacity-30 pointer-events-none" />

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-20 md:min-h-[540px] md:px-12 lg:px-16">
          <div className="max-w-xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
              <span className="size-2 rounded-full bg-gradient-to-r from-[#8AF4C2] to-[#18BEF2] animate-pulse" />
              <Sparkles className="size-3.5 text-[#8AF4C2]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Днешната история
              </p>
            </div>

            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Новият живот на музейната колекция
            </h2>
            
            <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
              Как малък екип от куратори преосмисля наследството за ново
              поколение — артефакт по артефакт, история по история.
            </p>

            <Button
              size="lg"
              className="mt-8 h-12 rounded-full bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] px-8 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              Продължете четенето
              <ArrowRight className="ml-2 size-4 text-slate-950" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

