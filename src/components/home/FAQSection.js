"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need to follow a strict diet plan?",
    answer:
      "No, the plans are personalized and flexible. The focus is on sustainable lifestyle changes rather than strict or restrictive diets.",
  },
  {
    question: "Can I consult online or is it only in-clinic?",
    answer:
      "Yes, consultations are available both online and offline depending on your convenience and location.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "Results vary by individual, but many people start noticing improvements in energy, digestion, and overall health within a few weeks.",
  },
  {
    question: "Is this suitable for conditions like PCOS or diabetes?",
    answer:
      "Yes, the nutrition plans are specially designed to support conditions like PCOS, diabetes, thyroid issues, and more.",
  },
  {
    question: "Do I need supplements as part of the plan?",
    answer:
      "Not always. Supplements are suggested only when necessary based on individual health requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full bg-white py-24 px-6 md:px-16">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-5xl font-bold">
          Frequently Asked <span className="text-[#D9186F]">Questions</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg">COMMON QUESTIONS</p>
      </div>

      {/* FAQ CONTAINER */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={faqVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`
              border rounded-2xl p-5 cursor-pointer transition-all duration-300
              ${openIndex === index
                ? "border-[#D9186F] shadow-md"
                : "border-gray-200 hover:shadow-sm"
              }
            `}
            onClick={() => toggleFAQ(index)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                {faq.question}
              </h3>
              <span className="text-[#D9186F] text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="overflow-hidden mt-3"
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}