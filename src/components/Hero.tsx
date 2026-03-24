import SignUpForm from "./SignUpForm";

const Hero = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center">
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Worldline Engine
      </h1>
      <p className="mt-2 font-serif text-lg italic text-muted-foreground md:text-xl">
        What's coming, before it arrives.
      </p>
      <p className="mt-4 text-base text-muted-foreground">
        Evidence-based predictions. Public scorecard.
      </p>

      <div className="mt-6 inline-flex items-center rounded-sm border border-border bg-secondary px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Beta
      </div>

      <div className="mt-8">
        <SignUpForm />
      </div>

      <div className="mt-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary px-4 py-2 font-sans text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </section>
  );
};

export default Hero;
