import React from "react";
import { motion } from "motion/react";
import ShmImage from "../assets/images/konversi-shgb-ke-shm.webp";
import PbgImage from "../assets/images/gambar_pbg.webp";
import JlnImage from "../assets/images/jalan_perum.webp";

export default function ProgressSection() {
  const points = [
    {
      title: "SHM Pecah Kavling",
      description:
        "Lahan berstatus tanah murni lunas sempurna tanpa sengketa. Sertifikat SHM siap pecah di bawah pengawasan Notaris PPAT resmi.",
      image: ShmImage,
      badge: "Legalitas Lahan",
    },
    {
      title: "Dokumen PBG/IMB Tersedia",
      description:
        "Persetujuan Bangunan Gedung (PBG/IMB) induk resmi terbit, menjamin aspek legalitas penuh dalam mendirikan hunian.",
      image: PbgImage,
      badge: "Izin Resmi",
    },
    {
      title: "Jalan Lingkungan Lebar ±6 Meter",
      description:
        "Akses jalan paving block berkualitas tinggi lebar ±6 meter dirancang kokoh dan aman untuk mobilitas nyaman sehari-hari.",
      image: JlnImage,
      badge: "Infrastruktur",
    },
  ];

  return (
    <section
      className="py-20 sm:py-24 bg-[#FAF9F6] font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="construction-progress"
    >
      {/* Background subtle decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#166534]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#166534] text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-4 py-1.5 rounded-full border border-[#166534]/20 inline-block">
            Transparansi &amp; Komitmen Lahan
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Legalitas &amp; Pengembangan Kawasan
          </h2>
          <div className="h-1 w-16 bg-[#166534] rounded-full mx-auto" />
          <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl mx-auto">
            Kami berkomitmen membangun kawasan secara bertahap dengan jaminan
            aspek legalitas yang jelas, berizin resmi, serta infrastruktur
            berstandar prima.
          </p>
        </div>

        {/* Grid of beautifully designed vertical cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-[#166534]/30 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(22,101,52,0.05)] transition-all duration-300 group"
            >
              {/* Image header with high-quality aspect-ratio */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-stone-50 border-b border-stone-100">
                <img
                  src={point.image}
                  alt={point.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content information below the image */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="mb-2.5">
                  <span className="inline-block bg-[#166534]/10 text-[#166534] text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-[#166534]/20">
                    {point.badge}
                  </span>
                </div>
                <h4 className="font-heading text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#166534] transition-colors duration-200 leading-snug">
                  {point.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-normal sm:leading-relaxed mt-2">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
