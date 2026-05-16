import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  chapter?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  chapter,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3"
      >
        {chapter && (
          <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-primary/70">
            {chapter}
          </span>
        )}
        {chapter && (
          <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
        )}
        <span className="eyebrow text-primary">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="display-h2 text-balance text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
