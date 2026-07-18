'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import ContactCTA from '@/components/sections/ContactCTA';
import Hero from '@/components/sections/Hero';
import Plans from '@/components/sections/Plans';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import { useLanguage } from '@/hooks/useLanguage';

export default function HomePage() {
  const {
    language,
    setLanguage,
    translation
  } = useLanguage();

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        translation={translation.navbar}
      />

      <main>
        <Hero translation={translation.hero} />
        <Services translation={translation.services} />
        <Portfolio translation={translation.portfolio} />
        <Process translation={translation.process} />
        <Plans translation={translation.plans} />
        <About translation={translation.about} />
        <ContactCTA translation={translation.cta} />
      </main>

      <Footer translation={translation.footer} />
    </>
  );
}