import { SectionHeading, StoryCard } from '@/components/concept-1/shared'
import { featuredStories } from '@/data/concept-1/content'

export function FeaturedStories() {
  const { primary, secondary } = featuredStories
  const gradientThemes: Array<'yp' | 'pa' | 'ms' | 'lc'> = ['yp', 'pa', 'ms']

  return (
    <section id="editors-picks" className="relative px-4 py-20 md:px-8 md:py-28 bg-canvas overflow-hidden">
      {/* Subtle Background Glow Orbs */}
      <div className="glow-orb-yellow absolute right-0 top-10 size-96 opacity-30 pointer-events-none" />
      <div className="glow-orb-brand absolute -left-20 bottom-10 size-80 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Избор на редактора"
          subtitle="Истории, които според нас всеки трябва да преживее."
          badgeText="Препоръчано"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">
          {/* Main Feature (Large Card) */}
          <div className="lg:col-span-7 flex flex-col">
            <StoryCard
              image={primary.image}
              title={primary.title}
              category={primary.category}
              author={primary.author}
              readTime={primary.readTime}
              location={primary.location}
              aspect="landscape"
              gradientTheme="brand"
              className="h-full flex flex-col justify-between"
            />
          </div>

          {/* Secondary 3 Cards Stacked */}
          <div className="grid gap-6 lg:col-span-5 lg:grid-cols-1">
            {secondary.map((story, index) => (
              <StoryCard
                key={story.title}
                image={story.image}
                title={story.title}
                location={story.location}
                readTime={story.readTime}
                aspect="landscape"
                compact
                gradientTheme={gradientThemes[index % gradientThemes.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


