"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "gimhani0202@gmail.com",
    href: "mailto:gimhani0202@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94786620118",
    href: "tel:+94786620118",
    description: "Available Mon-Fri, 9AM-6PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: null,
    description: "Open to remote opportunities",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Hansi-Umayangani", username: "@Hansi-Umayangani" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gimhani-hansika-945292311", username: "Gimhani Hanssika" },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >

        {/* Contact Methods */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-6">
            {contactMethods.map((method, index) => (
            <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
            >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <method.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                <h4 className="font-semibold">{method.label}</h4>
                {method.href ? (
                    <a href={method.href} className="text-primary font-medium hover:underline">
                    {method.value}
                    </a>
                ) : (
                    <p className="font-medium">{method.value}</p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                </div>
            </motion.div>
            ))}
        </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Connect with me</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
            <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-xl shadow-sm hover:shadow-md transition duration-300 group"
                >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition duration-300">
                    <social.icon className="h-5 w-5 text-primary group-hover:text-primary-dark transition duration-300" />
                </div>
                <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition duration-300">
                    {social.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{social.username}</div>
                </div>
                </a>
            </motion.div>
            ))}
        </div>
        </div>
    
    </motion.div>
  )
}
