import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";
import { useRouter } from "next/router";

import {
  FaWeight,
  FaTint,
  FaFemale,
  FaHeart,
  FaNotesMedical,
  FaLeaf,
  FaRibbon,
} from "react-icons/fa";

const data = [
  { name: "Weight Management", icon: <FaWeight /> },
  { name: "Diabetes", icon: <FaTint /> },
  { name: "PCOS", icon: <FaFemale /> },
  { name: "Cholesterol", icon: <FaHeart /> },
  { name: "Thyroid Disorders", icon: <FaNotesMedical /> },
  { name: "Gut Health", icon: <FaLeaf /> },
  { name: "Cancer Survivors", icon: <FaRibbon /> },
];

export default function ServicesSlider() {

  const router = useRouter();

  return (
    <motion.div className="w-full py-10 bg-white overflow-x-hidden"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-5">
       <motion.p className="text-[#D9186F] font-semibold tracking-widest text-sm md:text-base"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
       >HOW I CAN HELP YOU</motion.p>
        <motion.h2 className="text-center text-3xl md:text-5xl font-bold mb-12 "
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.7 }}
        >Areas of <span className="text-[#D9186F]">Expertise</span></motion.h2>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        loop={true}                     // ✅ True infinite loop
        spaceBetween={30}
        slidesPerView={"auto"}          // ✅ Auto width cards
        speed={4000}                     // Smooth scrolling speed
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}                  // Continuous scroll effect
        freeModeMomentum={false}         // Prevent glitch
        
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[280px] md:!w-[300px] lg:!w-[320px] xl:!w-[350px] h-[260px] md:h-[300px]"
          >
            <div onClick={()=>router.push("/services#areas-of-expertise")}
              className="
                 group bg-white border-2 border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer transition-all duration-300
               hover:border-[#D9186F] hover:rounded-tl-2xl hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-br-none hover:scale-105 mb-4 md:mt-4"
            >
              {/* ICON */}
              <div className="text-5xl mb-4 text-[#D9186F] transition-all duration-300">
                {item.icon}
              </div>

              {/* NAME */}
              <p className="font-semibold text-xl text-[#D9186F] transition-all duration-300">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}