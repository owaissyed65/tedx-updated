import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Speaker from "@/components/Speaker";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={ `overflow-hidden ${cn("bg-black", montserrat.className)}`}>
      <div id="home" className="w-full">
        <Navbar />
      </div>
      <div id="herobanner" className="w-full">
        <HeroBanner />
      </div>
      <div id="speakers" className="w-full">
        <Speaker />
      </div>
      <div id="introduction" className="w-full">
        <Introduction />
      </div>
      <div id="About" className="w-full">
        <About />
      </div>
      <div id="Contact" className="w-full">
        <Contact />
      </div>
      <div id="footer" className="w-full">
      <Footer/> 
      </div>
    </div>
  );
}
