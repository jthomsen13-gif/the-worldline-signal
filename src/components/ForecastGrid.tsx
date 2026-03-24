interface PlaceholderForecast {
  id: string;
  headline: string;
  trigger: string;
  lead_time: string;
  confidence: number;
}

const PLACEHOLDER_FORECASTS: PlaceholderForecast[] = [
  {
    id: "1",
    headline: "UK energy bills to spike 22% by Q1 2027",
    trigger: "North Sea output decline + LNG contract expirations",
    lead_time: "9–12 months",
    confidence: 78,
  },
  {
    id: "2",
    headline: "Major European semiconductor shortage by mid-2027",
    trigger: "Taiwan Strait tensions + Dutch export restrictions tightening",
    lead_time: "12–18 months",
    confidence: 65,
  },
  {
    id: "3",
    headline: "US commercial real estate defaults to double",
    trigger: "Remote work entrenchment + regional bank stress",
    lead_time: "6–9 months",
    confidence: 72,
  },
  {
    id: "4",
    headline: "Global wheat prices to breach 2022 highs",
    trigger: "Black Sea corridor collapse + Indian export ban extension",
    lead_time: "4–8 months",
    confidence: 58,
  },
  {
    id: "5",
    headline: "NATO Article 5 invocation probability rises to 30%",
    trigger: "Baltic airspace violations escalation pattern",
    lead_time: "18–24 months",
    confidence: 42,
  },
  {
    id: "6",
    headline: "Australia to enter technical recession",
    trigger: "China property contagion + iron ore demand collapse",
    lead_time: "6–12 months",
    confidence: 51,
  },
  {
    id: "7",
    headline: "Global cyber insurance premiums to triple",
    trigger: "Critical infrastructure attacks + AI-assisted exploits",
    lead_time: "12–18 months",
    confidence: 69,
  },
];

interface ForecastCardProps {
  forecast: PlaceholderForecast;
  onClick: (forecast: PlaceholderForecast) => void;
}

const ForecastCard = ({ forecast, onClick }: ForecastCardProps) => {
  return (
    <button
      onClick={() => onClick(forecast)}
      className="group w-full rounded-lg border border-border/50 bg-card p-6 text-left shadow-sm transition-all duration-200 hover:border-border hover:shadow-md"
    >
      <h3 className="font-sans text-[15px] font-semibold leading-snug text-foreground group-hover:text-foreground/90">
        {forecast.headline}
      </h3>

      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {forecast.trigger}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          Lead: {forecast.lead_time}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          {forecast.confidence}%
        </span>
      </div>

      {/* Thin confidence bar */}
      <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-muted/60">
        <div
          className="h-full rounded-full bg-foreground/25 transition-all duration-500"
          style={{ width: `${forecast.confidence}%` }}
        />
      </div>

      <div className="mt-4 flex items-center gap-1">
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
          See evidence
        </span>
        <span className="text-[11px] text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </button>
  );
};

const ForecastGrid = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-4">
      <div className="mb-8 flex items-end justify-between border-b border-border/40 pb-4">
        <div>
          <h2 className="font-sans text-xl font-bold tracking-tight text-foreground">
            Active Forecasts
          </h2>
          <p className="mt-1 text-[13px] text-muted-foreground">
            {PLACEHOLDER_FORECASTS.length} predictions currently tracked
          </p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Updated daily
        </span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_FORECASTS.map((f) => (
          <ForecastCard key={f.id} forecast={f} onClick={() => {}} />
        ))}
      </div>
    </section>
  );
};

export default ForecastGrid;
