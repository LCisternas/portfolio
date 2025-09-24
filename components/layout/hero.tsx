'use client';

import { motion, type Variants, type Easing } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from './particle-background';
import Link from 'next/link';

export default function Hero() {
  const customEase: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <ParticleBackground
        particleCount={100}
        className="absolute inset-0 h-full w-full bg-black"
      />
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
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

        <motion.p
          className="text-lg text-gray-400 sm:text-4xl"
          variants={itemVariants}
        >
          Software Engineer
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="https://drive.google.com/file/d/1rNKp4GyGR_wAhBpOugNHEZ5c_idV3dQW/view?usp=sharing"
            target="_blank"
          >
            <Button size="lg" variant="secondary">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                CV
              </motion.div>
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => {
              const nextSection = document.querySelector('section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-20 left-0 right-0 group flex flex-col items-center justify-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <span className="text-sm font-medium text-center">Desliza</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              className="flex h-8 w-5 items-end justify-center rounded-full border border-gray-400 group-hover:border-white mx-auto"
            >
              <div className="h-2 w-0.5 bg-gray-400 group-hover:bg-white"></div>
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
