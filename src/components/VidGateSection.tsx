import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Volume2, Shield } from "lucide-react";

// Easily editable video URL or ID. Can be a YouTube embed code or direct video file path.
import kawasanVideo from "../assets/Video/Video_Gate.mp4";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="py-20 sm:py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="area-visualization"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#166534]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Centered Text layout as requested */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14 space-y-4">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block shadow-3xs">
            VIDEO TOUR KAWASAN
          </span>
          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Kenali Kawasan Sekar Darussalam Lebih Dekat
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
            Lihat suasana gerbang utama, Qur'an Center, dan lingkungan yang
            dirancang untuk mendukung kehidupan keluarga muslim.
          </p>
        </div>

        {/* Video Player Box - 16:9 widescreen layout with gorgeous rounded corners and premium shadow */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7E5E4] group"
          >
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                // Video Cover Poster with Play Interactive Overlays
                <motion.div
                  key="poster"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full cursor-pointer relative"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="/src/assets/images/Headline.jpeg"
                    alt="Visualisasi Kawasan Sekar Darussalam Drone View"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-stone-900/25 group-hover:bg-stone-900/35 transition-colors duration-300" />

                  {/* Gradient shadow from bottom for text/play readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/20 pointer-events-none" />

                  {/* Play Button - Nested in absolute center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Ring animations */}
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/20 animate-ping opacity-75" />
                      <span className="absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-emerald-600/30 animate-pulse" />

                      {/* Real Play Button */}
                      <button
                        aria-label="Putar Video Visualisasi"
                        className="relative z-10 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#166534] hover:bg-[#155e2e] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:shadow-[#166534]/40"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-left max-w-xs sm:max-w-md hidden xs:block">
                    <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#D4A017] mb-0.5 sm:mb-1">
                      PREVIEW KAWASAN
                    </p>
                    <h3 className="font-heading text-sm sm:text-base font-extrabold tracking-tight">
                      Kondisi Pengembangan &amp; Fasad Masa Depan
                    </h3>
                  </div>

                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white flex items-center gap-1.5 opacity-80 text-xs font-semibold bg-black/45 backdrop-blur-xs py-1 px-2.5 rounded-md">
                    <Volume2 size={14} />
                    <span className="text-[10px] sm:text-xs">Audio On</span>
                  </div>
                </motion.div>
              ) : (
                // Active video / iframe renderer for genuine user playback
                <motion.div
                  key="video-frame"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 w-full h-full bg-black"
                >
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  >
                    <source src={kawasanVideo} type="video/mp4" />
                    Browser Anda tidak mendukung video.
                  </video>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
