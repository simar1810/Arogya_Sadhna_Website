"use client";

import React from "react";
import { FaMapMarkerAlt, FaLaptop, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const router = useRouter();

  const onlineSteps = [
    {
      index: 1,
      title: "Complimentary Clarity Call",
      chip: "5 TO 10 MINUTES",
      desc: "A brief introductory call to understand your health concerns, goals, and to determine if we’re the right fit for your journey.",
    },
    {
      index: 2,
      title: "Health Data & Assessment",
      chip: "DATA COLLECTION",
      desc: "We collect your anthropometric measurements, detailed medical history, lifestyle information, and recent blood reports for a comprehensive analysis.",
    },
    {
      index: 3,
      title: "Personalized Nutrition Plan",
      chip: "DELIVERED WITHIN 24 - 48 HOURS",
      desc: "You receive a customized, practical, and scientifically backed nutrition plan designed specifically for your body condition, and lifestyle.",
    },
    {
      index: 4,
      title: "One-on-One Plan Review Session",
      chip: "PLAN REVIEW",
      desc: "A dedicated session via WhatsApp or Botim to walk you through your plan, address all queries, and ensure complete clarity before you begin.",
    },
    {
      index: 5,
      title: "Daily Meal Tracking & Continuous Support",
      chip: "ONGOING DAILY",
      desc: "Share pictures of your meals daily for real-time feedback, portion guidance, and accountability. Includes ongoing support for meal adjustments and troubleshooting.",
    },
    {
      index: 6,
      title: "Weekly Follow up",
      chip: "WEEKLY CHECK-INS",
      desc: "Scheduled check-ins to track progress, measure improvements, and fine-tune your plan as needed.",
    },
    {
      index: 7,
      title: "Final Report & Maintenance Plan",
      chip: "PROGRAM COMPLETION",
      desc: "Once your target is achieved, you receive a comprehensive progress report and a long-term maintenance plan to help you sustain results independently.",
    },
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-amber-50 py-16 px-6" id="how-it-works">
      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h3 className="text-[#D9186F] text-sm sm:text-base font-bold tracking-widest uppercase">
          SECTION 2
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">How It Works</h2>
        <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
          We provide both Online and Onsite Consultations tailored to your health
          goals.<br />
          Each client receives a structured, evidence-based approach designed for sustainable results.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* LEFT: Online Consultation - 60% */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={boxVariants}
          className="w-full lg:w-3/5 relative bg-white rounded-2xl shadow-md p-8"
        >
          <div className="flex items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-6">
                <FaLaptop className="text-[#D9186F]" /> Online Consultation Process
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Structured digital guidance available globally via WhatsApp or Botim.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="relative mt-6">
            {onlineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariants}
                className="flex relative mb-10 group"
              >
                {/* Vertical line */}
                {idx !== onlineSteps.length - 1 && (
                  <span className="absolute top-12 left-5 w-[2px] h-full bg-gray-300"></span>
                )}
                {/* Index circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold transition-all group-hover:bg-[#D9186F] group-hover:text-white cursor-pointer hover:bg-[#D9186F] hover:text-white">
                  {step.index}
                </div>

                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{step.title}</h4>
                    <span className="bg-gray-200 text-gray-800 text-xs px-4 py-1 rounded-full">
                      {step.chip}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Onsite Consultation - 40% */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={boxVariants}
          className="w-full lg:w-2/5 flex flex-col gap-6"
        >
          {/* Onsite Process */}
          <div className="rounded-2xl bg-[#D9186F]/10 p-6 flex items-start gap-4">
            <div>
              <h3 className="font-bold text-xl flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D9186F]" /> Onsite Consultation Process
              </h3>
              <p className="text-gray-700 mt-1 text-sm md:text-sm text-justify  p-3">
                All steps above apply, with the addition of in-person body<br/> composition analysis and physical consultation at our clinic.
              </p>
              <p className="text-gray-700 mt-1 text-sm md:text-sm text-justify p-3">
                Ideal for clients who prefer face-to-face interaction.
              </p>

              <div className="rounded-2xl w-full border border-white/50 p-6 mt-6 bg-white/50">
                <h4 className="font-bold text-md mb-2 text-[#D9186F]">CLINIC LOCATION</h4>
                <p className="text-gray-800 text-sm">Bhaote Accident Hospital, Buldhana Maharashtra </p>
                <p className="text-gray-800 text-sm">Physiotherapy and Diet Clinic</p>
              </div>
            </div>
          </div>

          {/* Ready to Start */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-md border-2 border-[#D9186F]">
            <h4 className="font-bold text-xl mb-2">Ready to Start Your Journey?</h4>
            <p className="text-gray-700 mb-4 text-sm">
              Book a free 10-minute clarity call with Smitha Menon to discuss your targets.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="cursor-pointer bg-[#D9186F] w-full hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-all"
            >
              Book a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}