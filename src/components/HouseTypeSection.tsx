import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PROJECT_INFO } from "../data";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Ruler, Maximize2, BedDouble, Bath, CheckCircle2 } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// image
import facade01 from "../assets/images/facade01.png";

interface UnitTypeData {
  id: "tipe36" | "tipe45";
  title: string;
  tag: string;
  bgBadge: string;
  tagline: string;
  pricePromo: string;
  priceNormal: string;
  landArea: number;
  buildingArea: number;
  bedrooms: number;
  bathrooms: number;
  carports: string;
  description: string;
  facadeImg: string;
  dimensions: string;
}

const UNIT_PLANS: UnitTypeData[] = [
  {
    id: "tipe36",
    title: "Griya Darussalam - Tipe 36/72",
    tag: "Tipe 36/72",
    bgBadge: "bg-[#166534]/15 text-[#166534] border-[#166534]/30",
    tagline: "Kavling Ideal 6m x 12m",
    pricePromo: "Rp 298 Jutaan",
    priceNormal: "Rp 320 Juta",
    landArea: 62,
    buildingArea: 36,
    bedrooms: 2,
    bathrooms: 1,
    carports: "1 Mobil",
    description:
      "Ideal untuk pasangan muda atau keluarga kecil yang menginginkan rumah pertama dengan ruang yang fungsional.",
    facadeImg: facade01,
    dimensions: "Lebar 6.0m x Panjang 12.0m",
  },
];

interface UnitCardProps {
  key?: string;
  unit: UnitTypeData;
  handleContactWA: (unitTitle: string) => void;
}

