import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import ForecastGrid from "@/components/ForecastGrid";
import PollWidget from "@/components/PollWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Ticker />
      <Hero />
      <ForecastGrid />
      <PollWidget />
    </div>
  );
};

export default Index;
