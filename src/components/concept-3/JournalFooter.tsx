import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

interface JournalFooterProps {
  lang: 'bg' | 'en'
  onOpenPitch: () => void
}

export function JournalFooter({ lang, onOpenPitch }: JournalFooterProps) {
  return (
    <footer className="bg-[#FDFBF7] text-[#1A1A1A] py-24 md:py-32 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Huge Logo */}
        <Link
          to="/concept-3"
          className="font-heading text-5xl sm:text-7xl md:text-[120px] tracking-[0.15em] sm:tracking-[0.25em] font-light uppercase text-[#1A1A1A] hover:opacity-85 transition-opacity"
        >
          PRIZNI
        </Link>

        {/* Mission Statement */}
        <p className="mt-8 max-w-2xl font-sans text-sm md:text-base text-[#1A1A1A]/65 font-light leading-relaxed">
          {lang === 'bg'
            ? 'Луксозно дигитално издание, посветено на културното наследство, живите традиции и изключителните човешки истории на Северозападна България.'
            : 'A luxury editorial journal dedicated to preserving the cultural heritage, living traditions, and extraordinary human stories of Northwestern Bulgaria.'}
        </p>

        {/* Social Links */}
        <div className="mt-10 flex max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/70 sm:gap-x-8 sm:tracking-[0.25em]">
          <a href="#instagram" className="hover:text-[#0C2686] transition-colors">
            Instagram
          </a>
          <a href="#facebook" className="hover:text-[#0C2686] transition-colors">
            Facebook
          </a>
          <a href="#vimeo" className="hover:text-[#0C2686] transition-colors">
            Vimeo Archive
          </a>
          <a href="#spotify" className="hover:text-[#0C2686] transition-colors">
            Podcast
          </a>
        </div>

        {/* Concept Presentation Button */}
        <div className="mt-12">
          <button
            onClick={onOpenPitch}
            className="inline-flex items-center gap-2 rounded-full border border-[#0C2686]/30 bg-[#0C2686]/5 px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#0C2686] hover:bg-[#0C2686] hover:text-white transition-all duration-300 shadow-xs"
          >
            <Sparkles className="size-4 text-[#0C2686] group-hover:text-white" />
            <span>{lang === 'bg' ? 'Презентация на концепциите' : 'Client Presentation Overview'}</span>
          </button>
        </div>

        {/* Bottom Legal & Issue Tag */}
        <div className="mt-16 pt-8 border-t border-[#EAE6DF] w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#1A1A1A]/40 uppercase tracking-widest gap-4">
          <span>© 2026 PRIZNI — Concept 3: The Living Journal</span>
          <span>Designed with Kinfolk & Aesop Editorial Aesthetics</span>
        </div>
      </div>
    </footer>
  )
}
