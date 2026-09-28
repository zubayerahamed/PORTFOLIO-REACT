import { ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';
import { experience } from '../data/portfolio';
import { formatDuration, formatMonth, monthsBetween } from '../lib/dates';

const totalMonths = experience.reduce((s, r) => s + monthsBetween(r.start, r.end), 0);

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([0, 1]));

  const toggle = (i: number) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="experience" className="section bg-white">
      <div className="page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <h2 className="text-[2.25rem] font-extrabold leading-[1.02] sm:text-5xl lg:text-[3.5rem]">Experience</h2>
            <p className="mx-auto mt-5 max-w-md text-lg lg:mx-0 leading-relaxed text-muted">
              {formatDuration(totalMonths)} across {experience.length} teams, from trainee developer to leading
              enterprise platforms.
            </p>
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <span aria-hidden className="absolute bottom-4 left-[7px] top-3 w-px bg-line" />
          {experience.map((role, i) => {
            const isCurrent = role.end === null;
            const isOpen = expanded.has(i);
            return (
              <li key={role.company} className="relative pb-12 pl-10 last:pb-0 sm:pl-12">
                <span
                  aria-hidden
                  className={`absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 ${
                    isCurrent ? 'border-amber bg-amber/20' : 'border-ink/25 bg-white'
                  }`}
                >
                  {isCurrent && <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-amber" />}
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                  <span className="font-medium tabular-nums text-ink">
                    {formatMonth(role.start)} to {isCurrent ? 'present' : formatMonth(role.end!)}
                  </span>
                  <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-semibold tabular-nums text-ink-600">
                    {formatDuration(monthsBetween(role.start, role.end))}
                  </span>
                  {isCurrent && (
                    <span className="rounded-full bg-amber/20 px-2.5 py-0.5 text-xs font-semibold text-[#8A5A00]">
                      Current role
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-[1.7rem]">{role.position}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 text-[17px]">
                  <span className="font-semibold text-spring">{role.company}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </span>
                </p>

                {role.titles && (
                  <ol className="mt-4 space-y-1.5 border-l-2 border-spring-soft pl-4 text-[15px]" aria-label="Titles held">
                    {role.titles.map((t) => (
                      <li key={t.position} className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-semibold">{t.position}</span>
                        <span className="text-sm tabular-nums text-muted">
                          {formatMonth(t.start)} to {t.end ? formatMonth(t.end) : 'present'},{' '}
                          {formatDuration(monthsBetween(t.start, t.end))}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}

                {role.summary && <p className="mt-4 max-w-[65ch] leading-relaxed text-ink-600">{role.summary}</p>}

                {isOpen && (
                  <ul className="mt-4 max-w-[65ch] space-y-2.5">
                    {role.highlights.map((h) => (
                      <li key={h} className="relative pl-5 leading-relaxed text-ink-600">
                        <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-spring" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-ink hover:text-spring"
                >
                  {isOpen ? 'Hide highlights' : `Show ${role.highlights.length} highlights`}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {role.technologies.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
