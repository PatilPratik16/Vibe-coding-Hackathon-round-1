"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"
import { Calendar, Clock, Flag, Trophy } from "lucide-react"

export default function Timeline() {
  useEffect(() => {
    gsap.fromTo(".timeline-item", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 })
  }, [])

  const timelineEvents = [
    {
      icon: Calendar,
      title: "Registration Opens",
      date: "March 1, 2024",
      time: "12:00 PM UTC",
      description: "Registration portal opens for all participants. Early bird discounts available.",
      status: "completed",
    },
    {
      icon: Flag,
      title: "Hackathon Begins",
      date: "March 15, 2024",
      time: "6:00 PM UTC",
      description: "Opening ceremony and project themes announcement. Let the coding begin!",
      status: "upcoming",
    },
    {
      icon: Clock,
      title: "Mid-Point Check",
      date: "March 16, 2024",
      time: "6:00 PM UTC",
      description: "Optional progress sharing and mentor consultation sessions.",
      status: "upcoming",
    },
    {
      icon: Trophy,
      title: "Submission Deadline",
      date: "March 17, 2024",
      time: "6:00 PM UTC",
      description: "Final submissions due. Judging begins immediately after.",
      status: "upcoming",
    },
    {
      icon: Trophy,
      title: "Results & Awards",
      date: "March 20, 2024",
      time: "3:00 PM UTC",
      description: "Winner announcement and virtual awards ceremony.",
      status: "upcoming",
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
            Event <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with all the important dates and milestones for HackFest 2024.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="timeline-item relative flex items-start space-x-6 mb-12 last:mb-0"
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6"></div>

                {/* Content */}
                <div className="flex-1 md:ml-8">
                  <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          event.status === "completed" ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <event.icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              event.status === "completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {event.status === "completed" ? "Completed" : "Upcoming"}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-muted-foreground mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </span>
                        </div>

                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Mark your calendars and set reminders for these important dates. Follow us on social media for real-time
              updates.
            </p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
