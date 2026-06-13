import React from "react";
import { Award, ChevronRight, Check } from "lucide-react";

export default function TahfidzSection() {
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
                src="/src/assets/images/tpa_kids_quran_1780334909745.png"
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

            {/* Clear and concise bullet points */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-740">
                <div className="w-5 h-5 rounded-full bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span>Mendukung pembelajaran Al-Qur'an sejak dini</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-740">
                <div className="w-5 h-5 rounded-full bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span>Menjadi bagian dari aktivitas keluarga sehari-hari</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-740">
                <div className="w-5 h-5 rounded-full bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span>Dikembangkan secara bertahap dalam kawasan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
