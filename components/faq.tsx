"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    gsap.fromTo(".faq-item", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 })
  }, [])

  const faqs = [
    {
      question: "Who can participate in HackFest 2024?",
      answer:
        "HackFest 2024 is open to developers of all skill levels, from beginners to experts. Whether you're a student, professional, or hobbyist, you're welcome to join. Teams can have 1-4 members.",
    },
    {
      question: "What technologies can I use?",
      answer:
        "You can use any frontend technologies including React, Vue.js, Angular, Svelte, vanilla JavaScript, TypeScript, and any CSS frameworks. The focus is on creating amazing user interfaces and experiences.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "No, you can participate solo or form a team of up to 4 members. We also have a team formation channel in our Discord server where you can find teammates with complementary skills.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be judged on Design Accuracy (40%), Responsiveness (25%), Innovation/Enhancements (20%), and Code Quality & Best Practices (15%). Make sure your project meets all mandatory requirements.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, HackFest 2024 is completely free to participate. We believe in making hackathons accessible to everyone regardless of their financial situation.",
    },
    {
      question: "What if I'm a beginner?",
      answer:
        "Perfect! We encourage beginners to participate. We'll provide learning resources, mentorship opportunities, and have special recognition for outstanding beginner projects.",
    },
    {
      question: "How will the event be conducted?",
      answer:
        "HackFest 2024 is a virtual event. All communication will happen through our Discord server, and submissions will be made through our online platform. You can participate from anywhere in the world.",
    },
    {
      question: "What happens after I submit my project?",
      answer:
        "After submission, our panel of expert judges will evaluate all projects based on the judging criteria. Results will be announced during our virtual awards ceremony, and winners will be contacted directly.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers! Find everything you need to know about HackFest 2024.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item bg-card border rounded-lg overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Can't find what you're looking for? Join our Discord community or send us an email. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Discord
              </motion.button>
              <motion.button
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
