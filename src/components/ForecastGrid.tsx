import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import ForecastCard from "./ForecastCard";
import ForecastDrawer from "./ForecastDrawer";

const ForecastGrid = () => {
  const [forecasts, setForecasts] = useState<Tables<"forecasts">[]>([]);
  const [selected, setSelected] = useState<Tables<"forecasts"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecasts = async () => {
      const { data } = await supabase
        .from("forecasts")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (data) setForecasts(data);
      setLoading(false);
    };
    fetchForecasts();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center font-mono text-sm text-muted-foreground">
        Loading forecasts…
      </div>
    );
  }

  if (forecasts.length === 0) {
    return (
      <div className="py-12 text-center font-mono text-sm text-muted-foreground">
        No active forecasts yet. Check back soon.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <h2 className="mb-6 font-sans text-xl font-bold text-foreground">
        Active Forecasts
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {forecasts.map((f) => (
          <ForecastCard key={f.id} forecast={f} onClick={setSelected} />
        ))}
      </div>

      <ForecastDrawer
        forecast={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default ForecastGrid;
