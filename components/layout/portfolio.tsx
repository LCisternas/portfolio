'use client';

import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  type Variants,
  type Easing,
} from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ParticleBackground from '../particle-background';
import {
  Building2,
  Monitor,
  Code2,
  Server,
  Smartphone,
  Palette,
  Brush,
  Code,
  Eye,
  Calendar,
  Award,
} from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const works = [
    {
      id: 1,
      title: 'Retsic - Sistema de Gestión de Inventario',
      category: 'Fullstack',
      year: '2024',
      description:
        'Software empresarial desarrollado desde cero para control y gestión de stock e inventario con integración directa al ERP Softland. Implementado en múltiples centros de distribución de Chile en rubros de helados, carnes, abarrotes y materiales de construcción.',
      status: 'En Producción',
      featured: true
    },
    {
      id: 2,
      title: 'Webpay + Nextjs',
      category: 'Frontend',
      year: '2025',
      description:
        'Ejemplo practico para integrar el SKD de Transbank utilizando el API route de Nextjs',
      status: 'Open Source',
      featured: false
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return Monitor;
      case 'FullStack':
        return Code2;
      case 'Backend':
        return Server;
      case 'Mobile':
        return Smartphone;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'Fullstack':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      case 'Backend':
        return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
      case 'Mobile':
        return 'bg-pink-500/20 text-pink-300 border border-pink-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  // Función para obtener colores por estado
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Producción':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'En Desarrollo':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      case 'Open Source':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      case 'MVP':
        return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  const customEase: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="portfolio" className="relative bg-black py-20 overflow-hidden">
      <ParticleBackground particleCount={50} />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Portafolio
          </motion.h2>
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {works.map((work, index) => {
              const CategoryIcon = getCategoryIcon(work.category);
              return (
                <motion.div
                  key={work.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${
                    work.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
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
                            className={`p-3 rounded-lg ${getCategoryColor(
                              work.category
                            )}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CategoryIcon className="h-5 w-5" />
                          </motion.div>
                          <div className="flex gap-2">
                            <span
                              className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(
                                work.category
                              )}`}
                            >
                              {work.category}
                            </span>
                            {/* {work.featured && (
                              <motion.span
                                className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                              >
                                Featured
                              </motion.span>
                            )} */}
                          </div>
                        </div>
                        {/* <motion.div
                          className="flex items-center gap-1 text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {work.views}
                          </span>
                        </motion.div> */}
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
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(
                            work.status
                          )}`}
                        >
                          {work.status}
                        </span>
                        {/* {work.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-400">
                            <Award className="h-3 w-3" />
                            Highlighted Work
                          </span>
                        )} */}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
