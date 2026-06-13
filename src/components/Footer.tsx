import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { PROJECT_INFO } from '../data';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const formattedWA = `+62 ${PROJECT_INFO.whatsappNumber.slice(2, 5)} ${PROJECT_INFO.whatsappNumber.slice(5, 9)} ${PROJECT_INFO.whatsappNumber.slice(9)}`;

  return (
    <footer className="bg-[#0F172A] border-t border-[#E7E5E4]/10 text-slate-300 font-sans pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 mb-8 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Ringkas Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#166534] rounded-lg flex items-center justify-center font-heading font-extrabold text-white text-sm">
                SD
              </div>
              <div>
                <span className="block font-heading font-extrabold text-sm sm:text-base text-white tracking-tight leading-none">
                  Sekar Darussalam
                </span>
                <span className="block text-[9px] font-bold text-[#D4A017] tracking-wider uppercase mt-1">
                  Islamic Village • Klaten
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              Sekar Darussalam Islamic Village merupakan kawasan hunian syariah yang dirancang untuk mendukung kenyamanan keluarga muslim melalui lingkungan yang baik dan kepastian legalitas.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Menu</h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <a href="#key-benefits" onClick={(e) => handleNavClick(e, '#key-benefits')} className="hover:text-[#D4A017] transition-colors">Keunggulan</a>
              <a href="#house-type-showcase" onClick={(e) => handleNavClick(e, '#house-type-showcase')} className="hover:text-[#D4A017] transition-colors">Tipe Unit</a>
              <a href="#strategic-location" onClick={(e) => handleNavClick(e, '#strategic-location')} className="hover:text-[#D4A017] transition-colors">Lokasi</a>
              <a href="#payment-options" onClick={(e) => handleNavClick(e, '#payment-options')} className="hover:text-[#D4A017] transition-colors">Pembiayaan</a>
              <a href="#faq-section" onClick={(e) => handleNavClick(e, '#faq-section')} className="hover:text-[#D4A017] transition-colors">FAQ</a>
            </div>
          </div>

          {/* Col 3: Kontak & Survey */}
          <div className="space-y-4 text-xs font-semibold">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">Kontak & Survey</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span className="text-slate-300">Klaten Selatan, Kabupaten Klaten</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#D4A017] shrink-0" />
                <span className="text-slate-300">{formattedWA}</span>
              </div>
            </div>

            <div className="pt-1.5">
              <a
                href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin menjadwalkan survey lokasi Sekar Darussalam Islamic Village. Terima kasih.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#166534] hover:bg-[#114F29] text-white py-2 px-4 rounded-xl text-[11px] font-bold tracking-wide transition-colors uppercase"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.967C16.58 1.92 14.113.896 11.488.896c-5.443 0-9.866 4.419-9.87 9.852-.001 1.77.461 3.5 1.338 5.016l-.983 3.593 3.684-.966zm14.354-9.176c-.272-.136-1.611-.795-1.86-.886-.25-.091-.432-.136-.613.136-.182.273-.703.886-.862 1.068-.159.182-.318.205-.59.069-.272-.136-1.15-.424-2.19-1.353-.809-.721-1.355-1.614-1.514-1.886-.159-.272-.017-.419.119-.554.122-.122.272-.318.408-.477.136-.159.182-.272.272-.455.091-.181.046-.34-.023-.477-.069-.136-.613-1.477-.84-2.023-.222-.534-.467-.461-.613-.469-.159-.008-.34-.01-.522-.01s-.477.068-.727.34c-.25.272-.954.932-.954 2.272s.977 2.631 1.114 2.813c.136.182 1.92 2.932 4.654 4.114.65.281 1.157.449 1.554.576.654.208 1.25.179 1.721.109.525-.078 1.612-.659 1.838-1.295.227-.636.227-1.182.159-1.295-.068-.113-.25-.204-.522-.34z" />
                </svg>
                <span>Jadwalkan Survey</span>
              </a>
            </div>
          </div>

          {/* Col 4: Jam Konsultasi */}
          <div className="space-y-4 text-xs font-semibold">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider font-sans">Jam Konsultasi</h4>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <p className="text-[#D4A017] font-bold">Senin – Ahad</p>
              <p className="text-slate-300 mt-1">08.00 – 17.00 WIB</p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="text-[11px] text-slate-500 leading-relaxed text-center space-y-1">
          <p className="font-bold text-slate-400">&copy; 2026 Sekar Darussalam Islamic Village</p>
          <p className="text-slate-500 max-w-xl mx-auto">
            Seluruh informasi mengenai unit, legalitas, dan proses pembelian dapat dikonsultasikan langsung dengan tim pemasaran.
          </p>
        </div>

      </div>
    </footer>
  );
}
