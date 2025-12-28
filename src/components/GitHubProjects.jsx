import { ProjectCard } from "./ProjectCard";
import useGitHubProjects from "../hooks/useGitHubProjects";

import aquaPOSImg from "../assets/Projects_Snapshots/AquaPOS.png";
import ssFootwearImg from "../assets/Projects_Snapshots/S&S_Footwear_Web.png";
import portfolioImg from "../assets/Projects_Snapshots/Portfolio.png";
import pawfectImg from "../assets/Projects_Snapshots/Pawfect_Home_Web.png";

// Featured projects
const FEATURED_REPOS = [
  "AquaPOS-Desktop-Application",
  "S-S-Footwear-Promo-Website",
  "Personal-Portfolio-Website",
];

const repoImages = {
  "AquaPOS-Desktop-Application": aquaPOSImg,
  "S-S-Footwear-Promo-Website": ssFootwearImg,
  "Personal-Portfolio-Website": portfolioImg,
  "Pawfect-Home-Pet-Adoption-Website": pawfectImg,
};

// Safe image resolver
const getImage = (repo) =>
  repoImages[repo.name] || portfolioImg;

export function GitHubProjects() {
  const { projects, loading, error } = useGitHubProjects();

  if (loading || error || !projects.length) return null;

  const featuredProjects = projects
    .filter((repo) => FEATURED_REPOS.includes(repo.name))
    .map((repo) => ({
      title: repo.name,
      description: repo.description,
      image: getImage(repo),
      demoLink: repo.homepage || "#",
      codeLink: repo.html_url,
    }));

  const otherProjects = projects
    .filter((repo) => !FEATURED_REPOS.includes(repo.name))
    .map((repo) => ({
      title: repo.name,
      description: repo.description,
      image: getImage(repo),
      demoLink: repo.homepage || "#",
      codeLink: repo.html_url,
    }));

  const projectsToShow = [...featuredProjects, ...otherProjects];

  return (
    <section className="py-20 bg-gradient-to-t from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--hero-heading)]">
          GitHub Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
