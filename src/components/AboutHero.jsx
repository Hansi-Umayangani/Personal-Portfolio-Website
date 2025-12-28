"use client";

import { motion } from "framer-motion";
import profilePic from "../assets/Profile_Picture02.jpg";
import Button from "./Button";
import { Download } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
                       bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
                       bg-clip-text text-transparent"
          >
            About Me
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--hero-paragraph)" }}
          >
            An aspiring professional in Information Technology and Human Resource Management, focused on bridging people and processes through technology. 
            Special interest lies in project management, team coordination, and efficient project execution.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-2 items-center">
            {/* Profile image card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center"
            >
                <div className="rounded-3xl p-1 bg-gradient-to-tr from-[var(--primary)]/30 via-[var(--secondary)]/20 to-[var(--tertiary)]/25 shadow-lg">
                <div className="bg-[var(--background)]/80 dark:bg-[var(--background)]/60 rounded-2xl p-4 backdrop-blur-md">
                    <img
                    src={profilePic}
                    alt="Profile"
                    className="w-72  md:w-80 object-cover rounded-xl shadow-inner"
                    />
                </div>
                </div>
            </motion.div>

        {/* Text blocks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-xl md:ml-auto md:mr-12"
            >
            <div>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--hero-heading)" }}>
                My Journey
                </h2>
                <p className="leading-relaxed text-justify" style={{ color: "var(--hero-paragraph)" }}>
                With a foundation in both IT and HRM, equipped to understand technical systems 
                and human dynamics, fostering a balanced approach to organizational growth and 
                project success.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: "var(--hero-subheading)" }}>
                What Drives Me
                </h3>
                <p className="leading-relaxed text-justify" style={{ color: "var(--hero-paragraph)" }}>
                Dedicated to delivering efficient, human-centered solutions, fostering teamwork, and aligning projects 
                with strategic goals while embracing continuous learning.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: "var(--hero-subheading)" }}>
                Beyond Code
                </h3>
                <p className="leading-relaxed text-justify" style={{ color: "var(--hero-paragraph)" }}>
                A passion for singing and performance adds creativity, confidence, and resilience, enhancing both 
                personal and professional endeavors.
                </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-START items-center mb-12"
            >
            {/* "Say Hello" button */}
            <Button as="a" href="/contact" variant="solid" size="md">
                Say Hello
            </Button>

            {/* "Download Resume" button */}
            <Button as="a" href="/resume.pdf" variant="outline" size="md" download="Gimhani_Hansika_Resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download CV
            </Button>
            </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
