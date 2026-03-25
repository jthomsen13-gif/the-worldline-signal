import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Method", to: "/method" },
  { label: "About", to: "/about" },
  { label: "Depot", to: "/depot" },
  { label: "Contact", to: "/contact" },
  { label: "Trajectories", to: "/trajectories" },
  { label: "Convergences", to: "/convergences" },
  { label: "Scorecard", to: "/scorecard" },
  { label: "Archive", to: "/archive" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-sans text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 border-t border-border/30 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
            © Worldline Engine {new Date().getFullYear()}. Beta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
