import { motion } from "framer-motion";

/**
 * Animated SVG citation graph — nodes connected by lines, dots fade in
 * sequentially. Visual metaphor for the body of research. Decorative.
 */
const NODES = [
  { id: 0, cx: 50, cy: 90, r: 8, paper: "2012" },
  { id: 1, cx: 130, cy: 50, r: 5, paper: "" },
  { id: 2, cx: 180, cy: 130, r: 6, paper: "" },
  { id: 3, cx: 280, cy: 70, r: 7, paper: "2016" },
  { id: 4, cx: 270, cy: 180, r: 5, paper: "" },
  { id: 5, cx: 360, cy: 130, r: 6, paper: "2017" },
  { id: 6, cx: 420, cy: 220, r: 5, paper: "" },
  { id: 7, cx: 450, cy: 60, r: 7, paper: "2018" },
  { id: 8, cx: 540, cy: 110, r: 9, paper: "2019" },
  { id: 9, cx: 580, cy: 200, r: 9, paper: "2019" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [5, 6],
  [5, 7],
  [6, 9],
  [7, 8],
  [8, 9],
  [3, 7],
];

export function CitationGraph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(178 88% 60%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(178 88% 60%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(178 88% 60%)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(178 88% 60%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(178 88% 60%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        const na = NODES[a];
        const nb = NODES[b];
        return (
          <motion.line
            key={i}
            x1={na.cx}
            y1={na.cy}
            x2={nb.cx}
            y2={nb.cy}
            stroke="url(#edge-grad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.1 }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <motion.g
          key={n.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx={n.cx} cy={n.cy} r={n.r * 3} fill="url(#node-glow)" />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="hsl(215 70% 4%)"
            stroke="hsl(178 88% 60%)"
            strokeWidth="1.2"
          />
          {n.paper && (
            <text
              x={n.cx}
              y={n.cy + 22}
              fill="hsl(178 88% 70%)"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
              textAnchor="middle"
              letterSpacing="0.12em"
              opacity="0.7"
            >
              {n.paper}
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}
