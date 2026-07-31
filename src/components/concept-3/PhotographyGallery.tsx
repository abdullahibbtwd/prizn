import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X, MapPin, Camera } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface PhotoItem {
  id: string
  title: string
  caption: string
  image: string
  span: string
  aspect: string
}

interface PhotographyGalleryProps {
  lang: 'bg' | 'en'
}

export function PhotographyGallery({ lang }: PhotographyGalleryProps) {
  const photos = journalContent.gallery as readonly PhotoItem[]
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  return (
    <section id="gallery" className="bg-[#FDFBF7] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Editorial Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#0C2686] font-medium block mb-2">
            {lang === 'bg' ? 'Фотографски Журнал' : 'Visual Essay'}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] font-light">
            {lang === 'bg' ? 'Северозападът в Кадри' : 'Visual Photography'}
          </h2>
        </div>

        {/* Pure Imagery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative cursor-pointer overflow-hidden rounded-[16px] border border-[#EAE6DF] bg-[#1A1A1A] ${item.aspect} ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
              />

              {/* Minimal Dark Hover Mask with Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-6 text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="size-5 stroke-[1.5]" />
                  </div>
                  <p className="font-heading text-xl text-white font-light">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Photography Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white/80 max-w-6xl mx-auto w-full">
              <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest">
                <Camera className="size-4 text-[#4051C7]" />
                <span>Prizni Editorial Archive</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <X className="size-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Center Image */}
            <div className="max-w-5xl mx-auto my-auto max-h-[70vh] relative flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[68vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            {/* Bottom Caption */}
            <div className="max-w-2xl mx-auto text-center text-white pb-4">
              <h3 className="font-heading text-2xl md:text-3xl font-light mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-white/70 font-light mb-2">
                {selectedPhoto.caption}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-sans text-white/50 uppercase tracking-widest">
                <MapPin className="size-3 text-[#4051C7]" />
                <span>Northwestern Bulgaria</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
