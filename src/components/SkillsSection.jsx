"use client"

import { motion } from "framer-motion"

const technicalSkills = [
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "CSS / Tailwind", level: 75, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "JavaScript", level: 80, category: "Language" },
  { name: "C#", level: 80, category: "Language" },
  { name: "Python", level: 75, category: "Language" },
]

const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Creativity",
  "Adaptability",
  "Human Resources Management",
]

const tools = [
  "Git",
  "GitHub",
  "Visual Studio 2020",
  "VS Code",
  "Figma",
  "Canva",
  "ClickUp",
  "MS Office",
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise, management strengths, and collaborative tools 
            that enable seamless coordination of people, processes, and technology
          </p>
        </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
      
            {/* Technical Skills */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            <div className="bg-white/80 dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                {technicalSkills.map((skill, idx) => (
                    <div key={idx}>
                    {/* Skill name + category badge on the same line */}
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-yellow-700 bg-[#FCE3BB] rounded-full">
                            {skill.category}
                        </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>

                    {/* Animated skill level bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                        className="h-2 rounded-full bg-[#84cc16]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        />
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </motion.div>

            {/* Soft Skills & Tools */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
            >
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                    {tools.map((tool, idx) => (
                    <span
                        key={idx}
                        className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                    >
                        {tool}
                    </span>
                    ))}
                </div>
                </div>
            </motion.div>

            </div>
        </div>
    </section>
  )
}
