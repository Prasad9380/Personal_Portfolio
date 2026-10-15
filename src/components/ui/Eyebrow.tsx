export function Eyebrow({ children }: { children: string }) {
  return (
    <div className="font-mono text-xs tracking-wide text-[var(--color-dim)] mb-4 select-none">
      <span className="text-[var(--color-cyan)]">//</span> {children}
    </div>
  );
}
