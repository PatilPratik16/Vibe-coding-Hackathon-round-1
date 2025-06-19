"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Loader from "@/components/loader"
import ParallaxTransition from "@/components/parallax-transition"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState("hero")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    if (section === currentSection) return

    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSection(section)
      setIsTransitioning(false)
    }, 1000)
  }

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "hero":
        return <Hero />
      case "about":
        return <About />
      case "features":
        return <Features />
      case "timeline":
        return <Timeline />
      case "prizes":
        return <Prizes />
      case "faq":
        return <FAQ />
      case "contact":
        return <Contact />
      default:
        return <Hero />
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSectionChange={handleSectionChange} currentSection={currentSection} />

      <AnimatePresence mode="wait">{isTransitioning && <ParallaxTransition key="transition" />}</AnimatePresence>

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderCurrentSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
