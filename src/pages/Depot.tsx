import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tools = [
  {
    name: "De-Pleasing Protocol",
    desc: "Strip flattery from AI responses.",
  },
  {
    name: "Assumption Auditor",
    desc: "Test your business ideas.",
  },
  {
    name: "Method Guide",
    desc: "How we predict.",
  },
];

const Depot = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Depot
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Free tools. No catch.
      </p>

      <div className="mt-12 space-y-6">
        {tools.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border border-border/50 bg-card p-6 shadow-sm"
          >
            <h3 className="font-sans text-base font-bold text-foreground">{t.name}</h3>
            <p className="mt-1 text-[14px] text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-5 py-2 font-sans text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Depot;
