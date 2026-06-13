import React, { useState } from "react";
import { PROJECT_INFO } from "../data";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ShieldCheck, Coins, CheckCircle } from "lucide-react";

export default function PaymentSection() {
  const [activeTab, setActiveTab] = useState<"kpr" | "cash">("kpr");

  const handleContactWA = (schemeName: string) => {
    const msg = `Assalamu'alaikum, saya tertarik dengan unit di Sekar Darussalam Islamic Village.\n\nSaya ingin berkonsultasi mengenai skema pembayaran: *${schemeName}*.\n\nMohon informasi syarat dokumen dan proses pendampingan pembiayaannya. Terima kasih.`;
    window.open(
      `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent(
        msg,
      )}`,
      "_blank",
    );
  };

  return (
    <section
      className="py-24 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4]"
      id="payment-options"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block mb-4">
            Pilihan Pembiayaan
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Pilihan Pembayaran Sesuai Kebutuhan Anda
          </h2>
          <p className="text-slate-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
            Tersedia pilihan pembiayaan melalui Bank Syariah Nasional maupun
            opsi pembayaran langsung ke developer sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#FAF8F3] border border-[#E7E5E4] p-1.5 rounded-2xl flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab("kpr")}
              className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "kpr"
                  ? "bg-[#166534] text-white shadow-md"
                  : "text-slate-600 hover:text-[#166534]"
              }`}
            >
              <ShieldCheck size={14} />
              KPR Bank Syariah
            </button>
            <button
              onClick={() => setActiveTab("cash")}
              className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "cash"
                  ? "bg-[#166534] text-white shadow-md"
                  : "text-slate-600 hover:text-[#166534]"
              }`}
            >
              <Coins size={14} />
              Pembayaran Tunai
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        {activeTab === "kpr" ? (
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Intro */}
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#166534] font-bold block">
                    akad istishna'
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] leading-tight">
                    Pembiayaan Melalui Bank Syariah Nasional
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    Pembiayaan dilakukan melalui Bank Syariah Nasional dengan
                    akad istishna' yang jelas serta proses yang didampingi oleh
                    tim hingga pengajuan selesai.
                  </p>
                </div>
                <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-stone-200 flex flex-col justify-center items-center shadow-xs">
                  <div className="flex items-center bg-[#FAF9F6] px-4 py-3.5 rounded-xl border border-stone-100 w-full justify-center">
                    <img
                      src="/src/assets/images/Logo_Bank_Syariah_Nasional.png"
                      alt="Logo Bank Syariah Nasional"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="block text-[10px] font-bold text-slate-600 mt-3 text-center">
                    Didukung Bank Syariah Nasional
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="mt-8 text-center">
              <div className="mt-8"></div>

              <button
                onClick={() => handleContactWA("KPR Syariah Mitra Bank")}
                className="bg-[#166534] text-white hover:bg-[#114F29] px-8 py-4 rounded-xl font-heading text-xs sm:text-sm font-extrabold shadow flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer mx-auto text-sans font-semibold"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Tanya Proses Pembiayaan Syariah</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            {/* Cash Keras */}
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-6.5 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#0F172A] mt-1">
                  Pembayaran Tunai
                </h3>

                <div className="my-4 pt-3.5 border-t border-slate-100">
                  <span className="block text-2xl font-black text-[#166534] mt-0.5">
                    Mulai Rp 298 Juta (Net)
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
                  Cocok bagi pembeli yang ingin melakukan pembayaran tunai
                  dengan proses transaksi yang lebih sederhana dan harga yang
                  lebih kompetitif.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs font-semibold">
                    <span className="text-[#166534] font-extrabold">✓</span>
                    <span className="text-slate-700">
                      Free semua biaya AJB &amp; balik nama SHM
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs font-semibold">
                    <span className="text-[#166534] font-extrabold">✓</span>
                    <span className="text-slate-700">
                      Prioritas pemilihan posisi kavling terdepan
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleContactWA("Cash Keras Promo 298 Juta")}
                className="w-full inline-flex justify-center items-center gap-1.5 bg-[#166534] hover:bg-[#114F29] text-white py-3.5 px-5 rounded-xl text-xs font-bold text-center cursor-pointer uppercase tracking-wider transition-colors mt-8 text-sans"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Konsultasikan Skema Pembiayaan</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
