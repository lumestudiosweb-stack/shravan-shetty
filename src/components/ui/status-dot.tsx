import { cn } from "@/lib/utils";

type Tone = "live" | "muted" | "warn";
const TONE: Record<Tone, string> = {
  live: "bg-emerald-400",
  muted: "bg-sky-400",
  warn: "bg-amber-400",
};

export function StatusDot({ tone = "live" }: { tone?: Tone }) {
  return (
    <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
      <span
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
          TONE[tone]
        )}
      />
      <span
        className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", TONE[tone])}
      />
    </span>
  );
}
