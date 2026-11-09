import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch, Workflow, Container, Cloud } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { GithubIcon } from "../ui/BrandIcons";
import { pipelineStages } from "../../data/resume";

const icons = { code: Code2, git: GitBranch, github: GithubIcon, cicd: Workflow, docker: Container, aws: Cloud };

export function DevOpsPipeline() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>07_pipeline.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
            From Code to Deployment
          </h2>
          <p className="text-[var(--color-muted)] max-w-lg mb-16">
            The workflow I follow to take a Java application from a local module to a running,
            containerized service.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[var(--color-line)]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
              className="h-full bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-blue)] to-[var(--color-purple)]"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-3">
            {pipelineStages.map((stage, i) => {
              const Icon = icons[stage.id as keyof typeof icons];
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  onMouseEnter={() => setActive(stage.id)}
                  onMouseLeave={() => setActive(null)}
                  className="relative flex flex-col items-center text-center"
                  data-cursor-hover
                >
                  <motion.div
                    animate={{ scale: active === stage.id ? 1.12 : 1 }}
                    className="relative z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center text-[var(--color-cyan)] mb-4"
                    style={{
                      boxShadow: active === stage.id ? "0 0 24px color-mix(in srgb, var(--color-cyan) 40%, transparent)" : "none",
                    }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className="font-mono text-xs text-[var(--color-text)]">{stage.label}</span>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: active === stage.id ? 1 : 0, height: active === stage.id ? "auto" : 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 text-xs text-[var(--color-dim)] max-w-[9rem] overflow-hidden"
                  >
                    {stage.detail}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
