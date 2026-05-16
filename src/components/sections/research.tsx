import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CitationGraph } from "@/components/ui/citation-graph";
import { PUBLICATIONS } from "@/lib/doctor";

export function Research() {
  const featured = PUBLICATIONS.filter((p) => p.featured);

  return (
    <section id="research" className="section-pad relative">
      {/* decorative bg */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[800px] opacity-[0.35]">
          <CitationGraph className="w-full" />
        </div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              chapter="03 / Research"
              eyebrow="Featured Work"
              title={
                <>
                  Where his clinical thinking meets{" "}
                  <span className="text-gradient">peer review.</span>
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Two publications that capture the through-line of the research practice
              — bringing digital tools to a clinical discipline that's traditionally
              been pen-on-tracing-paper.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass corner-brackets overflow-hidden grid grid-cols-1 lg:grid-cols-5"
            >
              {/* Image side */}
              <div
                className={`relative lg:col-span-2 min-h-[260px] lg:min-h-[420px] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {p.photo && (
                  <img
                    src={p.photo}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover saturate-90 contrast-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/85 via-background/40 to-transparent" />
                {/* HUD label */}
                <div className="absolute top-4 left-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase">
                  <span className="px-2 py-1 rounded-sm bg-primary/20 text-primary border border-primary/30">
                    {p.id}
                  </span>
                  <span className="text-foreground/80">{p.year}</span>
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/80">
                  {p.tag}
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.22em] uppercase text-primary/70">
                  PEER-REVIEWED
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-4">
                  {p.journal} · {p.volume}
                </p>
                <h3 className="font-display text-2xl md:text-[32px] font-semibold leading-[1.15] text-foreground text-balance">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground/80">
                  {p.authors.split(", ").map((a, idx, arr) => (
                    <span key={a}>
                      <span
                        className={
                          a.startsWith("Shetty S") ? "text-primary font-medium" : ""
                        }
                      >
                        {a}
                      </span>
                      {idx < arr.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                {p.abstract && (
                  <blockquote className="mt-6 relative pl-5 border-l-2 border-primary/40">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-primary bg-card" />
                    <p className="text-[15px] leading-relaxed text-foreground/85 font-serif italic">
                      {p.abstract}
                    </p>
                  </blockquote>
                )}

                <div className="mt-7 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/70">
                    <span>RECORD · {p.id}</span>
                    <span className="h-3 w-px bg-border" />
                    <span>{p.year}</span>
                  </div>
                  <a
                    href="#publications"
                    className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-primary hover:text-foreground transition-colors"
                  >
                    Index
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
