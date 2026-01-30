import '../styles/globals.css';
import { useEffect } from 'react';
import CustomCursor from "../components/effects/CustomCursor";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
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

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
