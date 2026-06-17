"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import TiltCard from "@/components/TiltCard";

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("Experience");
  
  const experiences = t.raw("items") as Array<{
    position: string;
    company: string;
    duration: string;
    achievements: string[];
  }>;

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("sectionTitle")}</h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto glow-cyan"></div>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-4 bottom-4 w-px bg-white/10" />

        <div className="flex flex-col gap-12" style={{ perspective: "1000px" }}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              exp={exp}
              isActive={activeIndex === index}
              onVisible={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, isActive, onVisible }: any) {
  const ref = useRef(null);
  
  // Track middle 20% of the screen (40% top margin, 40% bottom margin)
  // This ensures the active state only triggers when the user is actually reading the card
  const isCenterInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: "some" });

  useEffect(() => {
    if (isCenterInView) {
      onVisible();
    }
  }, [isCenterInView, onVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      className={cn("relative pl-12 md:pl-24 transition-all duration-500", isActive ? "opacity-100" : "opacity-40 hover:opacity-70")}
    >
      {/* Node */}
      <div
        className={cn(
          "absolute left-[0.8rem] md:left-[1.8rem] top-6 w-3 h-3 rounded-full transition-all duration-500 transform -translate-x-1/2",
          isActive ? "bg-cyan-400 glow-cyan scale-150" : "bg-white/20"
        )}
      />

      {/* 3D Tilt wraps only the content card, preserving the timeline node positioning */}
      <TiltCard
        intensity={17.5}
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-white/5 border backdrop-blur-md p-6 md:p-8 transition-colors transition-shadow duration-500",
          isActive ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]" : "border-white/10"
        )}
      >
        <div 
          style={{ transform: "translateZ(75px)" }}
          className={cn("pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent transition-opacity duration-500", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50")} 
        />

        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{exp.position}</h3>
              <p className="text-cyan-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase size={16} />
                {exp.company}
              </p>
            </div>
            <span className="text-sm font-medium text-gray-400 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
              {exp.duration}
            </span>
          </div>

          <ul className="space-y-2 mt-4">
            {exp.achievements.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <ChevronRight className={cn("w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300", isActive ? "text-cyan-400" : "text-gray-500")} />
                <span className="leading-relaxed text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  );
}
