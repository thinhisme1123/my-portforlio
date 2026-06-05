"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Aurora / Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)] group hover:border-cyan-500/50 transition-colors"
        >
          <Image 
            src="/assets/img/profilelogo.png" 
            alt="Thinh Tran" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 text-glow-cyan">
            Thinh Tran
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-2xl md:text-4xl text-gray-400 font-light h-[40px] flex items-center justify-center"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 inline-block w-1 md:w-1.5 h-6 md:h-10 bg-cyan-400"
          />
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="/assets/cv/CV_Tran_Pham_Gia_Thinh_Developer.pdf"
            download="Resume"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-300 bg-black border border-cyan-500/50 rounded-full hover:glow-cyan hover:border-cyan-400 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Resume
              <Download size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-gray-300 transition-colors duration-300 rounded-full hover:text-white hover:bg-white/5"
          >
            View Work
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
