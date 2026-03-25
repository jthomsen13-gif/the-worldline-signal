import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Method = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        How We Work
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Our method is simple, transparent, and accountable.
      </p>

      <div className="mt-14 space-y-12">
        <section>
          <h2 className="font-sans text-lg font-bold tracking-tight text-foreground">
            What We Do
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            We track 7 trajectories — Energy, Military, Space, Food & Agri, Economy, Politics,
            Narratives. Surface evidence gaps. Analyse convergences. Publish what's coming.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-bold tracking-tight text-foreground">
            How We Predict
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Sneeze (trigger) → Chain (cause → effect) → Cold (how it hits the UK). We score
            ourselves honestly.
          </p>
        </section>

        <section>
          <h2 className="font-sans text-lg font-bold tracking-tight text-foreground">
            Accountability
          </h2>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Predictions are time-bound. Public scorecard. No spin.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Method;
