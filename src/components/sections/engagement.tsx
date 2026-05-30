import { motion } from "framer-motion";
import { Calendar, Globe2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AFFILIATIONS,
  GALLERY_PHOTOS,
  INTERNATIONAL_WORKSHOPS,
  TEACHING_GALLERY,
} from "@/lib/doctor";

export function Engagement() {
  return (
    <section id="engagement" className="section-pad relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading
              eyebrow="Engagement"
              title={
                <>
                  Teaching at the chair, speaking at{" "}
                  <span className="text-gradient">the lectern.</span>
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Regular contributor at clinical workshops, masterclasses and academic
              conferences on digital orthodontics, aligner planning and
              treatment-mechanics design.
            </p>
          </div>
        </div>

        {/* Featured gallery — real venues + years */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6 mb-12 lg:mb-16">
          {TEACHING_GALLERY.map((g, i) => (
            <motion.figure
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                i === 0
                  ? "col-span-12 lg:col-span-8 group relative glass p-3 overflow-hidden"
                  : i === 1
                  ? "col-span-12 sm:col-span-6 lg:col-span-4 group relative glass p-3 overflow-hidden"
                  : "col-span-12 sm:col-span-6 lg:col-span-8 group relative glass p-3 overflow-hidden"
              }
            >
              <div
                className="relative w-full overflow-hidden rounded-lg border border-border"
                style={{ aspectRatio: i === 0 ? "16/9" : i === 1 ? "4/5" : "16/8" }}
              >
                <img
                  src={g.src}
                  alt={`${g.title} — Dr. Shravan Shetty at ${g.venue}, ${g.year}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover saturate-95 contrast-100 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary font-semibold">
                  {g.kind}
                </div>
              </div>
              <figcaption className="flex items-end justify-between mt-3 px-1">
                <div>
                  <p className="font-display text-base font-semibold text-foreground leading-tight">
                    {g.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-primary" />
                    {g.venue}
                  </p>
                </div>
                <span className="text-xs text-primary font-medium inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {g.year}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Untitled photo gallery — no captions, no labels */}
        {GALLERY_PHOTOS.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                Gallery
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {GALLERY_PHOTOS.map((p, i) => (
                <motion.div
                  key={p.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: (i % 4) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-lg border border-border bg-surface/40"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src={p.src}
                    alt="Dr. Shravan Shetty — clinical work"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover saturate-95 contrast-100 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* International Workshops */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              International Workshops · Resource Person · Presentations
            </span>
          </div>
          <ol className="space-y-4">
            {INTERNATIONAL_WORKSHOPS.map((w, i) => (
              <motion.li
                key={`${w.title}-${w.date}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass glass-hover grid grid-cols-12 gap-4 md:gap-6 items-center p-3 md:p-4"
              >
                {w.photo && (
                  <div className="col-span-12 md:col-span-3 lg:col-span-3">
                    <div
                      className="relative w-full overflow-hidden rounded-lg border border-border"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src={w.photo}
                        alt={`${w.title} — ${w.host}, ${w.location}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover saturate-95 contrast-100 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                )}
                <div className="col-span-12 md:col-span-2">
                  <span className="chip">{w.role}</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="font-display text-lg font-semibold text-foreground leading-snug">
                    {w.title}
                  </p>
                  <p className="text-sm text-muted-foreground/85 mt-1.5 leading-relaxed">
                    {w.host}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1 inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-primary" />
                    {w.location}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 text-sm text-primary font-medium md:text-right inline-flex md:justify-end items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {w.date}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Affiliations */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Memberships
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AFFILIATIONS.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass glass-hover p-7 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="chip">{a.short}</span>
                  <span className="text-xs text-primary font-medium">
                    {a.status}
                  </span>
                </div>
                <p className="font-display text-lg font-semibold text-foreground leading-snug mt-2">
                  {a.name}
                </p>
                <p className="text-xs text-muted-foreground">{a.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
