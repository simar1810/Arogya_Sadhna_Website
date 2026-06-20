"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutDetails() {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-14 md:gap-20">

        {/* Left Image Box (40%) */}
        <motion.div
          className="flex justify-center items-center w-full md:w-[40%]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-2xl bg-white border border-[#D91865] shadow-xl p-6 relative">
            
            <Image
              src="/about/about_nutritionist.jpeg"
              alt="Sadhana Clinic"
              width={400}
              height={500}
              className="w-[320px] sm:w-[360px] md:w-[380px] h-[280px] sm:h-[350px] md:h-[450px] object-cover"
            />

            {/* Bottom-right info box */}
            <div className="absolute bottom-4 right-4 bg-white shadow-md rounded-lg px-3 py-2 text-sm border-2 border-[#D91865]">
              <h4 className="font-bold text-gray-800">Bhaote Accident Hospital</h4>
              <p className="text-gray-600">Buldhana, Maharashtra</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content Box (60%) */}
        <motion.div
          className="w-full md:w-[60%] flex flex-col justify-center space-y-3"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-pink-600 font-semibold tracking-widest uppercase text-sm md:text-xs">
            Preventive & Functional Nutritionist
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sadhana Bhaote
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            Dr. Sadhana Bhaote is based in Buldhana (Maharashtra). She runs her clinic at Bhaote Accident Hospital Physiotherapy and Diet Clinic, dedicated to helping individuals achieve better health through evidence-based, personalized diet, workout and lifestyle guidance.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            With a strong academic foundation and specialized certifications, she brings a holistic and functional approach to nutrition care—addressing root causes rather than just symptoms.
          </p>

          <br />
          {/* Approach Box */}
          <div className="bg-pink-100 rounded-lg p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-pink-600 font-bold">
              <FaStar />
              <span>Approach & Philosophy</span>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              Dr. Sadhana is passionate about promoting evidence-based nutrition and empowering individuals to make informed and sustainable lifestyle choices. Her approach combines clinical expertise with practical, realistic strategies tailored to each individual.
            </p>
          </div>

          {/* Beyond Nutrition */}
          <div className="border-l-4 border-pink-600 pl-4 md:pl-6 flex flex-col gap-2">
            <h3 className="font-bold text-pink-600">
              Beyond Nutrition
            </h3>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              Beyond her professional work, she is a fitness and yoga practitioner, health awareness speaker, and writer which strengthens her belief in integrating movement, mindfulness, and nutrition for overall wellbeing.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}