import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/home/Hero";
import ServicesSlider from "@/components/home/ServicesSlider";
import AboutPreview from "@/components/home/AboutPreview";
import Publications from "@/components/home/Publications";
import Testimonials from "@/components/home/Testimonials";
import FreeClaritySession from "@/components/home/FreeClaritySession";
import FAQSection from "@/components/home/FAQSection";
import MobileAppPromo from "@/components/home/MobileAppPromo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <main className="overflow-x-hidden">
    <Hero/>
    <ServicesSlider/>
    <AboutPreview/>
    <Publications/>
    <Testimonials/>
    <MobileAppPromo/>
    <FreeClaritySession/>
    <FAQSection/>
   </main>
  );
}
