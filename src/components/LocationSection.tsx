import React from "react";
import { motion } from "motion/react";
// Ganti emoji dengan ikon profesional dari Lucide
import {
  MapPin,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  MoonStar,
  Train,
  Route,
} from "lucide-react";
import location from "../assets/images/lokasi perum.png";

export default function LocationSection() {
  // Menggunakan ikon Lucide alih-alih emoji
  const strategicPoints = [
    {
      icon: GraduationCap,
      name: "Universitas Muhammadiyah Klaten (UMKLA)",
      duration: "±5 menit",
    },
    {
      icon: GraduationCap,
      name: "SDIT & SMPIT Unggulan Klaten Selatan",
      duration: "±5 menit",
    },
    {
      icon: HeartPulse,
      name: "RSUD Bagas Waras Klaten",
      duration: "±3 menit",
    },
    {
      icon: MoonStar,
      name: "Masjid Agung Al-Aqsha Klaten",
      duration: "±9 menit",
    },
    {
      icon: Train,
      name: "Stasiun Klaten (Akses KRL Jogja–Solo)",
      duration: "±6 menit",
    },
    {
      icon: Route,
      name: "Jalan Provinsi Jogja–Solo",
      duration: "±8 menit",
    },
  ];

  // Variabel animasi untuk efek muncul berurutan
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="py-20 sm:py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4]"
      id="strategic-location"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block mb-4">
            Aksesibilitas Utama
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Dekat Berbagai Kebutuhan Keluarga
          </h2>
          <p className="text-slate-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            Berada di Klaten Selatan dengan akses mudah menuju fasilitas
            pendidikan, kesehatan, ibadah, dan transportasi harian.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Map Area */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col h-full">
            <a
              href="https://maps.app.goo.gl/iyubG1WocS7R29J68"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex-grow min-h-[350px] sm:min-h-[420px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#E7E5E4] bg-stone-100 block group cursor-pointer"
            >
              <img
                src={location}
                alt="Peta Lokasi Sekar Darussalam"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Premium Float Label Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-emerald-100/80 shadow-md max-w-xs transition-all pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#166534]">
                    Lokasi Perumahan
                  </p>
                </div>
                <p className="text-xs font-extrabold text-[#0F172A] mt-1.5 leading-tight">
                  Sekar Darussalam Islamic Village
                </p>
                <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                  Klaten Selatan, Klaten
                </p>
              </div>

              {/* Action Hint on Hover */}
              <div className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
                <MapPin className="w-3 h-3 text-emerald-400 animate-bounce" />
                <span>Klik untuk navigasi rute lengkap</span>
              </div>
            </a>
          </div>

          {/* Right Side: Structured Content */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="space-y-4">
              <div className="mb-6">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1">
                  Fasilitas Penting dalam Hitungan Menit
                </h3>
              </div>

              {/* MODERN POI LIST */}
              <div className="space-y-2">
                {strategicPoints.map((point, index) => (
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={itemVariants}
                    key={index}
                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Modern Icon Container */}
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-3xs">
                        <point.icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs sm:text-sm leading-tight">
                        {point.name}
                      </span>
                    </div>

                    {/* Modern Duration Badge */}
                    <div className="bg-emerald-50/70 px-2.5 py-1.5 rounded-lg border border-emerald-100/60 shrink-0">
                      <span className="text-[#166534] font-bold font-mono text-[14px] sm:text-[15px] whitespace-nowrap block">
                        {point.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Single Core Call to Action */}
            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="https://maps.app.goo.gl/iyubG1WocS7R29J68"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#166534] hover:bg-[#114F29] text-white py-3.5 px-6 rounded-xl font-heading text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer text-sans"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka Lokasi di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
