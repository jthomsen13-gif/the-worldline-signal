import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import ForecastGrid from "@/components/ForecastGrid";
import PollWidget from "@/components/PollWidget";
import Footer from "@/components/Footer";
import AboutInstrument from "@/components/AboutInstrument";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Ticker />
      <Hero />
      <InfoBoxes />

      {/* Main content: predictions + poll sidebar */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Predictions — main column */}
          <div className="min-w-0 flex-1">
            <ForecastGrid />
          </div>

          {/* Poll widget — sidebar on desktop */}
          <aside className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-24">
              <PollWidget sidebar />
            </div>
          </aside>
        </div>
      </div>

      <AboutInstrument />
      <Footer />
    </div>
  );
};

export default Index;
