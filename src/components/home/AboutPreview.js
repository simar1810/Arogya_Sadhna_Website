import { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPreview() {
  const router = useRouter();

  const doctors = [
    {
      name: "Dr. Sadhana Bhaote",
      qualification: "Clinical Nutrition Expert",
      image: "/home/home_nutrionist.jpg",
      category: "ABOUT YOUR NUTRITIONIST",
      description:
        "A clinical nutrition expert dedicated to transforming lives through personalized nutrition, lifestyle modification, and holistic wellness strategies. Her evidence-based approach empowers individuals to achieve sustainable health.",

      highlights: [
        {
          title: "Education",
          desc: "Physiotherapy, MSc Nutrition, PhD Scholar",
        },
        {
          title: "Approach",
          desc: "Root-cause & evidence-based nutrition care",
        },
        {
          title: "Specialization",
          desc: "Diet, lifestyle & holistic wellness",
        },
        {
          title: "Beyond Work",
          desc: "Yoga, fitness & health awareness",
        },
      ],
    },

    {
      name: "Dr. Ashok Bhaote",
      qualification: "M.S. (Ortho)",
      image: "/home/home_hero_2.JPG",
      category: "ABOUT YOUR ORTHOPAEDIC",
      description:
        "A experienced Orthopaedic specializing in Orthopaedic Trauma,Critical Trauma,Joint Replacement,Spine Care,Arthritis Management and Joint Care.",

      highlights: [
        {
          title: "Trauma Surgery",
          desc: "Orthopaedic trauma & critical trauma management",
        },
        {
          title: "Joint Replacement",
          desc: "Advanced knee, hip & joint replacement surgery",
        },
        {
          title: "Spine Care",
          desc: "Comprehensive diagnosis and treatment of spine disorders",
        },
        {
          title: "Arthritis & Joint Care",
          desc: "Long-term solutions for arthritis and joint health",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextDoctor = () => {
    if (current < doctors.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevDoctor = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const doctor = doctors[current];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute w-72 h-72 bg-[#D9186F] opacity-10 rounded-full blur-3xl"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={doctor.image}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden bg-white border border-[#D9186F]/20 shadow-2xl"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-[380px] md:w-[430px] h-[450px] md:h-[520px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#D9186F] font-semibold tracking-[3px] uppercase mb-3">
                  {doctor.category}
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {doctor.name}
                </h2>

                <p className="text-xl font-semibold text-[#D9186F] mt-2">
                  {doctor.qualification}
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 text-base text-justify">
                  {doctor.description}
                </p>

                {/* SPECIALITY TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {doctor.highlights.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-pink-100 text-[#D9186F] text-sm font-medium"
                    >
                      {item.title}
                    </span>
                  ))}
                </div>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {doctor.highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D9186F] hover:shadow-lg transition-all"
                    >
                      <h4 className="font-semibold text-[#D9186F]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* KNOW MORE BUTTON */}
                <div className="mt-8">
                  <button
                    onClick={() => router.push("/about")}
                    className="bg-[#D9186F] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Know More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM SLIDER NAVIGATION */}
        <div className="flex justify-center items-center gap-5 mt-12">
          <button
           onClick={prevDoctor}
           disabled={current === 0}
           className={`w-12 h-12 rounded-full border-2 text-2xl font-semibold flex items-center justify-center transition-all duration-300 ${
             current === 0
               ? "border-gray-300 text-gray-300 cursor-not-allowed"
               : "border-[#D9186F] text-[#D9186F] hover:bg-[#D9186F] hover:text-white"
           }`}
         >
           &lt;
         </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#D9186F]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
           onClick={nextDoctor}
           disabled={current === doctors.length - 1}
           className={`w-12 h-12 rounded-full border-2 text-2xl font-semibold flex items-center justify-center transition-all duration-300 ${
             current === doctors.length - 1
               ? "border-gray-300 text-gray-300 cursor-not-allowed"
               : "border-[#D9186F] text-[#D9186F] hover:bg-[#D9186F] hover:text-white"
           }`}
         >
           &gt;
         </button>
        </div>
      </div>
    </section>
  );
}