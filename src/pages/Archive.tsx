import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Archive = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Archive
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Past predictions. What we said and what happened.
      </p>

      <div className="mt-14 rounded-lg border border-border/50 bg-card p-8 text-center shadow-sm">
        <p className="text-[15px] text-muted-foreground">
          No resolved predictions yet. Coming soon.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Archive;
