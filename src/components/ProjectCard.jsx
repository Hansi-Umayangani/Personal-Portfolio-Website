"use client"

import { motion } from "framer-motion";

export function ProjectCard({ project }) {
    return (
    <motion.div 
        whileHover={{ scale: 1.03 }} 
        className="bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
        
        {/* Project Image */}
        <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800">
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 text-[var(--hero-heading)]">
                {project.title}
            </h3>
            <p className="text-[var(--hero-paragraph)] flex-1">{project.description}</p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              {(project.demoLink || project.demoVideo) && (
                <a
                  href={project.demoVideo || project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition"
                >
                  {project.demoVideo ? "Watch Demo" : "Live Demo"}
                </a>
              )}
              {project.codeLink && (
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
                >
                  Source Code
                </a>
              )}
            </div>
        </div>
    </motion.div>
    );
}
