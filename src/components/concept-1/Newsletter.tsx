import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, Sparkles } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative border-y border-border/60 bg-surface px-4 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="gradient-top-multi relative mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-3xl border border-brand/15 bg-canvas/70 p-8 shadow-sm md:flex-row md:justify-between md:p-10"
      >
        <div className="text-center md:text-left">
          <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <Sparkles className="size-3.5 text-amber-500" />
            <span>Бюлетин</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
            Никога не пропускайте история
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Спокойно седмично писмо от Северозападна България.
          </p>
        </div>

        <form
          className="flex w-full max-w-md gap-2.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              placeholder="your@email.com"
              className="h-11 w-full rounded-full border border-border/80 bg-white pl-10 pr-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20 shadow-xs"
            />
          </div>
          <Button
            type="submit"
            className="h-11 rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] px-6 text-xs font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg"
          >
            Абонирайте се
          </Button>
        </form>
      </motion.div>
    </section>
  )
}

