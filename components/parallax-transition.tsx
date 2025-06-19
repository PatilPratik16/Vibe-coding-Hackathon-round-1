"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function ParallaxTransition() {
  useEffect(() => {
    const leftHalf = document.querySelector(".left-half")
    const rightHalf = document.querySelector(".right-half")

    if (leftHalf && rightHalf) {
      gsap.fromTo(leftHalf, { x: "-100%" }, { x: "0%", duration: 0.8, ease: "power2.inOut" })

      gsap.fromTo(rightHalf, { x: "100%" }, { x: "0%", duration: 0.8, ease: "power2.inOut" })

      setTimeout(() => {
        gsap.to([leftHalf, rightHalf], {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
      }, 800)
    }
  }, [])

  return (
    <motion.div className="fixed inset-0 z-40 pointer-events-none" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="left-half absolute top-0 left-0 w-1/2 h-full bg-primary"></div>
      <div className="right-half absolute top-0 right-0 w-1/2 h-full bg-secondary"></div>
    </motion.div>
  )
}
