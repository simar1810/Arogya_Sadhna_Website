import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {motion} from "framer-motion";

const testimonials = [
  {
    name: "Smitha Menon",
    img: "/home/home_nutrionist.jpg",
    review:
      "Hi! I wanted to share my experience with Smitha Menon — I’ve seen noticeable weight reduction, my inflammation has reduced significantly, and my diabetes is much better under control now. I also feel much better overall, with real relief from bloatedness and constipation. It’s made a big difference in how I feel day to day. Thank you, Smitha!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    img: "/home/home_nutrionist.jpg",
    review:
      "Dr. Sadhana’s guidance has truly made a meaningful difference in my lifestyle. The way she approaches nutrition and overall wellness feels very practical and easy to follow in daily life. Over time, I have noticed a clear improvement in my energy levels, and I feel much more active and balanced throughout the day",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <motion.div className="w-full py-20 px-6 md:px-16 bg-amber-50"
       initial={{ opacity: 0, x: 50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
       viewport={{ once: true }}
    >

      {/* TITLE */}
      <motion.h2 className="text-3xl md:text-5xl font-bold text-center mb-14"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >

        What <span className="text-[#D9186F]"> Patients </span> Say
      </motion.h2>

      <div className="max-w-6xl mx-auto">

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              {/* OUTER WRAPPER */}
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

                {/* IMAGE */}
                <div className="w-full md:w-1/2 h-[250px] md:h-[520px] rounded-2xl md:rounded-r-none overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-6">

                  {/* STARS */}
                  <div className="flex text-yellow-400 text-2xl md:text-3xl">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < item.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed text-justify">
                    {item.review}
                  </p>

                  {/* NAME */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-[#D9186F] text-white flex items-center justify-center font-semibold">
                      {item.name.charAt(0)}
                    </div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </motion.div>
  );
}