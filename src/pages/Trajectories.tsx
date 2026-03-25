import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trajectories = [
  {
    name: "Energy",
    desc: "Gas, LNG, grid, solar storms. UK heavily dependent on imports. Supply shocks hit hard.",
    data: ["Qatar LNG strike (March 2026). 17% global supply offline for 3 years."],
    watch: ["New supply agreements.", "Winter demand.", "Grid stress events."],
    connections: ["Economy", "Food & Agri", "Winter Squeeze"],
  },
  {
    name: "Military",
    desc: "Ukraine, Iran, NATO, kinetic actions. War affects energy, trade, stability.",
    data: ["Iran escalation risk. NATO eastern flank."],
    watch: ["Maduro trial (March 26).", "Oil market reaction."],
    connections: ["Energy", "Economy"],
  },
  {
    name: "Space",
    desc: "Solar storms, satellites, Starlink, orbital assets. Critical infrastructure at risk.",
    data: ["G3 solar storm March 2026. DIY solar allowed in UK."],
    watch: ["Satellite failures.", "Grid stress.", "GPS reliability."],
    connections: ["Energy"],
  },
  {
    name: "Food & Agri",
    desc: "Fertilizer, bread, meat. Global supply chain fragile.",
    data: ["Fertilizer prices up 29% (March 2026)."],
    watch: ["Export restrictions.", "Harvest reports.", "Government subsidies."],
    connections: ["Energy", "Economy", "Winter Squeeze"],
  },
  {
    name: "Economy",
    desc: "Petrol prices, inflation, cost of living, housing.",
    data: ["Petrol floor £1.80+. Renters' Rights Act May 1."],
    watch: ["Inflation data.", "Bank of England.", "Landlord sell-off."],
    connections: ["Energy", "Food & Agri", "Housing", "Winter Squeeze"],
  },
  {
    name: "Politics",
    desc: "Epstein files, resignations, elections.",
    data: ["3 million Epstein files released March 2026. Lord Mandelson resigned."],
    watch: ["Further resignations.", "Public trust metrics."],
    connections: ["Narratives"],
  },
  {
    name: "Narratives",
    desc: "Institutional responses, press, information control.",
    data: ["Belgium Article 4 withdrawn. Lithuania balloon arithmetic."],
    watch: ["What's not being reported.", "Institutional silence patterns."],
    connections: ["Politics", "All trajectories"],
  },
];

const Trajectories = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Trajectories
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The 7 trajectories we track. Each section shows what we're watching, key data, and how they connect.
      </p>

      <div className="mt-14 space-y-14">
        {trajectories.map((t) => (
          <section key={t.name} className="rounded-lg border border-border/50 bg-card p-8 shadow-sm">
            <h2 className="font-sans text-xl font-bold tracking-tight text-foreground">
              {t.name}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{t.desc}</p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Key Data
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] text-foreground/80">
                  {t.data.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Watch Points
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] text-foreground/80">
                  {t.watch.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>

              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Connections
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.connections.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border/50 bg-secondary px-3 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Trajectories;
