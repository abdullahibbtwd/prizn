import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, Headphones, Radio, Sparkles } from 'lucide-react'
import { journalContent } from '@/data/concept-3/content'

interface VoicesAudioSectionProps {
  lang: 'bg' | 'en'
}

export function VoicesAudioSection({ lang }: VoicesAudioSectionProps) {
  const voices = journalContent.voices
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const activeVoice = voices.find((v) => v.id === activeVoiceId) || voices[0]

  const togglePlay = (id: string) => {
    if (activeVoiceId === id && isPlaying) {
      setIsPlaying(false)
      if (audioRef.current) audioRef.current.pause()
    } else {
      setActiveVoiceId(id)
      setIsPlaying(true)
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Graceful fallback for synthetic playback indicator if audio URL is blocked by browser policy
          setIsPlaying(true)
        })
      }
    }
  }

  return (
    <section id="voices" className="bg-[#1A1A1A] text-white py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0C2686]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-sans text-[#4051C7] mb-2 font-medium">
              <Headphones className="size-4" />
              <span>{lang === 'bg' ? 'Аудио Журнал' : 'Audio Stories'}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light">
              {lang === 'bg' ? 'Гласовете на Северозапада' : 'Voices of the Northwest'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-white/50 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-md">
            <Radio className="size-3.5 text-emerald-400 animate-pulse" />
            <span>{lang === 'bg' ? 'Оригинални записи 2026' : 'Original Field Recordings'}</span>
          </div>
        </div>

        {/* Audio Cards - Spotify Style Luxury UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voices.map((item, index) => {
            const isThisPlaying = activeVoiceId === item.id && isPlaying

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`group rounded-[16px] border ${
                  isThisPlaying ? 'border-[#0C2686] bg-black/80 ring-2 ring-[#0C2686]/40' : 'border-white/10 bg-white/5'
                } p-6 backdrop-blur-md transition-all duration-500 hover:border-white/30 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Headphones className="size-5 stroke-[1.5]" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  {/* Speaker & Title */}
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#4051C7] block mb-1">
                    {lang === 'bg' ? item.speakerBg : item.speaker}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-white font-normal mb-4">
                    {lang === 'bg' ? item.titleBg : item.title}
                  </h3>

                  {/* Quote Snippet */}
                  <p className="font-sans text-xs md:text-sm text-white/70 italic leading-relaxed mb-6 font-light">
                    "{item.quote}"
                  </p>
                </div>

                {/* Animated Waveform & Play Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 h-6">
                    {[40, 75, 30, 90, 50, 80, 45, 60, 35].map((height, i) => (
                      <motion.div
                        key={i}
                        animate={
                          isThisPlaying
                            ? { height: ['20%', '100%', '30%', '90%'] }
                            : { height: `${height}%` }
                        }
                        transition={
                          isThisPlaying
                            ? {
                                duration: 0.6,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                delay: i * 0.08,
                              }
                            : {}
                        }
                        className={`w-1 rounded-full ${isThisPlaying ? 'bg-[#0C2686]' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => togglePlay(item.id)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300 ${
                      isThisPlaying
                        ? 'bg-[#0C2686] text-white shadow-lg shadow-[#0C2686]/50'
                        : 'bg-white text-[#1A1A1A] hover:bg-[#0C2686] hover:text-white'
                    }`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="size-3.5 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="size-3.5 fill-current" />
                        <span>Play Story</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Hidden Audio Element for real browser audio fallback */}
      <audio
        ref={audioRef}
        src={activeVoice.audioUrl}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Persistent Audio Player Bar when Active */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:max-w-xl z-50 bg-[#1A1A1A]/95 border border-white/20 rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4 text-white"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="size-9 rounded-full bg-[#0C2686] flex items-center justify-center shrink-0">
                <Sparkles className="size-4 text-white animate-spin" />
              </div>
              <div className="truncate">
                <p className="font-heading text-sm text-white truncate">
                  {lang === 'bg' ? activeVoice.titleBg : activeVoice.title}
                </p>
                <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest truncate">
                  {lang === 'bg' ? activeVoice.speakerBg : activeVoice.speaker}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Volume2 className="size-4 text-white/70 hidden sm:block" />
              <button
                onClick={() => setIsPlaying(false)}
                className="size-8 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Pause className="size-4 fill-current" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
