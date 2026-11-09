import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { Magnetic } from "../ui/Magnetic";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { profile } from "../../data/resume";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Write a short message.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>08_contact.java</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-4 max-w-xl">
            Let's Build Something Reliable.
          </h2>
          <p className="text-[var(--color-muted)] max-w-lg mb-14">
            I'm open to entry-level Java Backend and Java Developer opportunities with DevOps exposure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-6 h-fit"
          >
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
              { icon: GithubIcon, label: "GitHub", value: profile.github, href: profile.githubUrl },
              { icon: MapPin, label: "Location", value: profile.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[color-mix(in_srgb,var(--color-cyan)_10%,transparent)] flex items-center justify-center text-[var(--color-cyan)] shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[var(--color-dim)]">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-[var(--color-text)] hover:text-[var(--color-cyan)] transition-colors"
                      data-cursor-hover
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-text)]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={onSubmit}
            noValidate
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-[11px] text-[var(--color-dim)] mb-2">
                NAME
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-lg bg-transparent border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-cyan)] outline-none transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[11px] text-[var(--color-dim)] mb-2">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-lg bg-transparent border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-cyan)] outline-none transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[11px] text-[var(--color-dim)] mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full rounded-lg bg-transparent border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-cyan)] outline-none transition-colors resize-none"
                placeholder="What would you like to build?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Magnetic>
              <button
                type="submit"
                data-cursor-hover
                className="flex items-center gap-2 rounded-full bg-[var(--color-text)] text-[var(--color-base)] px-6 py-3 text-sm font-medium hover:bg-[var(--color-cyan)] transition-colors"
              >
                <Send size={15} /> Send Message
              </button>
            </Magnetic>

            {sent && (
              <p className="text-xs text-[var(--color-green)] font-mono" role="status">
                Opening your email app to send this — thanks for reaching out.
              </p>
            )}
            <p className="text-[11px] text-[var(--color-dim)]">
              This form opens your email client with your message prefilled — no backend is connected.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
