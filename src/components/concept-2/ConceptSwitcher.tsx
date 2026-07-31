import { Link as RouterLink, useLocation as useRouteLocation } from 'react-router-dom'
import { Sparkles, Layers, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ConceptSwitcher() {
  const location = useRouteLocation()
  const path = location.pathname

  const isConcept1 = path.includes('/concept-1')
  const isConcept2 = path.includes('/concept-2')
  const isConcept3 = path.includes('/concept-3')

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-1 rounded-full border border-black/10 bg-white/95 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:left-auto sm:right-6 sm:bottom-6 sm:justify-start sm:w-auto">
      <div className="hidden sm:flex items-center gap-1 px-2 text-xs font-bold text-[#1A1A1A]">
        <Layers className="size-3.5 text-[#0C2686]" />
        <span className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/70">Concept:</span>
      </div>

      <RouterLink
        to="/concept-1"
        className={cn(
          'flex-1 sm:flex-none rounded-full px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold text-center transition-all duration-300',
          isConcept1
            ? 'bg-[#0C2686] text-white shadow-md'
            : 'bg-[#FAF8F3] text-[#1A1A1A]/70 hover:bg-[#0C2686]/10 hover:text-[#0C2686]'
        )}
      >
        C1
        <span className="hidden sm:inline">oncept 1</span>
      </RouterLink>

      <RouterLink
        to="/concept-2"
        className={cn(
          'flex flex-1 sm:flex-none items-center justify-center gap-1 rounded-full px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold transition-all duration-300',
          isConcept2
            ? 'bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#18BEF2] text-white shadow-md'
            : 'bg-[#FAF8F3] text-[#1A1A1A]/70 hover:bg-[#0C2686]/10 hover:text-[#0C2686]'
        )}
      >
        <Sparkles className="size-3 text-[#FBDA61] hidden sm:block" />
        C2
        <span className="hidden sm:inline">oncept 2</span>
      </RouterLink>

      <RouterLink
        to="/concept-3"
        className={cn(
          'flex flex-1 sm:flex-none items-center justify-center gap-1 rounded-full px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold transition-all duration-300',
          isConcept3
            ? 'bg-[#1A1A1A] text-[#FDFBF7] shadow-md border border-white/20'
            : 'bg-[#FAF8F3] text-[#1A1A1A]/70 hover:bg-[#0C2686]/10 hover:text-[#0C2686]'
        )}
      >
        <BookOpen className="size-3 text-[#0C2686] hidden sm:block" />
        C3
        <span className="hidden sm:inline">oncept 3</span>
      </RouterLink>
    </div>
  )
}
