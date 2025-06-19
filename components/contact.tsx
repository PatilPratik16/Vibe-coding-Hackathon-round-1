"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Mail, MessageSquare, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.fromTo(".contact-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "pratikpatil886652@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Discord Community",
      description: "Join our active community",
      contact: "discord.gg/hackfest2024",
      color: "text-purple-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      contact: "+91-8866529909",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Virtual Event",
      description: "Participate from anywhere",
      contact: "Global Remote Event",
      color: "text-orange-500",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about HackFest 2024? Need help with registration? We're here to help you every step of the
            way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                      <p className="text-sm font-medium break-all max-w-full">{info.contact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold mb-2">Quick Response Times</h4>
              <p className="text-muted-foreground text-sm">
                Our team is committed to providing quick and helpful responses. For urgent matters during the hackathon,
                join our Discord for real-time support.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your question or concern..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
