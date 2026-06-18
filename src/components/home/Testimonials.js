import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Geetanjali Kashyap",
    review:
      "My digestion feels better and I feel lighter and more active throughout the day after following this guidance.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    review:
      "The guidance is simple and practical. I feel more energetic and my daily routine feels much more balanced now.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    review:
      "Simple and effective approach. My health markers improved and I feel more confident in my daily food choices.",
    rating: 5,
  },
  {
    name: "Pooja Nair",
    review:
      "I feel more energetic and light after following the plan. It fits easily into my daily routine without stress.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Clients <span className="text-[#D9186F]">Say</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Real feedback from real wellness journeys
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto flex">
              <div className="relative flex flex-col h-full bg-white rounded-3xl p-8 mb-2 shadow-md border border-[#D9186F] overflow-hidden">

                {/* glow effect */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 blur-3xl opacity-30 rounded-full "></div>

                {/* quote */}
                <div className="text-5xl text-[#D9186F]/20 font-serif leading-none">
                  “
                </div>

                {/* review (uniform height) */}
                <p className="text-gray-700 mt-3 leading-relaxed text-sm md:text-base line-clamp-3 min-h-[72px]">
                  {item.review}
                </p>

                {/* rating */}
                <div className="flex gap-1 text-yellow-400 mt-5 text-lg">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                  ))}
                </div>

                {/* footer */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">Verified Client</p>
                  </div>

                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D9186F] to-pink-400 text-white flex items-center justify-center font-bold shadow-md">
                    {item.name.charAt(0)}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}