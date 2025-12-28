"use client";

import { motion } from "framer-motion";

export function ProjectsHero() {
  return (
    <section className="pt-24 pb-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
                       bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
                       bg-clip-text text-transparent">
                My Projects
            </h1>
            <p className="text-xl text-[var(--hero-paragraph)] max-w-2xl mx-auto">
                A showcase of my work, from personal experiments to production applications.
            </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
