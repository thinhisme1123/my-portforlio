import SectionTitle from "../parts/SectionTitle";
import { useState, useEffect, useRef } from "react";
import "../../style/body/Experience.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const experienceRefs = useRef([]);

  // Add this if you want multiple experiences later
  const experiences = [
    {
      id: 1,
      position: "FullStack Developer (ReactJS, NextJS, NodeJS)",
      company: "Self-Employed",
      duration: "January 2024 - Present",
      durationLength: "Ongoing",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234070f4'/%3E%3Ctext x='50' y='58' font-family='Arial, sans-serif' font-size='36' font-weight='bold' text-anchor='middle' fill='white'%3EF%3C/text%3E%3C/svg%3E",
      achievements: [
        {
          icon: "🎯",
          text: "Successfully delivered 8+ custom websites for small businesses, achieving 100% client satisfaction and repeat business",
        },
        {
          icon: "💼",
          text: "Managed complete project lifecycle from client consultation to deployment, demonstrating strong project management skills",
        },
        {
          icon: "⚡",
          text: "Built high-performance, SEO-optimized websites using React.js, Next.js, and modern CSS frameworks like Tailwind CSS",
        },
        {
          icon: "📱",
          text: "Specialized in creating fully responsive, mobile-first designs that work seamlessly across all devices and browsers",
        },
        {
          icon: "🚀",
          text: "Implemented modern web technologies including animations, progressive web app features, and performance optimization techniques",
        },
        {
          icon: "💬",
          text: "Developed strong client communication skills, translating business requirements into technical solutions and providing ongoing support",
        },
      ],
    },
    {
      id: 2,
      position: "Frontend Developer Intern",
      company: "COZWORK JOINT STOCK COMPANY",
      duration: "April 2025 - June 2025",
      durationLength: "3 months",
      logo: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTY3Mzk4MiwicHVyIjoiYmxvYl9pZCJ9fQ==--1d67ea063cb01d9e95b781054ec8331e634f3f12/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlszMDAsMzAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--e1d036817a0840c585f202e70291f5cdd058753d/coz-logo-color-1.png",
      achievements: [
        {
          icon: "📂",
          text: "Learned and applied Clean Architecture and CQRS pattern to structure production-level applications",
        },
        {
          icon: "⚛️",
          text: "Participated in front-end development using ReactJS and Angular on real-world company projects",
        },
        {
          icon: "🟦",
          text: "Wrote clean, maintainable code using TypeScript with strong typing and scalable structure",
        },
        {
          icon: "📐",
          text: "Applied common design patterns to solve development challenges and improve code readability and reusability",
        },
        {
          icon: "🌿",
          text: "Worked with professional Git workflows, following commit rules and participating in Pull Request reviews",
        },
        {
          icon: "🤝",
          text: "Collaborated effectively with team members to deliver real client-facing features, improving teamwork and communication skills",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const viewportHeight = window.innerHeight;
      let newActiveIndex = activeIndex;

      experienceRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const headerOffset = 64;
        const screenCenter = viewportHeight / 2 + headerOffset;

        const offset = Math.abs(rect.top - screenCenter);
        if (
          !experienceRefs.current[newActiveIndex] ||
          offset <
            Math.abs(
              experienceRefs.current[newActiveIndex].getBoundingClientRect()
                .top -
                viewportHeight / 2
            )
        ) {
          newActiveIndex = index;
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div>
      <div className="grid contact-seciton-container">
        <SectionTitle name="Experience" />

        <div className="experience-container">
          <div className="experience-timeline" ref={timelineRef}>
            <div className="timeline-line"></div>

            <div
              className="timeline-dot active"
              style={{ top: `${2 + activeIndex * 10}rem` }}
            >
              <div className="dot-pulse"></div>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="experience-item"
                ref={(el) => (experienceRefs.current[index] = el)}
              >
                <div
                  className={`experience-card ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="card-glow"></div>

                  <div className="experience-header">
                    <div className="company-logo">
                      <div className="logo-background">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="company-logo-img"
                        />
                      </div>
                    </div>

                    <div className="experience-info">
                      <div className="position-badge">
                        <span className="position-title">{exp.position}</span>
                      </div>
                      <h4 className="company-name">{exp.company}</h4>
                      <div className="duration-container">
                        <div className="duration-badge">
                          <span className="duration">{exp.duration}</span>
                          <span className="duration-length">
                            • {exp.durationLength}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="experience-description">
                    <div className="description-header">
                      <h5>Key Responsibilities & Achievements</h5>
                    </div>
                    <div className="achievements-grid">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="achievement-item">
                          <div className="achievement-icon">
                            {achievement.icon}
                          </div>
                          <p>{achievement.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
