import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import SkillsMarquee from "@/components/SkillsMarquee";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Navbar />
      <div className="w-full">
        <Hero />
        <AboutBento />
        <SkillsMarquee />
        <ExperienceTimeline />
        <Certifications />
        <FeaturedProjects />
        <Footer />
      </div>
    </main>
  );
}
