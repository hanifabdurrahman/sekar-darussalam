import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Volume2, Home } from "lucide-react";

// Editable YouTube/Video URL. Easily replaceable with real video URL later.
import interiorVideo from "../assets/Video/Interior_Video.mp4";

export default function InteriorVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="py-20 sm:py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="interior-video"
    >
      {/* Background soft ambient green highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#166534]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Centered Layout */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block shadow-3xs">
            VIDEO INTERIOR
          </span>
          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Lihat Interior Unit Sekar Darussalam
          </h2>
          <p className="text-slate-605 text-xs sm:text-sm leading-relaxed font-semibold text-slate-600">
            Visualisasi ruang dalam unit untuk membantu Anda memahami tata ruang
            dan suasana hunian yang dirancang bagi keluarga muslim.
          </p>
        </div>

        {/* Premium Interactive Video Player */}
        <div className="max-w-md mx-auto">
          <motion.div className="overflow-hidden rounded-3xl border border-[#E7E5E4] shadow-md">
            <video
              className="w-full rounded-3xl"
              controls
              preload="metadata"
              playsInline
            >
              <source src={interiorVideo} type="video/mp4" />
              Browser Anda tidak mendukung video.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
