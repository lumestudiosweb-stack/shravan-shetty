import { ArrowUp, Linkedin } from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

const COLS = [
  {
    title: "Map",
    links: [
      { href: "#home", label: "Home" },
      { href: "#disciplines", label: "Disciplines" },
      { href: "#academic", label: "Academic" },
      { href: "#research", label: "Research" },
    ],
  },
  {
    title: "Index",
    links: [
      { href: "#publications", label: "Publications" },
      { href: "#engagement", label: "Engagement" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Channels",
    links: [
      { href: DOCTOR.linkedin, label: "LinkedIn", external: true },
      { href: `mailto:${DOCTOR.email}`, label: DOCTOR.email },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface-lowest">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary mb-6">
              shravan.shetty — vol.01 / 2026
            </p>
            <h2 className="font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl text-foreground">
              {DOCTOR.firstName}
              <br />
              <span className="text-gradient">{DOCTOR.lastName}.</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              An orthodontic practice quietly bridging clinical excellence with
              digital workflow research from Mangaluru.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-3 gap-6">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/70 mb-4">
                  {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={(l as any).external ? "_blank" : undefined}
                        rel={(l as any).external ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground/85 hover:text-primary transition-colors break-all"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* System bar */}
        <div className="mt-16 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.22em] uppercase">
          <div className="flex items-center gap-4 text-muted-foreground/70">
            <span className="inline-flex items-center gap-2 text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              SYS · ONLINE
            </span>
            <span>v1.0.0</span>
            <span>build · {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={DOCTOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
