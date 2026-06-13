import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS, PROJECT_INFO } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item

  return (
    <section className="py-20 bg-[#FAF8F3] font-sans text-[#0F172A] border-b border-[#E7E5E4]" id="faq-section">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#166534] text-xs font-bold uppercase tracking-widest bg-[#166534]/10 px-3.5 py-1.5 rounded-full border border-[#166534]/20 inline-block mb-4">
            TANYA JAWAB
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-650 mt-3 text-xs sm:text-sm leading-relaxed font-semibold">
            Menjawab keraguan Anda seputar skema syariah, aspek hukum, dan kesiapan teknis lapangan di Sekar Darussalam Islamic Village.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden shadow-xs transition-all hover:bg-[#FAF8F3]/40"
                id={`faq-accordion-item-${idx}`}
              >
                {/* Collapsible Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left py-4.5 px-5 flex items-center justify-between gap-4 font-heading font-extrabold text-xs sm:text-sm text-[#0F172A] cursor-pointer align-middle border-0 bg-transparent"
                  id={`faq-toggle-${idx}`}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={16} className="text-[#166534] shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-[#E7E5E4] bg-[#FAF8F3]/50"
                    >
                      <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed pr-6 font-semibold">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Standardized WhatsApp CTA for FAQs */}
        <div className="mt-8 bg-gradient-to-br from-[#166534] to-[#0A3F1F] text-white rounded-[24px] p-6.5 flex flex-col sm:flex-row items-center justify-between gap-4.5 text-center sm:text-left shadow-lg border border-[#166534]/15">
          <div>
            <h4 className="font-heading text-sm sm:text-base font-bold text-[#D4A017]">Punya Pertanyaan Lain?</h4>
            <p className="text-[11px] text-emerald-100 mt-1 font-medium">Tim marketing kami siap melayani konsultasi tanya jawab seputar unit dan survei lapangan.</p>
          </div>
          <a
            href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin berkonsultasi mengenai perumahan Sekar Darussalam Islamic Village. Terima kasih.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#166534] hover:bg-stone-100 text-xs font-extrabold py-3.5 px-5.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md uppercase tracking-wider transition-colors"
            id="faq-section-wa-cta"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
