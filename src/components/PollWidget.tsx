import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const POLL_OPTIONS = [
  "Cost of living",
  "Military/conflicts",
  "Energy infrastructure",
  "Politics/elections",
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
      localStorage.getItem("worldline_session_id") ||
      crypto.randomUUID();
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
      <section className="mx-auto max-w-2xl px-4 pb-16 text-center">
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="font-sans text-sm font-medium text-foreground">
            Thanks for voting. Your input shapes what we predict next.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-4 pb-16">
      <div className="rounded-sm border border-border bg-card p-6">
        <h3 className="font-sans text-base font-bold text-foreground">
          What should we predict next?
        </h3>

        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          className="mt-4 space-y-2"
        >
          {POLL_OPTIONS.map((option) => (
            <div key={option} className="flex items-center gap-3">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="text-sm cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {selected === "Something else" && (
          <Input
            placeholder="What topic?"
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            className="mt-3 font-mono text-sm"
          />
        )}

        <Button
          onClick={handleVote}
          disabled={!selected || loading}
          className="mt-4 font-sans"
        >
          {loading ? "Voting…" : "Vote"}
        </Button>
      </div>
    </section>
  );
};

export default PollWidget;
