import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]"
      role="banner"
    >
      <Image
        src="/contact/hero_contact.jpg"
        alt="Contact Us"
        fill
        priority
        className="object-cover"
      />

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      {/* Animated Centered Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center mt-30 md:mt-20 text-center px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4">
          Contact Us
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl max-w-3xl">
          We'd love to hear from you
        </p>
      </motion.div>
    </section>
  );
}