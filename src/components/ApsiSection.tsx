import React from "react";
import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";

export default function ApsiSection() {
  const credibilityPoints = [
    {
      title: "Akad Sesuai Prinsip Syariah",
    },
    {
      title: "Diverifikasi Dewan Syariah APSI",
    },
  ];

  return (
    <section
      className="py-20 bg-white font-sans text-[#0F172A] border-b border-[#E7E5E4]"
      id="apsi-credibility"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image Area (Desktop) or Image Top (Mobile) */}
          <div className="lg:col-span-6 w-full space-y-3 sm:space-y-4">
            {/* Foto Utama (Paling Besar) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-stone-200 aspect-[16/10] sm:aspect-[16/10] w-full shadow-sm bg-stone-50"
            >
              <img
                src="/src/assets/images/APSI/APSI1.jpeg"
                alt="Forum Edukasi Properti Syariah Asosiasi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Overlay subtle shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Foto Kedua dan Ketiga (Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Foto Kedua (Aktivitas resmi / Penandatanganan) */}
              <div className="relative overflow-hidden rounded-xl border border-stone-200 aspect-[16/11] bg-stone-50 shadow-2xs">
                <img
                  src="/src/assets/images/APSI/APSI2.jpeg"
                  alt="Aktivitas Penandatanganan Resmi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Foto Ketiga (Komunitas / Forum Anggota) */}
              <div className="relative overflow-hidden rounded-xl border border-stone-200 aspect-[16/11] bg-stone-50 shadow-2xs">
                <img
                  src="/src/assets/images/APSI/APSI3.jpeg"
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

            {/* List block */}
            <div className="space-y-4.5 pt-2">
              {credibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex gap-3.5 p-3.5 rounded-xl border border-stone-100 bg-[#FAFBF9]/60 hover:bg-[#FAFBF9] transition-colors"
                >
                  <div className="flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-0.5 shadow-3xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A]">
                      {point.title}
                    </h3>
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
