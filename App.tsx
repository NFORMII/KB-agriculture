import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { MentoringSection } from "./components/MentoringSection";
import { BusinessSection } from "./components/BusinessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MentoringSection />
        <BusinessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
