import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FreeClaritySession() {
  const router = useRouter();

  return (
    <div className="w-full bg-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#D9186F] font-semibold tracking-widest uppercase text-sm"
            >
              Free Clarity Session
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold leading-tight text-black"
            >
              Get a Free 1-on-1{" "}
              <span className="text-[#D9186F]">Consultation</span>
              <br />
              with the Nutritionist!
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed text-justify"
            >
              Here's your chance to speak{" "}
              <span className="font-semibold text-black">
                directly with Sadhana Bhaote
              </span>{" "}
              — absolutely free. No sign-ups, no commitments — just a real
              conversation about you, your body, and your health goals.
            </motion.p>

            {/* HIGHLIGHT BOX */}
            <motion.div
              variants={fadeUp}
              className="border-l-4 border-[#D9186F] pl-4 space-y-2 text-gray-700"
            >
              <span className="inline-block font-semibold tracking-widest uppercase text-sm">
                WHETEHER YOU&apos;RE:
              </span>

              <p>✔ PCOS & hormonal imbalance guidance</p>
              <p>✔ Diabetes & cholesterol management</p>
              <p>✔ Sustainable weight loss planning</p>
              <p>✔ Gut health, bloating & digestion issues</p>
              <p>✔ Pregnancy & postpartum nutrition support</p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-justify md:w-120"
            >
              This{" "}
              <span className="font-semibold text-black">
                10-minute personal consultation
              </span>{" "}
              is designed to help you get clarity, direction, and
              science-backed guidance tailored to your stage of life.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => router.push("/contact")}
              className="
                bg-[#D9186F] text-white px-8 py-3 rounded-full
                font-semibold shadow-md hover:shadow-xl
                hover:scale-105 transition-all duration-300 cursor-pointer
              "
            >
              Get Appointment
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Glow Background */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-80 h-80 bg-[#D9186F] opacity-10 rounded-full blur-3xl"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="relative w-full h-[300px] sm:h-[380px] md:h-[500px] lg:h-[600px]"
            >
              <div className="relative w-full h-[450px] sm:h-[600px]">
  <img
    src="/home/consultation.jpeg"
    alt="Free Consultation"
    className="w-full h-full object-cover rounded-xl shadow-2xl"
  />
</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}