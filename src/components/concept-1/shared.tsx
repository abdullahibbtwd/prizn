import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { OptimizedImage } from '@/components/concept-1/OptimizedImage'
import { Clock, MapPin, Sparkles } from 'lucide-react'

export function FloralWatermark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute size-28 text-brand/20 opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-35',
        className,
      )}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M60 12 C45 35 45 85 60 108 C75 85 75 35 60 12 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
      <path d="M12 60 C35 45 85 45 108 60 C85 75 35 75 12 60 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
      <path d="M26 26 C48 40 80 80 94 94 C80 80 40 48 26 26 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M94 26 C80 40 40 80 26 94 C40 80 80 48 94 26 Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="60" cy="60" r="4" fill="currentColor" />
    </svg>
  )
}

export function FlowerSprayWatermark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute size-24 text-brand-accent/20 opacity-15 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30',
        className,
      )}
      aria-hidden="true"
    >
      <path d="M10 90 Q40 80 60 50 T90 10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 65 Q25 50 15 52 Q28 68 40 65 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 50 Q50 30 38 32 Q52 48 60 50 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
      <path d="M75 30 Q70 12 58 16 Q70 28 75 30 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
      <circle cx="90" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      <circle cx="15" cy="52" r="3.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      <circle cx="38" cy="32" r="4" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  badgeText?: string
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'left',
  badgeText,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0.01, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'relative mb-10 md:mb-14',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {badgeText ? (
        <div
          className={cn(
            'mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0C2686]/10 via-[#4051C7]/10 to-[#74EBD5]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand border border-brand/15 backdrop-blur-xs shadow-xs',
            align === 'center' && 'mx-auto',
          )}
        >
          <Sparkles className="size-3 text-amber-500" />
          <span>{badgeText}</span>
        </div>
      ) : (
        <div
          className={cn(
            'mb-3.5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] to-[#18BEF2]',
            align === 'center' && 'mx-auto',
          )}
        />
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-base text-muted-foreground md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

interface StoryCardProps {
  image: string
  title: string
  category?: string
  author?: string
  readTime?: string
  location?: string
  className?: string
  aspect?: 'landscape' | 'portrait'
  compact?: boolean
  gradientTheme?: 'yp' | 'pa' | 'lc' | 'ms' | 'brand' | 'multi'
  children?: ReactNode
}

export function StoryCard({
  image,
  title,
  category,
  author,
  readTime,
  location,
  className,
  aspect = 'landscape',
  compact = false,
  gradientTheme = 'brand',
  children,
}: StoryCardProps) {
  const gradientClassMap = {
    yp: 'gradient-top-yp',
    pa: 'gradient-top-pa',
    lc: 'gradient-top-lc',
    ms: 'gradient-top-ms',
    brand: 'gradient-top-brand',
    multi: 'gradient-top-multi',
  }

  const bgSubtleMap = {
    yp: 'card-bg-subtle-yp',
    pa: 'card-bg-subtle-pa',
    lc: 'card-bg-subtle-lc',
    ms: 'card-bg-subtle-ms',
    brand: 'card-bg-subtle-brand',
    multi: 'card-bg-subtle-yp',
  }

  const badgeBgMap = {
    yp: 'bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] text-slate-950 font-bold',
    pa: 'bg-gradient-to-r from-[#9FACE6] to-[#74EBD5] text-slate-950 font-bold',
    lc: 'bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1] text-slate-950 font-bold',
    ms: 'bg-gradient-to-r from-[#8AF4C2] to-[#18BEF2] text-slate-950 font-bold',
    brand: 'bg-gradient-to-r from-[#0C2686] to-[#4051C7] text-white font-bold',
    multi: 'bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] to-[#18BEF2] text-slate-950 font-bold',
  }

  if (compact) {
    return (
      <article
        className={cn(
          'group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-border/70 p-3.5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg',
          gradientClassMap[gradientTheme],
          bgSubtleMap[gradientTheme],
          className,
        )}
      >
        <FloralWatermark className="-right-6 -bottom-6 text-brand" />

        <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl bg-muted sm:w-36">
          <OptimizedImage
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col justify-center pr-2">
          {location && (
            <p className="mb-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#4051C7]">
              <MapPin className="size-3 text-brand" />
              {location}
            </p>
          )}
          <h3 className="font-heading text-base font-semibold leading-snug text-ink transition-colors group-hover:text-brand sm:text-lg">
            {title}
          </h3>
          {readTime && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3 text-muted-foreground/70" />
              {readTime} четене
            </p>
          )}
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-2xl border border-border/70 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl',
        gradientClassMap[gradientTheme],
        bgSubtleMap[gradientTheme],
        className,
      )}
    >
      <FloralWatermark className="-right-8 -bottom-8" />
      <FlowerSprayWatermark className="-left-6 top-1/2" />

      <div
        className={cn(
          'relative overflow-hidden bg-muted',
          aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-[3/4]',
        )}
      >
        <OptimizedImage
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

        {category && (
          <span
            className={cn(
              'absolute left-4 top-4 rounded-full px-3.5 py-1 text-[10px] uppercase tracking-widest shadow-md backdrop-blur-xs',
              badgeBgMap[gradientTheme],
            )}
          >
            {category}
          </span>
        )}

        {location && (
          <span className="absolute bottom-3 left-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
            <MapPin className="size-3 text-white/90" />
            {location}
          </span>
        )}
      </div>

      <div className="relative z-10 p-6">
        <h3 className="font-heading text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-brand md:text-3xl">
          {title}
        </h3>

        {(author || readTime) && (
          <div className="mt-4 flex items-center gap-3 border-t border-border/40 pt-3.5 text-xs font-semibold text-muted-foreground">
            {author && (
              <span className="text-ink/80">
                От <span className="text-brand font-bold">{author}</span>
              </span>
            )}
            {author && readTime && <span className="text-border">·</span>}
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="size-3 text-brand-accent" />
                {readTime}
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    </article>
  )
}


