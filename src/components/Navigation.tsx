import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollLock } from '../hooks/useScrollLock';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'certifications' },
  { label: 'Gallery', id: 'gallery' },
];

const sectionIds = ['home', ...navItems.map((n) => n.id), 'contact'];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const light = (scrolled || active !== 'home') && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        open ? 'bg-ink' : light ? 'bg-white/85 shadow-[0_1px_0_#DDE3EA] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="page flex h-16 items-center justify-between gap-6 sm:h-[72px]" aria-label="Main">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2.5 text-[17px] font-bold tracking-tight ${light ? 'text-ink' : 'text-white'}`}
        >
          <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-lg" />
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    light
                      ? isActive
                        ? 'bg-paper text-ink'
                        : 'text-muted hover:text-ink'
                      : isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !min-h-[40px] !px-5 !text-sm sm:inline-flex">
            Get in touch
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden ${
              light ? 'text-ink hover:bg-paper' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 flex animate-fade-in flex-col overflow-y-auto bg-ink px-4 pb-8 sm:top-[72px] sm:px-6 xl:hidden"
        >
          <ul className="flex flex-col border-t border-white/10 pt-2">
            {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-white/10 py-4 text-2xl font-bold tracking-tight ${
                    active === item.id ? 'text-spring-bright' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a href={`mailto:${profile.email}`} className="text-base text-white/70 hover:text-white">
              {profile.email}
            </a>
            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
