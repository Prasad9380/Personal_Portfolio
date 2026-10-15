import { motion, type Variants } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { profile } from "../../data/resume";
import { ArchitectureGraph } from "../ui/ArchitectureGraph";
import { Magnetic } from "../ui/Magnetic";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-[var(--color-blue)] opacity-[0.08] blur-[120px]" />
      <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full bg-[var(--color-purple)] opacity-[0.08] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-[var(--color-cyan)] mb-6"
          >
            JAVA BACKEND DEVELOPER
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-text)]"
          >
            Building reliable backend systems
            <br />
            with <span className="text-gradient">Java &amp; DevOps</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-lg">
            I build maintainable Java applications, database-driven systems and deployment
            workflows using Java, JDBC, MySQL, Docker, CI/CD and AWS fundamentals.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 rounded-full bg-[var(--color-text)] text-[var(--color-base)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-cyan)] transition-colors"
                data-cursor-hover
              >
                View Projects
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeFile}
                download
                className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-sm text-[var(--color-text)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
                data-cursor-hover
              >
                <Download size={15} /> Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 rounded-full px-5 py-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                data-cursor-hover
              >
                Contact Me
              </button>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { icon: GithubIcon, href: profile.githubUrl, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.linkedinUrl, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
                  data-cursor-hover
                >
                  <Icon size={19} />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ArchitectureGraph />
        </motion.div>
      </div>
    </section>
  );
}
