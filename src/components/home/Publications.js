import { motion } from "framer-motion";

const images = Array.from({ length: 12 }, (_, i) => ({
  img: `/home/articles/testimonials${i + 1}.jpeg`,
}));

export default function Publications() {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-16">

      {/* HEADER */}
      <motion.div className="text-center mb-14 space-y-3">
        <p className="text-[#D9186F] font-semibold tracking-widest text-sm md:text-base">
          PUBLICATIONS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-[#D9186F]">Articles</span> & Newspaper{" "}
          <span className="text-[#D9186F]">Features</span>
        </h2>

        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
          A collection of published nutrition write-ups and magazine features focused on wellness.
        </p>
      </motion.div>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="break-inside-avoid rounded-2xl overflow-hidden border-2 border-[#D9186F] shadow-sm hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={item.img}
              alt={`image-${index}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}

      </div>
    </div>
  );
}