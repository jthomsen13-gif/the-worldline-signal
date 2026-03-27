import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ArchivedPrediction {
  id: string;
  headline: string;
  timeframe: string;
  confidence: number;
  resolved_outcome: string | null;
  resolved_at: string | null;
}

const Archive = () => {
  const { data: predictions, isLoading } = useQuery({
    queryKey: ["predictions-archive"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("predictions")
        .select("id, headline, timeframe, confidence, resolved_outcome, resolved_at")
        .in("status", ["archived", "resolved"])
        .order("resolved_at", { ascending: false });
      if (error) throw error;
      return data as ArchivedPrediction[];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Archive
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Past predictions. What we said and what happened.
        </p>

        {isLoading ? (
          <div className="mt-14 text-center text-sm text-muted-foreground">Loading…</div>
        ) : !predictions || predictions.length === 0 ? (
          <div className="mt-14 rounded-lg border border-border/50 bg-card p-8 text-center shadow-sm">
            <p className="text-[15px] text-muted-foreground">
              No resolved predictions yet. Coming soon.
            </p>
          </div>
        ) : (
          <div className="mt-14 overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Headline
                  </th>
                  <th className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Timeframe
                  </th>
                  <th className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Confidence
                  </th>
                  <th className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Outcome
                  </th>
                  <th className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Resolved
                  </th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((p) => (
                  <tr key={p.id} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-3 font-sans text-[14px] font-medium text-foreground">
                      {p.headline}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs capitalize text-muted-foreground">
                      {p.timeframe}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {p.confidence}%
                    </td>
                    <td className="px-4 py-3">
                      {p.resolved_outcome ? (
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                            p.resolved_outcome === "correct"
                              ? "bg-green-100 text-green-800"
                              : p.resolved_outcome === "incorrect"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {p.resolved_outcome}
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {p.resolved_at
                        ? format(new Date(p.resolved_at), "d MMM yyyy")
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Archive;
