import { useState } from 'react'
import { MinimalNav } from '@/components/concept-3/MinimalNav'
import { EditorialHero } from '@/components/concept-3/EditorialHero'
import { EditorsLetter } from '@/components/concept-3/EditorsLetter'
import { FeaturedStoryCard } from '@/components/concept-3/FeaturedStoryCard'
import { CuratedCollections } from '@/components/concept-3/CuratedCollections'
import { PhotographyGallery } from '@/components/concept-3/PhotographyGallery'
import { OurPlacesSection } from '@/components/concept-3/OurPlacesSection'
import { TraditionsSection } from '@/components/concept-3/TraditionsSection'
import { VoicesAudioSection } from '@/components/concept-3/VoicesAudioSection'
import { QuoteSection } from '@/components/concept-3/QuoteSection'
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
      {/* 1. Minimal Navigation */}
      <MinimalNav lang={lang} setLang={setLang} />

      <main className="w-full overflow-x-hidden">
        {/* 2. Full Screen Editorial Hero */}
        <EditorialHero lang={lang} />

        {/* 3. Editor's Letter */}
        <EditorsLetter lang={lang} />

        {/* 4. Featured Story */}
        <FeaturedStoryCard lang={lang} onOpenStory={() => handleOpenStory()} />

        {/* 5. Today's Collection */}
        <CuratedCollections
          lang={lang}
          onSelectCollection={(title) => handleOpenStory(`Collection: ${title}`)}
        />

        {/* 6. Photography Gallery */}
        <PhotographyGallery lang={lang} />

        {/* 7. Our Places */}
        <OurPlacesSection
          lang={lang}
          onDiscoverPlace={(place) => handleOpenStory(`Exploring ${place}`)}
        />

        {/* 8. Traditions */}
        <TraditionsSection
          lang={lang}
          onSelectTradition={(tradition) => handleOpenStory(`Tradition: ${tradition}`)}
        />

        {/* 9. Voices of the Northwest */}
        <VoicesAudioSection lang={lang} />

        {/* 10. Interstitial Quote Section */}
        <QuoteSection lang={lang} />

        {/* 11. Newsletter */}
        <NewsletterSection lang={lang} />
      </main>

      {/* 12. Footer */}
      <JournalFooter lang={lang} onOpenPitch={() => setPitchModalOpen(true)} />

      {/* Interactive Story Reader Modal */}
      <StoryReaderModal
        isOpen={storyReaderOpen}
        onClose={() => setStoryReaderOpen(false)}
        storyTitle={activeStoryTitle}
        lang={lang}
      />

      {/* Client Pitch Presentation Modal */}
      <ConceptPitchModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />

      {/* Floating Concept Switcher (Access Concept 1, Concept 2, Concept 3) */}
      <ConceptSwitcher />
    </div>
  )
}
