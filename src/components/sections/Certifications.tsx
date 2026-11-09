import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Award } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { certifications } from "../../data/resume";

function CertCard({ name, topics, delay }: { name: string; topics: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 250, damping: 20 });
  const sry = useSpring(ry, { stiffness: 250, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="glass rounded-2xl p-6 h-full"
      >
        <div className="w-10 h-10 rounded-lg bg-[color-mix(in_srgb,var(--color-cyan)_12%,transparent)] flex items-center justify-center mb-5 text-[var(--color-cyan)]">
          <Award size={18} />
        </div>
        <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mb-2">{name}</h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{topics}</p>
      </motion.div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>05_certifications.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} name={cert.name} topics={cert.topics} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
