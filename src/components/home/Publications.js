import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import {motion} from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// Dummy data
const data = [
  {
    title: "Fasting & Metabolism",
    desc: "Explore how intermittent fasting influences metabolic rate, fat burning, insulin sensitivity, and overall energy balance. Learn how structured eating windows can support weight management and long-term metabolic health.",
    img: "/home/Fasting.webp",
  },
  {
    title: "Stress & Nutrition",
    desc: "Discover the connection between food choices and stress levels. Learn how nutrients like magnesium, omega-3s, and complex carbs can support brain function, improve mood stability, and reduce anxiety.",
    img: "/home/Stress.jpg",
  },
  {
    title: "Healthy Lifestyle Basics",
    desc: "Build a strong foundation for lifelong wellness with simple daily habits including balanced nutrition, regular physical activity, hydration, sleep quality, mindful living practices and eating healthy patterns at proper time.",
    img: "/home/lifestyle.avif",
  },
  {
    title: "Gut Health Guide",
    desc: "Understand the importance of a healthy gut microbiome and how fiber-rich foods, probiotics, balanced nutrition and time to time meals support digestion, immunity and overall well-being of the body .",
    img: "/home/gut.jpg",
  },
  {
    title: "Women Wellness",
    desc: "Focus on nutrition strategies that support hormonal balance, reproductive health, bone strength, muscle health, healthy heart, strong immune system  and overall vitality through different stages of a woman’s life.",
    img: "/home/womens.png",
  },
];

export default function Publications() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full bg-white py-20 px-6 md:px-16 ">
      
      {/* TOP HEADING */}
      <motion.div className="text-center mb-14 space-y-3"
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
      >
         <motion.p className="text-[#D9186F] font-semibold tracking-widest text-sm md:text-base"
            initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.3 }}
         >
            PUBLICATIONS
          </motion.p>
        <motion.h2 className="text-3xl md:text-4xl font-bold"
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4 }}
        >
          Featured  <span className="text-[#D9186F]">Articles</span> & Newspaper <span className="text-[#D9186F]">Features</span>
        </motion.h2>
        <motion.p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed"
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.3 }}
        >
          A collection of published nutrition write-ups and magazine features focused on
          practical wellness, fasting, stress, and healthy living.
        </motion.p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">

        {/* LEFT BUTTON */}
        <button
          ref={prevRef}
          className="cursor-pointer text-2xl text-[#D9186F] absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-500 p-3 rounded-full shadow hover:border-[#D9186F] transition disabled:opacity-40"
        >
          ❮
        </button>

        {/* RIGHT BUTTON */}
        <button
          ref={nextRef}
          className=" cursor-pointer text-2xl text-[#D9186F] absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-500 p-3 rounded-full shadow hover:border-[#D9186F] transition disabled:opacity-40"
        >
          ❯
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white  border-2 border-[#D9186F] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

                {/* IMAGE WITH PADDING */}
                <div className="p-4">
                  <div className="h-50 w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-justify">
                    {item.desc}
                  </p>
                  {/* <button className="text-[#D9186F] font-semibold text-sm mt-2">
                    Read More →
                  </button> */}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}