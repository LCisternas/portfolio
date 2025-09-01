"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./particle-background"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/cv.pdf" // You would put your actual CV file here
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Lucas_Cisternas_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      <ParticleBackground particleCount={100} className="absolute inset-0 h-full w-full bg-black" />
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={itemVariants}>
          <motion.h1
            className="text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl leading-tight"
            variants={nameVariants}
          >
            <motion.div variants={nameVariants} className="block">
              LUCAS
            </motion.div>
            <motion.div variants={nameVariants} className="block">
              CISTERNAS
            </motion.div>
          </motion.h1>
        </motion.div>

        <motion.p className="text-lg text-gray-400 sm:text-8xl mb-8" variants={itemVariants}>
          Software Enginner
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            onClick={handleDownloadCV}
            className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-lg font-medium"
            size="lg"
          >
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              My CV
            </motion.div>

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" variants={itemVariants}>
          <button
            onClick={() => {
              const nextSection = document.querySelector("section")
              nextSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group flex flex-col items-center justify-center gap-2 text-gray-400 transition-colors hover:text-white"
            aria-label="Scroll down to see more"
          >
            <span className="text-sm font-medium text-center">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex h-8 w-5 items-end justify-center rounded-full border border-gray-400 group-hover:border-white mx-auto"
            >
              <div className="h-2 w-0.5 bg-gray-400 group-hover:bg-white"></div>
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
