"use client";

import React from "react";
import { FaBriefcase, FaBookOpen, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OtherServices() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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

  const title = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 bg-white">
      
      {/* SECTION TITLE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={title}
        className="text-center mb-12"
      >
        <h3 className="text-[#D9186F] text-sm font-bold tracking-widest uppercase">
          SECTION 3
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Other Services
        </h2>
      </motion.div>

      {/* CARDS */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* CARD 1 */}
        <motion.div
          variants={card}
          whileHover={{ y: -6 }}
          className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
        >

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] text-2xl mb-5 group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaBriefcase />
          </div>

          <p className="text-[#D9186F] font-bold tracking-widest uppercase text-sm">
            Beyond Consultations
          </p>

          <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3">
            Corporate & School Wellness Programs
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            We design structured nutrition education programs for schools,
            colleges, and corporate teams to improve health awareness, eating
            habits, and long-term wellness.
          </p>

          <div className="mt-6 bg-pink-50/60 border border-pink-100 rounded-xl p-5">
            <h4 className="font-semibold text-gray-900 mb-2">
              Impact & Outcome
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Healthier individuals → improved focus, reduced sick days, and a
              stronger workplace/school wellness culture.
            </p>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={card}
          whileHover={{ y: -6 }}
          className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
        >

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] text-2xl mb-5 group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaBookOpen />
          </div>

          <p className="text-[#D9186F] font-bold tracking-widest uppercase text-sm">
            Media & Publications
          </p>

          <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3">
            Articles, Awareness & Digital Presence
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Evidence-based nutrition content is regularly shared through
            magazines, journals, newspapers, and digital platforms to spread
            awareness about healthy living.
          </p>

          <div className="mt-6 bg-pink-50/60 border border-pink-100 rounded-xl p-5 space-y-3">
            <h4 className="font-semibold text-gray-900">
              Social Media Presence
            </h4>

            <p className="text-sm text-gray-700">
              Instagram:
              <a
                href="https://www.instagram.com/dr.sadhana_bhaote?igsh=MTN3ZW50dWNhNHQ0NA=="
                className="text-[#D9186F] ml-1 hover:underline"
                target="_blank"
              >
                View Profile
              </a>
            </p>

            <p className="text-sm text-gray-700">
              Facebook:
              <a
                href="https://www.facebook.com/share/18ZVGTMKMS/"
                className="text-[#D9186F] ml-1 hover:underline"
                target="_blank"
              >
                Visit Page
              </a>
            </p>

            <p className="text-sm text-gray-700">
              YouTube:
              <a
                href="https://youtube.com/@aarogyasadhana?si=Gu9JW2-TWEo4MP3y"
                className="text-[#D9186F] ml-1 hover:underline"
                target="_blank"
              >
                Watch Channel
              </a>
            </p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}