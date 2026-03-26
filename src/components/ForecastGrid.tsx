import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface PlaceholderForecast {
  id: string;
  headline: string;
  trigger: string;
  lead_time: string;
  confidence: number;
  trajectory: string;
  prediction: string;
  evidence: string;
  falsifiability: string;
  convergence: string;
}

const SHORT_TERM: PlaceholderForecast[] = [
  {
    id: "s1",
    headline: "UK gas bills hit new floor after Qatar LNG strike",
    trigger: "Qatar LNG strike removes 17% of global supply",
    lead_time: "0–3 months",
    confidence: 82,
    trajectory: "Energy",
    prediction:
      "Gas bills hit new floor. Qatar LNG strike removes 17% of global supply. UK prices will rise permanently within 3 months.",
    evidence:
      "Qatar supplies 17% of global LNG. UK imports significant share. Supply shock not recoverable quickly. See Trajectories page for full research.",
    falsifiability:
      "This would be wrong if new supply agreements signed before July 2026 or major producers increase output.",
    convergence: "Part of Winter 2026 Squeeze — coming soon.",
  },
  {
    id: "s2",
    headline: "Petrol floor settles above £1.80/litre",
    trigger: "Iran escalation + refinery margins",
    lead_time: "1–2 months",
    confidence: 75,
    trajectory: "Economy",
    prediction:
      "Petrol prices won't return below £1.80. Iran risk premium baked in. Refinery margins widening.",
    evidence:
      "Iran tensions. Refinery capacity constraints. Demand stable. See Economy trajectory.",
    falsifiability:
      "Wrong if Iran deal signed or OPEC+ significantly increases output before May 2026.",
    convergence: "Part of Winter 2026 Squeeze — coming soon.",
  },
  {
    id: "s3",
    headline: "Energy price spike",
    trigger: "Physical supply constraints pushing household and business costs higher",
    lead_time: "0–1 month",
    confidence: 80,
    trajectory: "Energy",
    prediction:
      "Physical supply constraints pushing household and business costs higher. Watch window: April 2026.",
    evidence:
      "Supply disruptions across multiple channels. See Energy trajectory.",
    falsifiability:
      "Wrong if supply constraints ease before April 2026.",
    convergence: "",
  },
];

const MEDIUM_TERM: PlaceholderForecast[] = [
  {
    id: "m1",
    headline: "Fertilizer prices force UK food price spike",
    trigger: "Fertilizer costs up 29%, pass-through to supermarkets",
    lead_time: "3–6 months",
    confidence: 71,
    trajectory: "Food & Agri",
    prediction:
      "Fertilizer price surge flows through to bread, meat, dairy. UK food inflation re-accelerates by Q3 2026.",
    evidence:
      "Fertilizer prices up 29% March 2026. UK farming heavily dependent on imports. See Food & Agri trajectory.",
    falsifiability:
      "Wrong if government subsidies cover the gap or global fertilizer prices correct sharply.",
    convergence: "Part of Winter 2026 Squeeze — coming soon.",
  },
  {
    id: "m2",
    headline: "Landlord sell-off accelerates after Renters' Rights Act",
    trigger: "Renters' Rights Act takes effect May 1",
    lead_time: "3–9 months",
    confidence: 65,
    trajectory: "Economy",
    prediction:
      "Small landlords exit market. Rental supply drops. Rents increase further despite regulation.",
    evidence:
      "Renters' Rights Act May 1. Landlord sentiment surveys negative. See Economy trajectory.",
    falsifiability:
      "Wrong if institutional landlords fill the gap quickly or act is delayed.",
    convergence: "",
  },
];

const LONG_TERM: PlaceholderForecast[] = [
  {
    id: "l1",
    headline: "Cost-of-living crisis by autumn 2026",
    trigger: "Energy + food + rent converge",
    lead_time: "12+ months",
    confidence: 68,
    trajectory: "Convergence",
    prediction:
      "Gas, food, and rent all rising simultaneously. Sustained inflation. Real wages fall. Second cost-of-living crisis by October 2026.",
    evidence:
      "Energy, Food & Agri, Economy trajectories all pointing same direction. See Convergences page.",
    falsifiability:
      "Wrong if Bank of England cuts aggressively and supply shocks resolve by summer 2026.",
    convergence: "This IS the Winter 2026 Squeeze.",
  },
  {
    id: "l2",
    headline: "Solar storm disrupts UK grid infrastructure",
    trigger: "G3+ solar event during peak demand",
    lead_time: "12–24 months",
    confidence: 45,
    trajectory: "Space",
    prediction:
      "Major solar event causes grid stress. Satellite disruption. GPS unreliability. Cascading infrastructure effects.",
    evidence:
      "G3 solar storm March 2026 was a warning shot. Solar cycle 25 peaking. See Space trajectory.",
    falsifiability:
      "Wrong if solar cycle 25 declines faster than expected or grid hardening completed.",
    convergence: "",
  },
  {
    id: "l3",
    headline: "Public trust in institutions drops below 20%",
    trigger: "Epstein files + institutional silence",
    lead_time: "12–18 months",
    confidence: 55,
    trajectory: "Politics",
    prediction:
      "3 million Epstein files released. Resignations follow. Public trust in institutions reaches historic lows.",
    evidence:
      "Files released March 2026. Lord Mandelson resigned. Belgium Article 4 withdrawn. See Politics trajectory.",
    falsifiability:
      "Wrong if files lead to prosecutions and institutional accountability is seen to work.",
    convergence: "",
  },
];

