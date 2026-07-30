import { Heart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AnnouncementBar() {
  return (
    <div className="relative flex h-10 shrink-0 items-center border-b border-border/50 bg-announcement px-3 text-xs text-ink md:px-8">
      {/* Decorative Gradient Top Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FBDA61] via-[#FF5ACD] via-[#9FACE6] via-[#74EBD5] to-[#18BEF2]" />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="hidden text-[11px] font-medium text-muted-foreground sm:inline">
            Четвъртък, 30 юли 2026
          </span>
          <span className="hidden text-border sm:inline">·</span>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink sm:text-xs">
            <Heart className="size-3 shrink-0 fill-red-500 text-red-500 animate-pulse" />
            <span className="hidden sm:inline">
              Запазваме историите на Северозападна България
            </span>
            <span className="font-semibold sm:hidden">Запазваме СЗ България</span>
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
            <button
              type="button"
              className="text-brand font-bold transition-colors duration-300 hover:underline"
            >
              BG
            </button>
            <span className="text-border">|</span>
            <button
              type="button"
              className="transition-colors duration-300 hover:text-ink"
            >
              EN
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden h-6 rounded-full border-brand/20 bg-brand/5 px-2.5 text-[11px] font-medium text-brand transition-colors duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-brand md:inline-flex"
            aria-label="Търсене"
          >
            <Search className="size-3.5" />
            Търсене
          </Button>

          <Button
            size="sm"
            className="h-6 rounded-full bg-gradient-to-r from-[#0C2686] to-[#4051C7] px-3.5 text-[11px] font-bold text-white transition-all duration-300 hover:brightness-110 shadow-xs"
          >
            Дарете
          </Button>
        </div>
      </div>
    </div>
  )
}

