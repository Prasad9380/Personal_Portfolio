import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { skillCategories } from "../../data/resume";

export function Skills() {
  const [activeCat, setActiveCat] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeCat)!;

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>02_skills.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
            Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Category selector orbiting a JAVA core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[var(--color-line)]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[var(--color-cyan)]/25"
              />
              <div className="relative z-10 rounded-full glass w-24 h-24 flex items-center justify-center font-display font-semibold text-[var(--color-cyan)]">
                JAVA
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col gap-2 w-full">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  data-cursor-hover
                  className={`text-left px-4 py-2.5 rounded-lg font-mono text-xs transition-colors border ${
                    activeCat === cat.id
                      ? "border-[var(--color-cyan)] text-[var(--color-cyan)] bg-[color-mix(in_srgb,var(--color-cyan)_8%,transparent)]"
                      : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Chips for active category */}
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap content-start gap-3"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl px-4 py-3 text-sm text-[var(--color-text)] cursor-default"
                data-cursor-hover
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
