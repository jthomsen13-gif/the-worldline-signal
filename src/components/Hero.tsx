import SignUpForm from "./SignUpForm";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image — visible, not washed out */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
          alt="Atmospheric landscape"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-28 pt-32 text-center">
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
          Worldline Engine
        </h1>
        <p className="mt-3 text-lg italic text-foreground/80 md:text-xl">
          What's changing in the world — and what it means for you
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">
          Evidence-based predictions for what matters to you. Prediction accuracy scored.
        </p>

        <div className="mt-7 inline-flex items-center rounded-full border border-border bg-card/90 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Beta — Predictions added as the world changes
        </div>

        <div id="signup" className="mt-12">
          <SignUpForm />
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Free for beta. You'll be first to know when paid tier launches.
        </p>

        <div className="mt-10">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 font-sans text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
          >
            ☕ Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
