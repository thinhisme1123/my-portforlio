"use client";

import { motion } from "framer-motion";
import { Calendar, BadgeCheck, ExternalLink, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    issuedDate: "May 2024",
    credentialId: "8SHCF28WL2MQ",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/8SHCF28WL2MQ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    skills: ["Software Engineering", "SDLC", "Development Practices"],
    color: "#0f62fe",
  },
  {
    id: 2,
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "The Johns Hopkins University",
    issuedDate: "March 2024",
    credentialId: "R9QCE9DK2FZM",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/R9QCE9DK2FZM",
    logo: "https://crystalpng.com/wp-content/uploads/2025/01/johns-hopkins-university-logo-in-circle.png",
    skills: ["Web Development", "Frontend Development", "JavaScript"],
    color: "#002d72",
  },
  {
    id: 3,
    title: "Aptis ESOL Level B2",
    issuer: "British Council",
    issuedDate: "July 2024",
    credentialId: "B2 Level Certification",
    credentialUrl:
      "https://credentials.britishcouncil.org/3721606a-393a-40bd-bb61-6cf48a988f79?key=31531b16e75a6a28c3949037e0dd3ee9b07a631a0c187899f88a81256ea8d585#acc.LsgP2Efi",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e31e24'/%3E%3Ctext x='50' y='35' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='white'%3EAPTIS%3C/text%3E%3Ctext x='50' y='65' font-family='Arial, sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='white'%3EB2%3C/text%3E%3C/svg%3E",
    skills: ["English Proficiency", "Communication", "CEFR B2 Level"],
    color: "#e31e24",
  },
];

function CertificateCard({
  cert,
  index,
}: {
  cert: (typeof certificates)[0];
  index: number;
}) {
  const t = useTranslations("Certifications");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <TiltCard
        intensity={15}
        className="relative w-full h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-colors duration-300"
      >
        {/* Hover gradient glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${cert.color}15, transparent 40%)`,
          }}
        />

        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80, transparent)`,
          }}
        />

        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 p-6 flex flex-col h-[calc(100%-4px)]">
          {/* Header: Logo + Verified badge */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${cert.color}20 0%, ${cert.color}08 100%)`,
                border: `1px solid ${cert.color}30`,
              }}
            >
              <Image
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <BadgeCheck size={20} />
              <span className="text-xs font-medium uppercase tracking-wider text-amber-400/80">
                {t("verified")}
              </span>
            </div>
          </div>

          {/* Title & Issuer */}
          <h3 className="text-lg font-bold text-white mb-1 leading-snug line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 flex items-center gap-1.5">
            <Award size={14} className="text-gray-500" />
            {cert.issuer}
          </p>

          {/* Meta: date + credential ID */}
          <div className="flex flex-col gap-2 mb-5 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>
                {t("issuedPrefix")} {t(`items.${index}.issuedDate`)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-gray-600 truncate">
                ID: {cert.credentialId}
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 transition-colors duration-300"
                style={{ border: `1px solid ${cert.color}40` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn w-full justify-center"
          >
            <span>{t("showCredential")}</span>
            <ExternalLink
              size={14}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Certifications() {
  const t = useTranslations("Certifications");

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {t("sectionTitle")}
        </h2>
        <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto glow-amber" />
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{ perspective: "1000px" }}
      >
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
