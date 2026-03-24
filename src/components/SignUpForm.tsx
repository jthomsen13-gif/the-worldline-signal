import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      await supabase.from("subscribers").upsert(
        { email, opted_in: true },
        { onConflict: "email" }
      );

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin },
      });

      if (error) throw error;
      setMessage("Check your inbox for the magic link.");
      setEmail("");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
        <Input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full border-border/60 bg-background/80 font-mono text-sm backdrop-blur-sm"
          required
        />
        <Button
          type="submit"
          disabled={loading}
          className="whitespace-nowrap rounded-full font-sans text-[13px] font-medium tracking-wide"
        >
          {loading ? "Sending…" : "Get free access"}
        </Button>
      </form>
      {message && (
        <p className="mt-3 text-center text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
};

export default SignUpForm;
