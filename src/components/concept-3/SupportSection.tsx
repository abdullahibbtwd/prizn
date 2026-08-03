import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface SupportSectionProps {
  lang: 'bg' | 'en'
}

export function SupportSection({ lang }: SupportSectionProps) {
  const content = journalContent.support

  return (
    <>
      <section id="support" className="bg-[#FDFBF7] py-20 md:py-28 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-[#EAE6DF] bg-[#1A1A1A] px-8 py-16 text-center text-white md:px-16 md:py-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: 'url(/festival.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0C2686]/45 to-black/70" />

          <div className="relative z-10">
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans text-white/70 font-medium">
              {lang === 'bg' ? content.eyebrowBg : content.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-light tracking-tight">
              {lang === 'bg' ? content.titleBg : content.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-sm md:text-base text-white/80 font-light leading-relaxed">
              {lang === 'bg' ? content.textBg : content.text}
            </p>
            <a
              href="#support"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#1A1A1A] transition-all duration-300 hover:bg-[#FDFBF7]"
            >
              <Heart className="size-3.5 fill-current text-[#0C2686]" />
              {lang === 'bg' ? content.ctaBg : content.cta}
            </a>
          </div>
        </motion.div>
      </section>

      <section id="partnerships" className="bg-[#FDFBF7] pb-20 md:pb-28 px-6 md:px-12 -mt-8 md:-mt-12">
        <div className="mx-auto max-w-3xl rounded-[20px] border border-[#EAE6DF] bg-white px-8 py-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.28em] font-sans text-[#0C2686] font-medium">
            {lang === 'bg' ? 'Заедно' : 'Together'}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[#1A1A1A] font-light">
            {lang === 'bg' ? 'Партньорства' : 'Partnerships'}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-[#1A1A1A]/65 font-light leading-relaxed">
            {lang === 'bg'
              ? 'Работим с културни институции, местни общности и марки, които споделят нашата мисия.'
              : 'We collaborate with cultural institutions, local communities, and brands that share our mission.'}
          </p>
          <a
            href="mailto:hello@prizni.bg?subject=Partnership"
            className="mt-7 inline-flex items-center rounded-full border border-[#0C2686] px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#0C2686] transition-all hover:bg-[#0C2686] hover:text-white"
          >
            {lang === 'bg' ? 'Свържете се с нас' : 'Get in touch'}
          </a>
        </div>
      </section>
    </>
  )
}
