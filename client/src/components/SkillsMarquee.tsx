"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiMongodb,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiSass,
  SiAngular,
  SiPython,
  SiC,
  SiFlutter
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Sass", icon: SiSass, color: "text-[#CC6699]" },
  { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Java", icon: FaJava, color: "text-[#007396]" },
  { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
];

export default function SkillsMarquee() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">{t("sectionTitle")}</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto glow-purple"></div>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {/* Double the list to create infinite effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-8 py-4 mx-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <skill.icon className={`w-8 h-8 ${skill.color}`} />
              <span className="text-lg font-medium text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Adding a second marquee row going opposite direction, just for visual flair */}
      <div className="relative w-full flex overflow-x-hidden group mt-6" dir="rtl">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {[...[...skills].reverse(), ...[...skills].reverse()].map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-8 py-4 mx-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
              dir="ltr"
            >
              <skill.icon className={`w-8 h-8 ${skill.color}`} />
              <span className="text-lg font-medium text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
