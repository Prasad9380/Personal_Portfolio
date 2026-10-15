import { Mail } from "lucide-react";
import { profile } from "../data/resume";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-[var(--color-text)]">
            PRASAD<span className="text-[var(--color-cyan)]">.</span>MK
          </p>
          <p className="text-xs text-[var(--color-dim)] mt-1">Java Backend Developer | DevOps &amp; CI/CD</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors">
            <GithubIcon size={17} />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors">
            <Mail size={17} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-[var(--color-dim)]">© 2026 {profile.name}</p>
          <p className="text-xs text-[var(--color-dim)] mt-1">Built with React &amp; passion for backend engineering.</p>
        </div>
      </div>
    </footer>
  );
}
