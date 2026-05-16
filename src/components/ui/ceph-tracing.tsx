import { motion } from "framer-motion";

/**
 * Animated cephalometric tracing — a stylised lateral skull profile with
 * landmarks that draw in sequence. Used as a hero decoration; this is the
 * subject of Dr. Shetty's published research on smartphone cephalometric apps.
 */
export function CephTracing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ceph-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(178 88% 60%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(192 90% 70%)" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="ceph-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(178 88% 60%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(178 88% 60%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Skull profile - simplified lateral view */}
      <motion.path
        d="
          M 480 130
          C 540 160, 555 230, 540 290
          C 530 340, 500 380, 460 410
          L 440 430
          C 420 440, 395 442, 380 442
          L 380 470
          C 380 482, 372 490, 360 490
          L 280 490
          C 268 490, 260 482, 260 470
          L 260 442
          L 220 438
          C 200 434, 185 422, 178 405
          C 165 380, 155 350, 152 318
          C 148 270, 158 220, 188 180
          C 220 138, 270 110, 330 100
          C 390 92, 445 105, 480 130 Z
        "
        stroke="url(#ceph-stroke)"
        strokeWidth="1.4"
        strokeDasharray="2000"
        initial={{ strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />

      {/* Mandible curve */}
      <motion.path
        d="M 180 405 C 220 470, 290 510, 380 470"
        stroke="url(#ceph-stroke)"
        strokeWidth="1.2"
        strokeDasharray="600"
        initial={{ strokeDashoffset: 600 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
      />

      {/* Maxilla/teeth line (stylised dental arch) */}
      <motion.path
        d="M 250 442 q 60 -16 130 0"
        stroke="hsl(178 88% 60%)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 1.6, delay: 2.4 }}
      />

      {/* Reference horizontal (Frankfort plane) */}
      <motion.line
        x1="120"
        y1="290"
        x2="560"
        y2="290"
        stroke="hsl(178 88% 60%)"
        strokeWidth="0.6"
        strokeDasharray="2 6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 3 }}
      />
      <motion.line
        x1="320"
        y1="100"
        x2="320"
        y2="520"
        stroke="hsl(178 88% 60%)"
        strokeWidth="0.6"
        strokeDasharray="2 6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 0.6, delay: 3.1 }}
      />

      {/* Landmarks — each gets a pulsing dot + label */}
      {[
        { id: "N", cx: 478, cy: 175, label: "Nasion" },
        { id: "S", cx: 360, cy: 195, label: "Sella" },
        { id: "Or", cx: 460, cy: 290, label: "Orbitale" },
        { id: "Po", cx: 200, cy: 300, label: "Porion" },
        { id: "A", cx: 470, cy: 420, label: "A-point" },
        { id: "B", cx: 410, cy: 478, label: "B-point" },
        { id: "Pog", cx: 360, cy: 502, label: "Pogonion" },
        { id: "Me", cx: 305, cy: 510, label: "Menton" },
        { id: "Go", cx: 210, cy: 478, label: "Gonion" },
      ].map((lm, i) => (
        <motion.g
          key={lm.id}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2 + i * 0.12, duration: 0.5 }}
        >
          <circle
            cx={lm.cx}
            cy={lm.cy}
            r="14"
            fill="url(#ceph-glow)"
            opacity="0.5"
          />
          <circle
            cx={lm.cx}
            cy={lm.cy}
            r="3"
            fill="hsl(178 88% 60%)"
            stroke="hsl(195 100% 96%)"
            strokeWidth="0.8"
          />
          <text
            x={lm.cx + 8}
            y={lm.cy - 6}
            fill="hsl(178 88% 70%)"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            {lm.id}
          </text>
        </motion.g>
      ))}

      {/* Tracing label */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        <text
          x="110"
          y="110"
          fill="hsl(178 88% 70%)"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="0.22em"
          opacity="0.65"
        >
          CEPH · LATERAL · v0.1
        </text>
        <text
          x="110"
          y="125"
          fill="hsl(195 30% 65%)"
          fontSize="8"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="0.18em"
          opacity="0.5"
        >
          15 PARAMETERS · 9 LANDMARKS
        </text>
      </motion.g>
    </svg>
  );
}
