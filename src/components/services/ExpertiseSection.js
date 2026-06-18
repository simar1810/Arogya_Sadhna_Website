"use client";

import React from "react";
import { FaWeight, FaTint, FaFemale, FaHeartbeat, FaAppleAlt, FaBaby, FaBriefcase, FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const cards = [
    {
      icon: <FaWeight />,
      title: "Weight Management",
      desc: "Personalized nutrition strategies focused on sustainable fat loss, muscle preservation, and healthy weight gain, avoiding extreme calorie restrictions.",
      points: [
        "Fat loss & body recomposition",
        "Muscle gain nutrition",
        "Metabolic health optimization",
        "Weight maintenance planning",
      ],
    },
    {
      icon: <FaTint />,
      title: "Diabetes Management",
      desc: "Evidence-based plans to stabilize blood sugar, improve insulin sensitivity, and optimize long-term metabolic health effectively.",
      points: [
        "Type 1 & Type 2 diabetes control",
        "Blood sugar stabilization",
        "Insulin sensitivity improvement",
        "Glycemic load planning",
      ],
    },
    {
      icon: <FaFemale />,
      title: "PCOS Care",
      desc: "Nutrition strategies focused on hormonal balance, weight regulation, and metabolic support for women with PCOS, promoting overall health.",
      points: [
        "Hormonal balance diet",
        "Insulin resistance management",
        "Weight regulation in PCOS",
        "Cycle regularization support",
      ],
    },
    {
      icon: <FaHeartbeat />,
      title: "Cholesterol Management",
      desc: "Heart-focused nutrition approaches to improve lipid profile, reduce bad cholesterol, and support long-term cardiovascular wellness.",
      points: [
        "LDL reduction diet",
        "HDL improvement",
        "Heart health optimization",
        "Triglyceride control",
      ],
    },
    {
      icon: <FaAppleAlt />,
      title: "Thyroid & Gut Health",
      desc: "Targeted nutrition for thyroid balance, gut wellness, and lifestyle disorders to support overall metabolic and digestive health.",
      points: [
        "Hypothyroidism & Hyperthyroidism support",
        "Gut health optimization",
        "Digestive wellness diets",
        "Inflammation reduction",
      ],
    },
    {
      icon: <FaBaby />,
      title: "Women & Child Nutrition",
      desc: "Specialized nutrition for fertility, pregnancy, lactation, and pediatric care, promoting health for mother and child.",
      points: [
        "Infertility diet & ANC/PNC support",
        "Pediatric growth & nutrition",
        "Skin & hair health",
        "Lifestyle & wellness guidance",
      ],
    },
    {
      icon: <FaBriefcase />,
      title: "Cancer Survivors Diet",
      desc: "Nutrition plans focused on recovery, immunity support, and maintaining strength for cancer survivors.",
      points: [
        "Recovery-focused meals",
        "Immunity & energy support",
        "Metabolic maintenance",
        "Lifestyle nutrition guidance",
      ],
    },
    {
      icon: <FaStethoscope />,
      title: "Clinical Lifestyle Disorders",
      desc: "Personalized dietary plans targeting thyroid, cholesterol, and metabolic disorders to improve long-term wellness outcomes.",
      points: [
        "Thyroid disorder support",
        "Cholesterol & lipid management",
        "Metabolic disorder guidance",
        "Holistic wellness plans",
      ],
    },
  ];

  // Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full py-16 bg-white" id="areas-of-expertise">
      {/* SECTION TITLE */}
      <div className="text-center mb-10">
        <h3 className="text-[#D9186F] text-sm sm:text-base font-bold tracking-widest uppercase">
          SECTION 1
        </h3>

        <h2 className="text-2xl md:text-3xl font-bold mt-3">
          Areas of Expertise
        </h2>

        <p className="text-gray-600 p-2 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Personalized, clinically directed nutrition plans targeting metabolic corrections and long-term wellness
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group bg-white rounded-2xl p-6 pl-10 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] text-xl mb-4 group-hover:bg-[#D9186F] group-hover:text-white transition-all">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
              {item.desc}
            </p>

            {/* BULLETS */}
            <ul className="space-y-1 text-sm text-gray-700">
              {item.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#F28AB2] mt-1">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}