function UnitCard({ unit, handleContactWA }: UnitCardProps) {
  return (
    <div className="bg-white border border-[#E7E5E4] rounded-3xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group overflow-hidden w-full h-full text-left">
      {/* Badge layout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 gap-x-4 mb-6">
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`text-[10px] font-bold tracking-widest uppercase border px-3 py-1.5 rounded-full ${unit.bgBadge}`}
          >
            {unit.tag}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono font-bold shrink-0">
          {unit.dimensions}
        </span>
      </div>

      {/* Cover Frame */}
      <div className="relative mb-5 bg-[#FAF8F3] border border-[#E7E5E4] rounded-2xl overflow-hidden aspect-[1.3] sm:aspect-[1.5] w-full">
        <img
          src={unit.facadeImg}
          alt={unit.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
            Desain Fasad
          </p>
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="border-t border-[#E7E5E4] pt-5 mb-6 text-left">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#166534]/5 flex items-center justify-center shrink-0">
              <Maximize2 size={12} className="text-[#166534]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                Luas Bangunan
              </p>
              <p className="text-xs font-extrabold text-[#0F172A] mt-1">
                {unit.buildingArea} m²
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#166534]/5 flex items-center justify-center shrink-0">
              <Ruler size={12} className="text-[#166534]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                Luas Tanah
              </p>
              <p className="text-xs font-extrabold text-[#0F172A] mt-1">
                {unit.landArea} m²
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#166534]/5 flex items-center justify-center shrink-0">
              <BedDouble size={12} className="text-[#166534]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                Kamar Tidur
              </p>
              <p className="text-xs font-extrabold text-[#0F172A] mt-1">
                {unit.bedrooms} Ruang
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#166534]/5 flex items-center justify-center shrink-0">
              <Bath size={12} className="text-[#166534]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                Kamar Mandi
              </p>
              <p className="text-xs font-extrabold text-[#0F172A] mt-1">
                {unit.bathrooms} Ruang
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="border-t border-[#E7E5E4] pt-4 mt-auto text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
              Harga Mulai
            </p>
            <p className="text-lg sm:text-xl font-extrabold text-[#166534] mt-0.5">
              {unit.pricePromo}
            </p>
          </div>

          <button
            onClick={() => handleContactWA(unit.title)}
            className="bg-[#166534] text-white hover:bg-[#114F29] px-5 py-3 rounded-xl font-heading text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer text-sans"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Tanyakan Unit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HouseTypeSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContactWA = (unitTitle: string) => {
    const templateMessage = `Bismillah, saya tertarik untuk bertanya mengenai ketersediaan unit *${unitTitle}*. Mohon dikirimkan rincian brosur dan skema pembayarannya. Terima kasih.`;
    window.open(
      `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent(templateMessage)}`,
      "_blank",
    );
  };

  return (
    <section
      className="py-20 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4]"
      id="house-type-showcase"
    >
      {/* Dynamic Swiper theme styling to ensure gorgeous custom green pagination bullets */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .house-type-swiper-container .swiper-pagination-bullet {
          background-color: #A3A3A3;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .house-type-swiper-container .swiper-pagination-bullet-active {
          background-color: #166534 !important;
          opacity: 1 !important;
          width: 24px;
          border-radius: 4px;
        }
        .house-type-swiper-container .swiper {
          padding-bottom: 40px !important;
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title Area (Pangkas Copywriting 50%) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-flex items-center gap-1.5 shadow-sm">
            TIPE PILIHAN UNIT
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight leading-tight">
            Pilih Tipe yang Sesuai Kebutuhan Keluarga
          </h2>
          <p className="text-slate-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
            Dirancang dengan tata sirkulasi udara yang baik, lapang, dan
            mengutamakan privasi bagi keluarga Anda.
          </p>
        </div>

        {/* Units Cards Slider/Grid Container */}
        <div className="house-type-swiper-container max-w-5xl mx-auto">
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.05}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {UNIT_PLANS.map((unit) => (
                <SwiperSlide key={unit.id} className="h-auto pb-4 flex">
                  <div className="w-full h-full flex flex-col">
                    <UnitCard unit={unit} handleContactWA={handleContactWA} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* PERUBAHAN DI SINI: Menggunakan flex & justify-center agar card berada di tengah jika jumlahnya ganjil/hanya 1 */
            <div className="flex flex-wrap justify-center gap-8 items-stretch">
              {UNIT_PLANS.map((unit) => (
                <div
                  key={unit.id}
                  className="w-full md:w-[calc(50%-1rem)] max-w-md flex"
                >
                  <UnitCard unit={unit} handleContactWA={handleContactWA} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Flexibility Notice list */}
        <div className="mt-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-6 border-t border-b border-[#E7E5E4] text-xs text-slate-600 font-bold">
          <div className="flex items-center gap-3 justify-start md:justify-center">
            <CheckCircle2 size={16} className="text-[#166534] shrink-0" />
            <span className="font-semibold">
              Ketersediaan unit mengikuti kavling yang tersedia.
            </span>
          </div>
          <div className="flex items-center gap-3 justify-start md:justify-center">
            <CheckCircle2 size={16} className="text-[#166534] shrink-0" />
            <span className="font-semibold">
              Penyesuaian tata ruang dapat dikonsultasikan.
            </span>
          </div>
          <div className="flex items-center gap-3 justify-start md:justify-center">
            <CheckCircle2 size={16} className="text-[#166534] shrink-0" />
            <span className="font-semibold">
              Harga dapat berubah sesuai posisi dan luas kavling.
            </span>
          </div>
        </div>

        {/* Custom CTA Card Area */}
        <div className="mt-16 bg-[#166534]/5 border border-[#166534]/15 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto text-center shadow-xs">
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
            Belum Menemukan Tipe yang Sesuai?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold mb-8 max-w-xl mx-auto leading-relaxed">
            Masih tersedia opsi unit dan penyesuaian kavling yang dapat
            didiskusikan sesuai kebutuhan keluarga Anda.
          </p>

          <button
            onClick={() => {
              const msg =
                "Bismillah, saya ingin bertanya mengenai ketersediaan pilihan unit lain dan kustomisasi kavling di Sekar Darussalam Islamic Village. Mohon dibantu.";
              window.open(
                `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`,
                `_blank`,
              );
            }}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#166534] hover:bg-[#114F29] text-white px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer text-sans"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Tanya Pilihan Unit Lain</span>
          </button>
        </div>
      </div>
    </section>
  );
}
