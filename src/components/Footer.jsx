import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Button from "./Button";

const socialLinks = [
  { icon: Github, href: "https://github.com/Hansi-Umayangani", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gimhani-hansika-945292311", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gimhanihansika2020@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full relative z-20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-8 md:gap-x-20 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gimhani Hansika
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              A passionate professional blending Software Development, Project Management, Human Resources, and Creative Design to craft impactful solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="sm" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Colombo, Sri Lanka</p>
              <p>gimhani0202@gmail.com</p>
              <p>+94 78 6620118</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t-[0.5px] border-secondary/40 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gimhani Hansika. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}