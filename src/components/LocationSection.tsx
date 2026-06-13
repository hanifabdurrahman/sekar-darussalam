import React from "react";
import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const strategicPoints = [
    {
      emoji: "📚",
      name: "Universitas Muhammadiyah Klaten (UMKLA)",
      duration: "±5 menit",
    },
    {
      emoji: "📚",
      name: "SDIT & SMPIT Unggulan Klaten Selatan",
      duration: "±5 menit",
    },
    { emoji: "❤️", name: "RSUD Bagas Waras Klaten", duration: "±3 menit" },
    { emoji: "🕌", name: "Masjid Agung Al-Aqsha Klaten", duration: "±9 menit" },
    {
      emoji: "🚆",
      name: "Stasiun Klaten (Akses KRL Jogja–Solo)",
      duration: "±6 menit",
    },
    { emoji: "🛣️", name: "Jalan Provinsi Jogja–Solo", duration: "±8 menit" },
  ];

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

        {/* New 60/40 Redesigned Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: 60% Map Area */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col h-full">
            <a
              href="https://maps.app.goo.gl/iyubG1WocS7R29J68"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex-grow min-h-[350px] sm:min-h-[420px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#E7E5E4] bg-stone-100 block group cursor-pointer"
            >
              <img
                src="src\assets\images\lokasi perum.png"
                alt="Peta Lokasi Sekar Darussalam"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Premium Float Label Overlay (Absolute Marker) */}
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

          {/* Right Side: 40% Simple Structured Content */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-white border border-[#E7E5E4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1">
                  Fasilitas Penting dalam Hitungan Menit
                </h3>
              </div>

              {/* Minimal Single-level bullet points */}
              <div className="space-y-4 border-t border-stone-100 pt-5">
                {strategicPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-base select-none shrink-0"
                        role="img"
                        aria-label="p"
                      >
                        {point.emoji}
                      </span>
                      <span className="text-slate-700 font-bold leading-tight">
                        {point.name}
                      </span>
                    </div>
                    <span className="text-emerald-700 font-black font-mono shrink-0 text-[11px] sm:text-xs">
                      {point.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Single Core Call to Action */}
            <div className="mt-8 pt-5 border-t border-stone-100">
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
