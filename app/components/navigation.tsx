"use client"

import { motion } from "framer-motion"

export default function Navigation() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Connect", href: "#social" },
  ]

  const scrollToSection = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-center py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="flex space-x-8" variants={containerVariants}>
            {navItems.map((item, index) => (
              <motion.li key={item.name} variants={itemVariants}>
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
}
