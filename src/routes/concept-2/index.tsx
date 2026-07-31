import { ConceptHeader } from '@/components/concept-2/ConceptHeader'
import { HeroCollage } from '@/components/concept-2/HeroCollage'
import { HumanStoriesSection } from '@/components/concept-2/HumanStoriesSection'
import { OurPlacesSection } from '@/components/concept-2/OurPlacesSection'
import { TraditionsSection } from '@/components/concept-2/TraditionsSection'
import { EventsSection } from '@/components/concept-2/EventsSection'
import { MasonryGallerySection } from '@/components/concept-2/MasonryGallerySection'
import { ConceptFooter } from '@/components/concept-2/ConceptFooter'
import { ConceptSwitcher } from '@/components/concept-2/ConceptSwitcher'

export default function Concept2Page() {
  return (
    <div className="min-h-svh bg-white text-ink selection:bg-[#0C2686]/20 selection:text-[#0C2686]">
      <ConceptHeader />
      <div className="overflow-x-hidden">
        <main>
          <HeroCollage />
          <HumanStoriesSection />
          <OurPlacesSection />
          <TraditionsSection />
          <EventsSection />
          <MasonryGallerySection />
        </main>
        <ConceptFooter />
      </div>
      <ConceptSwitcher />
    </div>
  )
}
