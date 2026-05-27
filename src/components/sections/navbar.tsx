import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-base font-bold leading-none">
            S
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-foreground text-[15px] font-semibold tracking-tight">
              {DOCTOR.fullName}
            </span>
            <span className="text-[11px] text-muted-foreground tracking-wide">
              Orthodontics &middot; MCODS Mangaluru
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm transition-colors py-1",
                  isActive
                    ? "text-foreground font-medium"
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
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md border border-border bg-card/60 backdrop-blur-md"
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
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
