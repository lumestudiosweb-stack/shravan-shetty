import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DOCTOR } from "@/lib/doctor";

function CountUp({
  to,
  suffix = "",
  duration = 1500,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(to * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="num-tab">
      {n}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    label: "Years in Faculty Practice",
    value: DOCTOR.practiceYears,
    suffix: "+",
    note: "",
  },
  {
    label: "Peer-Reviewed Publications",
    value: 30,
    suffix: "+",
    note: "",
  },
  {
    label: "Areas of Active Research",
    value: 4,
    suffix: "",
    note: "Aligners, implants, workflow, cephalometry",
  },
  {
    label: "Professional Affiliations",
    value: 4,
    suffix: "",
    note: "IOS, IDA, MOSG, DKCA",
  },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/40 backdrop-blur">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-5 border-l border-primary/30"
            >
              <span className="absolute -left-px top-0 h-10 w-px bg-primary" />
              <div className="font-display text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold">
                {s.label}
              </p>
              {s.note && (
                <p className="mt-1.5 text-[13px] text-muted-foreground/80">
                  {s.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
