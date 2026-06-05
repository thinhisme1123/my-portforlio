"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Thanh Thuy HomeSpa",
    description: "A comprehensive booking and management system for a spa, featuring user appointments, admin dashboard, and real-time notifications.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://thanhthuy-homespa-blond.vercel.app",
    githubUrl: "https://github.com/thinhisme1123/thanhthuy-homespa",
    imageUrl: "/assets/projects/thanhthuy_spa.png",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Real-time Chatting App",
    description: "Instant messaging application supporting one-on-one and group chats, media sharing, and read receipts using WebSockets.",
    tags: ["Next.js", "TypeScript", "Socket.io", "Express"],
    demoUrl: "https://chatting-app-nine-opal.vercel.app/",
    githubUrl: "https://github.com/thinhisme1123/chatting-app",
    imageUrl: "/assets/projects/chatting-app.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "TTFilm",
    description: "A modern movie streaming platform with a cinematic UI and smart video playback. Features auto-updating API integration.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "REST API"],
    demoUrl: "https://ttfilm.vercel.app",
    githubUrl: "#",
    imageUrl: "/assets/projects/ttfilm.png",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Shose Store",
    description: "Full-stack sneaker e-commerce platform with product management, cart functionality, and responsive user experience.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "REST API"],
    demoUrl: "https://shose-store-mu.vercel.app",
    githubUrl: "https://github.com/thinhisme1123/shose-store",
    imageUrl: "/assets/projects/shose-store.png",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Song Diep Store",
    description: "Business website showcasing products, company information, and services with a clean and responsive design.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "REST API"],
    demoUrl: "https://songdiep-store.vercel.app/",
    githubUrl: "https://github.com/thinhisme1123/songdiep-store",
    imageUrl: "/assets/projects/songdiep-store.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website with interactive 3D elements, modern design aesthetics, and high performance.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Portfolio+Website",
    color: "from-orange-500 to-red-500",
  }
];

function ProjectTiltCard({ project }: { project: typeof projects[0] }) {
  return (
    <TiltCard
      intensity={17.5}
      className="relative w-full h-[450px] rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-white/20 transition-colors"
    >
      <div
        style={{ transform: "translateZ(75px)" }}
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.color} blur-xl`}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex-1">
        <div className={`relative w-full h-48 rounded-xl mb-6 bg-gradient-to-br ${project.color} overflow-hidden group/image`}>
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/0 transition-colors duration-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex gap-4 mt-4">
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
          <FaGithub size={16} /> Source
        </a>
      </div>
    </TiltCard>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto glow-emerald"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectTiltCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/thinhisme1123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20"
        >
          <FaGithub size={18} className="mr-2" />
          View all GitHub Repositories
        </a>
      </div>
    </section>
  );
}
