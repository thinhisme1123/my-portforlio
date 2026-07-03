"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-background/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-6">
        <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
          {t("about")}
        </a>
        <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors hidden sm:block">
          {t("skills")}
        </a>
        <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
          {t("experience")}
        </a>
        <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
          {t("projects")}
        </a>
        <a href="#certifications" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors hidden sm:block">
          {t("certifications")}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors hidden sm:block"
        >
          {t("contact")}
        </a>
      </div>
    </motion.nav>
  );
}
