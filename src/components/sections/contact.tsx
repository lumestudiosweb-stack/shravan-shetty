import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOCTOR } from "@/lib/doctor";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/8 blur-[140px]" />
      <div className="container relative">
        <div className="glass overflow-hidden">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 p-8 md:p-12 lg:p-16">
            <div className="col-span-12 lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-6 flex items-center gap-3"
              >
                Contact
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="display-h2 text-balance"
              >
                For academic <span className="text-gradient">collaboration,</span>
                <br />
                research, speaking &amp; teaching.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-7 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl"
              >
                Open to research partnerships in digital orthodontics,
                postgraduate masterclasses, and academic conversations on
                aligner therapy and biomechanics.
              </motion.p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-7 text-sm font-semibold"
                >
                  <a
                    href={DOCTOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-7"
                >
                  <a href={`mailto:${DOCTOR.email}`}>
                    <AtSign className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l border-border space-y-2">
              <ContactRow
                kind="LinkedIn"
                icon={<Linkedin className="h-3.5 w-3.5" />}
                primary={DOCTOR.linkedinHandle}
                href={DOCTOR.linkedin}
              />
              <ContactRow
                kind="Email"
                icon={<AtSign className="h-3.5 w-3.5" />}
                primary={DOCTOR.email}
                href={`mailto:${DOCTOR.email}`}
              />
              <ContactRow
                kind="Email · Digital Orthodontic World"
                icon={<AtSign className="h-3.5 w-3.5" />}
                primary={DOCTOR.secondaryEmail}
                href={`mailto:${DOCTOR.secondaryEmail}`}
              />
              <ContactRow
                kind="Department"
                icon={<MapPin className="h-3.5 w-3.5" />}
                primary={DOCTOR.department}
                secondary={`${DOCTOR.institution} · ${DOCTOR.city}`}
              />
              <ContactRow
                kind="Phone"
                icon={<Phone className="h-3.5 w-3.5" />}
                primary={DOCTOR.phoneDisplay}
                href={`tel:${DOCTOR.phoneTel}`}
              />
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
        <span className="text-xs uppercase tracking-[0.16em] text-primary font-semibold inline-flex items-center gap-2">
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
        <p className="text-sm text-muted-foreground mt-1">{secondary}</p>
      )}
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block group py-5 border-b border-border last:border-b-0"
    >
      {Inner}
    </a>
  ) : (
    <div className="py-5 border-b border-border last:border-b-0">{Inner}</div>
  );
}
