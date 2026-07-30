import { Button } from '@/components/ui/button'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { images } from '@/data/concept-1/content'
import { HeartHandshake, Sparkles } from 'lucide-react'

export function SupportPrizni() {
  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="gradient-top-multi relative overflow-hidden rounded-3xl bg-slate-950 shadow-2xl border border-brand/20">
          <OptimizedImage
            src={images.festival}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-85"
          />

          {/* Soft Dark Vignette Overlay so image is clear & visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-[#0C2686]/40 to-slate-950/60" />
          <div className="absolute inset-0 bg-[#0C2686]/25" />

          {/* Ambient Lighting Orbs */}
          <div className="glow-orb-yellow absolute -left-20 top-10 size-80 opacity-40 pointer-events-none" />
          <div className="glow-orb-aqua absolute -right-20 bottom-10 size-96 opacity-40 pointer-events-none" />

          <div className="relative px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
              <HeartHandshake className="size-3.5 text-[#74EBD5]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Подкрепете нашата мисия
              </p>
            </div>

            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Помогнете да запазим историите на Северозападна България
            </h2>
            
            <p className="mx-auto mt-5 max-w-xl text-base text-white/90 md:text-lg">
              Вашата подкрепа държи местните гласове чути, традициите
              документирани и наследството живо за идните поколения.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-full bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] px-8 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                <HeartHandshake className="mr-2 size-4 text-slate-950" />
                Дарете сега
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/35 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:text-white"
              >
                <Sparkles className="mr-2 size-4 text-[#97D9E1]" />
                Станете сътрудник
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

