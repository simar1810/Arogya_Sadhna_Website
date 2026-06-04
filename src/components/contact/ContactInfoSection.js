import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="w-full py-16 bg-white">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h3 className="text-[#D9186F] text-sm font-bold tracking-widest uppercase">
          Contact Us
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Get In Touch
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {/* WHATSAPP */}
        <div className="hover:border-2 hover:border-[#D9186F] group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F]  group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaWhatsapp />
          </div>
          <h4 className="mt-3 font-semibold">WhatsApp</h4>
          <p className="text-sm text-gray-600 mt-1">+91 9881881050</p>
        </div>

        {/* CALL */}
        <div className="hover:border-2 hover:border-[#D9186F] group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaPhoneAlt />
          </div>
          <h4 className="mt-3 font-semibold">Call Us</h4>
          <p className="text-sm text-gray-600 mt-1">+91 9881881050</p>
        </div>

        {/* EMAIL */}
        <div className="hover:border-2 hover:border-[#D9186F] group bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaEnvelope />
          </div>
          <h4 className="mt-3 font-semibold">Email</h4>
          <p className="text-sm text-gray-600 mt-1 break-all">
             Sadhnabhaote123@gmail.com
          </p>
        </div>

        {/* LOCATION */}
        <div className="hover:border-2 hover:border-[#D9186F] group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaMapMarkerAlt />
          </div>
          <h4 className="mt-3 font-semibold">Location</h4>
          <p className="text-sm text-gray-600 mt-1">
            Near Govt. Medical college,<br/> Dhad road, Buldhana (MH)
          </p>
        </div>

        {/* WORKING HOURS */}
        <div className="hover:border-2 hover:border-[#D9186F] group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-[#D9186F] group-hover:bg-[#D9186F] group-hover:text-white transition">
            <FaClock />
          </div>
          <h4 className="mt-3 font-semibold">Working Hours</h4>
          <p className="text-sm text-gray-600 mt-1">
            Monday - Saturday <br/> 11 AM - 2 PM & 4 PM -7 PM
          </p>
        </div>

      </div>
    </section>
  );
}