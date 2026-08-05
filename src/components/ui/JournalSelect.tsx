import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface JournalSelectOption {
  value: string
  label: string
}

interface JournalSelectProps {
  name: string
  options: JournalSelectOption[]
  placeholder?: string
  label?: string
  required?: boolean
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function JournalSelect({
  name,
  options,
  placeholder = 'Select…',
  label,
  required = false,
  value: controlledValue,
  defaultValue = '',
  onChange,
  className,
}: JournalSelectProps) {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue
  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const selectValue = (next: string) => {
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        tabIndex={-1}
        aria-hidden
        readOnly
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-3 border-b bg-transparent py-3 text-left font-sans text-sm outline-none transition-colors',
          open ? 'border-[#0C2686]' : 'border-[#1A1A1A]/15 hover:border-[#1A1A1A]/35',
          selected ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/30',
        )}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown
          className={cn(
            'size-4 shrink-0 stroke-[1.5] text-[#1A1A1A]/45 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={listId}
            role="listbox"
            aria-label={label ?? placeholder}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-50 mt-2 origin-top overflow-hidden rounded-[4px] border border-[#EAE6DF] bg-[#FDFBF7] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            {label && (
              <div className="border-b border-[#EAE6DF] px-4 py-3">
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#1A1A1A]/40">
                  {label}
                </p>
              </div>
            )}
            <div className="max-h-64 overflow-y-auto py-1.5">
              {options.map((option, index) => {
                const active = option.value === value
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => selectValue(option.value)}
                    className={cn(
                      'group flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-black/[0.03]',
                      index < options.length - 1 && 'border-b border-[#EAE6DF]/80',
                    )}
                  >
                    <span
                      className={cn(
                        'font-sans text-[11px] uppercase tracking-[0.16em] transition-colors',
                        active ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]',
                      )}
                    >
                      {option.label}
                    </span>
                    <span
                      className={cn(
                        'flex size-7 shrink-0 items-center justify-center rounded-[3px] border transition-all',
                        active
                          ? 'border-[#1A1A1A]/20 bg-white'
                          : 'border-transparent group-hover:border-[#EAE6DF] group-hover:bg-white',
                      )}
                    >
                      {active && <Check className="size-3.5 stroke-[1.5] text-[#1A1A1A]/70" />}
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
