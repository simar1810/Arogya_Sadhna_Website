"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-[#D9186F] font-semibold text-sm">
          <FaMapMarkerAlt />
          <span>VISIT OUR CLINIC</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mt-5">
          Find Us On Google Maps
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Visit Bhaote Accident Hospital Physiotherapy & Diet Clinic and get
          personalized nutrition guidance tailored to your health goals.
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        className="w-full px-4 md:px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden rounded-3xl shadow-2xl border border-pink-100">
          <iframe
            title="Bhaote Diet Clinic Location"
            src="https://www.google.com/maps?q=Bhaote%20Accident%20Hospital%2C%20Buldhana%2C%20Maharashtra&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}