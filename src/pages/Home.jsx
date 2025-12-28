import HeroSection from "../components/HeroSection";
import AboutHero from "../components/AboutHero";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { GitHubProjects } from "../components/GitHubProjects";
import { ContactHero } from "../components/ContactHero";

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

        <section id="projects">
          <GitHubProjects />
        </section>

        <section id="contact">
          <ContactHero />
        </section>
      </div>
    </div>
  );
};

export default Home;
