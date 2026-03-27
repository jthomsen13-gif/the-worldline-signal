import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const convergences = [
  {
    title: "Winter 2026 Squeeze",
    trajectories: ["Energy", "Food & Agri", "Economy"],
    image: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800&q=75&sat=-100",
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
            className="overflow-hidden rounded-lg border border-border/50 bg-card shadow-sm"
          >
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="h-full w-full object-cover brightness-[0.6] saturate-[0.3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <h3 className="absolute bottom-3 left-5 font-sans text-lg font-bold text-white">
                {c.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
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
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Convergences;
