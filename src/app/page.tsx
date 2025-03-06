import HedronSection from "./components/HedronSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenEconomySection from "./components/OpenEconomySection";
import TechnologySection from "./components/TechnologySection";
import TheHeart from "./components/TheHeart";
import UniverseSection from "./components/UniverseSection";
import NetworkSection from "./components/NetworkSection";
import CommunitySection from "./components/CommunitySection";
import RecieveTransmissionSection from "./components/RecieveTransmissionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1700px] px-4 lg:px-44 overflow-hidden">
      <main className="">
       <Navbar />
       <Hero />
       <UniverseSection />
       <TheHeart />
       <HedronSection />
       <OpenEconomySection />
       <TechnologySection />
       <NetworkSection />
       <CommunitySection />
       <RecieveTransmissionSection />
       <Footer />
      
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}


