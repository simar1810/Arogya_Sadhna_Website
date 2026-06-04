"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
      <Image
        src="/about/about_hero.jpg" // Replace with your image
        alt="About Sadhana Bhaote"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50"
      />

      {/* Centered Text */}
      <div className="mt-30 md:mt-20 absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4"
        >
          About The Nutritionist
        </motion.h1>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl max-w-2xl"
        >
          Know More About Sadhana Bhaote
        </motion.p>
      </div>
    </section>
  );
}