import { Globe, Heart, Mail, Share2, HeartHandshake, PenLine } from 'lucide-react'
import { Logo } from '@/components/concept-1/Logo'
import { Button } from '@/components/ui/button'

const footerNav = {
  Разгледайте: [
    'Човешки истории',
    'Нашите места',
    'Традиции',
    'Избор на редактора',
  ],
  'За нас': [
    'Нашата мисия',
    'Пишете за нас',
    'Подкрепете ни',
    'Контакт',
  ],
} as const

export function Footer() {
  return (
    <footer className="bg-canvas px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <Logo className="h-7" sloganClassName="text-sm md:text-base" />
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              size="sm"
              className="h-8 rounded-full bg-brand px-4 text-xs font-semibold text-white transition-colors duration-300 hover:bg-brand/90"
            >
              <HeartHandshake className="size-3.5" />
              Дарете
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-full border-brand/20 bg-brand/5 px-4 text-xs font-medium text-brand transition-colors duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
            >
              <PenLine className="size-3.5" />
              Пишете за нас
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Връзка с нас
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[Share2, Globe, Heart, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-8 items-center justify-center rounded-full border border-brand/20 bg-brand/5 text-brand transition-colors duration-300 hover:border-brand/40 hover:bg-brand/10"
                aria-label="Социална връзка"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            hello@prizni.bg
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © 2026 Prizni. Запазваме Северозападна България.
      </div>
    </footer>
  )
}
