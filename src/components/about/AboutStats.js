"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaAward,
  FaHeartbeat,
  FaClinicMedical,
} from "react-icons/fa";

const StatCard = ({ icon, number, title, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center"
    >
      {icon}
      <h3 className="text-2xl sm:text-3xl font-bold text-[#D9186F] mt-1">{number}</h3>
      <p className="text-gray-700 mt-1 text-sm sm:text-base">{title}</p>
    </motion.div>
  );
};

export default function AboutStats() {
  const stats = [
    {
      icon: <FaUsers className="text-[#D9186F] text-4xl sm:text-5xl mb-2" />,
      number: "10,000+",
      title: "Lives Touched",
    },
    {
      icon: <FaAward className="text-[#D9186F] text-4xl sm:text-5xl mb-2" />,
      number: "10+",
      title: "Certifications",
    },
    {
      icon: <FaHeartbeat className="text-[#D9186F] text-4xl sm:text-5xl mb-2" />,
      number: "Root Cause",
      title: "Approach",
    },
    {
      icon: <FaClinicMedical className="text-[#D9186F] text-4xl sm:text-5xl mb-2" />,
      number: "Clinic",
      title: "Bhaote Accident Hospital",
    },
  ];

  return (
    <section
      className="w-full py-8 sm:py-10"
      style={{ backgroundColor: "#F8B8D3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-20 text-center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              index={index}
              icon={stat.icon}
              number={stat.number}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}