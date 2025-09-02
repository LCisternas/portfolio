'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ParticleBackground from './particle-background';

const experiences = [
  {
    title: 'Frontend developer',
    company: 'Genomawork',
    period: '2022 - 2023',
    description:
      'Desarrollé y mantuve aplicaciones web utilizando React y Redux para gestión de estado compleja. Colaboré con el equipo de UX/UI para traducir mockups en componentes reutilizables y responsivos usando SCSS',
  },
  {
    title: 'Co-founder | Software engineer',
    company: 'Retsic',
    period: '2024 - Presente',
    description:
      'Desarrollé desde cero un software empresarial de gestión de inventario utilizado por múltiples centros de distribución en Chile. Implementé integración directa con ERP Softland, automatizando procesos de sincronización de datos y reduciendo errores manuales.',
  },
];

function Timeline() {
  // Simple mobile detection without hook dependency
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      className={`space-y-12 relative ${
        !isMobile
          ? 'before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0'
          : ''
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {!isMobile && (
        <motion.div
          className="absolute left-1/2 -translate-x-px w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20 z-0"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      )}

      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
            }`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 p-6 transition-all duration-300 hover:border-zinc-600 group hover:bg-zinc-900/70">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <motion.h3
                  className="text-xl font-bold mb-2 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {experience.title}
                </motion.h3>
                <motion.div
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {experience.company} | {experience.period}
                </motion.div>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {experience.description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-white z-10 flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.6,
                  type: 'spring',
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-black"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2 + 0.8,
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          )}
        </div>
      ))}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="relative bg-black py-20 overflow-hidden"
    >
      <ParticleBackground particleCount={60} />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Experiencia
        </motion.h2>

        <div className="mx-auto max-w-6xl">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
