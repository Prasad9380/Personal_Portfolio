import { useState } from "react";
import { motion } from "framer-motion";
import { heroConnections, heroPipeline } from "../../data/resume";

export function ArchitectureGraph() {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodeById = Object.fromEntries(heroPipeline.map((n) => [n.id, n]));

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto select-none">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>
        {heroConnections.map(([a, b], i) => {
          const na = nodeById[a as keyof typeof nodeById];
          const nb = nodeById[b as keyof typeof nodeById];
          const active = hovered === a || hovered === b;
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={active ? "url(#edge-gradient)" : "rgba(230,237,243,0.12)"}
              strokeWidth={active ? 0.6 : 0.35}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.08, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {heroPipeline.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%`, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { delay: 0.8 + i * 0.1, duration: 0.4 },
            scale: { delay: 0.8 + i * 0.1, duration: 0.4, type: "spring" },
            y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
          onMouseEnter={() => setHovered(node.id)}
          onMouseLeave={() => setHovered(null)}
          data-cursor-hover
        >
          <motion.div
            animate={{ scale: hovered === node.id ? 1.18 : 1 }}
            className="relative flex items-center justify-center rounded-xl glass px-3 py-2 font-mono text-[11px] md:text-xs text-[var(--color-text)] cursor-default"
            style={{
              boxShadow: hovered === node.id ? "0 0 28px color-mix(in srgb, var(--color-cyan) 40%, transparent)" : "none",
              borderColor: hovered === node.id ? "var(--color-cyan)" : undefined,
            }}
          >
            {node.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
