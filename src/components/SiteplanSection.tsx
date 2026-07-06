import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, RefreshCw, Download } from "lucide-react";

import siteplanImgSrc from "../assets/images/SITE_PLAN.png";

export default function SiteplanSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  const handleClose = () => {
    setIsOpen(false);
    setZoomScale(1);
  };

  return (
    <section
      className="py-20 sm:py-24 bg-white font-sans text-[#0F172A] border-b border-[#E7E5E4] relative overflow-hidden"
      id="siteplan"
    >
      {/* Dynamic graphic accent lines in background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-50/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title area */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block shadow-3xs">
            SITEPLAN KAWASAN
          </span>
          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Tata Letak Kavling Sekar Darussalam
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
            Lihat pembagian blok dan posisi kavling dalam kawasan Sekar
            Darussalam Islamic Village untuk membantu memahami susunan kawasan
            secara keseluruhan.
          </p>
        </div>

        {/* Siteplan presentation card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F3] p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#E7E5E4] shadow-sm select-none"
          >
            {/* Clickable Image Showcase */}
            <div
              onClick={() => setIsOpen(true)}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E7E5E4]/80 aspect-[16/10] bg-stone-50 cursor-zoom-in group"
            >
              <img
                src={siteplanImgSrc}
                alt="Tata Letak Kavling Sekar Darussalam"
                loading="lazy"
                className="w-full h-full object-cover sm:object-contain group-hover:scale-[1.015] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover screen tint */}
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/15 duration-300 transition-colors flex items-center justify-center">
                <div className="bg-white/95 text-[#166534] font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md border border-stone-200/80 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={16} className="stroke-[2.5]" />
                  <span>Perbesar Jelas Siteplan</span>
                </div>
              </div>

              {/* Visual mini-indicator overlay */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 opacity-90 group-hover:opacity-0 transition-opacity">
                <ZoomIn size={12} />
                <span>Ketuk untuk Perbesar</span>
              </div>
            </div>

            {/* Instruction footnote text */}
            <div className="text-center mt-3 sm:mt-4">
              <p className="text-xs text-stone-500 font-bold tracking-wide flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Klik gambar untuk melihat siteplan lebih detail
              </p>
            </div>

            {/* Download CTA Button */}
            <div className="mt-5 flex justify-center w-full">
              <a
                href={siteplanImgSrc}
                download="siteplan.jpeg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#166534] hover:bg-[#114F29] text-white py-3.5 px-8 rounded-xl font-heading text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer text-sans uppercase tracking-wider text-center"
              >
                <Download size={16} className="stroke-[2.5]" />
                <span>Download Siteplan</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/96 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden select-none"
          >
            {/* Modal Body: Pan/Scroll and Drag area with Zoom constraint */}
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleClose();
                }
              }}
            >
              <motion.div
                drag={zoomScale > 1}
                dragConstraints={{
                  left: -300 * (zoomScale - 1),
                  right: 300 * (zoomScale - 1),
                  top: -400 * (zoomScale - 1),
                  bottom: 400 * (zoomScale - 1),
                }}
                dragElastic={0.15}
                animate={{ scale: zoomScale }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="max-h-[85vh] max-w-[90vw] md:max-w-[70vw] origin-center flex items-center justify-center"
              >
                <img
                  src={siteplanImgSrc}
                  alt="Siteplan Sekar Darussalam Fullscreen Zoomed View"
                  loading="lazy"
                  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Top Bar Controls Panel - Placed after content with high absolute z-index to guarantee clickability */}
            <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 z-50 pointer-events-none">
              <div className="bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-800 text-white flex items-center gap-2 text-xs sm:text-sm font-semibold pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Siteplan Sekar Darussalam</span>
                <span className="bg-stone-800 text-stone-400 text-[10px] px-1.5 py-0.5 rounded ml-1">
                  {zoomScale.toFixed(2)}x
                </span>
              </div>

              {/* Action Buttons Panel */}
              <div className="flex items-center gap-2 pointer-events-auto">
                {/* Scale controls */}
                <div className="bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-800 flex items-center overflow-hidden shadow-lg shadow-black/40">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleZoomOut();
                    }}
                    disabled={zoomScale <= 1}
                    className="p-3 text-stone-300 hover:text-white hover:bg-stone-800/80 disabled:opacity-30 transition-all font-extrabold w-11 h-11 flex items-center justify-center text-lg active:scale-95"
                    title="Zoom Out"
                  >
                    -
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleResetZoom();
                    }}
                    disabled={zoomScale === 1}
                    className="p-3 text-stone-300 hover:text-white hover:bg-stone-800/80 disabled:opacity-30 transition-all border-l border-r border-stone-800 w-11 h-11 flex items-center justify-center text-xs font-bold active:scale-95"
                    title="Reset Zoom"
                  >
                    <RefreshCw size={14} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleZoomIn();
                    }}
                    disabled={zoomScale >= 3}
                    className="p-3 text-stone-300 hover:text-white hover:bg-stone-800/80 disabled:opacity-30 transition-all font-extrabold w-11 h-11 flex items-center justify-center text-lg active:scale-95"
                    title="Zoom In"
                  >
                    +
                  </button>
                </div>

                {/* Close Overlay Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="p-3 bg-red-950/80 hover:bg-red-900/95 text-red-200 hover:text-white rounded-xl border border-red-920 shadow-lg shadow-black/40 transition-all w-11 h-11 flex items-center justify-center active:scale-95"
                  title="Close Lightbox"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Footer zoom instruction */}
            <div className="absolute bottom-4 text-center pointer-events-none z-40 bg-black/70 backdrop-blur-md py-1.5 px-4 rounded-full text-[10px] sm:text-xs text-stone-300 border border-stone-800/40">
              {zoomScale > 1
                ? "Gunakan drag (seret) untuk melihat bagian lain"
                : "Klik tombol (+ / -) di atas atau seret untuk perbesar"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
