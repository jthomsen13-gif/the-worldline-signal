import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import type { User } from "@supabase/supabase-js";

const NAV_LINKS = [
  { label: "Home", to: "/", auth: false },
  { label: "Trajectories", to: "/trajectories", auth: true },
  { label: "Convergences", to: "/convergences", auth: true },
  { label: "Scorecard", to: "/scorecard", auth: true },
  { label: "Method", to: "/method", auth: false },
  { label: "About", to: "/about", auth: false },
  { label: "Depot", to: "/depot", auth: false },
  { label: "Contact", to: "/contact", auth: false },
];

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );
    supabase.auth.getSession().then(({ data: { session } }) =>
      setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const visibleLinks = NAV_LINKS.filter((l) => !l.auth || user);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo / wordmark */}
        <Link to="/" className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-foreground">
          Worldline
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {visibleLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-sm px-3 py-1.5 font-sans text-[13px] font-medium tracking-wide transition-colors hover:bg-secondary ${
                location.pathname === l.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Auth button */}
        <div className="hidden md:block">
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="font-sans text-[13px] font-medium tracking-wide text-muted-foreground"
            >
              Log out
            </Button>
          ) : (
            <Link to="/#signup">
              <Button
                variant="outline"
                size="sm"
                className="font-sans text-[13px] font-medium tracking-wide"
              >
                Log in
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-[5.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border/40 bg-background px-6 pb-4 pt-2 md:hidden">
          {visibleLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-border/40 pt-2">
            {user ? (
              <button onClick={handleLogout} className="font-sans text-sm text-muted-foreground">
                Log out
              </button>
            ) : (
              <Link to="/#signup" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-muted-foreground">
                Log in
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
