"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"
import { Code, Zap, Trophy, Globe } from "lucide-react"

export default function About() {
  useEffect(() => {
    gsap.fromTo(".about-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 })
  }, [])

  const features = [
    {
      icon: Code,
      title: "Frontend Focus",
      description: "Showcase your skills in modern frontend technologies like React, Vue, Angular, and more.",
    },
    {
      icon: Zap,
      title: "Fast-Paced",
      description: "48 hours of intense coding, learning, and building amazing user interfaces.",
    },
    {
      icon: Trophy,
      title: "Great Prizes",
      description: "Win exciting prizes, internships, and recognition from top tech companies.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with developers worldwide and build lasting professional relationships.",
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
            About <span className="text-primary">HackFest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HackFest 2024 is the premier frontend development hackathon that brings together passionate developers to
            create innovative web experiences. Whether you're a beginner or an expert, this is your chance to shine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="about-card p-6 rounded-lg bg-card border text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Why Participate?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This hackathon is designed to challenge your frontend skills, push your creative boundaries, and help you
              build something amazing while connecting with like-minded developers from around the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
