import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import benefitHousingImg from "../assets/images/benefits.jpeg";
import logoAPSI from "../assets/images/Logo_APSI.png";

export default function BenefitsSection() {
  const points = [
    {
      title: "Lingkungan yang Nyaman",
    },
    {
      title: "Kualitas Bangunan Terpercaya",
    },
    {
      title: "Akad Sesuai Prinsip Syariah",
    },
  ];

  return (
    <section
      className="py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="key-benefits"
    >
      {/* Decorative subtle ambient blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#166534]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual (Adjusted to about 50%-55% on desktop to prevent narrow text) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-md group animate-fade-in"
            >
              <img
                src={benefitHousingImg}
                alt="Suasana Kawasan Sekar Darussalam Islamic Village"
                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Content (45%-50% on desktop, wider text flow) */}
          <div className="lg:col-span-6 space-y-12 text-left">
            <div>
              <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block mb-6 shadow-3xs">
                Nilai yang Kami Utamakan
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-5">
                Dirancang untuk Kehidupan Keluarga Muslim
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                Dibangun untuk mendukung kehidupan keluarga muslim melalui
                lingkungan yang nyaman dan kepemilikan yang lebih menenangkan.
              </p>
            </div>

            {/* 3 Poin Manfaat - Strictly Cardless & Plain List with Enhanced Spacing */}
            <div className="space-y-9">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  {/* Premium Green Checkmark Icon */}
                  <div className="flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-0.5 shadow-3xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A]">
                      {pt.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Custom Trust Badge APSI - Elegant, lightweight and highly credible */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 py-2.5 px-4 rounded-2xl border border-emerald-100 bg-white shadow-[0_2px_12px_rgba(22,101,52,0.02)] max-w-sm"
            >
              <img
                src={logoAPSI}
                alt="Logo Asosiasi Properti Syariah Indonesia"
                className="w-30 h-20 sm:w-16 sm:h-16 rounded-xl object-cover border border-emerald-100/80 shrink-0 shadow-3xs"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-center">
                <h4 className="font-heading text-xs sm:text-[13px] font-extrabold text-[#0F172A] leading-tight tracking-tight">
                  Diverifikasi Dewan Syariah APSI
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold leading-normal mt-0.5">
                  Asosiasi Properti Syariah Indonesia
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
