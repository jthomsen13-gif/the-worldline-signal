import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground/80">
        <p>We collect only the data you provide: your email address when you sign up, and your poll vote. We do not sell, share, or trade your information with third parties.</p>
        <p>We use cookies and localStorage solely to manage your session and prevent duplicate poll votes.</p>
        <p>You can request deletion of your data at any time by contacting us.</p>
        <p>This policy may be updated. Last revised: March 2026.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
