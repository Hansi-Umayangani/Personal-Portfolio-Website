import HeroSection from "../components/HeroSection";
import AboutHero from "../components/AboutHero";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsHero } from "../components/ProjectsHero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { GitHubProjects } from "../components/GitHubProjects";
import { ContactHero } from "../components/ContactHero";
import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";

import Animated3DBackground from "../components/Animated3DBackground";
import LightThemeBackground from "../components/LightTheme3DBackground";
import useTheme from "../hooks/useTheme";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full min-h-screen">
      {/* Theme-based background */}
      {theme === "dark" ? <Animated3DBackground /> : <LightThemeBackground />}

      {/* Page content */}
      <div className="relative z-10 flex flex-col">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutHero />
          <ExperienceSection />
          <SkillsSection />
        </section>

        <section id="projects" className="flex flex-col">
        <ProjectsHero />

        <div className="container mx-auto px-4 py-4 md:py-2">
          <GitHubProjects />
        </div>
      </section>

      <section id="contact" className="flex flex-col min-h-screen">
        <ContactHero />

        <div className="container mx-auto px-4 py-4 md:py-2">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default Home;
