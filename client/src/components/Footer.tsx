"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/50 overflow-hidden pt-24 pb-12 mt-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-lg h-48 bg-cyan-500/20 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:thinhisme1123@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black transition-all duration-300 bg-white rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span>Say Hello</span>
            <ArrowUpRight size={20} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Thinh Tran. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/thinhisme1123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 hover:text-cyan-400 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 hover:text-blue-400 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:thinhisme1123@gmail.com" className="text-gray-400 hover:text-white hover:scale-110 hover:text-purple-400 transition-all duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
