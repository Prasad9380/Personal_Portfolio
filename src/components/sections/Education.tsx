import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { education } from "../../data/resume";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>06_education.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-9 flex flex-col md:flex-row gap-6 md:items-start"
        >
          <motion.div
            initial={{ rotate: -18, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25, type: "spring" }}
            className="shrink-0 w-14 h-14 rounded-xl bg-[color-mix(in_srgb,var(--color-purple)_14%,transparent)] flex items-center justify-center text-[var(--color-purple)]"
          >
            <GraduationCap size={26} />
          </motion.div>

          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{education.degree}</h3>
            <p className="text-[var(--color-cyan)] mt-1">{education.institution}</p>

            <div className="flex flex-wrap gap-4 font-mono text-xs text-[var(--color-dim)] mt-3 mb-6">
              <span>{education.period}</span>
              <span>CGPA: {education.cgpa}</span>
            </div>

            <h4 className="font-mono text-xs text-[var(--color-dim)] mb-3">// RELEVANT COURSEWORK</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-muted)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
