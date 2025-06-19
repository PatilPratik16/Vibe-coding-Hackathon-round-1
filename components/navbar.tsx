"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onSectionChange: (section: string) => void
  currentSection: string
}

export default function Navbar({ onSectionChange, currentSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Timeline", id: "timeline" },
    { name: "Prizes", id: "prizes" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ]

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div className="text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
            HackFest 2025
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  currentSection === item.id ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
