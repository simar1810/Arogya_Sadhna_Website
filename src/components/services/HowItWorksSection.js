"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const router = useRouter();

  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-amber-50 py-16 px-6" id="how-it-works">
      {/* TITLE */}
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
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          How It Works
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
          We provide structured, evidence-based consultation designed for
          sustainable health results.
        </p>
      </motion.div>

      {/* MAIN GRID (RIGHT SIDE ONLY SPLIT INTO 2 DIVS) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT DIV (ONSITE INFO CARD) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={boxVariants}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-[#D9186F] text-xl" />
            <h3 className="text-lg sm:text-xl font-bold">
              Onsite Consultation Process
            </h3>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-5">
            In-person consultation includes body composition analysis,
            physical assessment, and personalized guidance at our clinic.
          </p>

          <div className="rounded-xl border border-gray-200 bg-pink-50 p-5">
            <h4 className="font-bold text-[#D9186F] mb-2">
              CLINIC LOCATION
            </h4>
           <a
             href="https://www.google.com/maps/search/?api=1&query=Bhaote+Accident+Hospital+Buldhana+Maharashtra"
             target="_blank"
             rel="noopener noreferrer"
             className="text-gray-800 text-sm hover:text-[#D9186F] transition"
           >
             Bhaote Accident Hospital, Physiotherapy and Diet clinic, Near Govt. Medical college, Dhad road, Buldhana (MH)
           </a>
            {/* <p className="text-gray-600 text-sm">
              Physiotherapy and Diet Clinic
            </p> */}
          </div>
        </motion.div>

        {/* RIGHT DIV (CTA CARD) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={boxVariants}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center text-center border-2 border-[#D9186F]"
        >
          <h4 className="font-bold text-3xl mb-3">
            Ready to Start Your Journey?
          </h4>

          <p className="text-gray-700 text-sm mb-6">
             Take the first step towards a healthier lifestyle with personalized guidance
                   designed just for you.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="bg-[#D9186F] hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-all"
          >
            Book a Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}


  //  <motion.div
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, amount: 0.3 }}
  //         variants={boxVariants}
  //         className="w-full lg:w-3/5 relative bg-white rounded-2xl shadow-md p-8"
  //       >
  //         <div className="flex items-start mb-8">
  //           <div>
  //             <h3 className="text-2xl font-bold mb-2 flex items-center gap-6">
  //               <FaLaptop className="text-[#D9186F]" /> Online Consultation Process
  //             </h3>
  //             <p className="text-gray-700 text-sm md:text-base">
  //               Structured digital guidance available globally via WhatsApp or Botim.
  //             </p>
  //           </div>
  //         </div>

  //         {/* Steps */}
  //         <div className="relative mt-6">
  //           {onlineSteps.map((step, idx) => (
  //             <motion.div
  //               key={idx}
  //               custom={idx}
  //               initial="hidden"
  //               whileInView="visible"
  //               viewport={{ once: true, amount: 0.3 }}
  //               variants={stepVariants}
  //               className="flex relative mb-10 group"
  //             >
  //               {/* Vertical line */}
  //               {idx !== onlineSteps.length - 1 && (
  //                 <span className="absolute top-12 left-5 w-[2px] h-full bg-gray-300"></span>
  //               )}
  //               {/* Index circle */}
  //               <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold transition-all group-hover:bg-[#D9186F] group-hover:text-white cursor-pointer hover:bg-[#D9186F] hover:text-white">
  //                 {step.index}
  //               </div>

  //               {/* Content */}
  //               <div className="ml-6 flex-1">
  //                 <div className="flex flex-wrap items-center gap-4 mb-1">
  //                   <h4 className="font-semibold text-gray-900 text-lg">{step.title}</h4>
  //                   <span className="bg-gray-200 text-gray-800 text-xs px-4 py-1 rounded-full">
  //                     {step.chip}
  //                   </span>
  //                 </div>
  //                 <p className="text-gray-600 text-sm leading-relaxed text-justify">{step.desc}</p>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </motion.div>