"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"
import { Trophy, Medal, Award, Gift } from "lucide-react"

export default function Prizes() {
  useEffect(() => {
    gsap.fromTo(
      ".prize-card",
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2 },
    )
  }, [])

  const prizes = [
    {
      icon: Trophy,
      position: "1st Place",
      title: "Grand Prize Winner",
      amount: "$5,000",
      benefits: [
        "Cash Prize: $5,000",
        "Internship Opportunity",
        "Mentorship Program",
        "Conference Tickets",
        "Premium Swag Kit",
      ],
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      textColor: "text-yellow-600",
    },
    {
      icon: Medal,
      position: "2nd Place",
      title: "Runner Up",
      amount: "$3,000",
      benefits: [
        "Cash Prize: $3,000",
        "Tech Gadgets",
        "Online Course Access",
        "Professional Portfolio Review",
        "Swag Kit",
      ],
      gradient: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      textColor: "text-gray-600",
    },
    {
      icon: Award,
      position: "3rd Place",
      title: "Third Place",
      amount: "$1,500",
      benefits: [
        "Cash Prize: $1,500",
        "Software Licenses",
        "Learning Resources",
        "Certificate of Achievement",
        "Swag Kit",
      ],
      gradient: "from-amber-600 to-amber-800",
      bgGradient: "from-amber-50 to-amber-100",
      textColor: "text-amber-700",
    },
  ]

  const specialPrizes = [
    {
      title: "Best Design",
      description: "Most visually appealing and user-friendly interface",
      prize: "$500 + Design Tools",
    },
    {
      title: "Most Innovative",
      description: "Most creative and original solution",
      prize: "$500 + Tech Gadgets",
    },
    {
      title: "Best Accessibility",
      description: "Best implementation of accessibility features",
      prize: "$500 + Learning Resources",
    },
    {
      title: "People's Choice",
      description: "Voted by the community as the favorite project",
      prize: "$300 + Swag Kit",
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
            Amazing <span className="text-primary">Prizes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for incredible prizes worth over $15,000 in total value, including cash, internships, and exclusive
            opportunities.
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className={`prize-card relative overflow-hidden rounded-xl bg-gradient-to-br ${prize.bgGradient} border-2 border-transparent hover:border-primary/20 transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center`}
                >
                  <prize.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{prize.position}</h3>
                <p className={`text-lg font-semibold mb-4 ${prize.textColor}`}>{prize.title}</p>
                <div
                  className={`text-4xl font-bold mb-6 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}
                >
                  {prize.amount}
                </div>

                <ul className="space-y-2 text-left">
                  {prize.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <motion.div
          className="bg-card border rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Special Category Awards</h3>
            <p className="text-muted-foreground">Additional prizes for outstanding achievements in specific areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{special.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{special.description}</p>
                <p className="text-primary font-semibold">{special.prize}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Win Big?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              These amazing prizes are waiting for you! Register now and start building your winning project.
            </p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register to Compete
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
