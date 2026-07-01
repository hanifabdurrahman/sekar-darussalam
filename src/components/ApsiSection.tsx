import React from "react";
import { motion } from "motion/react";
// Import tambahan ikon ScrollText dan ShieldCheck
import { ScrollText, ShieldCheck } from "lucide-react";
import ApsiImg1 from "../assets/images/APSI/APSI1.webp";
import ApsiImg2 from "../assets/images/APSI/APSI2.webp";
import ApsiImg3 from "../assets/images/APSI/APSI3.webp";

export default function ApsiSection() {
  const credibilityPoints = [
    {
      title: "Akad Sesuai Prinsip Syariah",
      desc: "Proses kepemilikan menggunakan akad syariah dengan skema yang transparan dan sesuai prinsip syariah.",
      icon: ScrollText,
    },
    {
      title: "Diverifikasi Dewan Syariah APSI",
      desc: "Telah diverifikasi oleh Dewan Syariah APSI untuk mendukung penerapan prinsip syariah.",
      icon: ShieldCheck,
    },
  ];

  // Variabel animasi untuk efek muncul bergantian
  const listVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="py-20 bg-white font-sans text-[#0F172A] border-b border-[#E7E5E4]"
      id="apsi-credibility"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image Area (Tetap sama seperti aslinya) */}
          <div className="lg:col-span-6 w-full space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-stone-200 aspect-[16/10] sm:aspect-[16/10] w-full shadow-sm bg-stone-50"
            >
              <img
                src={ApsiImg1}
                alt="Forum Edukasi Properti Syariah Asosiasi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="relative overflow-hidden rounded-xl border border-stone-200 aspect-[16/11] bg-stone-50 shadow-2xs">
                <img
                  src={ApsiImg2}
                  alt="Aktivitas Penandatanganan Resmi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl border border-stone-200 aspect-[16/11] bg-stone-50 shadow-2xs">
                <img
                  src={ApsiImg3}
                  alt="Forum Ekosistem Properti Syariah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Informative Content & Credibility Badges */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-[#166534] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block">
                KOMITMEN PROPERTI SYARIAH
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Komitmen Menjalankan Prinsip Properti Syariah
              </h2>
              <div className="h-0.5 w-12 bg-[#166534] rounded-full" />
              <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                Pengembangan kawasan dilakukan dengan komitmen terhadap prinsip
                properti syariah serta keterlibatan dalam ekosistem APSI
                (Asosiasi Properti Syariah Indonesia).
              </p>
            </motion.div>

            {/* List block - MODERN CARD */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {credibilityPoints.map((point, index) => (
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={listVariants}
                  key={index}
                  whileHover={{ x: 5, backgroundColor: "#ffffff" }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-[#E7E5E4] bg-[#FAFBF9]/40 hover:border-[#166534]/30 hover:shadow-lg hover:shadow-[#166534]/5 transition-all duration-300 cursor-default group"
                >
                  {/* Ikon Container */}
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E7E5E4] group-hover:bg-[#166534]/10 group-hover:border-[#166534]/20 text-slate-400 group-hover:text-[#166534] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                    <point.icon size={22} className="stroke-[2.5]" />
                  </div>

                  {/* Teks Container */}
                  <div className="space-y-1.5 mt-0.5">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#166534] transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
