import { Card, CardContent } from "@/components/ui/card";

const boxes = [
  { title: "World-Line Engine", desc: "How we model what's coming" },
  { title: "Evidence Mapping", desc: "What exists, what's missing, what contradicts" },
  { title: "Logic Gates", desc: "How we test assumptions before accepting them" },
  { title: "Pattern Analysis", desc: "How trajectories converge into predictions" },
];

const AboutInstrument = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground mb-10">
        About This Instrument
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Left — text */}
        <div className="flex-1 space-y-6 font-serif text-base leading-relaxed text-foreground/90">
          <p>
            World-Line tracks the divergence between what the headlines say and what the physical evidence shows. Energy flows, shipping data, infrastructure status, policy gaps — the pressures that build before events, not after.
          </p>
          <p>
            Every signal is mapped using three questions: what evidence exists, what evidence is conspicuously absent, and what evidence contradicts the narrative. Absence is often the loudest signal.
          </p>
          <p>
            One analyst. No institution. No agenda. Methodology published. Track record public. What's changing — and what it means for you.
          </p>
        </div>

        {/* Right — four boxes */}
        <div className="w-full shrink-0 lg:w-80 flex flex-col gap-4">
          {boxes.map((box) => (
            <Card key={box.title}>
              <CardContent className="p-5">
                <p className="font-sans text-sm font-semibold text-foreground">{box.title}</p>
                <p className="mt-1 font-serif text-sm text-muted-foreground">{box.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInstrument;
