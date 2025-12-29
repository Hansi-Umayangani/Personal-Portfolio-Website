import { motion } from "framer-motion";

import eventImg from "../assets/Experience_Cards/Evenet_Management.jpg";
import uiuxImg from "../assets/Experience_Cards/UI-UX_Designer.jpg";
import graphicImg from "../assets/Experience_Cards/Graphic_Designer.jpg";
import programmerImg from "../assets/Experience_Cards/Programmer.jpg";
import researchImg from "../assets/Experience_Cards/Research-Documentation.jpg";
import aestheticImg from "../assets/Experience_Cards/Aesthatics.jpg";

const experiences = [
  {
    role: "Event & Project Management",
    caption:
      "Coordinating and organizing events, guiding project teams, managing documentation, and fostering leadership, teamwork, and effective communication across various student projects and workshops.",
    bgImage: eventImg,
  },
  {
    role: "UI/UX Designer",
    caption: "Designing modern, responsive interfaces and ensuring seamless user experiences.",
    bgImage: uiuxImg,
  },
  {
    role: "Graphic Design",
    caption: "Crafting creative visuals, posters, and digital content that bring ideas to life aesthetically.",
    bgImage: graphicImg,
  },
  {
    role: "Full Stack Web Projects",
    caption:
      "Developing websites and applications with modern tools while learning to balance frontend aesthetics and backend logic.",
    bgImage: programmerImg,
  },
  {
    role: "Documentation & Research",
    caption:
      "Preparing structured reports, research findings, and project documentation that meet professional standards.",
    bgImage: researchImg,
  },
  {
    role: "Personal & Creative Growth",
    caption:
      "Exploring creativity beyond technology through music, performance, photography, design, and artistic expression.",
    bgImage: aestheticImg,
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of professional experiences, creative contributions, and personal growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer 
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${exp.bgImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 
                              flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {exp.role}
                </h3>
                <p className="text-sm text-white opacity-90">
                  {exp.caption}
                </p>
              </div>

              <div className="aspect-[4/3]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
