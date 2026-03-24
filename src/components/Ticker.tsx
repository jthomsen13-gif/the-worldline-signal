const markers = [
  { label: "Energy Attrition", value: "17%" },
  { label: "Supply Chain Stress", value: "34%" },
  { label: "Political Volatility Index", value: "62%" },
  { label: "Inflation Drift", value: "8.1%" },
];

const Ticker = () => {
  return (
    <div className="w-full border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {markers.map((m, i) => (
          <div key={i} className="flex items-center gap-2 font-mono text-xs tracking-wide uppercase">
            <span className="opacity-60">{m.label}</span>
            <span className="font-semibold">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
