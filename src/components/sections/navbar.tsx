import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DOCTOR } from "@/lib/doctor";

const LINKS = [
  { href: "#disciplines", label: "Disciplines" },
  { href: "#academic", label: "Academic" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#engagement", label: "Engagement" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 140;
      const ids = ["home", ...LINKS.map((l) => l.href.slice(1))];
      let cur = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-2" : "py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center overflow-hidden">
            <span className="font-display text-primary text-lg font-bold leading-none">
              S
            </span>
            <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-foreground text-[15px] font-semibold tracking-tight">
              {DOCTOR.fullName}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.22em] uppercase">
              MDS · Orthodontics
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative font-mono text-[11px] tracking-[0.18em] uppercase transition-colors py-1",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground hover:bg-primary/20 transition-colors"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Get in touch
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md border border-primary/20 bg-card/40 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-nav border-t mt-2"
          >
            <div className="container py-6 flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 font-mono text-[12px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
