'use client';

import {
  motion,
  type Variants,
  type Easing,
  AnimatePresence,
} from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Stack', href: '#tech-stack' },
    { name: 'Contacto', href: '#social' },
  ];

  const customEase: Easing = [0.25, 0.46, 0.45, 0.94];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variantes para desktop
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

  // Variantes para menú móvil
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: customEase,
      },
    },
  };

  // Variantes para el botón hamburguesa
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const hamburgerLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 90, y: 0 },
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        {!isMobile && (
          <motion.div
            className="flex items-center justify-center py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.ul className="flex space-x-8" variants={containerVariants}>
              {navItems.map((item) => (
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
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            {/* Mobile Header */}
            <div className="flex items-center justify-between py-6">
              <div className="text-white font-bold text-lg">LCisternas</div>

              {/* Hamburger Button */}
              <motion.button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  className="w-6 h-0.5 bg-white mb-1"
                  variants={hamburgerVariants}
                  animate={isMenuOpen ? 'open' : 'closed'}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white mb-1"
                  initial={false}
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-white"
                  variants={hamburgerLineVariants}
                  animate={isMenuOpen ? 'open' : 'closed'}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="fixed inset-0 bg-black/95 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close Button */}
                  <div className="absolute top-6 right-4">
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center min-h-screen">
                    <motion.ul
                      className="space-y-8 text-center"
                      variants={mobileMenuVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      {navItems.map((item) => (
                        <motion.li
                          key={item.name}
                          variants={mobileItemVariants}
                        >
                          <motion.button
                            onClick={() => scrollToSection(item.href)}
                            className="text-2xl font-medium text-gray-300 transition-colors duration-300 hover:text-white block py-3 px-6 rounded-lg"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item.name}
                          </motion.button>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </nav>
  );
}
