import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { PROJECT_INFO } from "../data";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logoSekar from "../assets/images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Keunggulan", href: "#key-benefits" },
    { label: "Rumah Tahfidz", href: "#rumah-tahfidz" },
    { label: "Tipe Unit", href: "#house-type-showcase" },
    { label: "Progres", href: "#construction-progress" },
    { label: "Skema Bayar", href: "#payment-options" },
    { label: "FAQ", href: "#faq-section" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        const navbarHeight = scrolled ? 70 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  const waTanyakanUnit = `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin bertanya mengenai ketersediaan unit yang masih tersedia di Sekar Darussalam Islamic Village. Terima kasih.")}`;
  const waKonsultasi = `https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin berkonsultasi mengenai rencana kepemilikan hunian islami di Sekar Darussalam Islamic Village. Terima kasih.")}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#E7E5E4]"
          : "bg-transparent py-5"
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group"
        >
          <img
            src={logoSekar}
            alt="Sekar Darussalam Islamic Village"
            loading="lazy"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-bold text-slate-600 hover:text-[#166534] transition-colors font-sans tracking-wide"
              id={`nav-item-${item.label.toLowerCase().replace(" ", "-")}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href={waTanyakanUnit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#166534] hover:bg-[#114F29] text-white text-[10px] font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 uppercase tracking-wider"
            id="nav-cta"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Tanyakan Unit</span>
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#0F172A] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer bg-transparent border-0"
          aria-label="Buka Menu"
          id="mobile-menu-trigger"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF8F3] border-b border-[#E7E5E4] shadow-inner overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-6 py-6 space-y-4 font-sans">
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs font-bold text-slate-700 hover:text-[#166534] py-2 opacity-90 hover:opacity-100 border-b border-slate-100 block transition-all cursor-pointer"
                    id={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Standardized Mobile CTA */}
              <div className="pt-4 flex flex-col gap-2 border-t border-slate-200">
                <a
                  href={waTanyakanUnit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#166534] hover:bg-[#114F29] text-white text-[10px] font-extrabold py-3 rounded-xl text-center shadow flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-widest text-sans"
                  id="mobile-drawer-cta-primary"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Tanyakan Unit yang Tersedia</span>
                </a>
                <a
                  href={waKonsultasi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-[#166534] border border-stone-200 text-[10px] font-extrabold py-3 rounded-xl text-center shadow flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-widest text-sans"
                  id="mobile-drawer-cta-secondary"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
