import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import { DOCTOR, QUALIFICATIONS, TEACHING, TIMELINE } from "@/lib/doctor";

export function Academic() {
  return (
    <section id="academic" className="section-pad">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              chapter="02 / Academic"
              eyebrow="Faculty File"
              title={
                <>
                  A decade of clinical teaching at{" "}
                  <span className="text-gradient">MCODS, Mangaluru.</span>
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Shaping postgraduate orthodontists alongside undergraduate clinical
              instruction — and contributing to institutional governance through the
              departmental infection control committee.
            </p>
          </div>
        </div>

        {/* Faculty File card — terminal/clinical-software inspired */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass corner-brackets overflow-hidden mb-12"
        >
          {/* File header bar */}
          <div className="flex items-center justify-between border-b border-border/60 bg-surface-low/60 px-5 py-3 font-mono text-[11px] tracking-[0.18em] uppercase">
            <div className="flex items-center gap-3 text-primary/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary/60" />
              <span>FILE / FACULTY · MCODS-ORTHO-002</span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-muted-foreground/80">
              <span>STATUS</span>
              <StatusDot />
              <span className="text-emerald-300">ACTIVE</span>
            </div>
          </div>

          {/* Body grid */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left column — current role */}
            <div className="md:col-span-5 p-7 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary mb-4">
                Current Role
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Assistant Professor
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {DOCTOR.department}
              </p>
              <p className="mt-1 text-muted-foreground/80 text-sm">
                {DOCTOR.institution}, {DOCTOR.city}.
              </p>

              <div className="mt-7 space-y-3">
                <Row
                  icon={<Building2 className="h-3.5 w-3.5" />}
                  label="Institution"
                  value="MCODS · Manipal University"
                />
                <Row
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  label="Location"
                  value="Mangaluru · Karnataka · IN"
                />
                <Row
                  icon={<Users className="h-3.5 w-3.5" />}
                  label="Committee"
                  value="Infection Control · Member"
                />
                <Row
                  icon={<GraduationCap className="h-3.5 w-3.5" />}
                  label="Tenure"
                  value="2017 — Present"
                  highlight
                />
              </div>
            </div>

            {/* Middle column — teaching */}
            <div className="md:col-span-4 p-7 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary mb-4">
                Now Teaching
              </p>
              <h4 className="font-display text-xl font-semibold text-foreground leading-snug">
                {TEACHING.subject}
              </h4>
              <p className="text-muted-foreground/80 text-sm mt-2">
                Clinical &amp; theoretical instruction, plus postgraduate mentorship.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {TEACHING.cohorts.map((c) => (
                  <span key={c} className="data-chip">
                    {c}
                  </span>
                ))}
              </div>

              {/* Tiny "tooth movement" SVG inset for character */}
              <div className="mt-10 border border-border/50 rounded-md p-4 bg-surface-low/30">
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-primary/70 mb-3">
                  CURRICULUM · LIVE
                </p>
                <div className="flex items-end gap-1 h-12">
                  {[6, 4, 9, 6, 11, 5, 8, 12, 7, 9, 14, 10, 16, 11].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5 }}
                      style={{
                        height: `${h * 4}px`,
                        transformOrigin: "bottom",
                      }}
                      className="w-2.5 bg-primary/50 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — qualifications */}
            <div className="md:col-span-3 p-7 md:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary mb-4">
                Qualifications
              </p>
              <ul className="space-y-6">
                {QUALIFICATIONS.map((q) => (
                  <li key={q.degree} className="relative pl-4 border-l border-primary/30">
                    <span className="absolute -left-px top-0 h-6 w-px bg-primary" />
                    <p className="font-display text-2xl font-semibold text-foreground">
                      {q.degree}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1 leading-snug">
                      {q.field}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/70 mt-2">
                      {q.institution} · {q.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/70 mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary/40" />
            Path so far
          </p>
          <ol className="space-y-3">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={`${t.year}-${t.title}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass glass-hover grid grid-cols-12 gap-4 md:gap-8 items-center px-5 md:px-7 py-5"
              >
                <div className="col-span-3 md:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-primary">
                  <span className="block text-foreground text-2xl font-display font-semibold leading-none">
                    {t.year}
                  </span>
                  <span className="block text-[10px] text-muted-foreground/70 mt-1">
                    → {t.end}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-7">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {t.title}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    {t.org} · {t.location}
                  </p>
                </div>
                <div className="hidden md:block md:col-span-3 text-sm text-muted-foreground/70">
                  {t.detail}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
      <span className="text-primary">{icon}</span>
      <span className="text-muted-foreground/70 w-20">{label}</span>
      <span className={highlight ? "text-primary" : "text-foreground/90"}>
        {value}
      </span>
    </div>
  );
}
