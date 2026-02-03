"use client";

import Image from "next/image";

export default function About() {
  const stats = [
    { 
      icon: "fa-code", 
      number: "5+", 
      label: "Projects Completed",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/50"
    },
    { 
      icon: "fa-laptop-code", 
      number: "10+", 
      label: "Technologies",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/50"
    },
    { 
      icon: "fa-certificate", 
      number: "3+", 
      label: "Certifications",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/50"
    },
  ];

  const expertiseCategories = [
    {
      category: "Frontend Development",
      icon: "fa-laptop-code",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React.js", percentage: 90, level: "Expert", icon: "fa-react", iconClass: "fab", gradient: "from-cyan-400 to-blue-500" },
        { name: "Next.js", percentage: 85, level: "Expert", icon: "fa-n", iconClass: "fas", gradient: "from-blue-400 to-indigo-500" },
        { name: "Tailwind CSS", percentage: 95, level: "Expert", icon: "fa-css3-alt", iconClass: "fab", gradient: "from-cyan-300 to-teal-500" },
        { name: "JavaScript", percentage: 88, level: "Expert", icon: "fa-js", iconClass: "fab", gradient: "from-yellow-400 to-orange-500" },
        { name: "HTML5 & CSS3", percentage: 92, level: "Expert", icon: "fa-html5", iconClass: "fab", gradient: "from-orange-400 to-red-500" },
      ]
    },
    {
      category: "Backend Development",
      icon: "fa-server",
      gradient: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", percentage: 85, level: "Expert", icon: "fa-node-js", iconClass: "fab", gradient: "from-green-400 to-emerald-600" },
        { name: "Express.js", percentage: 80, level: "Advanced", icon: "fa-code", iconClass: "fas", gradient: "from-emerald-400 to-teal-600" },
        { name: "MongoDB", percentage: 82, level: "Advanced", icon: "fa-database", iconClass: "fas", gradient: "from-green-500 to-lime-600" },
        { name: "MySQL", percentage: 78, level: "Advanced", icon: "fa-database", iconClass: "fas", gradient: "from-blue-500 to-cyan-600" },
      ]
    },
    {
      category: "UI/UX Design",
      icon: "fa-palette",
      gradient: "from-pink-500 to-rose-600",
      skills: [
        { name: "Figma", percentage: 88, level: "Expert", icon: "fa-figma", iconClass: "fab", gradient: "from-purple-400 to-pink-500" },
        { name: "UI/UX Design", percentage: 85, level: "Expert", icon: "fa-pen-nib", iconClass: "fas", gradient: "from-pink-400 to-rose-500" },
        { name: "WordPress", percentage: 75, level: "Advanced", icon: "fa-wordpress", iconClass: "fab", gradient: "from-blue-600 to-indigo-600" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "fa-brain",
      gradient: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Python", percentage: 80, level: "Advanced", icon: "fa-python", iconClass: "fab", gradient: "from-blue-500 to-yellow-500" },
        { name: "Deep Learning", percentage: 70, level: "Intermediate", icon: "fa-project-diagram", iconClass: "fas", gradient: "from-purple-500 to-indigo-600" },
        { name: "Data Science", percentage: 72, level: "Intermediate", icon: "fa-chart-line", iconClass: "fas", gradient: "from-indigo-500 to-purple-600" },
      ]
    },
    {
      category: "Tools & Others",
      icon: "fa-tools",
      gradient: "from-orange-500 to-amber-600",
      skills: [
        { name: "Git & GitHub", percentage: 90, level: "Expert", icon: "fa-github", iconClass: "fab", gradient: "from-gray-700 to-gray-900" },
        { name: "VS Code", percentage: 95, level: "Expert", icon: "fa-code", iconClass: "fas", gradient: "from-blue-500 to-blue-700" },
      ]
    },
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Expert": return "text-green-500";
      case "Advanced": return "text-blue-500";
      case "Intermediate": return "text-yellow-500";
      case "Learner": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case "Expert": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "Advanced": return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "Learner": return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  const journey = [
    {
      icon: "fa-university",
      title: "Nexcore Institute of Technology",
      subtitle: "B.Voc AI & ML",
      period: "2025 - Present",
      status: "Current",
      color: "blue"
    },
    {
      icon: "fa-brain",
      title: "Universal AI University",
      subtitle: "Karjat",
      period: "2024 - 2025",
      status: "Alumni",
      color: "purple"
    },
    {
      icon: "fa-graduation-cap",
      title: "Maharashtra State Board",
      subtitle: "12th HSC - Science",
      period: "2023 - 2024",
      status: "Completed",
      color: "green"
    },
    {
      icon: "fa-briefcase",
      title: "Nexcore Alliance",
      subtitle: "Intern",
      period: "2025 - Present",
      status: "Present",
      color: "orange"
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-0 lg:py-24 px-4 sm:px-6 lg:px-8 reveal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Profile Card - Left Column */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift h-full flex flex-col justify-center">
              {/* Profile Image */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Image
                  src="/profile.jpeg"
                  alt="Profile Picture"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover"
                />
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2 gradient-text">
                  Ahmed Khan
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  Full-Stack Developer & AI Enthusiast
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mb-6 text-text-secondary">
                <i className="fas fa-map-marker-alt text-orange-500"></i>
                <span className="text-sm sm:text-base">Mumbai, India</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.shadowColor}`}>
                      <i className={`fas ${stat.icon} text-white text-sm sm:text-base`}></i>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-accent-primary mb-1">
                      {stat.number}
                    </p>
                    <p className="text-xs text-text-secondary leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content - Right Columns */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Bio Section */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <i className="fas fa-user text-white"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">
                  Who I Am
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-1 shrink-0"></i>
                  <span>
                    Passionate first-year <span className="text-accent-primary font-semibold">B.Voc AI & ML student</span> at Nexcore Institute of Technology
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-1 shrink-0"></i>
                  <span>
                    Strong foundation in <span className="text-accent-primary font-semibold">full-stack web development</span> with modern technologies
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-1 shrink-0"></i>
                  <span>
                    <span className="text-accent-primary font-semibold">Ex-student of Universal AI University, Karjat</span> with deep appreciation for artificial intelligence
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-1 shrink-0"></i>
                  <span>
                    Actively seeking <span className="text-accent-primary font-semibold">internships, projects, and collaborations</span> to contribute skills and grow as a developer
                  </span>
                </li>
              </ul>
            </div>

            {/* Journey Timeline */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-route text-white"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">
                  My Journey
                </h3>
              </div>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg shadow-${item.color}-500/50 group-hover:scale-110 transition-transform shrink-0`}>
                      <i className={`fas ${item.icon} text-white text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary mb-1">
                        {item.subtitle}
                      </p>
                      {item.period && (
                        <p className="text-xs text-text-secondary/70 flex items-center gap-1">
                          <i className="far fa-calendar-alt text-[10px]"></i>
                          {item.period}
                        </p>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${item.color}-500/20 text-${item.color}-500 border border-${item.color}-500/30 shrink-0`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid - Full Width Below */}
        <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <i className="fas fa-star text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              My Expertise
            </h3>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            {expertiseCategories.map((categoryData, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryData.gradient} flex items-center justify-center shadow-lg`}>
                    <i className={`fas ${categoryData.icon} text-white text-sm`}></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-text-primary">
                    {categoryData.category}
                  </h4>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-white/10 hover:shadow-xl hover:shadow-accent-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Skill Header with Logo */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shrink-0`}>
                          <i className={`${skill.iconClass} ${skill.icon} text-white text-lg group-hover:text-xl transition-all duration-300`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-sm text-text-primary truncate group-hover:text-accent-primary transition-colors duration-300">
                            {skill.name}
                          </h5>
                          <span className={`text-xs font-semibold ${getLevelColor(skill.level)} group-hover:scale-110 inline-block transition-transform duration-300`}>
                            {skill.level}
                          </span>
                        </div>
                        <span className={`text-sm font-bold ${getLevelColor(skill.level)} shrink-0 group-hover:scale-125 transition-transform duration-300`}>
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-accent-primary/50`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
