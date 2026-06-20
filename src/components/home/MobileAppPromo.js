import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function MobileAppPromo() {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-b from-white to-pink-50 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-[#D9186F] font-semibold tracking-widest uppercase text-sm"
          >
            Mobile App
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold leading-tight text-black"
          >
            Your Health Journey in One{" "}
            <span className="text-[#D9186F]">Smart App</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-base md:text-lg leading-relaxed text-justify"
          >
            Track your nutrition, book consultations, and get personalized diet
            plans — all from your phone. Designed by experts at{" "}
            <span className="font-bold text-[#D9186F]">
              Arogya Sadhana
            </span>{" "}
            to make your health journey simple and effective.
          </motion.p>

          {/* FEATURES */}
          <motion.div variants={fadeUp} className="space-y-2 text-gray-700">
            <p>✔ Personalized diet plans</p>
            <p>✔ Appointment booking</p>
            <p>✔ Progress tracking dashboard</p>
            <p>✔ Direct chat with nutritionist</p>
            <p>✔ Health reminders & insights</p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#D9186F] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition"
            >
            Know More
            </button>

            <a
              href="https://play.google.com/store/apps/details?id=com.wellnessz.arogyasadhana"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9186F] hover:border-[#D9186F] transition"
            >
              <FaGooglePlay className="text-[#D9186F]" />
              Play Store
            </a>

            <a
              href="https://apps.apple.com/in/app/arogya-sadhana/id6766484706"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9186F] hover:border-[#D9186F] transition"
            >
              <FaApple className="text-[#D9186F]" />
              App Store
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (FLOATING - NO BOX) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow background */}
          <div className="absolute w-80 h-80 bg-[#D9186F] opacity-10 rounded-full blur-xl" />

          {/* Floating Image */}
          <motion.div
            whileHover={{ y: -10, rotate: -1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="drop-shadow-2xl"
          >
            <div className="w-full flex justify-center">
             <img
               src="/client-assets/HWD_Mockup.png"
               alt="Mobile App Mockup"
               className="w-full max-w-[600px] h-auto object-contain bg-transparent"
             />
           </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}