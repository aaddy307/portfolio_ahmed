import { EducationProgress } from '../effects/ScrollProgress';

// Experience Component - RESPONSIVE
export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-bg-secondary/30 reveal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="relative pl-4 sm:pl-6 lg:pl-8">
          <div className="timeline-item relative glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
            <div className="mb-4">
              <span className="inline-block px-3 sm:px-4 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs sm:text-sm font-semibold mb-4 hover:bg-orange-500/30 transition-all">
                Aug 2025 – Present
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">Intern</h3>
            <p className="text-lg sm:text-xl text-orange-500 mb-4">Nexcore Alliance</p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Currently developing professional skills in web development, working on real-world projects, and gaining hands-on experience with modern technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Component - Already using EducationProgress
export function Education() {
  return <EducationProgress />;
}

// Certifications Component - RESPONSIVE
export function Certifications() {
  const certifications = [
    {
      title: 'AI Appreciate Badge',
      issuer: 'AI For All',
      color: 'orange',
      icon: 'fa-award',
      description: 'Recognition of AI fundamentals and appreciation'
    },
    {
      title: 'AI Aware Badge',
      issuer: 'AI For All',
      color: 'purple',
      icon: 'fa-award',
      description: 'Demonstrating AI awareness and understanding'
    },
    {
      title: 'Yuva AI For All',
      issuer: 'AI For All (English)',
      color: 'orange',
      icon: 'fa-certificate',
      description: 'Comprehensive AI education program completion'
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-bg-secondary/30 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${cert.color}-500/20 flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-500`}>
                  <i className={`fas ${cert.icon} text-${cert.color}-500 text-lg sm:text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className={`text-${cert.color}-500 text-xs sm:text-sm mb-2`}>
                    {cert.issuer}
                  </p>
                  <p className="text-text-secondary text-xs sm:text-sm line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component - RESPONSIVE
export function Contact() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/ahmed-khan-222218338',
      icon: 'fa-linkedin',
      gradient: 'from-accent-primary to-accent-secondary',
      title: 'LinkedIn'
    },
    {
      href: 'https://instagram.com/aaddy.ly',
      icon: 'fa-instagram',
      gradient: 'from-[#E1306C] to-[#F77737]',
      title: 'Instagram'
    },
    {
      href: 'https://github.com/aaddy307',
      icon: 'fa-github',
      gradient: 'from-gray-700 to-gray-900',
      title: 'GitHub'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 reveal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary">
            Let's collaborate and build something amazing together
          </p>
        </div>
        
        <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          {/* Email Section */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <a
              href="mailto:aaddy.ly143@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 rounded-lg sm:rounded-xl bg-bg-secondary/50 hover:bg-bg-secondary transition-all hover-lift group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                <i className="fas fa-envelope text-xl sm:text-2xl"></i>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-text-secondary mb-1">Email Me</p>
                <p className="font-semibold text-accent-primary text-sm sm:text-base truncate">
                  aaddy.ly143@gmail.com
                </p>
              </div>
            </a>
          </div>
          
          {/* Social Links Section */}
          <div className="text-center">
            <p className="text-text-secondary text-sm sm:text-base mb-5 sm:mb-6">
              Connect with me on social media
            </p>
            <div className="flex justify-center gap-4 sm:gap-5 lg:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center transition-transform hover:scale-110`}
                  title={link.title}
                >
                  <i className={`fab ${link.icon} text-xl sm:text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component - RESPONSIVE
export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-text-secondary text-sm sm:text-base">
          © 2026. Designed & Developed by aaddy{' '}
          <span className="text-accent-primary animate-pulse">❤</span>
        </p>
      </div>
    </footer>
  );
}