import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusDot } from "@/components/ui/status-dot";
import { DOCTOR } from "@/lib/doctor";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* aurora-ish glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="container relative">
        <div className="glass corner-brackets overflow-hidden">
          {/* header bar */}
          <div className="flex items-center justify-between border-b border-border/60 bg-surface-low/60 px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase">
            <div className="flex items-center gap-3 text-primary/80">
              <StatusDot />
              <span>CHANNEL · OPEN</span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-muted-foreground/80">
              <span>shravan.shetty // contact_v1</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 p-8 md:p-12 lg:p-16">
            <div className="col-span-12 lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary mb-6"
              >
                06 / Contact — Let's collaborate
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="display-h2 text-balance"
              >
                For academic <span className="text-gradient">collaboration,</span>
                <br /> research, speaking & teaching.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-7 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl"
              >
                Open to research partnerships in digital orthodontics, invited
                speaking, postgraduate masterclasses, and academic conversations on
                aligner therapy &amp; biomechanics.
              </motion.p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 px-7 text-sm font-semibold shadow-glow">
                  <a href={DOCTOR.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-7">
                  <a href={`mailto:${DOCTOR.email}`}>
                    <AtSign className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l border-border/50 space-y-7">
              <ContactRow
                kind="LINKEDIN"
                icon={<Linkedin className="h-3.5 w-3.5" />}
                primary={DOCTOR.linkedinHandle}
                href={DOCTOR.linkedin}
              />
              <ContactRow
                kind="EMAIL"
                icon={<AtSign className="h-3.5 w-3.5" />}
                primary={DOCTOR.email}
                href={`mailto:${DOCTOR.email}`}
              />
              <ContactRow
                kind="DEPARTMENT"
                icon={<MapPin className="h-3.5 w-3.5" />}
                primary={`${DOCTOR.department}`}
                secondary={`${DOCTOR.institution} · ${DOCTOR.city}`}
              />

              {/* Decorative system status */}
              <div className="pt-7 border-t border-border/50">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
                  Currently
                </p>
                <ul className="space-y-2 font-mono text-[11px] tracking-[0.16em] uppercase">
                  <li className="flex items-center gap-3 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    On Faculty · MCODS Mangaluru
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting Research Conversations
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                    Booking Q3 Speaker Slots
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  kind,
  icon,
  primary,
  secondary,
  href,
}: {
  kind: string;
  icon: React.ReactNode;
  primary: string;
  secondary?: string;
  href?: string;
}) {
  const Inner = (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary inline-flex items-center gap-2">
          {icon}
          {kind}
        </span>
        {href && (
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
      <p className="font-display text-lg md:text-xl text-foreground break-all">
        {primary}
      </p>
      {secondary && (
        <p className="text-sm text-muted-foreground/80 mt-1">{secondary}</p>
      )}
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block group"
    >
      {Inner}
    </a>
  ) : (
    <div>{Inner}</div>
  );
}
