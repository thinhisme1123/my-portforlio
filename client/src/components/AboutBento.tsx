"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TiltCard from "@/components/TiltCard";

export default function AboutBento() {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("sectionTitle")}</h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full glow-cyan"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[250px]" style={{ perspective: "1200px" }}>
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 md:row-span-2 min-h-[500px]"
        >
          <TiltCard
            intensity={8}
            className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 group hover:border-cyan-500/50 transition-colors h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t("greeting")}</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  {t("bio1")}
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t("bio2")}
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-2 md:row-span-1 min-h-[250px]"
        >
          <TiltCard
            intensity={8}
            className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 group h-full"
          >
            <Image
              src="/assets/img/aboutimage.jpg"
              alt="About Me"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </TiltCard>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 md:row-span-1 min-h-[250px]"
        >
          <TiltCard
            intensity={10}
            className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center group hover:border-emerald-500/50 transition-colors h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <GraduationCap className="w-12 h-12 text-emerald-400 mb-4 relative z-10" />
            <h4 className="text-xl font-bold mb-2 relative z-10">{t("educationTitle")}</h4>
            <p className="text-gray-400 relative z-10">{t("educationName")}</p>
          </TiltCard>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 min-h-[250px]"
        >
          <TiltCard
            intensity={10}
            className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <MapPin className="w-12 h-12 text-purple-400 mb-4 relative z-10" />
            <h4 className="text-xl font-bold mb-2 relative z-10">{t("locationTitle")}</h4>
            <p className="text-gray-400 relative z-10">{t("locationValue")}</p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
