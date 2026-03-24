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
      // Subscribe to mailing list
      await supabase.from("subscribers").upsert(
        { email, opted_in: true },
        { onConflict: "email" }
      );

      // Send magic link
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
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
      <Input
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-mono text-sm"
        required
      />
      <Button type="submit" disabled={loading} className="whitespace-nowrap font-sans">
        {loading ? "Sending…" : "Get free access"}
      </Button>
      {message && (
        <p className="absolute mt-12 text-sm text-muted-foreground">{message}</p>
      )}
    </form>
  );
};

export default SignUpForm;
