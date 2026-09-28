import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/60">
      <div className="page flex flex-col gap-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-lg" />
          <p>
            © {new Date().getFullYear()} {profile.name}. {profile.title}, {profile.location}.
          </p>
        </div>
        <div className="flex w-full items-center gap-1 sm:w-auto">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#home"
            className="ml-auto inline-flex min-h-[44px] sm:ml-2 items-center gap-2 rounded-full border border-white/15 px-4 font-medium text-white/80 hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
