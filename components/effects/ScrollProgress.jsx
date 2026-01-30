import { useState, useEffect } from 'react';

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function ScrollProgressBar({ targetId, onlyWhenInView = false }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(!onlyWhenInView);

  useEffect(() => {
    const handleScroll = () => {
      // Default: page scroll progress
      if (!targetId) {
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
        setProgress(clamp(scrolled, 0, 100));
        setVisible(true);
        return;
      }

      // Target: section scroll progress (0 when section enters viewport, 100 when it leaves)
      const el = document.getElementById(targetId);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // Absolute positions in document coordinates
      const sectionTop = window.scrollY + rect.top;
      const sectionBottom = sectionTop + rect.height;

      // Show only while section intersects viewport (if enabled)
      const inView = window.scrollY + viewportH > sectionTop && window.scrollY < sectionBottom;
      setVisible(onlyWhenInView ? inView : true);

      const start = sectionTop - viewportH; // when section first touches viewport bottom
      const end = sectionBottom; // when section fully passes viewport top
      const denom = end - start || 1;
      const scrolled = ((window.scrollY - start) / denom) * 100;
      setProgress(clamp(scrolled, 0, 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetId, onlyWhenInView]);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 250ms ease, width 100ms ease',
      }}
    ></div>
  );
}

export function EducationProgress() {
  const educationData = [
    {
      type: 'Current',
      color: 'orange',
      icon: 'fa-university',
      gradient: 'from-orange-500 to-purple-500',
      institution: 'University of Mumbai',
      degree: 'B.Voc in Artificial Intelligence & Machine Learning',
      status: 'First Year Student',
      description:
        'Pursuing a comprehensive program focused on artificial intelligence, machine learning, and their practical applications. Building expertise in programming, data structures, algorithms, and deep learning.',
    },
    {
      type: 'Alumni',
      color: 'purple',
      icon: 'fa-brain',
      gradient: 'from-purple-500 to-orange-500',
      institution: 'Universal AI University',
      degree: 'Karjat',
      status: 'Ex-Student',
      description:
        'Gained foundational knowledge in artificial intelligence and its applications, which sparked my passion for pursuing advanced studies in AI and machine learning.',
    },
  ];

  return (
    <section id="education" className="py-24 px-6 reveal">
      <ScrollProgressBar targetId="education" onlyWhenInView />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-4 gradient-text">Education</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-500`}
                >
                  <i className={`fas ${edu.icon} text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <span
                    className={`inline-block px-3 py-1 bg-${edu.color}-500/20 text-${edu.color}-500 rounded-full text-xs font-semibold mb-3`}
                  >
                    {edu.type}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-2">{edu.institution}</h3>
                  <p className={`text-lg text-${edu.color}-500 mb-2`}>{edu.degree}</p>
                  <p className="text-text-secondary text-sm mb-3">{edu.status}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollProgressBar;
