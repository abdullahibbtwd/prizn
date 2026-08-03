import { useState } from 'react'
import { MinimalNav } from '@/components/concept-3/MinimalNav'
import { EditorialHero } from '@/components/concept-3/EditorialHero'
import { EditorsLetter } from '@/components/concept-3/EditorsLetter'
import { FeaturedStoryCard } from '@/components/concept-3/FeaturedStoryCard'
import { CuratedCollections } from '@/components/concept-3/CuratedCollections'
import { OurPlacesSection } from '@/components/concept-3/OurPlacesSection'
import { HumanStoriesSection } from '@/components/concept-3/HumanStoriesSection'
import { AuthorsSection } from '@/components/concept-3/AuthorsSection'
import { TraditionsSection } from '@/components/concept-3/TraditionsSection'
import { VoicesAudioSection } from '@/components/concept-3/VoicesAudioSection'
import { WriteForUsSection } from '@/components/concept-3/WriteForUsSection'
import { SupportSection } from '@/components/concept-3/SupportSection'
import { NewsletterSection } from '@/components/concept-3/NewsletterSection'
import { JournalFooter } from '@/components/concept-3/JournalFooter'
import { StoryReaderModal } from '@/components/concept-3/StoryReaderModal'
import { ConceptPitchModal } from '@/components/concept-3/ConceptPitchModal'
import { ConceptSwitcher } from '@/components/concept-2/ConceptSwitcher'

export default function Concept3Page() {
  const [lang, setLang] = useState<'bg' | 'en'>('bg')
  const [storyReaderOpen, setStoryReaderOpen] = useState(false)
  const [activeStoryTitle, setActiveStoryTitle] = useState<string | undefined>()
  const [pitchModalOpen, setPitchModalOpen] = useState(false)

  const handleOpenStory = (title?: string) => {
    setActiveStoryTitle(title)
    setStoryReaderOpen(true)
  }

  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#0C2686]/15 selection:text-[#0C2686]">
      <MinimalNav lang={lang} setLang={setLang} />

      <main className="w-full overflow-x-hidden">
        <EditorialHero lang={lang} />
        <EditorsLetter lang={lang} />
        <FeaturedStoryCard lang={lang} onOpenStory={() => handleOpenStory()} />
        <CuratedCollections
          lang={lang}
          onSelectCollection={(title) => handleOpenStory(`Discover: ${title}`)}
        />
        <OurPlacesSection
          lang={lang}
          onDiscoverPlace={(place) => handleOpenStory(`Exploring ${place}`)}
        />
        <HumanStoriesSection
          lang={lang}
          onOpenStory={(title) => handleOpenStory(title)}
        />
        <AuthorsSection lang={lang} />
        <TraditionsSection
          lang={lang}
          onSelectTradition={(tradition) => handleOpenStory(`Tradition: ${tradition}`)}
        />
        <VoicesAudioSection lang={lang} />
        <WriteForUsSection lang={lang} />
        <SupportSection lang={lang} />
        <NewsletterSection lang={lang} />
      </main>

      <JournalFooter lang={lang} onOpenPitch={() => setPitchModalOpen(true)} />

      <StoryReaderModal
        isOpen={storyReaderOpen}
        onClose={() => setStoryReaderOpen(false)}
        storyTitle={activeStoryTitle}
        lang={lang}
      />

      <ConceptPitchModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />

      <ConceptSwitcher />
    </div>
  )
}
