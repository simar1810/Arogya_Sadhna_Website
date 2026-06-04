"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]">
      
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src="/services/services_heros.webp"
          alt="Our Services"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/20"
      />

      {/* CENTERED TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-30 md:mt-20 text-center px-4 sm:px-6 lg:px-12">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D9186F] text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl max-w-2xl"
        >
          Evidence-based, personalized nutrition care plans
        </motion.p>

      </div>
    </section>
  );
}