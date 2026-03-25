import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Scorecard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Scorecard
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        What we got right and wrong. No spin.
      </p>

      <div className="mt-14 rounded-lg border border-border/50 bg-card p-8 text-center shadow-sm">
        <p className="text-[15px] text-muted-foreground">
          Accuracy data coming soon.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Scorecard;
