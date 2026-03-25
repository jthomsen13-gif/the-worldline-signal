import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Who's Behind This
      </h1>
      <div className="mt-8 space-y-4 leading-relaxed text-foreground/80">
        <p>
          Worldline Engine. One person, watching the world, writing down what's coming.
        </p>
        <p>
          No funding. No agenda. Just predictions, evidence, and a public scorecard.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
