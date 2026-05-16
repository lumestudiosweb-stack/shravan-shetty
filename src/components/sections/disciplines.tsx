import { motion } from "framer-motion";
import { Activity, Atom, Layers, Microscope } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SPECIALTIES } from "@/lib/doctor";

const ICONS = [Layers, Atom, Activity, Microscope];

export function Disciplines() {
  return (
    <section id="disciplines" className="section-pad relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <SectionHeading
            eyebrow="Clinical Focus"
            title={
              <>
                A practice built around <span className="text-gradient">four pillars.</span>
              </>
            }
          />
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Each pillar pairs an established clinical workflow with an active research interest. The intersection is where the practice grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {SPECIALTIES.map((s, i) => {
            const Icon = ICONS[i] ?? Layers;
            return (
              <motion.article
                key={s.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative glass glass-hover p-8 md:p-10 overflow-hidden"
              >
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-primary/8 blur-3xl group-hover:bg-primary/14 transition-colors duration-700" />

                <div className="relative flex items-start justify-between mb-7">
                  <span className="font-display text-[44px] leading-none text-primary/25 font-bold">
                    {s.code}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-display text-[26px] md:text-[30px] font-semibold leading-tight text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-7">
                  {s.blurb}
                </p>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/70">
                  {s.keywords.map((k) => (
                    <span key={k} className="chip">
                      {k}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
