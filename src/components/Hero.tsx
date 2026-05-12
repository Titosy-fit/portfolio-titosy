"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "./hero/AnimatedBackground";
import { Info } from "./hero/Infos";
import { DownloadSection } from "./hero/DownloadSection";
import { AvatarSection } from "./hero/AvatarSection";
import { Scrool } from "./hero/Scrool";

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

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading" 
      id="home" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />

      <motion.div 
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            variants={slideInLeft}
          >
            <motion.div variants={fadeInUp}>
              <Info />
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-8 lg:mt-10"
            >
              <DownloadSection />
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            variants={slideInRight}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <AvatarSection />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Scrool />
      </motion.div>
    </section>
  );
}