import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Mrs. Savita Kharat",
    review:
      "Ho mi diet plan ghetla hota karan majhe khup weight gain jhale hote. diet ghetlyane weight loss la suruwat jhali ani majhe 15 kg wajan kami jhale. ho mi majhya aapta swakiyana madam che nav suggest karen. Thank you so much dear Mam 😊",
    rating: 5,
  },
  {
    name: "Mrs. Ashwini Magre",
    review:
      "My weight was 83 kg. Because of Bhaote mam diet plan I reached upto 74 kg. Because of diet and exercise given I have regain my lost confidence. I fell so much energetic and light. And in process achieving my goal upto 55 kg by following mam diet and exercise. Thanks mam.",
    rating: 5,
  },
  {
    name: "Mrs. Meena Deshmane",
    review:
      "माझे वजन कमी झाले पायावर येणारी सुज कमी होऊन पाय दुखणे कमी झाले. थायरॉइडचा त्रास कमी झाला. साधना मॅडम खूपच छान सजेशन्स देतात.",
    rating: 5,
  },
  {
    name: "Miss. Divya Bhalekar",
    review:
      "Maz wt near about 76 hote Mi diet plan suru kela ni barobar madam ne suggest kele exercise follow kela tr jwal pasa 20kg wt mi ghari ch kami kel. Mala jyani pn vichrarl tyna mi Mam nav suggest krte",
    rating: 5,
  },
  {
    name: "Mrs. Mahima Sancheti",
    review:
      "मला शुगर चा त्रास होता मला डॉक्टरांनी नियमित औषध घेण्याचे सांगितले मी थोडे घाबरले आणि मला औषध घ्यायचे नव्हते म्हणून मी आहार तज्ञ भवटें मॅडमचा सल्ला घेतला त्यांनी मला नियमित व्यायाम करण्याचे सांगतले आणि व्यवस्थित डायट प्लॅन लिहून दिला. मी सतत सहा ते आठ महिने व्यायाम केला त्यांनी मला माझ्या जीवनात फार सकारात्मक बदल झाला आहे. त्यामुळे मी स्वतःला तंदुरुस्त समजत आहे माझा कॉन्फिडन्सही खूप वाढला आहे. काम करण्याची शक्ती आणि उत्साह वाढला आहे. डायट समजून घेतल्यावर व त्याचं अनुकरण केल्यावर मला कुठल्या अन्नामध्ये फायबर आहे, कशामध्ये प्रोटीन्स आहे आणि कशामध्ये कॅलरीज आहे, आणि कशाला कॅलरीज म्हणतात, हे मला कळायला लागले, आणि त्याचं किती प्रमाणात सेवन करणं, हे मला कळायला लागलं आणि त्याचे सकारात्मक परिणाम मला दिसू लागले आहेत.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState({});
  const [showMore, setShowMore] = useState({});
  const textRefs = useRef([]);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // detect overflow (smart button logic)
  useEffect(() => {
    const newShowMore = {};

    textRefs.current.forEach((el, i) => {
      if (el) {
        newShowMore[i] = el.scrollHeight > el.clientHeight;
      }
    });

    setShowMore(newShowMore);
  }, []);

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

                {/* glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 blur-3xl opacity-30 rounded-full"></div>

                {/* quote */}
                <div className="text-5xl text-[#D9186F]/20 font-serif leading-none">
                  “
                </div>

                {/* REVIEW TEXT */}
                <div className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed text-justify">
                  
                  <p
                    ref={(el) => (textRefs.current[index] = el)}
                    className={`transition-all ${
                      expanded[index] ? "" : "line-clamp-3"
                    }`}
                  >
                    {item.review}
                  </p>

                  {/* ONLY SHOW IF OVERFLOW EXISTS */}
                  {showMore[index] && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-[#D9186F] font-semibold mt-2 text-sm hover:underline"
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

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