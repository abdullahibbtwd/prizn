import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface WriteForUsSectionProps {
  lang: 'bg' | 'en'
}

export function WriteForUsSection({ lang }: WriteForUsSectionProps) {
  const content = journalContent.writeForUs

  return (
    <section id="write-for-us" className="bg-[#FDFBF7] py-24 md:py-32 px-6 md:px-12 border-t border-[#EAE6DF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-4">
          {lang === 'bg' ? 'Присъединете се' : 'Contribute'}
        </span>
        <h2 className="font-heading text-4xl md:text-6xl text-[#1A1A1A] font-light tracking-tight">
          {lang === 'bg' ? content.titleBg : content.title}
        </h2>
        <p className="mt-8 font-heading text-2xl md:text-3xl italic text-[#1A1A1A]/75 leading-snug">
          {lang === 'bg' ? content.line1Bg : content.line1}
        </p>
        <p className="mt-3 font-heading text-2xl md:text-3xl italic text-[#0C2686] leading-snug">
          {lang === 'bg' ? content.line2Bg : content.line2}
        </p>
        <a
          href="mailto:hello@prizni.bg?subject=Write%20for%20Us"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#0C2686] bg-transparent px-8 py-3.5 text-xs font-sans uppercase tracking-[0.22em] font-medium text-[#0C2686] transition-all duration-300 hover:bg-[#0C2686] hover:text-white"
        >
          <PenLine className="size-3.5" />
          {lang === 'bg' ? content.ctaBg : content.cta}
        </a>
      </motion.div>
    </section>
  )
}
