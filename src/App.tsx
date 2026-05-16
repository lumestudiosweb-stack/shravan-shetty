import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Disciplines } from "@/components/sections/disciplines";
import { Stats } from "@/components/sections/stats";
import { Academic } from "@/components/sections/academic";
import { Research } from "@/components/sections/research";
import { Publications } from "@/components/sections/publications";
import { Engagement } from "@/components/sections/engagement";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Disciplines />
        <Stats />
        <Academic />
        <Research />
        <Publications />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
