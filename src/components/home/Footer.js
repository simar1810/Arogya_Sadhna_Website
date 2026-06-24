import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ec79ad2e] ">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">

          {/* SADHANA */}
          <div>
            <h3 className="text-2xl font-bold text-[#D9186F] mb-5 flex items-center gap-4 ">
              <img src = "/website_logo.jpeg" alt = "Arogya Sadhana Logo" className = "h-16 w-20 rounded-full"/>
              <p>Arogya Sadhana</p>
            </h3>

            <p className="text-black text-sm text-justify leading-relaxed">
              Arogya Sadhana is a clinical wellness space founded by Dr. Sadhana Bhaote,
              a Clinical, Functional & Preventive Nutritionist. 
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#D9186F]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-black">
              <li className="hover:text-[#D9186F] cursor-pointer transition">
                <Link href="/">Home</Link>
              </li>

              <li className="hover:text-[#D9186F] cursor-pointer transition">
               <Link href="/about"> About</Link>
              </li>

              <li className="hover:text-[#D9186F] cursor-pointer transition">
                <Link href="/services">Services</Link>
              </li>

              <li className="hover:text-[#D9186F] cursor-pointer transition">
                <Link href="/contact">Contact</Link>
              </li>

              <li className="hover:text-[#D9186F] cursor-pointer transition">
                <Link href="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#D9186F]">
              Contact Info
            </h3>

            <div className="space-y-3  text-black">

              <p>+91 9881881050</p>

              <p>+91 9881881050</p>

              <p>Sadhnabhaote123@gmail.com</p>

              <p>
                Bhaote Accident Hospital, Physiotherapy and Diet clinic, Near Govt. Medical college, Dhad road, Buldhana (MH)
              </p>

            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#D9186F]">
              Our Location
            </h3>

            <div className="overflow-hidden w-[350px] rounded-xl border border-gray-700">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Bhaote%20Accident%20Hospital%2C%20Buldhana%2C%20Maharashtra&output=embed"
                width="100%"
                height="150"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
     <div className="border-t border-gray-800">
       <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

         <p></p>

         {/* Copyright */}
         <p className="text-black text-sm text-center md:text-left">
           © 2026 Sadhana Nutrition & Wellness. All rights reserved.
         </p>

         {/* Social Icons */}
         <div className="flex items-center gap-4">
      
           <a
             href="https://www.instagram.com/dr.sadhana_bhaote?igsh=MTN3ZW50dWNhNHQ0NA=="
             target="_blank"
             rel="noopener noreferrer"
             className="w-10 h-10 rounded-full bg-pink-100 text-[#D9186F] flex items-center justify-center hover:bg-[#D9186F] hover:text-white transition-all duration-300"
           >
             <FaInstagram />
           </a>

           <a
             href="https://www.facebook.com/share/18ZVGTMKMS/"
             target="_blank"
             rel="noopener noreferrer"
             className="w-10 h-10 rounded-full bg-pink-100 text-[#D9186F] flex items-center justify-center hover:bg-[#D9186F] hover:text-white transition-all duration-300"
           >
             <FaFacebookF />
           </a>

           <a
             href="https://youtube.com/@aarogyasadhana?si=Gu9JW2-TWEo4MP3y"
             target="_blank"
             rel="noopener noreferrer"
             className="w-10 h-10 rounded-full bg-pink-100 text-[#D9186F] flex items-center justify-center hover:bg-[#D9186F] hover:text-white transition-all duration-300"
           >
             <FaYoutube />
           </a>

         </div>
       </div>
     </div>

    </footer>
  );
}