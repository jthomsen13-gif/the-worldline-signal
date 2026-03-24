import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { Tables } from "@/integrations/supabase/types";

interface ForecastDrawerProps {
  forecast: Tables<"forecasts"> | null;
  open: boolean;
  onClose: () => void;
}

interface EvidenceLink {
  label?: string;
  url: string;
}

interface ChainStep {
  step?: number;
  text: string;
}

const ForecastDrawer = ({ forecast, open, onClose }: ForecastDrawerProps) => {
  if (!forecast) return null;

  const evidenceLinks = (forecast.evidence_links as EvidenceLink[] | null) ?? [];
  const chain = (forecast.chain as ChainStep[] | null) ?? [];

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
          {/* Sneeze (trigger) */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
              The Sneeze
            </h4>
            <p className="mt-1 text-base">{forecast.trigger}</p>
          </div>

          {/* Chain */}
          {chain.length > 0 && (
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Chain of Events
              </h4>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
                {chain.map((c, i) => (
                  <li key={i}>{c.text}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Falsifiability */}
          {forecast.falsifiability && (
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Falsifiability
              </h4>
              <p className="mt-1 text-sm italic">
                This is wrong if: {forecast.falsifiability}
              </p>
            </div>
          )}

          {/* Evidence */}
          {evidenceLinks.length > 0 && (
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Evidence
              </h4>
              <ul className="mt-2 space-y-1">
                {evidenceLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent underline"
                    >
                      {link.label || link.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Convergence badge */}
          {forecast.stack_ids && (forecast.stack_ids as string[]).length > 0 && (
            <div className="rounded-sm border border-border bg-secondary px-3 py-2">
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Part of a Convergence Report
              </span>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ForecastDrawer;
