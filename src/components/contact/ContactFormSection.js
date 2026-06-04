"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("KEJTYR");
  const [termsChecked, setTermsChecked] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");

  const handleReloadCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(newCaptcha);
    setCaptchaInput("");
  };

  const isSubmitDisabled = captchaInput !== captchaCode || !termsChecked;

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = ` *New Consultation Enquiry*
         Name: ${name}
         Phone: ${phone}
         Email: ${email}
         Goal: ${goal}`;

    const whatsappUrl = `https://wa.me/919881881050?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setName("");
    setPhone("");
    setEmail("");
    setGoal("");
    setCaptchaInput("");
    setTermsChecked(false);

    // Optionally reload captcha for next submission
    handleReloadCaptcha();
  };

  return (
    <section className="w-full py-16 bg-amber-50 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#D9186F] mb-6">
            Let's Know You Better
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D9186F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D9186F] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D9186F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Goal</label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D9186F] focus:outline-none"
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="border-2 border-gray-300 rounded-2xl p-4">
              <label className="block font-semibold text-gray-700 mb-2">
                Captcha Verification
              </label>

              <div className="flex items-center justify-between mb-2">
                <div className="bg-gray-200 px-4 py-2 rounded-lg font-mono text-lg tracking-widest">
                  {captchaCode}
                </div>
                <button
                  type="button"
                  onClick={handleReloadCaptcha}
                  className="text-[#D9186F] font-semibold text-sm hover:underline"
                >
                  Reload
                </button>
              </div>

              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="w-4 h-4 accent-[#D9186F]"
              />
              <label className="text-sm text-gray-700">
                I agree to all terms and conditions
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={` cursor-pointer w-full py-3 rounded-full text-white font-semibold transition-all ${
                isSubmitDisabled
                  ? "bg-gray-400"
                  : "bg-[#D9186F] hover:bg-pink-700"
              }`}
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#D9186F]/10 rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#D9186F] mb-4 text-center">
            Your Health Journey Starts Here
          </h3>

          <p className="text-gray-700 mb-6 text-center text-sm md:w-[80%] mx-auto">
            Whether you need help with weight management, PCOS, diabetes, or gut health.
          </p>

          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl md:p-8">
            <p className="italic text-gray-800 text-sm md:text-md">
              "The right food at the right time can transform your health."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}