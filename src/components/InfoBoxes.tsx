const INFO_BOXES = [
  {
    title: "Active Trajectories",
    body: "Tracking 7 trajectories: Energy, Military, Space, Food, Economy, Politics, Narratives",
  },
  {
    title: "Scorecard",
    body: "We track what we get right and wrong. Public. No spin.",
  },
  {
    title: "Next Update",
    body: "New predictions added weekly. Next full trajectory review: 27 March 2026",
  },
  {
    title: "Latest Convergence",
    body: "Winter 2026 Squeeze forming. Energy + Food + Economy aligning.",
  },
];

const InfoBoxes = () => (
  <section className="mx-auto max-w-6xl px-6 py-10">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {INFO_BOXES.map((box) => (
        <div
          key={box.title}
          className="rounded-lg border border-border bg-card p-6 shadow-sm"
        >
          <h3 className="font-sans text-[13px] font-bold uppercase tracking-wide text-foreground">
            {box.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {box.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default InfoBoxes;
