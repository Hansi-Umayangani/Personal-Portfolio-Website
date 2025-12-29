"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import Button from "./Button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const validateForm = () => {
  const newErrors = {}
  if (!formData.name.trim()) newErrors.name = "Name is required"
  if (!formData.email.trim()) newErrors.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Please enter a valid email address"
  if (!formData.subject.trim()) newErrors.subject = "Subject is required"
  if (!formData.message.trim()) newErrors.message = "Message is required"
  else if (formData.message.trim().length < 10)
    newErrors.message = "Message must be at least 10 characters long"

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  setIsSubmitting(true);

  try {
    console.log("Before API call");

    // Realistic API call using fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    console.log("After API call");

    setToastMessage("Message sent successfully! Thank you for reaching out.");

    setTimeout(() => setToastMessage(""), 3000);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error(error);
    setToastMessage("Error sending message. Please try again later.");
    setTimeout(() => setToastMessage(""), 3000);
  } finally {
    setIsSubmitting(false);
  }
};

  const inputClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-900 dark:text-white"
  const errorClass = "border-red-500"

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
        {toastMessage && (
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 ${
            toastMessage.includes("Error")
              ? "bg-red-500"
              : "bg-green-500"
          } text-white`}
        >
          {toastMessage}
        </div>
      )}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="font-medium">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${inputClass} ${errors.name ? errorClass : ""}`}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`${inputClass} ${errors.email ? errorClass : ""}`}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="font-medium">Subject *</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleInputChange}
              className={`${inputClass} ${errors.subject ? errorClass : ""}`}
            />
            {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-medium">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleInputChange}
              className={`${inputClass} ${errors.message ? errorClass : ""}`}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
            <Send className="h-4 w-4" />
            Send Message
            </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
