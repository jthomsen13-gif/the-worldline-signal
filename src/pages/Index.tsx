import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import ForecastGrid from "@/components/ForecastGrid";
import PollWidget from "@/components/PollWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Ticker />
      <Hero />
      <ForecastGrid />
      <PollWidget />
      <Footer />
    </div>
  );
};

export default Index;
