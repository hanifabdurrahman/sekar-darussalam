import React from "react";
// 1. Tambahkan import BookOpen, Users, dan Map di sini
import { Award, ChevronRight, Check, BookOpen, Users, Map } from "lucide-react";
import { motion } from "motion/react";
import TahfidzImg from "../assets/images/tpa_kids_quran_1780334909745.png";

export default function TahfidzSection() {
  // 2. Tambahkan deklarasi listVariants di sini agar error framer-motion hilang
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="py-20 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="rumah-tahfidz"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with transparent and clear conceptual label */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#E7E5E4]">
              <img
                src={TahfidzImg}
                alt="Ilustrasi Pembelajaran Quran Kebersamaan"
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
            </div>
          </div>

          {/* Right Column: Visi & Keunggulan */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block">
              VISI PENGEMBANGAN KAWASAN
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Visi Rumah Tahfidz untuk Generasi Qur'ani
            </h2>

            <p className="text-slate-650 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
              Rumah Tahfidz merupakan bagian dari visi pengembangan kawasan
              untuk mendukung pembelajaran Al-Qur'an dan pembinaan karakter anak
              di lingkungan Sekar Darussalam.
            </p>

            {/* Modern Card-style List */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {[
                {
                  icon: BookOpen,
                  text: "Mendukung pembelajaran Al-Qur'an sejak usia dini",
                },
                {
                  icon: Users,
                  text: "Menjadi bagian dari rutinitas dan aktivitas keluarga sehari-hari",
                },
                {
                  icon: Map,
                  text: "Dikembangkan secara bertahap di dalam kawasan perumahan",
                },
              ].map((item, index) => (
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={listVariants}
                  key={index}
                  whileHover={{ x: 5, backgroundColor: "#ffffff" }}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#166534]/30 hover:shadow-lg hover:shadow-[#166534]/5 transition-all duration-300 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E7E5E4] group-hover:bg-[#166534]/10 group-hover:border-[#166534]/20 text-slate-400 group-hover:text-[#166534] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <item.icon size={22} className="stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#166534] transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
