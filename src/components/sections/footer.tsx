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
    title: "Reach",
    links: [
      { href: DOCTOR.linkedin, label: "LinkedIn", external: true },
      { href: `mailto:${DOCTOR.email}`, label: DOCTOR.email },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-6">
              An Academic Portfolio
            </p>
            <h2 className="font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl text-foreground">
              {DOCTOR.firstName}
              <br />
              <span className="text-gradient italic font-medium">
                {DOCTOR.lastName}.
              </span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              An orthodontic practice bridging clinical care with digital workflow
              research from Mangaluru.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-3 gap-6">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80 font-semibold mb-4">
                  {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={(l as any).external ? "_blank" : undefined}
                        rel={
                          (l as any).external ? "noopener noreferrer" : undefined
                        }
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

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {DOCTOR.fullName} · Mangaluru, India
          </p>
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
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
