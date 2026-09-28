import { BadgeCheck, GraduationCap, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { certifications, education, type Degree } from '../data/portfolio';
import { formatMonth } from '../lib/dates';
import Lightbox from './ui/Lightbox';
import SectionHeader from './ui/SectionHeader';

const [featured, ...others] = education;

const institutionLine = (d: Degree) =>
  [d.affiliation ? `${d.institution} (${d.affiliation})` : d.institution, d.department, d.location].join(', ');

export default function Certifications() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section">
      <div className="page">
        <SectionHeader
          title="Education & certifications"
          intro="Formal study and credentials behind the day-to-day work."
        />

        {featured && (
          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white ring-1 ring-transparent dark:ring-white/10 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_90%_50%,#000_10%,transparent_60%)]"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-spring text-white">
                <GraduationCap className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-spring-bright">
                  {featured.level}
                  {featured.completed && `, completed ${featured.completed}`}
                </p>
                <h3 className="mt-1 text-2xl font-bold leading-tight sm:text-[2rem]">
                  {featured.degree} ({featured.abbreviation})
                </h3>
                <p className="mt-2 text-white/70">{institutionLine(featured)}</p>
              </div>
              {featured.completed && (
                <p aria-hidden className="hidden text-7xl font-extrabold tracking-display text-white/10 lg:block">
                  {featured.completed}
                </p>
              )}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-6 lg:gap-6">
            {others.map((d) => (
              <li key={d.degree} className="flex gap-5 rounded-3xl border border-line bg-surface p-6 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-spring-soft text-accent">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-accent">
                    {d.level}
                    {d.completed && `, completed ${d.completed}`}
                  </p>
                  <h3 className="mt-1 text-xl font-bold leading-snug">{d.degree}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{institutionLine(d)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <h3 className="mb-6 mt-14 text-2xl font-bold sm:mt-16">Certifications</h3>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certifications.map((cert, i) => (
            <li key={`${cert.title}-${cert.issuer}`} className="flex flex-col rounded-3xl border border-line bg-surface p-3">
              <button
                onClick={() => setIndex(i)}
                className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-paper p-4"
                aria-label={`View certificate: ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full rounded-md object-contain shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-fg opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <p className="text-sm font-medium text-accent">{cert.issuer}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug">{cert.title}</h3>
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <div className="flex gap-1.5">
                    <dt className="text-muted">Issued</dt>
                    <dd className="font-medium tabular-nums">{formatMonth(cert.issued)}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="text-muted">Credential</dt>
                    <dd className="font-medium tabular-nums">{cert.credentialId}</dd>
                  </div>
                </dl>
                {cert.credentialUrl && (
                  <div className="mt-auto pt-5">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !min-h-[40px] w-full !text-sm"
                    >
                      <BadgeCheck className="h-4 w-4" />
                      Verify credential
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        title="Certifications"
        items={certifications.map((c) => ({
          src: c.image,
          alt: c.title,
          caption: (
            <>
              <span className="font-semibold text-white">{c.title}</span>
              <span className="block text-sm">
                {c.issuer}, {formatMonth(c.issued)}
              </span>
            </>
          ),
        }))}
        index={index}
        onIndexChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}
