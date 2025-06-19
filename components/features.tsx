"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"
import { Smartphone, Palette, Accessibility, Rocket, Shield, Users } from "lucide-react"

export default function Features() {
  useEffect(() => {
    gsap.fromTo(".feature-item", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 })
  }, [])

  const features = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Create layouts that work perfectly on all devices and screen sizes.",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Design beautiful, intuitive interfaces with the latest design trends.",
      color: "text-purple-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility First",
      description: "Build inclusive applications that work for everyone.",
      color: "text-green-500",
    },
    {
      icon: Rocket,
      title: "Performance Optimized",
      description: "Create fast, efficient applications with optimal loading times.",
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Implement best practices for secure frontend development.",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team using modern development workflows.",
      color: "text-cyan-500",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master these essential frontend development skills and showcase them in your hackathon project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item group p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground mb-6">
            These features represent the core skills you'll need to excel in the hackathon. Start preparing now and give
            yourself the best chance to win!
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
