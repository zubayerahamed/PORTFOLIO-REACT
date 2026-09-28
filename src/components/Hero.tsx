import { Github, Linkedin } from 'lucide-react';
import { experience, profile } from '../data/portfolio';
import { monthsBetween } from '../lib/dates';

const roles = [...experience].reverse();
const railStart = new Date(roles[0].start).getTime();
const railEnd = Date.now();
const span = railEnd - railStart;
const pos = (date: string | null) => ((date ? new Date(date).getTime() : railEnd) - railStart) / span;

const totalMonths = experience.reduce((sum, r) => sum + monthsBetween(r.start, r.end), 0);
const totalYears = Math.floor(totalMonths / 12);
const current = experience.find((r) => r.end === null);

const firstYear = new Date(roles[0].start).getFullYear();
const lastYear = new Date().getFullYear();
const ticks = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i).filter(
  (y) => (y - firstYear) % 2 === 0 || y === lastYear
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      {/* Blueprint grid, faded toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000_20%,transparent_70%)]"
      />

      <div className="page relative grid grid-cols-1 gap-8 pt-24 sm:pt-28 lg:grid-cols-12 lg:gap-6 lg:pt-32">
        <div className="text-center lg:col-span-7 lg:pb-24 lg:text-left">
          <p
            className="inline-flex animate-rise-in items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-3 pr-4 text-sm text-white/80"
            style={{ animationDelay: '50ms' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse rounded-full bg-spring-bright" />
              <span className="relative h-2 w-2 rounded-full bg-spring-bright" />
            </span>
            Open to freelance and consulting work
          </p>

          <h1
            className="mt-7 animate-rise-in text-[3.5rem] font-extrabold leading-[0.92] sm:text-[5.5rem] lg:text-[6.75rem]"
            style={{ animationDelay: '120ms' }}
          >
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>

          <p
            className="mx-auto mt-7 max-w-xl animate-rise-in text-lg leading-relaxed text-white/75 sm:text-xl lg:mx-0"
            style={{ animationDelay: '200ms' }}
          >
            Senior software engineer in Dhaka, building dependable software across web, mobile, desktop and
            cloud. Enterprise systems like ERP are my deepest expertise, and I take products of any kind from
            idea to production.
          </p>

          <div
            className="mt-9 flex animate-rise-in flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: '280ms' }}
          >
            <a href="#projects" className="btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn-ghost-dark">
              Contact me
            </a>
            <div className="flex gap-1 lg:ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-[400px] overflow-hidden rounded-t-[2.5rem] bg-[linear-gradient(180deg,#F3F5F7_0%,#DCE4EC_100%)] pt-10 sm:max-w-[440px] lg:max-w-[460px]">
            <div
              aria-hidden
              className="absolute left-1/2 top-[12%] aspect-square w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,122,79,0.22),rgba(30,122,79,0)_68%)]"
            />
            <img
              src="/zubayer_ahamed.png"
              alt={`Portrait of ${profile.name}`}
              width={1014}
              height={949}
              className="relative mx-auto w-[108%] max-w-none -translate-x-[4%]"
            />
          </div>
        </div>
      </div>

      {/* Career rail: each segment is a role, sized by its share of the timeline */}
      <div className="relative border-t border-white/10 bg-ink-800/60">
        <div className="page py-6 sm:py-7">
          <div className="mb-4 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-1 text-center lg:justify-between lg:text-left">
            <p className="text-base font-semibold">
              {totalYears}+ years building production software
            </p>
            {current && (
              <p className="text-sm text-white/60">
                Now: {current.position} at <span className="text-white">{current.company}</span>
              </p>
            )}
          </div>

          <div className="relative h-10">
            {roles.map((role, i) => {
              const left = pos(role.start) * 100;
              const width = Math.max((pos(role.end) - pos(role.start)) * 100, 0.8);
              const isCurrent = role.end === null;
              return (
                <a
                  key={role.company}
                  href="#experience"
                  title={`${role.position}, ${role.company}`}
                  className="group absolute inset-y-0 flex flex-col justify-end"
                  style={{ left: `${left}%`, width: `calc(${width}% - 3px)` }}
                >
                  {width >= 8 && (
                    <span
                      className={`mb-1.5 animate-fade-in truncate text-xs font-medium transition-colors sm:text-[13px] ${
                        width < 16 && role.shortName.length > 6 ? 'hidden sm:block' : ''
                      } ${
                        isCurrent ? 'text-amber' : 'text-white/60 group-hover:text-white'
                      }`}
                      style={{ animationDelay: `${500 + i * 110}ms` }}
                    >
                      {role.shortName}
                    </span>
                  )}
                  <span
                    className={`block h-2 origin-left animate-rail-grow rounded-full transition-colors ${
                      isCurrent ? 'bg-amber' : 'bg-white/25 group-hover:bg-spring-bright'
                    }`}
                    style={{ animationDelay: `${400 + i * 110}ms` }}
                  />
                </a>
              );
            })}
          </div>

          <div className="relative mt-2 h-4 text-[11px] tabular-nums text-white/40 sm:text-xs">
            {ticks.map((y) => {
              const p = pos(`${y}-01-01`) * 100;
              const isLast = y === lastYear;
              return (
                <span
                  key={y}
                  className={`absolute ${isLast ? 'right-0' : ''}`}
                  style={isLast ? undefined : { left: `${Math.max(p, 0)}%` }}
                >
                  {isLast ? 'Now' : y}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
