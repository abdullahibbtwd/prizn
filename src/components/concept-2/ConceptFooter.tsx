import { Logo } from '@/components/concept-1/Logo'
import { Button } from '@/components/ui/button'
import { Heart, Send, Sparkles, Share2, Globe, MessageCircle } from 'lucide-react'

export function ConceptFooter() {
  return (
    <footer className="relative border-t border-brand/15 bg-[#FAF8F3] pt-16 pb-12 text-[#1F2937]">
      {/* Top Multi-Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] via-[#9FACE6] via-[#74EBD5] to-[#18BEF2]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Big Logo & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-8 md:h-9" sloganClassName="text-[10px] md:text-[11px]" />
            </div>

            <p className="mt-4 max-w-md text-sm text-ink/80 leading-relaxed font-normal">
              „Призни“ е независима платформа за съхранение, разпространение 
              и празнуване на културното наследство, историите и занаятите на Северозападна България.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Споделете"
                className="flex size-9 items-center justify-center rounded-full bg-white text-[#0C2686] shadow-sm border border-brand/10 transition-transform hover:scale-110 hover:bg-[#0C2686] hover:text-white"
              >
                <Share2 className="size-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Уебсайт"
                className="flex size-9 items-center justify-center rounded-full bg-white text-[#0C2686] shadow-sm border border-brand/10 transition-transform hover:scale-110 hover:bg-[#0C2686] hover:text-white"
              >
                <Globe className="size-4" />
              </a>
              <a
                href="#youtube"
                aria-label="Контакт"
                className="flex size-9 items-center justify-center rounded-full bg-white text-[#0C2686] shadow-sm border border-brand/10 transition-transform hover:scale-110 hover:bg-[#0C2686] hover:text-white"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg font-bold text-[#0C2686]">Раздели</h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <a href="#human-stories" className="text-ink/80 transition-colors hover:text-[#0C2686]">
                  Човешки истории
                </a>
              </li>
              <li>
                <a href="#our-places" className="text-ink/80 transition-colors hover:text-[#0C2686]">
                  Нашите места & Градове
                </a>
              </li>
              <li>
                <a href="#traditions" className="text-ink/80 transition-colors hover:text-[#0C2686]">
                  Традиции & Чипровски занаяти
                </a>
              </li>
              <li>
                <a href="#events" className="text-ink/80 transition-colors hover:text-[#0C2686]">
                  Календар на събитията
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ink/80 transition-colors hover:text-[#0C2686]">
                  Живата фотографска галерия
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <div className="rounded-[20px] bg-white p-6 shadow-md border border-brand/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0C2686]">
                <Sparkles className="size-4 text-[#FBDA61]" />
                Бюлетин „Северозападен дух“
              </div>
              <h4 className="mt-1 font-heading text-xl font-bold text-ink">
                Получавайте новите истории първи
              </h4>
              <p className="mt-2 text-xs text-ink/75">
                Всяка седмица подбрани разкази за хора, села и събития направо във вашата поща.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Вашият имейл адрес..."
                  className="h-10 w-full rounded-full border border-brand/20 bg-[#FAF8F3] px-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0C2686]"
                />
                <Button size="sm" className="h-10 rounded-full bg-[#0C2686] px-4 text-white hover:bg-[#4051C7]">
                  <Send className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-brand/10 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-ink/65">
          <p>© 2026 ПРИЗНИ. Всички права запазени. Северозападна България.</p>
          <div className="flex items-center gap-1 font-medium">
            <span>Изработено с</span>
            <Heart className="size-3.5 fill-[#FF5ACD] text-[#FF5ACD]" />
            <span>за Северозапада</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
