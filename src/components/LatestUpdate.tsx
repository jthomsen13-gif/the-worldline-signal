import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const LatestUpdate = () => {
  const { data: update } = useQuery({
    queryKey: ["latest-update"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("updates")
        .select("content, created_at")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const content = update?.content ?? "Monitoring active.";
  const dateStr = update?.created_at
    ? format(new Date(update.created_at), "d MMM yyyy")
    : null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-4">
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-baseline gap-3">
          <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Latest Update
          </span>
          {dateStr && (
            <span className="font-mono text-xs text-muted-foreground">
              — {dateStr}
            </span>
          )}
        </div>
        <p className="mt-1 font-serif text-sm leading-relaxed text-foreground">
          {content}
        </p>
      </div>
    </div>
  );
};

export default LatestUpdate;
