import { Link } from 'react-router-dom'
import { Sparkles, Layers, BookOpen, Compass, Users } from 'lucide-react'
import { Logo } from '@/components/concept-1/Logo'
import { ConceptSwitcher } from '@/components/concept-2/ConceptSwitcher'
import { cn } from '@/lib/utils'

const concepts = [
  {
    to: '/concept-1',
    title: 'Concept 1',
    subtitle: 'Faces of the Northwest',
    tag: 'Emotion-first',
    description: 'Immersive portraits and storytelling focused on the people of the region.',
    icon: Users,
    accent: 'bg-[#0C2686] text-white hover:bg-[#4051C7]',
    badge: 'bg-[#0C2686]/10 text-[#0C2686]',
  },
  {
    to: '/concept-2',
    title: 'Concept 2',
    subtitle: 'Living Northwest',
    tag: 'Discovery-first',
    description: 'A vibrant explorer of places, traditions, events, and culture.',
    icon: Compass,
    accent:
      'bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#18BEF2] text-white hover:brightness-110',
    badge: 'bg-[#18BEF2]/15 text-[#0C2686]',
  },
  {
    to: '/concept-3',
    title: 'Concept 3',
    subtitle: 'The Living Journal',
    tag: 'Editorial-first',
    description: 'A premium digital magazine with curated stories and photography.',
    icon: BookOpen,
    accent: 'bg-[#1A1A1A] text-[#FDFBF7] hover:bg-[#0C2686]',
    badge: 'bg-[#1A1A1A]/8 text-[#1A1A1A]',
  },
] as const

export default function HomePage() {
  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="pointer-events-none absolute -left-24 top-10 size-[320px] rounded-full bg-[#0C2686]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 size-[280px] rounded-full bg-[#18BEF2]/15 blur-3xl" />

      <main className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 flex justify-center">
            <Logo className="h-8 md:h-10" sloganClassName="text-[11px] md:text-xs" />
          </div>

          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#0C2686]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#0C2686]">
            <Layers className="size-3.5" />
            Design Concepts
          </span>

          <h1 className="mt-4 font-heading text-4xl font-normal tracking-tight text-[#1A1A1A] md:text-5xl">
            Choose a concept
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#1A1A1A]/65 md:text-base">
            Explore the three design directions for Prizni. Use the cards below or the switcher
            to jump between concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {concepts.map((concept) => {
            const Icon = concept.icon
            return (
              <Link
                key={concept.to}
                to={concept.to}
                className="group flex flex-col rounded-[20px] border border-black/8 bg-white p-6 shadow-[0_10px_30px_-8px_rgba(12,38,134,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(12,38,134,0.16)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex size-10 items-center justify-center rounded-full',
                      concept.badge
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
                      concept.badge
                    )}
                  >
                    {concept.tag}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-semibold text-[#1A1A1A]">
                  {concept.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#0C2686]">{concept.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1A1A1A]/65">
                  {concept.description}
                </p>

                <span
                  className={cn(
                    'mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all',
                    concept.accent
                  )}
                >
                  {concept.to === '/concept-2' && (
                    <Sparkles className="size-3.5 text-[#FBDA61]" />
                  )}
                  Open {concept.title}
                </span>
              </Link>
            )
          })}
        </div>
      </main>

      <ConceptSwitcher />
    </div>
  )
}
