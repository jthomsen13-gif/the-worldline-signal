const markers = [
  { label: "Energy Attrition", value: "17%" },
  { label: "Supply Chain Stress", value: "34%" },
  { label: "Political Volatility", value: "62%" },
  { label: "Inflation Drift", value: "8.1%" },
];

const Ticker = () => {
  return (
    <div className="w-full border-b border-border/30 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        {markers.map((m, i) => (
          <div key={i} className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-muted-foreground/70">
            <span>{m.label}</span>
            <span className="font-medium text-muted-foreground">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
