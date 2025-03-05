import HedronSection from "./components/HedronSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenEconomySection from "./components/OpenEconomySection";
import TheHeart from "./components/TheHeart";
import UniverseSection from "./components/UniverseSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1700px] px-10">
      <main className="">
       <Navbar />
       <Hero />
       <UniverseSection />
       <TheHeart />
       <HedronSection />
       <OpenEconomySection />
      
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}


