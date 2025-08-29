import SectionTitle from "../parts/SectionTitle";
import "../../style/body/Experience.css"
import { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const experienceRefs = useRef([]);

  const experiences = [
    {
      id: 1,
      position: "Frontend Developer Intern",
      company: "COZWORK JOINSTOCK COMPANY",
      duration: "April 2025 - June 2025",
      durationLength: "3 months",
      logo: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTY3Mzk4MiwicHVyIjoiYmxvYl9pZCJ9fQ==--1d67ea063cb01d9e95b781054ec8331e634f3f12/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlszMDAsMzAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--e1d036817a0840c585f202e70291f5cdd058753d/coz-logo-color-1.png",
      achievements: [
        { icon: "🚀", text: "Developed responsive web interfaces using React.js and modern CSS frameworks" },
        { icon: "🤝", text: "Collaborated with senior developers to implement user-friendly features and optimize UX" },
        { icon: "📝", text: "Participated in code reviews and learned best practices for clean, maintainable code" },
        { icon: "🔗", text: "Integrated frontend components with backend services using REST APIs" },
        { icon: "⚡", text: "Contributed to improving website performance and accessibility standards" },
        { icon: "📊", text: "Gained experience with Git version control and agile development methodologies" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, 
        (viewportHeight - timelineRect.top) / (timelineRect.height + viewportHeight)
      ));
      setScrollProgress(progress);

      // Update active experience based on scroll
      experienceRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const isInView = rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4;
        if (isInView && activeIndex !== index) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div>
      <div className="grid contact-seciton-container">
        <SectionTitle name="Experience" />
        
        <div className="experience-container">
          <div className="experience-timeline" ref={timelineRef}>
            <div className="timeline-line"></div>
            {/* Animated progress line that fills based on scroll */}
            <div 
              className="timeline-progress" 
              style={{ 
                height: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 ? 1 : 0
              }}
            ></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="experience-item"
                ref={(el) => experienceRefs.current[index] = el}
                style={{
                  // Animate items based on scroll progress
                  transform: `translateY(${Math.max(0, 50 - scrollProgress * 100)}px)`,
                  opacity: Math.min(1, scrollProgress * 2)
                }}
              >
                <div 
                  className={`timeline-dot ${activeIndex === index ? 'active' : ''}`}
                  style={{ 
                    top: `${2 + index * 10}rem`,
                    // Scale dot based on progress
                    transform: `scale(${0.8 + scrollProgress * 0.4})`
                  }}
                >
                  <div className="dot-pulse"></div>
                </div>
                
                <div className={`experience-card ${activeIndex === index ? 'active' : ''}`}>
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
                          <span className="duration-length">• {exp.durationLength}</span>
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
                        <div 
                          key={i} 
                          className="achievement-item"
                          style={{
                            // Stagger animation for achievement items
                            animationDelay: `${i * 0.1}s`,
                            opacity: scrollProgress > 0.3 ? 1 : 0,
                            transform: `translateX(${Math.max(0, 30 - scrollProgress * 60)}px)`
                          }}
                        >
                          <div className="achievement-icon">{achievement.icon}</div>
                          <p>{achievement.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Optional: Progress indicator */}
          <div className="scroll-progress-indicator">
            <div className="progress-text">
              Progress: {Math.round(scrollProgress * 100)}%
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}