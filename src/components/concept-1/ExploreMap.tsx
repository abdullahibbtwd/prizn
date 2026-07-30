import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, Sparkles, X, Compass } from 'lucide-react'
import { SectionHeading } from '@/components/concept-1/shared'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { mapPins } from '@/data/concept-1/content'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function PreviewCard({
  location,
  onClose,
  className,
}: {
  location: (typeof mapPins)[number]
  onClose: () => void
  className?: string
}) {
  return (
    <div
      className={cn(
        'gradient-top-multi relative overflow-hidden rounded-2xl border border-brand/20 bg-white/95 shadow-2xl backdrop-blur-md',
        className,
      )}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute right-3 top-3 z-30 flex size-7 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-xs transition-transform hover:scale-110"
        aria-label="Close preview"
      >
        <X className="size-4" />
      </button>

      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <OptimizedImage
          src={location.preview.image}
          alt={location.preview.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 shadow-md">
          <Sparkles className="size-3 text-slate-950" />
          {location.name}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl font-bold leading-snug text-ink">
          {location.preview.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {location.preview.excerpt}
        </p>
        <Button
          size="sm"
          className="mt-4 h-9 w-full rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-xs font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg"
        >
          История от {location.name}
          <ArrowRight className="ml-1.5 size-3.5" />
        </Button>
      </div>
    </div>
  )
}

export function ExploreMap() {
  const [selectedPin, setSelectedPin] = useState<string | null>('belogradchik')
  const activeLocation = mapPins.find((p) => p.id === selectedPin)

  const handlePinClick = (id: string) => {
    setSelectedPin((prev) => (prev === id ? null : id))
  }

  return (
    <section className="relative overflow-hidden bg-surface px-4 py-20 md:px-8 md:py-28">
      {/* Background Ambient Glows */}
      <div className="glow-orb-aqua absolute left-10 top-1/3 size-96 opacity-30 pointer-events-none" />
      <div className="glow-orb-brand absolute right-10 bottom-10 size-96 opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Изследвайте региона"
          subtitle="Всяко село има своя история. Докоснете пин или град, за да откриете неговата памет."
          align="center"
          badgeText="Интерактивна карта"
        />

        {/* Location Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {mapPins.map((pin) => {
            const isSelected = selectedPin === pin.id
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => handlePinClick(pin.id)}
                className={cn(
                  'flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-bold shadow-xs transition-all duration-300',
                  isSelected
                    ? 'scale-[1.05] bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-white shadow-md ring-2 ring-[#4051C7]/30'
                    : 'border border-border/70 bg-canvas text-ink/80 hover:border-brand/40 hover:bg-white hover:text-brand',
                )}
              >
                <MapPin
                  className={cn(
                    'size-3.5',
                    isSelected ? 'text-[#74EBD5]' : 'text-brand',
                  )}
                />
                <span>{pin.name}</span>
              </button>
            )
          })}
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-[#EAE6DD] via-[#F4F1EA] to-[#D8D2C6] p-4 shadow-xl sm:aspect-[16/10]">
            {/* Styled Map Graphic Lines */}
            <svg
              viewBox="0 0 100 80"
              className="absolute inset-0 h-full w-full opacity-60"
              aria-hidden
            >
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0C2686" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FF5ACD" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <path
                d="M8 35 Q20 20 35 25 T55 22 T75 30 T92 42 L88 58 Q70 68 50 65 T25 70 L8 55 Z"
                fill="url(#mapGradient)"
                stroke="rgba(12,38,134,0.3)"
                strokeWidth="0.8"
                strokeDasharray="2 2"
              />
            </svg>

            {/* Map Pins */}
            {mapPins.map((pin) => {
              const isSelected = selectedPin === pin.id
              return (
                <button
                  key={pin.id}
                  type="button"
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  onClick={() => handlePinClick(pin.id)}
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) {
                      setSelectedPin(pin.id)
                    }
                  }}
                  aria-label={`Explore ${pin.name}`}
                >
                  <span className="relative flex items-center justify-center">
                    <span
                      className={cn(
                        'absolute rounded-full transition-all duration-300',
                        isSelected
                          ? 'size-11 animate-ping bg-gradient-to-r from-[#FBDA61]/40 to-[#FF5ACD]/40'
                          : 'size-7 bg-brand/15 group-hover:scale-125',
                      )}
                    />
                    <span
                      className={cn(
                        'relative flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300',
                        isSelected
                          ? 'size-8 scale-125 bg-gradient-to-r from-[#0C2686] to-[#4051C7] ring-4 ring-[#FBDA61]'
                          : 'size-6.5 bg-gradient-to-r from-[#0C2686] to-[#4051C7] group-hover:scale-110',
                      )}
                    >
                      <MapPin className="size-3.5 text-white" />
                    </span>
                  </span>
                  <span
                    className={cn(
                      'absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide shadow-md transition-all duration-200',
                      isSelected
                        ? 'bg-slate-950 text-white opacity-100 ring-1 ring-white/20'
                        : 'bg-white/95 text-ink opacity-0 group-hover:opacity-100',
                    )}
                  >
                    {pin.name}
                  </span>
                </button>
              )
            })}

            {/* Map Compass Accent */}
            <div className="absolute left-4 bottom-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold text-brand backdrop-blur-xs shadow-xs">
              <Compass className="size-3.5 text-brand-accent animate-spin-slow" />
              <span>Карта на Северозапада</span>
            </div>

            {/* Desktop Preview Card Overlay */}
            <AnimatePresence mode="wait">
              {activeLocation && (
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-5 top-5 z-20 hidden w-80 sm:block"
                >
                  <PreviewCard
                    location={activeLocation}
                    onClose={() => setSelectedPin(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Preview Card */}
          <AnimatePresence mode="wait">
            {activeLocation && (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 sm:hidden"
              >
                <PreviewCard
                  location={activeLocation}
                  onClose={() => setSelectedPin(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

