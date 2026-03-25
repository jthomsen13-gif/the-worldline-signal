import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const POLL_OPTIONS = [
  "Cost of living",
  "Military / conflicts",
  "Energy infrastructure",
  "Politics / elections",
  "Something else",
];

const SESSION_KEY = "worldline_poll_voted";

const PollWidget = () => {
  const [selected, setSelected] = useState("");
  const [otherText, setOtherText] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(SESSION_KEY)) {
      setHasVoted(true);
    }
  }, []);

  const handleVote = async () => {
    if (!selected) return;
    setLoading(true);

    const sessionId =
      localStorage.getItem("worldline_session_id") || crypto.randomUUID();
    localStorage.setItem("worldline_session_id", sessionId);

    await supabase.from("poll_votes").insert({
      option: selected,
      other_text: selected === "Something else" ? otherText : null,
      session_id: sessionId,
    });

    localStorage.setItem(SESSION_KEY, "true");
    setHasVoted(true);
    setLoading(false);
  };

  if (hasVoted) {
    return (
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-8 text-center shadow-sm">
          <p className="font-sans text-sm font-medium text-foreground">
            Thanks for voting.
          </p>
          <p className="mt-1 text-[13px] text-muted-foreground">
            Your input shapes what we predict next.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-8 shadow-sm">
        <h3 className="font-sans text-base font-bold tracking-tight text-foreground">
          What should we predict next?
        </h3>
        <p className="mt-1 text-[13px] text-muted-foreground">
          Pick a topic. We'll investigate.
        </p>

        <div className="mt-5 space-y-2">
          {POLL_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left text-[13px] transition-all ${
                selected === option
                  ? "border-foreground/30 bg-secondary shadow-sm"
                  : "border-border bg-card hover:border-foreground/20 hover:bg-secondary/50"
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                  selected === option
                    ? "border-foreground bg-foreground"
                    : "border-muted-foreground/40"
                }`}
              >
                {selected === option && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                )}
              </span>
              <span className={selected === option ? "font-medium text-foreground" : "text-foreground/70"}>
                {option}
              </span>
            </button>
          ))}
        </div>

        {selected === "Something else" && (
          <Input
            placeholder="What topic should we investigate?"
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            className="mt-3 rounded-md border-border font-mono text-sm"
          />
        )}

        <Button
          onClick={handleVote}
          disabled={!selected || loading}
          className="mt-5 w-full rounded-md font-sans text-[13px] font-medium tracking-wide"
        >
          {loading ? "Voting…" : "Vote"}
        </Button>
      </div>
    </section>
  );
};

export default PollWidget;
