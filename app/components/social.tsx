'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView, type Variants, type Easing } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';
import ParticleBackground from './particle-background';

export default function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const customEase: Easing = [0.25, 0.46, 0.45, 0.94];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/LCisternas',
      color: 'hover:text-gray-300 hover:bg-gray-800/50',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/lucas-cisternas/',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@lucascisternas7370',
      color: 'hover:text-red-400 hover:bg-red-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: customEase,
      },
    },
  };

  return (
    <section id="social" className="relative overflow-hidden bg-black py-20">
      <ParticleBackground particleCount={30} />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contactame
          </motion.h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            className="grid gap-8 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all duration-300 backdrop-blur-sm ${social.color}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="mb-4 rounded-full bg-white/5 p-4 transition-all duration-300 group-hover:bg-white/10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.2,
                      ease: 'easeOut',
                    }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>
                  <motion.h3
                    className="mb-2 text-xl font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    {social.name}
                  </motion.h3>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
