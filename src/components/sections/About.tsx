import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { education } from "../../data/resume";

const snapshot = [
  { label: "ROLE", value: "Java Backend Developer" },
  { label: "FOCUS", value: "Backend Development" },
  { label: "STACK", value: "Java + MySQL + Docker" },
  { label: "INTEREST", value: "Backend Systems & DevOps" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>01_about.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)]">
            About Me
          </h2>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-lg">
            I am a Computer Science &amp; Engineering graduate and Java Backend Developer focused
            on building reliable, maintainable and database-driven applications.
          </p>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed max-w-lg">
            Graduating {education.period} with a CGPA of {education.cgpa} from {education.institution}, I work
            across Java, OOP, JDBC and MySQL, with hands-on DevOps exposure through Docker, Linux,
            Git, CI/CD and AWS fundamentals.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Java", "OOP", "JDBC", "MySQL", "Docker", "Linux", "Git", "CI/CD", "AWS Fundamentals"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-line)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ rotateX: -2, rotateY: 2 }}
          style={{ transformStyle: "preserve-3d", perspective: 800 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[var(--color-dim)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2">developer_snapshot.json</span>
          </div>
          <dl className="grid grid-cols-1 gap-5">
            {snapshot.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between border-b border-[var(--color-line)] pb-3">
                <dt className="font-mono text-[11px] tracking-wider text-[var(--color-dim)]">{row.label}</dt>
                <dd className="text-sm text-[var(--color-text)] text-right">{row.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
