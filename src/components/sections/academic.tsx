import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { DOCTOR, QUALIFICATIONS, TEACHING, TIMELINE } from "@/lib/doctor";

export function Academic() {
  return (
    <section id="academic" className="section-pad">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="Academic"
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass overflow-hidden mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Current role */}
            <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-4">
                Current Role
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Consultant Orthodontist
                <span className="block">Associate Professor</span>
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {DOCTOR.department}
              </p>
              <p className="mt-1 text-muted-foreground/80 text-sm">
                {DOCTOR.institution}, {DOCTOR.city}
              </p>

              <ul className="mt-8 space-y-4">
                <Row
                  icon={<Building2 className="h-3.5 w-3.5" />}
                  label="Institution"
                  value="MCODS · Manipal University"
                />
                <Row
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  label="Location"
                  value={`${DOCTOR.city}, Karnataka`}
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
                />
              </ul>
            </div>

            {/* Teaching */}
            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-4">
                Now Teaching
              </p>
              <h4 className="font-display text-xl font-semibold text-foreground leading-snug">
                {TEACHING.subject}
              </h4>
              <p className="text-muted-foreground/80 text-sm mt-2">
                Clinical and theoretical instruction, plus postgraduate mentorship.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {TEACHING.cohorts.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-4">
                Qualifications
              </p>
              <ul className="space-y-6">
                {QUALIFICATIONS.map((q) => (
                  <li
                    key={q.degree}
                    className="relative pl-4 border-l border-primary/30"
                  >
                    <span className="absolute -left-px top-0 h-6 w-px bg-primary" />
                    <p className="font-display text-2xl font-semibold text-foreground">
                      {q.degree}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1 leading-snug">
                      {q.field}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2 leading-snug">
                      {q.institution} · {q.year}
                    </p>
                    {q.affiliation && (
                      <p className="text-[11px] text-muted-foreground/60 mt-1 leading-snug italic">
                        {q.affiliation}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-7 flex items-center gap-3">
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
                className="group glass glass-hover grid grid-cols-12 gap-4 md:gap-8 items-center px-6 md:px-7 py-5"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="block font-display text-2xl font-semibold text-foreground leading-none num-tab">
                    {t.year}
                  </span>
                  <span className="block text-[11px] text-muted-foreground/70 mt-1 tracking-wide">
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <span className="text-primary">{icon}</span>
      <span className="text-muted-foreground w-24">{label}</span>
      <span className="text-foreground/90">{value}</span>
    </li>
  );
}
