import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Terms of Service
      </h1>
      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground/80">
        <p>Worldline Engine provides predictions and analysis for informational purposes only. Nothing on this site constitutes financial, legal, or professional advice.</p>
        <p>Predictions are speculative and may be wrong. We publish a public scorecard to track accuracy honestly.</p>
        <p>By using this site, you agree to these terms. We reserve the right to update them at any time.</p>
        <p>Last revised: March 2026.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
