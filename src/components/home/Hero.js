import Image from "next/image";
import {useRouter} from "next/router";

export default function Hero() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center pt-24 px-6 md:px-16 overflow-x-hidden ">

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6 animate-fadeIn text-center md:text-left">

          <p className="text-[#D9186F] font-semibold tracking-widest text-sm md:text-base">
            NUTRITION FOR REAL LIFE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Nourish Your Body. <br />
            <span className="text-[#D9186F]">Heal from Within.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Personalised nutrition & lifestyle guidance to help you restore balance,
            improve health, and feel your best — every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button onClick={()=>router.push("/contact")} className=" cursor-pointer bg-[#D9186F] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
              Book a Consultation
            </button>

            <button onClick={()=>router.push("/services#how-it-works")} className=" cursor-pointer border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
              How it Works
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center relative">

          {/* glow background */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#D9186F] opacity-20 rounded-full blur-3xl animate-pulse"></div>

          {/* floating fruits */}
          <div className="absolute top-0 left-2 sm:left-6 md:left-10 text-2xl sm:text-3xl md:text-4xl animate-floatSlow">
              🍎
          </div>

          <div className="absolute top-16 sm:top-20 left-0 sm:left-4 md:left-10 text-2xl sm:text-3xl md:text-4xl animate-floatSlow2">
              🍌
          </div>

          <div className="absolute bottom-10 left-2 sm:left-6 md:left-10 text-2xl sm:text-3xl md:text-4xl animate-floatSlow3">
              🍊
          </div>

          <div className="absolute top-8 sm:top-10 right-2 sm:right-6 md:right-10 text-2xl sm:text-3xl md:text-4xl animate-floatSlow2">
              🍓
          </div>

          <div className="absolute bottom-12 sm:bottom-16 right-2 sm:right-6 md:right-10 text-2xl sm:text-3xl md:text-4xl animate-floatSlow">
              🥝
          </div>

          {/* main image */}
          <div className="relative z-10 animate-float">
            <img
              src="/home/home_hero.jpg"
              alt="Hero Image"
              width={500}
              height={600}
              className="rounded-full shadow-2xl  w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
            />
          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`

        /* fade in left content */
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* floating image */
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* floating fruits */
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-floatSlow2 {
          animation: floatSlow2 7s ease-in-out infinite;
        }

        .animate-floatSlow3 {
          animation: floatSlow3 5s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floatSlow2 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floatSlow3 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

      `}</style>

    </div>
  );
}