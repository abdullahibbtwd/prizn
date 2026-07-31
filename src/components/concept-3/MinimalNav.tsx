import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, Globe, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/concept-1/Logo'
import { cn, handleSmoothNavClick } from '@/lib/utils'

interface MinimalNavProps {
  lang: 'bg' | 'en'
  setLang: (lang: 'bg' | 'en') => void
}

export function MinimalNav({ lang, setLang }: MinimalNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: lang === 'bg' ? 'Истории' : 'Stories', href: '#featured-story' },
    { label: lang === 'bg' ? 'Колекции' : 'Collections', href: '#collections' },
    { label: lang === 'bg' ? 'Места' : 'Places', href: '#places' },
    { label: lang === 'bg' ? 'Традиции' : 'Traditions', href: '#traditions' },
    { label: lang === 'bg' ? 'Гласове' : 'Voices', href: '#voices' },
  ]

  const searchSuggestions = [
    'Белоградчик',
    'Чипровски килими',
    'Дунавски рибари',
    'Магията на кваса',
    'Вършец минерални извори',
  ]

  const navItemClass = scrolled
    ? 'text-[#1A1A1A]/80 hover:text-[#0C2686]'
    : 'text-white/90 hover:text-white'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-[#EAE6DF] shadow-xs'
            : 'bg-transparent py-6 md:py-8'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/concept-3"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <Logo
              className={cn(
                'h-6 md:h-7 transition-[filter] duration-500',
                !scrolled && 'brightness-0 invert'
              )}
              showSlogan={false}
            />
          </Link>

          {/* Center Links - Minimal Typography */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothNavClick(e, link.href, 96)}
                className={cn(
                  'text-xs uppercase tracking-[0.25em] transition-colors font-sans duration-300',
                  navItemClass
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className={cn(
                'flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors py-1 px-2.5 rounded-full duration-300',
                scrolled
                  ? 'text-[#1A1A1A]/70 hover:text-[#0C2686] hover:bg-black/5'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              )}
              aria-label="Search"
            >
              <Search className="size-3.5 stroke-[1.5]" />
              <span className="hidden sm:inline font-sans">{lang === 'bg' ? 'Търсене' : 'Search'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'bg' ? 'en' : 'bg')}
              className={cn(
                'flex items-center gap-1 text-[11px] font-sans uppercase tracking-widest transition-colors px-2.5 py-1 rounded-full duration-300',
                scrolled
                  ? 'text-[#1A1A1A]/60 hover:text-[#0C2686] border border-[#1A1A1A]/20 hover:border-[#0C2686]'
                  : 'text-white/80 hover:text-white border border-white/35 hover:border-white/70'
              )}
            >
              <Globe className="size-3 stroke-[1.5]" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'md:hidden p-1 transition-colors duration-300',
                scrolled ? 'text-journal-ink' : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6 stroke-[1.5]" /> : <Menu className="size-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-[#FDFBF7] border-b border-[#EAE6DF] px-8 py-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothNavClick(e, link.href, 96)
                    setMobileMenuOpen(false)
                  }}
                  className="font-heading text-xl tracking-widest text-journal-ink hover:text-journal-navy"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FDFBF7]/98 backdrop-blur-xl flex flex-col justify-between p-6 md:p-16"
          >
            <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
              <Logo className="h-7" sloganClassName="text-[10px]" />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 text-journal-ink hover:text-journal-navy transition-colors rounded-full border border-black/10 hover:border-black"
              >
                <X className="size-6 stroke-[1.5]" />
              </button>
            </div>

            <div className="max-w-3xl mx-auto w-full py-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/50 mb-4 font-sans text-center">
                {lang === 'bg' ? 'Търсете из дигиталния журнал' : 'Search the digital journal'}
              </p>
              <div className="relative border-b-2 border-[#1A1A1A] pb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'bg' ? 'Търсене на села, занаяти, разкази...' : 'Search villages, crafts, stories...'}
                  className="w-full bg-transparent font-heading text-3xl md:text-5xl text-journal-ink outline-none placeholder:text-[#1A1A1A]/20"
                  autoFocus
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 justify-center">
                <span className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest mr-2">
                  {lang === 'bg' ? 'Популярни:' : 'Popular:'}
                </span>
                {searchSuggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearchQuery(item)}
                    className="text-xs font-sans text-[#1A1A1A]/70 hover:text-[#0C2686] hover:underline px-3 py-1 bg-black/5 rounded-full"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center text-xs text-[#1A1A1A]/40 uppercase tracking-widest font-sans">
              Press Esc or click top right to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