const ForecastCard = ({
  forecast,
  onClick,
}: {
  forecast: PlaceholderForecast;
  onClick: (f: PlaceholderForecast) => void;
}) => (
  <button
    onClick={() => onClick(forecast)}
    className="group w-full rounded-lg border border-border bg-card p-6 text-left shadow-sm transition-all duration-200 hover:shadow-md"
  >
    <h3 className="font-sans text-[15px] font-semibold leading-snug text-foreground">
      {forecast.headline}
    </h3>
    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{forecast.trigger}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Lead: {forecast.lead_time}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {forecast.confidence}%
      </span>
    </div>
    <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-accent transition-all duration-500"
        style={{ width: `${forecast.confidence}%` }}
      />
    </div>
    <div className="mt-4 flex items-center gap-1">
      <span className="font-mono text-[11px] tracking-wide text-accent transition-colors group-hover:text-foreground">
        See evidence
      </span>
      <span className="text-[11px] text-accent transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </div>
  </button>
);

const ForecastDrawer = ({
  forecast,
  open,
  onClose,
}: {
  forecast: PlaceholderForecast | null;
  open: boolean;
  onClose: () => void;
}) => {
  if (!forecast) return null;
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold leading-snug">
            {forecast.headline}
          </SheetTitle>
          <SheetDescription className="font-mono text-xs uppercase tracking-wide">
            Lead time: {forecast.lead_time} · Confidence: {forecast.confidence}%
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Full Prediction
            </h4>
            <p className="mt-1 text-[15px] leading-relaxed text-foreground">{forecast.prediction}</p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Trajectory
            </h4>
            <span className="mt-1 inline-block rounded-full border border-border bg-secondary px-3 py-0.5 font-mono text-[11px] text-foreground">
              {forecast.trajectory}
            </span>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Key Evidence
            </h4>
            <p className="mt-1 text-[14px] leading-relaxed text-foreground">
              {forecast.evidence}
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Falsifiability
            </h4>
            <p className="mt-1 text-[14px] italic leading-relaxed text-foreground">
              {forecast.falsifiability}
            </p>
          </div>

          {forecast.convergence && (
            <div className="rounded-md border border-border bg-secondary px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-wide text-foreground">
                {forecast.convergence}
              </span>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const TimeSection = ({
  title,
  subtitle,
  forecasts,
  onCardClick,
}: {
  title: string;
  subtitle: string;
  forecasts: PlaceholderForecast[];
  onCardClick: (f: PlaceholderForecast) => void;
}) => (
  <div>
    <div className="mb-8 border-b border-border pb-3">
      <h2 className="font-sans text-lg font-bold tracking-tight text-foreground">{title}</h2>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {subtitle}
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {forecasts.map((f) => (
        <ForecastCard key={f.id} forecast={f} onClick={onCardClick} />
      ))}
    </div>
  </div>
);

const ForecastGrid = () => {
  const [selected, setSelected] = useState<PlaceholderForecast | null>(null);

  return (
    <>
      <section className="space-y-20 pb-28 pt-8">
        {/* What We Do */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] leading-relaxed text-foreground">
            We track 7 trajectories — Energy, Military, Space, Food &amp; Agri, Economy, Politics,
            Narratives. Surface evidence gaps. Analyse convergences. Publish what's coming.
          </p>
        </div>

        <TimeSection
          title="Short-term"
          subtitle="0–3 months"
          forecasts={SHORT_TERM}
          onCardClick={setSelected}
        />
        <TimeSection
          title="Medium-term"
          subtitle="3–12 months"
          forecasts={MEDIUM_TERM}
          onCardClick={setSelected}
        />
        <TimeSection
          title="Long-term"
          subtitle="12+ months"
          forecasts={LONG_TERM}
          onCardClick={setSelected}
        />
      </section>

      <ForecastDrawer
        forecast={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default ForecastGrid;
