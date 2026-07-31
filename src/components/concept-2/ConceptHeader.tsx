import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, HeartHandshake } from 'lucide-react'
import { Logo } from '@/components/concept-1/Logo'
import { Button } from '@/components/ui/button'
import { cn, handleSmoothNavClick } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Човешки истории', href: '#human-stories' },
  { label: 'Нашите места', href: '#our-places' },
  { label: 'Традиции & Занаяти', href: '#traditions' },
  { label: 'Събития', href: '#events' },
  { label: 'Галерия', href: '#gallery' },
] as const

export function ConceptHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#human-stories')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section scroll spy
      const sections = navLinks.map(link => link.href.substring(1))
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveHash(`#${sectionId}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white/90 backdrop-blur-xl transition-all duration-300 ease-out border-b',
        scrolled
          ? 'border-brand/15 shadow-lg shadow-brand/5 py-1'
          : 'border-brand/10 py-1.5'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[70px] md:px-8">
        {/* Brand Logo */}
        <Link to="/concept-2" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo className="h-6 md:h-7" sloganClassName="text-[9px] md:text-[10px]" />
        </Link>

        {/* Navigation links with Gradient Underline */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleSmoothNavClick(e, link.href, 90)
                  setActiveHash(link.href)
                }}
                className={cn(
                  'group relative py-1 text-sm font-semibold transition-colors duration-300',
                  isActive ? 'text-[#0C2686] font-bold' : 'text-ink/80 hover:text-[#0C2686]'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300',
                    isActive
                      ? 'w-full bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#74EBD5]'
                      : 'w-0 bg-gradient-to-r from-[#0C2686] via-[#4051C7] to-[#74EBD5] group-hover:w-full'
                  )}
                />
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
         

          <Button
            variant="outline"
            size="sm"
            className="hidden h-8 rounded-full border-brand/20 bg-brand/5 px-3 text-xs font-semibold text-[#0C2686] transition-all hover:bg-brand/10 md:inline-flex"
          >
            <Search className="size-3.5 text-[#0C2686]" />
            Търсене
          </Button>

          <Button
            size="sm"
            className="hidden h-8 rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] px-4 text-xs font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg sm:inline-flex"
          >
            <HeartHandshake className="size-3.5 text-white" />
            Подкрепете ни
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 items-center gap-1 rounded-full border-brand/20 bg-brand/5 px-3 text-xs font-bold text-[#0C2686] lg:hidden"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="size-3.5" /> : <Menu className="size-3.5" />}
            <span>Меню</span>
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand/10 bg-white px-4 py-5 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothNavClick(e, link.href, 90)
                    setActiveHash(link.href)
                    setMobileMenuOpen(false)
                  }}
                  className="rounded-xl px-3 py-2 text-base font-bold text-ink transition-colors hover:bg-[#EEF3FF] hover:text-[#0C2686]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-brand/10">
                <Button
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-10 w-full rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-xs font-bold text-white shadow-md"
                >
                  <HeartHandshake className="size-4" />
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
