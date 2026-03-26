import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Restore session from storage FIRST, then mark ready
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsReady(true);
    });

    // Listen for subsequent auth changes (sign-in via magic link, sign-out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (!isReady) setIsReady(true);
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="font-mono text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
        <div className="mx-auto max-w-md rounded-lg border border-border bg-card p-10 text-center shadow-sm">
          <h2 className="font-sans text-xl font-bold text-foreground">Sign in to view this content</h2>
          <p className="mt-3 text-[14px] text-muted-foreground">
            This page is available to logged-in users. Sign in or create an account to continue.
          </p>
          <a
            href="/#signup"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-2.5 font-sans text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to sign in
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
