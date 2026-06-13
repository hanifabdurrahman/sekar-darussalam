import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  MessageSquare,
  BookOpen,
  CheckCircle,
  MapPin,
  Home,
} from "lucide-react";
import { PROJECT_INFO } from "../data";
import { WhatsAppIcon } from "./WhatsAppIcon";
import heroHousingImg from "../assets/images/Headline.jpeg";

export default function HeroSection() {
  const waTanyakanUnit = `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin bertanya mengenai ketersediaan unit yang masih tersedia di Sekar Darussalam Islamic Village. Terima kasih.")}`;

  const handleScrollToTipe = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("house-type-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden font-sans border-b border-[#E7E5E4] bg-[#FAF8F3]"
      id="hero-section"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroHousingImg}
          alt="Sekar Darussalam Islamic Village"
          className="w-full h-full object-cover object-center lg:object-[center_25%]"
          referrerPolicy="no-referrer"
        />
        {/* Soft premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3]/80 via-[#FAF8F3]/70 to-[#FAF8F3]/40 md:bg-gradient-to-r md:from-[#FAF8F3] md:from-[45%] md:via-[#FAF8F3]/95 md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10 text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight md:leading-[1.12]"
              id="hero-headline"
            >
              <span className="block mb-2">Bukan Sekadar Rumah,</span>
              <span className="block mb-2 text-[#166534]">
                Tetapi Lingkungan Islami
              </span>
              <span className="block">untuk Keluarga Anda</span>
            </motion.h1>

            {/* Subheadline (Opsi B: Natural, maximum 2 lines on desktop) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#334155] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium"
              id="hero-subheadline"
            >
              Hunian muslim di Klaten Selatan dengan lingkungan yang nyaman,
              legalitas jelas, dan akad syariah tanpa riba.
            </motion.p>

            {/* Simplified 3 Key Points (Concrete features to accelerate grasp) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 select-none"
              id="hero-feature-tags"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#166534]/10 rounded-full flex items-center justify-center text-[#166534] shrink-0">
                  <MapPin size={12} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  Klaten Selatan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#166534]/10 rounded-full flex items-center justify-center text-[#166534] shrink-0">
                  <Home size={12} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  Mushola dalam Kawasan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#166534]/10 rounded-full flex items-center justify-center text-[#166534] shrink-0">
                  <ShieldCheck size={12} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  Legalitas Jelas
                </span>
              </div>
            </motion.div>

            {/* Price tag */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 border border-[#E7E5E4] rounded-xl text-sm sm:text-base text-slate-800 font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#166534] animate-pulse" />
                Harga Mulai{" "}
                <strong className="text-[#166534] font-extrabold text-base sm:text-lg ml-1.5">
                  Rp 298 Jutaan
                </strong>
              </span>
            </div>

            {/* Focused CTAs: Extremely dominant primary button with supporting secondary outline button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
              id="hero-fast-ctas"
            >
              <a
                href={waTanyakanUnit}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#166534] hover:bg-[#0f4c26] text-white text-xs sm:text-sm font-extrabold px-8 py-4.5 rounded-xl text-center shadow-md transition-all hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto shrink-0"
                id="hero-cta-availability"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 block" />
                <span>Tanyakan Unit yang Tersedia</span>
              </a>
              <a
                href="#house-type-showcase"
                onClick={handleScrollToTipe}
                className="border border-[#166534] text-[#166534] hover:bg-[#166534]/5 bg-white/90 text-xs sm:text-sm font-extrabold px-8 py-4.5 rounded-xl text-center shadow-sm transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto shrink-0"
                id="hero-cta-view-types"
              >
                <span>Lihat Tipe Unit</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (Exposes background) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </section>
  );
}
