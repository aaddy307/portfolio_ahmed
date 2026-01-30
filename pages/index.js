import { useState, useEffect } from 'react';
import Head from 'next/head';
import EntranceLoader from '../components/effects/EntranceLoader';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import { Experience, Education, Certifications, Contact, Footer } from '../components/ui/SectionComponents';
import BackgroundElements from '../components/effects/BackgroundElements';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auto hide loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3001);

    return () => clearTimeout(timer);
  }, []);

  const handleSkipLoader = () => {
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Ahmed Khan - Web Developer & AI Enthusiast</title>
        <meta name="description" content="Ahmed Khan - Web Developer, UI/UX Designer, and AI & ML Enthusiast. Ex-student of Universal AI University, Karjat." />
        <meta name="keywords" content="Ahmed Khan, Web Developer, UI/UX Designer, AI ML, React, Node.js, Portfolio" />
        <meta name="author" content="Ahmed Khan" />
        <meta property="og:title" content="Ahmed Khan - Web Developer & AI Enthusiast" />
        <meta property="og:description" content="Full-stack developer and AI/ML student. Creating intelligent web solutions." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <EntranceLoader onSkip={handleSkipLoader} />}

      <BackgroundElements />
      <Navbar />

      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-800'}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
