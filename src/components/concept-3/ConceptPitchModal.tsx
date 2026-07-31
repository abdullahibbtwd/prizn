import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight, BookOpen, Compass, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ConceptPitchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConceptPitchModal({ isOpen, onClose }: ConceptPitchModalProps) {
  if (!isOpen) return null

  const concepts = [
    {
      id: 'concept-1',
      title: 'Concept 1 — Faces of the Northwest',
      subtitle: 'Emotion-first',
      tag: 'Емоционален Фокус',
      description:
        'Large portraits and immersive storytelling that immediately connect visitors with the people behind every story.',
      bgDesc: 'Големи портрети и поглъщащо разказване на истории, които веднага свързват читателя с хората от региона.',
      link: '/concept-1',
      icon: Users,
      badge: 'Faces & Portraits',
    },
    {
      id: 'concept-2',
      title: 'Concept 2 — Living Northwest',
      subtitle: 'Discovery-first',
      tag: 'Откривателски Фокус',
      description:
        'A vibrant, colorful experience that encourages users to explore places, traditions, and culture through interactive sections and visual storytelling.',
      bgDesc: 'Живо и динамично изживяване, което насърчава потребителите да откриват места, традиции и култура.',
      link: '/concept-2',
      icon: Compass,
      badge: 'Interactive Explorer',
    },
    {
      id: 'concept-3',
      title: 'Concept 3 — The Living Journal',
      subtitle: 'Editorial-first',
      tag: 'Премиум Дигитален Журнал',
      description:
        'A premium digital magazine experience with elegant typography, curated collections, and immersive photography that elevates Prizni into a destination for long-form reading.',
      bgDesc: 'Премиум дигитално списание с елегантна типография, курирани колекции и поглъщаща фотография.',
      link: '/concept-3',
      icon: BookOpen,
      badge: 'Kinfolk / Luxury Journal',
      active: true,
    },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col justify-center items-center p-6 md:p-12 overflow-y-auto"
      >
        <div className="max-w-5xl w-full bg-[#FDFBF7] rounded-[24px] border border-[#EAE6DF] p-8 md:p-12 shadow-2xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-black/10 text-journal-ink hover:bg-black/5 transition-colors"
          >
            <X className="size-6 stroke-[1.5]" />
          </button>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0C2686]/10 text-[#0C2686] rounded-full text-xs font-sans uppercase tracking-[0.2em] font-medium mb-3">
              <Sparkles className="size-3.5" />
              <span>Design Concepts Showcase</span>
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-[#1A1A1A] font-normal mb-3">
              PRIZNI Design Directions
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#1A1A1A]/70 font-light">
              Compare the three strategic design philosophies crafted for Prizni regional media.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {concepts.map((c) => {
              const IconComp = c.icon

              return (
                <div
                  key={c.id}
                  className={`rounded-[16px] border p-6 flex flex-col justify-between transition-all duration-300 ${
                    c.active
                      ? 'border-[#0C2686] bg-white ring-2 ring-[#0C2686]/30 shadow-lg'
                      : 'border-[#EAE6DF] bg-white/70 hover:border-black/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 rounded-full bg-[#0C2686]/10 text-[#0C2686] flex items-center justify-center">
                        <IconComp className="size-5 stroke-[1.5]" />
                      </div>
                      <span className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 bg-black/5 rounded-full text-[#1A1A1A]/70">
                        {c.badge}
                      </span>
                    </div>

                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0C2686] block mb-1">
                      {c.subtitle}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl text-[#1A1A1A] font-normal mb-3">
                      {c.title}
                    </h3>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 font-light leading-relaxed mb-6">
                      {c.description}
                    </p>
                  </div>

                  <Link
                    to={c.link}
                    onClick={onClose}
                    className={`inline-flex items-center justify-center gap-2 rounded-full py-3 px-4 font-sans text-xs uppercase tracking-widest font-medium transition-all ${
                      c.active
                        ? 'bg-[#0C2686] text-white shadow-md hover:bg-[#1A1A1A]'
                        : 'bg-black/5 text-[#1A1A1A] hover:bg-[#0C2686] hover:text-white'
                    }`}
                  >
                    <span>View Concept</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center text-xs font-sans text-[#1A1A1A]/50">
            Selected: <span className="font-medium text-[#0C2686]">Concept 3 — The Living Journal</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
