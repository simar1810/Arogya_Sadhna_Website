import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div className="text-[#D9186F] text-2xl font-bold cursor-pointer flex items-center gap-4">
          <img src="/website_logo.jpeg" alt="Arogya Sadhana Logo" className="h-16 w-20 rounded-full mt-3 md:mt-0"/>
          <Link href="/">Arogya Sadhana</Link>
        </div>

        {/* Center: Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <span
                  className={`cursor-pointer transition-colors duration-300 ${
                    router.pathname === item.path ? "text-[#D9186F]" : "text-black"
                  } hover:text-[#D9186F]`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Button */}
        <div className="hidden md:flex">
          <button onClick={()=>router.push("/contact")} className="bg-[#D9186F] cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all">
            Book a Session
          </button>
        </div>

        {/* Mobile menu button */}
        <div
          className="md:hidden flex flex-col cursor-pointer space-y-1 ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-6 bg-black transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-black transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-black transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden bg-white flex flex-col items-center space-y-6 py-5 text-black font-medium transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <span
                onClick={() => setMenuOpen(false)}
                className={`cursor-pointer transition-colors duration-300 ${
                  router.pathname === item.path ? "text-[#D9186F]" : "text-black"
                } hover:text-[#D9186F]`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-[#D9186F] text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all">
            Book a Session
          </button>
        </li>
      </ul>
    </nav>
  );
}