import type { Project } from "../../data/resume";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "db") {
    return (
      <div className="w-full h-full flex items-center justify-center gap-3 font-mono text-[10px] text-[var(--color-dim)]">
        {["users", "categories", "transactions"].map((t, i) => (
          <div key={t} className="flex flex-col items-center gap-2">
            <div
              className="rounded-md border border-[var(--color-line)] px-3 py-2 bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)]"
              style={{ opacity: 1 - i * 0.12 }}
            >
              {t}
            </div>
            {i < 2 && <div className="w-8 h-px bg-[var(--color-cyan)]/40" />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center font-mono text-[11px] text-[var(--color-green)]">
      <div className="text-left">
        <p className="text-[var(--color-dim)]">$ run StudentManagementSystem</p>
        <p className="mt-1">&gt; search --roll &lt;id&gt;</p>
        <p className="text-[var(--color-muted)]">&gt; record found_</p>
      </div>
    </div>
  );
}
