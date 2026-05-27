import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { DOCTOR, ROTATING_TITLES } from "@/lib/doctor";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => ROTATING_TITLES, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleIndex((i) => (i === titles.length - 1 ? 0 : i + 1));
    }, 2400);
    return () => clearTimeout(id);
  }, [titleIndex, titles]);

  return (
    <AuroraBackground
      id="home"
      className="relative min-h-svh w-full justify-start"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-[2]" />

      <div className="container relative z-10 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-7 text-xs uppercase tracking-[0.18em] text-primary font-semibold"
            >
              Orthodontist &middot; Academician &middot; Researcher
            </motion.div>

            <h1 className="display-h1 text-balance">
              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="block text-foreground"
              >
                Dr.&nbsp;Shravan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block font-display font-medium italic text-gradient"
              >
                Shetty.
              </motion.span>
            </h1>

            {/* Rotating specialty line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex items-baseline flex-wrap gap-x-3 gap-y-1 font-display text-lg sm:text-xl md:text-2xl"
            >
              <span className="text-muted-foreground">A practice in</span>
              <span className="relative inline-flex h-[1.4em] w-full sm:w-auto min-w-[240px] sm:min-w-[280px] overflow-hidden align-baseline">
                {titles.map((t, i) => (
                  <motion.span
                    key={i}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: "-130%" }}
                    transition={{ type: "spring", stiffness: 55, damping: 14 }}
                    animate={
                      titleIndex === i
                        ? { y: 0, opacity: 1 }
                        : { y: titleIndex > i ? "-160%" : "160%", opacity: 0 }
                    }
                  >
                    {t}
                  </motion.span>
                ))}
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              Assistant Professor at the {DOCTOR.department}, {DOCTOR.institution}, {DOCTOR.city}. {DOCTOR.shortTagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="h-12 px-7 text-sm font-semibold">
                <a href={`tel:${DOCTOR.phoneTel}`}>
                  <Phone className="h-4 w-4" />
                  {DOCTOR.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7">
                <a href="#publications">
                  Explore the Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7">
                <a href={DOCTOR.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Credential strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 glass rounded-2xl sm:rounded-full px-5 sm:px-6 py-3 text-xs sm:text-sm text-muted-foreground max-w-fit"
            >
              <span className="text-foreground font-medium">MDS &middot; SDM Dharwad &middot; 2016</span>
              <span className="hidden sm:inline h-4 w-px bg-border" />
              <span className="hidden sm:inline">6 Peer-Reviewed Publications</span>
              <span className="hidden md:inline h-4 w-px bg-border" />
              <span className="hidden md:inline">{DOCTOR.practiceYears}+ Years in Practice</span>
            </motion.div>
          </div>

          {/* RIGHT — portrait as the focal point */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="relative max-w-[440px] mx-auto lg:ml-auto lg:mr-0"
            >
              {/* Decorative offset frame */}
              <div className="absolute -inset-4 rounded-[24px] border border-primary/20 -z-10" />
              <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full bg-primary/8 blur-2xl -z-10" />

              <div className="glass p-3">
                <div className="overflow-hidden rounded-[10px]" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src={DOCTOR.photo}
                    alt="Portrait of Dr. Shravan Shetty, Assistant Professor of Orthodontics at Manipal College of Dental Sciences, Mangaluru"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-cover saturate-95 contrast-100"
                  />
                </div>
                <div className="px-2 pt-4 pb-2 flex items-center justify-between">
                  <div>
                    <p className="font-display text-foreground text-[15px] font-semibold leading-tight">
                      Dr. Shravan Shetty
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Assistant Professor &middot; Orthodontics
                    </p>
                  </div>
                  <span className="text-xs text-primary font-medium">est. 2017</span>
                </div>
              </div>

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 left-2 sm:-left-6 lg:-left-10 max-w-[240px] sm:max-w-[260px] glass p-4 sm:p-5"
              >
                <Quote className="h-4 w-4 text-primary mb-3" />
                <p className="font-display font-medium italic text-foreground leading-snug text-[17px]">
                  "Precision is a discipline, not an event."
                </p>
                <p className="text-xs text-muted-foreground mt-3">— Dr. Shravan Shetty</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
