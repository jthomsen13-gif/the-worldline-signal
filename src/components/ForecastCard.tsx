import type { Tables } from "@/integrations/supabase/types";

interface ForecastCardProps {
  forecast: Tables<"forecasts">;
  onClick: (forecast: Tables<"forecasts">) => void;
}

const ForecastCard = ({ forecast, onClick }: ForecastCardProps) => {
  return (
    <button
      onClick={() => onClick(forecast)}
      className="group w-full rounded-sm border border-border bg-card p-5 text-left transition-all hover:border-foreground/30 hover:shadow-md"
    >
      <h3 className="font-sans text-base font-bold leading-snug text-foreground group-hover:underline">
        {forecast.headline}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        <span className="font-mono text-xs uppercase tracking-wide">Trigger:</span>{" "}
        {forecast.trigger}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          Lead: {forecast.lead_time}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {forecast.confidence}% confidence
        </span>
      </div>

      {/* Confidence bar */}
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${forecast.confidence}%` }}
        />
      </div>

      <div className="mt-3">
        <span className="font-mono text-xs text-accent underline">
          See evidence →
        </span>
      </div>
    </button>
  );
};

export default ForecastCard;
