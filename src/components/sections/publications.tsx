import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Filter, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { DOCTOR, PUBLICATIONS, type Publication } from "@/lib/doctor";
import { cn } from "@/lib/utils";

const TAG_LABELS: Record<Publication["tag"], string> = {
  clinical: "Clinical",
  research: "Research",
  review: "Review",
  device: "Device",
};

const FILTERS: Array<{ key: "all" | Publication["tag"]; label: string }> = [
  { key: "all", label: "All" },
  { key: "research", label: "Research" },
  { key: "clinical", label: "Clinical" },
  { key: "device", label: "Devices" },
];

export function Publications() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const list = PUBLICATIONS.filter(
    (p) => filter === "all" || p.tag === filter
  );

  return (
    <section
      id="publications"
      className="section-pad bg-surface/40 border-y border-border"
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="Publications"
              title={
                <>
                  Every paper, sorted{" "}
                  <span className="text-gradient">chronologically.</span>
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start lg:items-end justify-end gap-4">
            <p className="text-muted-foreground leading-relaxed">
              Tap a row to expand and read the authors, source and abstract where
              available. A featured selection appears below — for the complete
              30+ paper list, view the Google Scholar profile.
            </p>
            <a
              href={DOCTOR.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:bg-primary/10 transition-colors"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              View full list on Google Scholar
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold">
            <Filter className="h-3.5 w-3.5 text-primary" />
            Filter
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-medium border transition-all",
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-card/40"
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-6 px-6 pb-3 border-b border-border text-xs uppercase tracking-[0.16em] text-muted-foreground/80 font-semibold">
          <div className="col-span-1">Year</div>
          <div className="col-span-8">Title</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-1 text-right">&nbsp;</div>
        </div>

        <ul className="divide-y divide-border">
          {list.map((p, i) => {
            const isOpen = openId === p.id;
            const highlighted = p.featured;
            return (
              <motion.li
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group transition-colors",
                  isOpen && "bg-surface-high/60"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  className="w-full text-left px-4 md:px-6 py-6 grid grid-cols-12 gap-4 md:gap-6 items-baseline hover:bg-primary/5 transition-colors"
                >
                  <div className="col-span-2 md:col-span-1 font-display text-2xl font-semibold text-foreground num-tab">
                    {p.year}
                  </div>
                  <div className="col-span-10 md:col-span-8">
                    <h3 className="font-display text-[18px] md:text-[20px] font-semibold leading-snug text-foreground group-hover:text-primary transition-colors text-balance">
                      {p.title}
                      {highlighted && (
                        <span className="ml-2 inline-flex items-center align-middle px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-medium">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="hidden md:block mt-1.5 text-sm text-muted-foreground/85">
                      {p.authors}
                    </p>
                  </div>
                  <div className="hidden md:block col-span-2 text-xs uppercase tracking-[0.14em] text-muted-foreground/80 font-semibold">
                    {TAG_LABELS[p.tag]}
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-primary transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-8 md:pb-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-primary/15 pt-6">
                          <div className="md:col-span-3 space-y-4 text-sm">
                            <div>
                              <p className="text-xs uppercase tracking-[0.16em] text-primary/70 font-semibold mb-1">
                                Year
                              </p>
                              <p className="text-foreground">{p.year}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.16em] text-primary/70 font-semibold mb-1">
                                Type
                              </p>
                              <p className="text-foreground">{TAG_LABELS[p.tag]}</p>
                            </div>
                          </div>
                          <div className="md:col-span-9 space-y-5">
                            <div>
                              <p className="text-xs uppercase tracking-[0.16em] text-primary/70 font-semibold mb-2">
                                Authors
                              </p>
                              <p className="text-sm text-foreground/90 leading-relaxed">
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
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.16em] text-primary/70 font-semibold mb-2">
                                Source
                              </p>
                              <p className="text-sm text-foreground/90 leading-relaxed italic">
                                {p.journal}
                                <span className="not-italic">, </span>
                                {p.volume}
                              </p>
                            </div>
                            {p.abstract && (
                              <div>
                                <p className="text-xs uppercase tracking-[0.16em] text-primary/70 font-semibold mb-2">
                                  Abstract
                                </p>
                                <p className="text-sm text-foreground/85 leading-relaxed font-display italic">
                                  {p.abstract}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
