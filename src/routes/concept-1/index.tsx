import { AnnouncementBar } from '@/components/concept-1/AnnouncementBar'
import { NavigationHeader } from '@/components/concept-1/NavigationHeader'
import { HeroSection } from '@/components/concept-1/HeroSection'
import { FeaturedStories } from '@/components/concept-1/FeaturedStories'
import { ExploreMap } from '@/components/concept-1/ExploreMap'
import { TodaysStory } from '@/components/concept-1/TodaysStory'
import { HumanStoriesCarousel } from '@/components/concept-1/HumanStoriesCarousel'
import { OurPlaces } from '@/components/concept-1/OurPlaces'
import { Traditions } from '@/components/concept-1/Traditions'
import { SupportPrizni } from '@/components/concept-1/SupportPrizni'
import { Newsletter } from '@/components/concept-1/Newsletter'
import { Footer } from '@/components/concept-1/Footer'
import { ConceptSwitcher } from '@/components/concept-2/ConceptSwitcher'

export default function Concept1Page() {
  return (
    <div className="min-h-svh bg-canvas">
      <AnnouncementBar />
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturedStories />
        <ExploreMap />
        <TodaysStory />
        <HumanStoriesCarousel />
        <OurPlaces />
        <Traditions />
        <SupportPrizni />
        <Newsletter />
      </main>
      <Footer />
      <ConceptSwitcher />
    </div>
  )
}

