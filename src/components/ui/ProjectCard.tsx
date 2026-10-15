import { useRef, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../../data/resume";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}% ${my}%, color-mix(in srgb, var(--color-cyan) 12%, transparent), transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative rounded-2xl glass overflow-hidden"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <div className="relative flex items-center justify-between px-6 pt-5 font-mono text-xs text-[var(--color-dim)]">
        <span>{project.tag}</span>
        <span className="opacity-60">.java</span>
      </div>

      <div className="relative h-36 border-y border-[var(--color-line)] mt-4">
        <ProjectVisual type={project.visual} />
      </div>

      <div className="relative p-6">
        <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2">{project.name}</h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.06 }}
              className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)] group-hover:border-[var(--color-cyan)]/40 transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpen}
            data-cursor-hover
            className="text-sm font-medium text-[var(--color-cyan)] hover:underline underline-offset-4"
          >
            View Details →
          </button>
          <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-dim)]">
            <GithubIcon size={13} />
            {project.repoUrl ?? "Repository coming soon"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
