import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { certifications, education, experience, profile, projects } from '../data/portfolio';
import { monthsBetween } from '../lib/dates';

const years = Math.floor(experience.reduce((s, r) => s + monthsBetween(r.start, r.end), 0) / 12);

const figures = [
  { value: `${years}+`, label: 'years in software engineering' },
  { value: `${projects.length}`, label: 'products shipped or in progress' },
  { value: `${certifications.length}`, label: 'professional certifications' },
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="about" className="section bg-surface">
      <div className="page grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="text-center lg:col-span-7 lg:text-left">
          <h2 className="text-[2.25rem] font-extrabold leading-[1.02] sm:text-5xl lg:text-[3.5rem]">
            I build software that businesses depend on every day.
          </h2>

          <div className="mx-auto mt-8 max-w-[62ch] lg:mx-0 space-y-5 text-[17px] leading-[1.7] text-fg-2 sm:text-lg">
            <p>
              I'm a full-stack engineer with deep expertise in Java, Spring Boot, Laravel, Angular and Ionic. I
              build scalable, high-performance enterprise applications for web, desktop and mobile.
            </p>
            <p>
              My core strength is backend engineering: resilient microservices and monoliths, secure and efficient
              REST APIs, tuned relational databases, and maintainable code that holds up under real business
              workloads. I've built ERP systems, POS solutions, inventory and accounting platforms, and SaaS
              products with offline-first synchronization.
            </p>
            <p>
              On the front end I build responsive web apps with Angular and cross-platform mobile apps with Ionic,
              so I can take a product from architecture to deployment. I care about clean architecture,
              performance, security and long-term scalability.
            </p>
            <p>
              I keep investing in cloud technologies, distributed systems and modern architecture, and I mentor
              teammates so the whole team ships reliable, production-ready software.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8 sm:gap-8">
            {figures.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-4xl font-extrabold tracking-display text-fg sm:text-5xl">{f.value}</dd>
                <dd className="mt-2 text-sm leading-snug text-muted sm:text-[15px]">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8 lg:sticky lg:top-28">
            <h3 className="text-xl font-bold">At a glance</h3>
            <dl className="mt-5 divide-y divide-line text-[15px]">
              {[
                ['Role', profile.title],
                ['Specialty', profile.specialty],
                ['Builds', 'ERP, POS, SaaS, APIs, mobile apps'],
                ['Education', `${education[0].abbreviation}, ${education[0].institution}`],
                ['Currently at', experience[0].company],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 rounded-2xl bg-surface p-2 pl-4">
                <Mail className="h-[18px] w-[18px] shrink-0 text-accent" />
                <a href={`mailto:${profile.email}`} className="min-w-0 flex-1 truncate font-medium hover:text-accent">
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex h-10 shrink-0 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-muted transition-colors hover:bg-paper hover:text-fg"
                  aria-live="polite"
                >
                  {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <a
                href={profile.phoneHref}
                className="flex min-h-[56px] items-center gap-2 rounded-2xl bg-surface px-4 font-medium hover:text-accent"
              >
                <Phone className="h-[18px] w-[18px] text-accent" />
                {profile.phone}
              </a>
              <p className="flex min-h-[56px] items-center gap-2 rounded-2xl bg-surface px-4 font-medium">
                <MapPin className="h-[18px] w-[18px] text-accent" />
                {profile.location}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
