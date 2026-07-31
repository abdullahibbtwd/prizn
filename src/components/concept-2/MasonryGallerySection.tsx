import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, MapPin, Eye } from 'lucide-react'
import { galleryPhotos } from '@/data/concept-2/content'
import { cn } from '@/lib/utils'

export function MasonryGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('Всички')
  const [selectedImage, setSelectedImage] = useState<typeof galleryPhotos[number] | null>(null)

  const categories = ['Всички', 'Природа', 'Занаяти', 'Хора', 'Архитектура']

  const filteredPhotos = activeCategory === 'Всички'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory)

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Top Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0C2686] via-[#18BEF2] to-[#FBDA61]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Camera className="size-4 text-[#0C2686]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0C2686]">
                Визуален Архив
              </span>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl md:text-5xl">
              Живата галерия на Северозапада
            </h2>
            <p className="mt-2 max-w-xl text-base text-ink/75">
              Фотографски разказ за реката, планините, усмивките и архитектурата.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-[#0C2686] text-white shadow-md'
                    : 'bg-[#EEF3FF] text-[#0C2686] hover:bg-[#0C2686]/10'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-like Masonry Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(photo)}
                className={cn(
                  'group relative w-full cursor-pointer overflow-hidden rounded-[20px] bg-slate-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-black/5',
                  photo.aspect
                )}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category Pill */}
                <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold text-[#0C2686] shadow-sm backdrop-blur-md">
                  {photo.category}
                </span>

                <div className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Eye className="size-4 text-[#0C2686]" />
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#74EBD5]">
                    <MapPin className="size-3" />
                    {photo.location}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl overflow-hidden rounded-[24px] bg-white p-3 shadow-2xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-full rounded-[18px] object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0C2686]">{selectedImage.category} · {selectedImage.location}</span>
                  <h3 className="font-heading text-2xl font-bold text-ink">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-ink hover:bg-slate-200"
                >
                  Затвори
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
