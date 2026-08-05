import { useEffect, useState } from 'react'
import type { JournalLang } from '@/components/concept-3/JournalShell'

const STORAGE_KEY = 'prizni-lang'

export function useJournalLang() {
  const [lang, setLangState] = useState<JournalLang>(() => {
    if (typeof window === 'undefined') return 'bg'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'bg' ? stored : 'bg'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = (next: JournalLang) => setLangState(next)

  return { lang, setLang }
}
