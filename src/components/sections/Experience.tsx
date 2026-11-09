import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { experience } from "../../data/resume";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>03_experience.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-14">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-cyan)] via-[var(--color-blue)] to-transparent"
          />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mb-4"
            >
              <span className="absolute -left-[38px] md:-left-[42px] top-2 h-3 w-3 rounded-full bg-[var(--color-cyan)] shadow-[0_0_16px_var(--color-cyan)]" />
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{exp.role}</h3>
                </div>
                <p className="text-[var(--color-cyan)] font-medium mb-3">{exp.company}</p>
                <div className="flex flex-wrap gap-4 font-mono text-xs text-[var(--color-dim)] mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--color-muted)] leading-relaxed">
                      <span className="text-[var(--color-cyan)] mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
