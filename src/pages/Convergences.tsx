import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const convergences = [
  {
    title: "Winter 2026 Squeeze",
    trajectories: ["Energy", "Food & Agri", "Economy"],
    summary:
      "Gas prices up. Fertilizer costs up. Food prices up. Rent up. Inflation sustained. Cost-of-living crisis by autumn 2026.",
    timeline: "October 2026",
  },
];

const Convergences = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Convergences
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        When multiple trajectories meet. Here's what stacks and when.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {convergences.map((c) => (
          <div
            key={c.title}
            className="rounded-lg border border-border/50 bg-card p-8 shadow-sm"
          >
            <h3 className="font-sans text-lg font-bold text-foreground">{c.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.trajectories.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/50 bg-secondary px-3 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/80">{c.summary}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Timeline: {c.timeline}
            </p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Convergences;
