import "@/styles/globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "@/components/home/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <>
       <Head>
        <title>Arogya Sadhana</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />;
      <Footer/>
    </>

  ) 
}
