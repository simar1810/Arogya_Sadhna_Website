import {useRouter} from "next/router";
import {motion} from "framer-motion";

export default function AboutPreview() {
  const router = useRouter();

  return (
    <div className="w-full py-20 px-6 md:px-16 bg-amber-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT IMAGE SECTION */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center overflow-x-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute w-72 h-72 bg-[#D9186F] opacity-10 rounded-full blur-3xl"></div>
          <div className="rounded-2xl bg-white border border-[#D91865]">
            <img
              src="/home/home_nutrionist.jpg"
              alt="Dr Sadhana"
              className="w-[380px] md:w-[400px] h-[300px] md:h-[500px] p-6 shadow-xl object-cover"
               
            />
          </div>
        </motion.div>
       

        {/* RIGHT CONTENT */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#D9186F] font-semibold tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ABOUT YOUR NUTRITIONIST
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black leading-snug"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Dr. Sadhana Bhaote
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A clinical nutrition expert based in Maharashtra, dedicated to
            helping individuals improve health through personalized diet,
            lifestyle, and fitness guidance.
          </motion.p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              { title: "Education", desc: "Physiotherapy, MSc Nutrition, PhD Scholar" },
              { title: "Approach", desc: "Root-cause & evidence-based care" },
              { title: "Focus", desc: "Diet, lifestyle & holistic wellness" },
              { title: "Beyond Work", desc: "Yoga, fitness & health awareness" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 border border-gray-200 rounded-xl hover:border-[#D9186F] transition"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold text-[#D9186F]">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.div
            className="pt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => router.push("/about")}
              className="bg-[#D9186F] cursor-pointer text-white px-6 py-3 w-full md:w-auto rounded-full font-semibold hover:scale-105 transition"
            >
              Know More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}