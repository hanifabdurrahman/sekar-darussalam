import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

interface TestimonialVideo {
  id: string;
  youtubeId: string;
  thumbnail: string;
}

const TESTIMONIALS_DATA: TestimonialVideo[] = [
  {
    id: "testi-1",
    youtubeId: "ozI7fkI0QsU",
    thumbnail: "https://i.ytimg.com/vi/ozI7fkI0QsU/maxresdefault.jpg",
  },
  {
    id: "testi-2",
    youtubeId: "IQa5uPWK2OU",
    thumbnail: "https://i.ytimg.com/vi/IQa5uPWK2OU/maxresdefault.jpg",
  },
];

export default function TestimonialSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section
      className="py-20 sm:py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-emerald-700/[0.015] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-amber-600/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-0 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4 px-6 sm:px-0">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block shadow-3xs">
            TESTIMONI PENGHUNI
          </span>
          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Mengapa Mereka Memilih Sekar Darussalam
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
            Dengarkan pengalaman dan alasan para penghuni yang memilih
            lingkungan islami dan skema kepemilikan syariah di Sekar Darussalam
            Islamic Village.
          </p>
        </div>

        {/* Testimonial Core Content Display */}
        {/* UBAH: Menggunakan Flex horizontal dengan Scroll Snap di Mobile, kembali ke Grid di Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-12 max-w-3xl mx-auto overflow-x-auto snap-x snap-mandatory px-6 sm:px-0 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS_DATA.map((testi, index) => {
            const isPlaying = playingId === testi.id;
            const videoEmbedUrl = `https://www.youtube.com/embed/${testi.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

            return (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                // UBAH: shrink-0 dan w-[80vw] agar video mengambil 80% lebar layar HP, menyisakan ruang untuk mengintip video selanjutnya
                // snap-center untuk efek magnetis saat user selesai menggeser
                className="relative aspect-[9/16] shrink-0 w-[80vw] max-w-[320px] sm:w-full mx-auto snap-center rounded-[24px] overflow-hidden border border-[#E7E5E4] bg-stone-900 shadow-[0_12px_45px_rgba(22,101,52,0.04)] group"
              >
                <AnimatePresence mode="wait">
                  {!isPlaying ? (
                    <motion.div
                      key={`poster-${testi.id}`}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      onClick={() => setPlayingId(testi.id)}
                    >
                      <img
                        src={testi.thumbnail}
                        alt="Testimonial Sekar Darussalam"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                      <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/35 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-[#0F172A]/10 pointer-events-none" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/20 animate-ping opacity-75" />
                          <span className="absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-emerald-600/30 animate-pulse" />
                          <button
                            aria-label="Putar Testimoni"
                            className="relative z-10 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#166534] hover:bg-[#114F29] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:shadow-[#166534]/40"
                          >
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`video-${testi.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 w-full h-full bg-black"
                    >
                      <iframe
                        src={videoEmbedUrl}
                        title="Testimonial Video"
                        className="w-full h-full object-cover border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
