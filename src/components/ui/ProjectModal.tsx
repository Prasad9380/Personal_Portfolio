import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../../data/resume";
import { ProjectVisual } from "./ProjectVisual";
import { GithubIcon } from "./BrandIcons";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl p-6 md:p-9"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              data-cursor-hover
              className="absolute top-5 right-5 text-[var(--color-muted)] hover:text-[var(--color-text)]"
            >
              <X size={20} />
            </button>

            <span className="font-mono text-xs text-[var(--color-cyan)]">{project.tag}</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-text)] mt-2 mb-4">
              {project.name}
            </h3>

            <div className="h-32 rounded-xl border border-[var(--color-line)] mb-6">
              <ProjectVisual type={project.visual} />
            </div>

            <p className="text-[var(--color-muted)] leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <h4 className="font-mono text-xs text-[var(--color-dim)] mb-3">// KEY FEATURES</h4>
            <ul className="space-y-2.5 mb-8">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--color-text)] leading-relaxed">
                  <span className="text-[var(--color-cyan)] mt-1 shrink-0">▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-dim)] border-t border-[var(--color-line)] pt-5">
              <GithubIcon size={14} />
              {project.repoUrl ?? "Repository coming soon"}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
