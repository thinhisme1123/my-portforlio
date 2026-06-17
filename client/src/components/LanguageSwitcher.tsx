"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative flex items-center p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full w-[104px] shadow-[0_0_15px_rgba(0,0,0,0.5)] z-50">
      {/* Background slide indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute top-1 bottom-1 w-[48px] bg-cyan-500/20 border border-cyan-500/50 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.3)]"
        style={{
          left: locale === "en" ? 4 : 50,
        }}
      />
      
      <button
        onClick={() => handleSwitch("en")}
        className={`relative z-10 w-[48px] py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
          locale === "en" 
            ? "text-cyan-400 text-glow-cyan" 
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
      
      <button
        onClick={() => handleSwitch("vi")}
        className={`relative z-10 w-[48px] py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
          locale === "vi" 
            ? "text-cyan-400 text-glow-cyan" 
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        VI
      </button>
    </div>
  );
}
