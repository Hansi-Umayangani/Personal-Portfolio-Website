import { motion } from "framer-motion";
import profilePic from "../assets/Profile_Picture02.jpg";
import Button from "./Button";
import { Download } from "lucide-react";

export default function AboutHero() {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
              bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
              bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--hero-paragraph)" }}>
            An aspiring professional in Information Technology and Human Resource Management, 
            focused on bridging people and processes through technology.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-[var(--primary)]/30 via-[var(--secondary)]/20 to-[var(--tertiary)]/25 shadow-lg">
              <div className="bg-[var(--background)]/80 rounded-2xl p-4 backdrop-blur-md">
                <img
                  src={profilePic}
                  alt="Gimhani Hansika"
                  className="w-72 md:w-80 object-cover rounded-xl shadow-inner"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-xl md:ml-auto"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="leading-relaxed text-justify">
                With a foundation in both IT and HRM, I combine technical understanding 
                with human-centered thinking to drive project success.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What Drives Me</h3>
              <p className="leading-relaxed text-justify">
                Delivering efficient, people-focused solutions while continuously learning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Beyond Code</h3>
              <p className="leading-relaxed text-justify">
                Singing and performance enhance creativity, confidence, and resilience.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-center"
            >
              <Button variant="solid" onClick={scrollToContact}>
                Say Hello
              </Button>

              <Button
                as="a"
                href="/D. P. L. Gimhani Hansika Umayangani - CV.pdf"
                variant="outline"
                download
              >
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
