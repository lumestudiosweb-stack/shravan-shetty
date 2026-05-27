import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CitationGraph } from "@/components/ui/citation-graph";
import { PUBLICATIONS } from "@/lib/doctor";

export function Research() {
  const featured = PUBLICATIONS.filter((p) => p.featured);

  return (
    <section id="research" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-0 w-[760px] opacity-30">
          <CitationGraph className="w-full" />
        </div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="Research"
              title={
                <>
                  Where clinical thinking meets{" "}
                  <span className="text-gradient">peer review.</span>
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Two publications that capture the through-line of his research practice
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
              className="glass overflow-hidden grid grid-cols-1 lg:grid-cols-5"
            >
              <div
                className={`relative lg:col-span-2 min-h-[280px] lg:min-h-[440px] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {p.photo && (
                  <img
                    src={p.photo}
                    alt={`Illustration for the paper: ${p.title}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover saturate-95 contrast-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs text-primary font-semibold tracking-wide">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-4">
                  {p.journal} · {p.volume}
                </p>
                <h3 className="font-display text-2xl md:text-[34px] font-semibold leading-[1.15] text-foreground text-balance">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {p.authors.split(", ").map((a, idx, arr) => (
                    <span key={a}>
                      <span
                        className={
                          a.startsWith("Shetty S")
                            ? "text-primary font-medium"
                            : ""
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
                    <p className="text-[15px] leading-relaxed text-foreground/85 font-display italic">
                      {p.abstract}
                    </p>
                  </blockquote>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
