"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })

    gsap.fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.4 })

    gsap.fromTo(".hero-stats", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6, stagger: 0.1 })
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HackFest 2025
            </span>
          </h1>
        </motion.div>

        <motion.div className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the ultimate frontend development challenge. Build, innovate, and compete with the best developers from
            around the world.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button size="lg" className="text-lg px-8 py-3">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Learn More
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="hero-stats flex items-center justify-center space-x-3 p-6 rounded-lg bg-card border"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">48 Hours</p>
              <p className="text-muted-foreground">Duration</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-stats flex items-center justify-center space-x-3 p-6 rounded-lg bg-card border"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-muted-foreground">Participants</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-stats flex items-center justify-center space-x-3 p-6 rounded-lg bg-card border"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="text-muted-foreground">Remote Event</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
