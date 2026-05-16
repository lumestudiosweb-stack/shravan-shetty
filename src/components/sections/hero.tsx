import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, ScanLine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CephTracing } from "@/components/ui/ceph-tracing";
import { StatusDot } from "@/components/ui/status-dot";
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
      {/* faint hairline grid behind aurora */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-[2]" />

      <div className="container relative z-10 pt-36 pb-24 lg:pt-44 lg:pb-28">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7">
            {/* Top meta strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2 text-primary">
                <StatusDot />
                On Faculty
              </span>
              <span className="h-px w-6 bg-border" />
              <span>MCODS · Mangaluru</span>
              <span className="hidden sm:inline h-px w-6 bg-border" />
              <span className="hidden sm:inline">Since 2017</span>
            </motion.div>

            {/* Headline */}
            <h1 className="display-h1 text-balance">
              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="block text-foreground"
              >
                Orthodontics.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block"
              >
                <span className="text-gradient">Reimagined</span>{" "}
                <span className="text-muted-foreground/60 font-display italic font-medium">
                  as data.
                </span>
              </motion.span>
            </h1>

            {/* Rotating specialty line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex items-baseline flex-wrap gap-x-3 gap-y-1 font-display text-xl md:text-2xl"
            >
              <span className="text-muted-foreground">A practice in</span>
              <span className="relative inline-flex h-[1.4em] min-w-[280px] overflow-hidden align-baseline">
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
              {DOCTOR.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="h-12 px-7 text-sm font-semibold shadow-glow">
                <a href="#publications">
                  <Sparkles className="h-4 w-4" />
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

            {/* Bottom credential bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 inline-flex flex-wrap items-center gap-x-5 gap-y-2 glass rounded-full px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2 text-foreground">
                <ScanLine className="h-3.5 w-3.5 text-primary" />
                MDS · SDM Dharwad · 2016
              </span>
              <span className="hidden sm:inline h-3 w-px bg-border" />
              <span className="hidden sm:inline">6 Publications</span>
              <span className="hidden md:inline h-3 w-px bg-border" />
              <span className="hidden md:inline">{DOCTOR.practiceYears}+ Years Practice</span>
            </motion.div>
          </div>

          {/* RIGHT — Ceph tracing decorative panel + portrait */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="relative glass corner-brackets aspect-[5/6] max-w-[420px] mx-auto lg:ml-auto overflow-hidden"
              >
                {/* Ceph tracing animated */}
                <div className="absolute inset-0 grid place-items-center">
                  <CephTracing className="w-full h-full" />
                </div>
                {/* scanline overlay */}
                <div className="scanline" />
                {/* HUD corners metadata */}
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.22em] uppercase text-primary/70 flex items-center gap-2">
                  <StatusDot tone="muted" />
                  Lat · Ceph
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/80">
                  patient_001
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/70">
                  scan · 4ms
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.22em] uppercase text-primary/70">
                  v0.1 _ shetty
                </div>
              </motion.div>

              {/* Floating portrait card overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-10 -left-4 sm:left-0 lg:-left-12 z-10 glass corner-brackets p-3 w-[170px] sm:w-[200px]"
              >
                <div className="aspect-square rounded-md overflow-hidden border border-primary/20">
                  <img
                    src={DOCTOR.photo}
                    alt={DOCTOR.fullName}
                    loading="eager"
                    className="w-full h-full object-cover saturate-90 contrast-105"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="font-mono text-[10px] text-primary tracking-[0.22em] uppercase">
                    Investigator
                  </p>
                  <p className="font-display text-foreground text-[15px] font-semibold leading-tight mt-1">
                    Dr. Shravan Shetty
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground tracking-[0.16em] uppercase mt-1">
                    MDS · Orthodontics
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
