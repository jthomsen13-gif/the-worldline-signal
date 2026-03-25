import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-xl px-6 py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-muted-foreground">
          Questions, tips, or corrections — get in touch.
        </p>

        {sent ? (
          <div className="mt-10 rounded-lg border border-border/50 bg-card p-8 text-center shadow-sm">
            <p className="font-sans text-sm font-medium text-foreground">Message sent.</p>
            <p className="mt-1 text-[13px] text-muted-foreground">We'll get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <Input placeholder="Name" required className="border-border/60" />
            <Input type="email" placeholder="Email" required className="border-border/60" />
            <Textarea placeholder="Message" required rows={5} className="border-border/60" />
            <Button type="submit" className="w-full font-sans text-[13px] font-medium tracking-wide">
              Send
            </Button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
