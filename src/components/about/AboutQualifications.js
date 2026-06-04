"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaHeart, FaStar, FaTrophy } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutQualifications() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-16">

        {/* LEFT COLUMN */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Qualifications & Certifications */}
          <motion.div
            variants={card}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-[#E56CA0]">
              <FaTrophy className="text-2xl" />
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                Qualifications & Certifications
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-gray-700 text-sm md:text-base mt-2">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#F28AB2] mt-1" />
                <span>Bachelor in Physiotherapy (MUHS)</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#F28AB2] mt-1" />
                <span>MSc (Food and Diet Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#F28AB2] mt-1" />
                <span>PhD in Food Science and Clinical Nutrition</span>
              </li>
            </ul>
          </motion.div>

          {/* Professional Memberships */}
          <motion.div
            variants={card}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-[#E56CA0]">
              <FaHeart className="text-2xl" />
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                Professional Memberships
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-gray-700 text-sm md:text-base mt-2">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#F28AB2] mt-1" />
                <span>
                  Lifetime Member – AEDAN (Association for Evidence-Based Dietetics and Nutrition)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#F28AB2] mt-1" />
                <span>
                  Lifetime Member – IAPEN (India Association for Parenteral and Enteral Nutrition)
                </span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Areas of Expertise */}
          <motion.div
            variants={card}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-[#E56CA0]">
              <FaStar className="text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">
                Areas of Expertise
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-gray-700 text-sm md:text-base mt-2">
              {[
                "Personalized nutrition plans for Weight management",
                "Diabetes (Type 1 / Type 2)",
                "PCOS",
                "Cholesterol Management",
                "Thyroid disorders (Hypothyroidism / Hyperthyroidism)",
                "Gut health and lifestyle disorders",
                "Cancer survivors Diet",
                "Infertility diet & ANC / PNC Diet",
                "Paediatrics Nutrition",
                "Skin and Hair Diet",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#F28AB2] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}