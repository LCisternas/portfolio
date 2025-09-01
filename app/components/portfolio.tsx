"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Eye, Award, Palette, Cpu, Hammer } from "lucide-react"
import ParticleBackground from "./particle-background"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    { id: "all", name: "All Projects", icon: Palette },
    { id: "digital", name: "Digital Art", icon: Cpu },
    { id: "paintings", name: "Paintings", icon: Palette },
    { id: "sculptures", name: "Sculptures", icon: Hammer },
  ]

  const works = [
    {
      id: 1,
      title: "Digital Dreamscape",
      category: "digital",
      year: "2024",
      description:
        "An immersive digital installation exploring the boundaries between reality and dreams through interactive projections.",
      views: "12.5K",
      featured: true,
      status: "Exhibition Ready",
    },
    {
      id: 2,
      title: "Abstract Harmony",
      category: "paintings",
      year: "2023",
      description:
        "A series of large-scale acrylic paintings that explore color relationships and emotional resonance.",
      views: "8.2K",
      featured: false,
      status: "Sold",
    },
    {
      id: 3,
      title: "Metal Flow",
      category: "sculptures",
      year: "2024",
      description:
        "Contemporary steel sculpture representing the fluidity of time and space in modern urban environments.",
      views: "15.1K",
      featured: true,
      status: "Available",
    },
    {
      id: 4,
      title: "Neon Nights",
      category: "digital",
      year: "2023",
      description:
        "Cyberpunk-inspired digital artwork created for a major tech company's headquarters lobby installation.",
      views: "22.3K",
      featured: false,
      status: "Commissioned",
    },
    {
      id: 5,
      title: "Nature's Whisper",
      category: "paintings",
      year: "2024",
      description: "Oil on canvas series capturing the subtle movements and sounds of natural environments.",
      views: "6.7K",
      featured: false,
      status: "Available",
    },
    {
      id: 6,
      title: "Bronze Echo",
      category: "sculptures",
      year: "2023",
      description:
        "Bronze sculpture inspired by sound waves and acoustic phenomena, part of a public art installation.",
      views: "9.8K",
      featured: false,
      status: "Public Display",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "digital":
        return Cpu
      case "paintings":
        return Palette
      case "sculptures":
        return Hammer
      default:
        return Palette
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "digital":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      case "paintings":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "sculptures":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-300"
      case "Sold":
        return "bg-red-500/20 text-red-300"
      case "Commissioned":
        return "bg-blue-500/20 text-blue-300"
      case "Exhibition Ready":
        return "bg-yellow-500/20 text-yellow-300"
      case "Public Display":
        return "bg-purple-500/20 text-purple-300"
      default:
        return "bg-gray-500/20 text-gray-300"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="portfolio" className="relative bg-black py-20 overflow-hidden">
      <ParticleBackground particleCount={50} />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Portfolio
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of my artistic works spanning digital installations, traditional paintings, and
            contemporary sculptures.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm flex items-center gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                </Button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredWorks.map((work, index) => {
              const CategoryIcon = getCategoryIcon(work.category)
              return (
                <motion.div
                  key={work.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${work.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-zinc-900/50 backdrop-blur-sm border-zinc-700 hover:border-zinc-600 transition-all duration-300 group hover:bg-zinc-900/70">
                    <CardContent className="p-6">
                      <motion.div
                        className="flex items-start justify-between mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`p-3 rounded-lg ${getCategoryColor(work.category)}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CategoryIcon className="h-5 w-5" />
                          </motion.div>
                          <div className="flex gap-2">
                            <span
                              className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(work.category)}`}
                            >
                              {work.category}
                            </span>
                            {work.featured && (
                              <motion.span
                                className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                              >
                                Featured
                              </motion.span>
                            )}
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center gap-1 text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="text-sm font-medium">{work.views}</span>
                        </motion.div>
                      </motion.div>

                      <motion.h3
                        className="text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {work.title}
                      </motion.h3>

                      <motion.div
                        className="flex items-center gap-1 text-gray-400 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{work.year}</span>
                      </motion.div>

                      <motion.p
                        className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {work.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-zinc-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(work.status)}`}>
                          {work.status}
                        </span>
                        {work.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-400">
                            <Award className="h-3 w-3" />
                            Highlighted Work
                          </span>
                        )}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
