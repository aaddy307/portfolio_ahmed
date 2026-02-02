"use client";

import { useState, useEffect } from 'react';
import EntranceLoader from '@/Components/EntranceLoader';
import CustomCursor from '@/Components/CustomCursor';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Experience from '@/Components/Experience';
import Education from '@/Components/Education';
import Certifications from '@/Components/Certifications';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import BackgroundElements from '@/Components/BackgroundElements';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auto hide loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3001);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll reveal functionality
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleSkipLoader = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <EntranceLoader onSkip={handleSkipLoader} />}

      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <BackgroundElements />
      <Navbar />

      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-800'}>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}