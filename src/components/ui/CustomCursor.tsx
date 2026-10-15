import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 35 });
  const ringY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[var(--color-cyan)]"
        style={{
          x,
          y,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: hovering ? "var(--color-cyan)" : "rgba(230,237,243,0.35)",
          translateX: "-50%",
          translateY: "-50%",
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
          boxShadow: hovering ? "0 0 24px color-mix(in srgb, var(--color-cyan) 45%, transparent)" : "none",
        }}
      />
    </div>
  );
}
