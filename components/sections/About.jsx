import Image from "next/image";
// import profilePic from "../public/images/profile.jpeg";

export default function About() {
  const highlights = [
    { icon: "fa-map-marker-alt", color: "orange", text: "Mumbai" },
    {
      icon: "fa-graduation-cap",
      color: "orange",
      text: "Nexcore Institute of Technology",
    },
    {
      icon: "fa-brain",
      color: "purple",
      text: "Universal AI University Alumni",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 reveal"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover-lift">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            {/* Profile Image - Responsive sizing */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-500 cursor-pointer">
              <Image
                src="/images/profile.jpeg"
                alt="Profile Picture"
                fill
                priority
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
                I am a passionate first-year{" "}
                <span className="text-accent-primary font-semibold">
                  B.Voc AI & ML student
                </span>{" "}
                at the Nexcore Institute of Technology, with a strong foundation
                in full-stack web development. As an{" "}
                <span className="text-accent-primary font-semibold">
                  ex-student of Universal AI University, Karjat
                </span>
                , I developed a deep appreciation for artificial intelligence
                that now drives my academic and professional pursuits.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
                I specialize in building modern web applications using{" "}
                <span className="text-accent-primary font-semibold">
                  React.js, Node.js, MongoDB, MySQL, Tailwind CSS,
                </span>{" "}
                and various other cutting-edge technologies. My design expertise
                spans{" "}
                <span className="text-accent-primary font-semibold">
                  Figma, WordPress,
                </span>{" "}
                and UI/UX principles.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
                Currently exploring the fascinating world of{" "}
                <span className="text-accent-primary font-semibold">
                  AI and deep learning,
                </span>{" "}
                I'm driven to build intelligent, real-world web solutions that
                make a difference. I'm actively seeking internships, projects,
                and collaborations where I can contribute my skills and continue
                growing as a developer.
              </p>

              {/* Highlights - Responsive layout */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all cursor-default text-sm sm:text-base"
                  >
                    <i
                      className={`fas ${item.icon} text-${item.color}-500 text-sm sm:text-base`}
                    ></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
