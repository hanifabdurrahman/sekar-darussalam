import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import VideoSection from "./components/VidGateSection";
import TahfidzSection from "./components/TahfidzSection";
import SiteplanSection from "./components/SiteplanSection";
import LocationSection from "./components/LocationSection";
import HouseTypeSection from "./components/HouseTypeSection";
import InteriorVideoSection from "./components/InteriorVideoScetion";
import TestimonialSection from "./components/TestimonialSection";
import ProgressSection from "./components/ProgressSection";
import PaymentSection from "./components/PaymentSection";
import ApsiSection from "./components/ApsiSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-emerald/10 selection:text-brand-emerald relative bg-slate-50/20">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Layout Stream */}
      <main className="flex-grow">
        {/* 2. Hero Section (Includes side-by-side Booking scheduler) */}
        <HeroSection />

        {/* 3. Core Benefits (4 grid cards) */}
        <BenefitsSection />

        {/* 3b. Drone Aerial Walkthrough Visual Showroom */}
        <VideoSection />

        {/* 4. Emotional Program Core (Rumah Tahfidz focus) */}
        <TahfidzSection />

        {/* 4b. Siteplan Layout Kavling Blok */}
        <SiteplanSection />

        {/* 5. House Blueprint & Specification & Sharia Calculator */}
        <HouseTypeSection />

        {/* 5b. Walkthrough Interior Living Room Experience */}
        <InteriorVideoSection />

        {/* 5c. Testimoni & Cerita Penghuni */}
        <TestimonialSection />

        {/* 6. Local Amenities Radar & Maps Location */}
        <LocationSection />

        {/* 7. Physical progress & transparency indicators */}
        <ProgressSection />

        {/* 8. Sharia safe payment card tiers */}
        <PaymentSection />

        {/* 9. APSI Sharia property Association and Ecosystem proof */}
        <ApsiSection />

        {/* 10. Sharia Accordion FAQ Center with Search filter */}
        <FAQSection />
      </main>

      {/* 12. Corporate Real Estate Footer */}
      <Footer />

      {/* 13. High-Converting Conversational Floating Chat Assistant */}
      <FloatingWhatsApp />
    </div>
  );
}
