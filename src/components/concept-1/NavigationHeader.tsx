import { useEffect, useState } from 'react'
import { Search, Menu, X, HeartHandshake, PenLine } from 'lucide-react'
import { Logo } from '@/components/concept-1/Logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Човешки истории', href: '#human-stories' },
  { label: 'Нашите места', href: '#our-places' },
  { label: 'Традиции', href: '#traditions' },
] as const

export function NavigationHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-surface/95 backdrop-blur-md transition-all duration-300 ease-out',
        scrolled
          ? 'border-border/80 shadow-md py-0.5'
          : 'border-border/40',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[68px] md:px-8">
        <a href="#" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo
            className="h-6 md:h-7"
            sloganClassName="text-[9px] md:text-[10px]"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-bold text-ink/80 transition-colors duration-300 hover:text-brand"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0C2686] to-[#4051C7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden h-8 rounded-full border-brand/20 bg-brand/5 px-3.5 text-xs font-semibold text-brand transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-brand lg:inline-flex"
            aria-label="Търсене"
          >
            <Search className="size-3.5 text-brand" />
            Търсене
          </Button>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden h-8 rounded-full border-brand/25 bg-canvas px-3.5 text-xs font-semibold text-brand transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 md:inline-flex"
          >
            <a href="#write-for-us">
              <PenLine className="size-3.5 text-brand-accent" />
              Пишете за нас
            </a>
          </Button>

          <Button
            size="sm"
            className="hidden h-8 rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] px-4.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg md:inline-flex"
          >
            <HeartHandshake className="size-3.5 text-white" />
            Подкрепете ни
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 items-center gap-1.5 rounded-full border-brand/20 bg-brand/5 px-3 text-xs font-bold text-brand transition-colors duration-300 hover:border-brand/40 hover:bg-brand/10 md:hidden"
            aria-label={mobileMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          >
            {mobileMenuOpen ? (
              <>
                <X className="size-3.5" />
                Затвори
              </>
            ) : (
              <>
                <Menu className="size-3.5" />
                Меню
              </>
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border/60 bg-surface px-4 py-5 shadow-lg md:hidden"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-bold text-ink transition-colors hover:bg-canvas hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#write-for-us"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-bold text-ink transition-colors hover:bg-canvas hover:text-brand"
              >
                Пишете за нас
              </a>
              <div className="flex flex-col gap-2 border-t border-border/50 pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 w-full rounded-full border-brand/25 bg-brand/5 text-xs font-semibold text-brand"
                >
                  <Search className="size-3.5" />
                  Търсене
                </Button>
                <Button
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-9 w-full rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-xs font-bold text-white shadow-md"
                >
                  <HeartHandshake className="size-3.5" />
                  Подкрепете ни
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

