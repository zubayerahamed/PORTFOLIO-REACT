import { ArrowUpRight, Github, Images } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projects, type Project, type ProjectStatus } from '../data/portfolio';
import FilterTabs from './ui/FilterTabs';
import Lightbox from './ui/Lightbox';
import SectionHeader from './ui/SectionHeader';

const statusLabel: Record<ProjectStatus, string> = {
  Present: 'Active',
  Past: 'Delivered',
  Upcoming: 'In development',
};

const statusDot: Record<ProjectStatus, string> = {
  Present: 'bg-spring-bright',
  Past: 'bg-white/60',
  Upcoming: 'bg-amber',
};

const filters: { value: 'all' | ProjectStatus; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'Present', label: 'Active' },
  { value: 'Past', label: 'Delivered' },
  { value: 'Upcoming', label: 'In development' },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [viewing, setViewing] = useState<Project | null>(null);
  const [shot, setShot] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.status === filter)),
    [filter]
  );

  const openGallery = (project: Project) => {
    setViewing(project);
    setShot(0);
  };

  return (
    <section id="projects" className="section">
      <div className="page">
        <SectionHeader
          title="Selected work"
          intro="ERP platforms, point-of-sale systems, logistics software and product websites. Open any project to browse its screenshots."
        />

        <div className="mb-8">
          <FilterTabs
            label="Filter projects by status"
            value={filter}
            onChange={setFilter}
            options={filters
              .map((f) => ({
                ...f,
                count: f.value === 'all' ? projects.length : projects.filter((p) => p.status === f.value).length,
              }))
              .filter((f) => f.count > 0)}
          />
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visible.map((project) => (
            <li key={project.id} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
              <button
                onClick={() => openGallery(project)}
                className="group relative block aspect-[16/10] overflow-hidden bg-paper text-left"
                aria-label={`View ${project.screenshots.length} screenshots of ${project.title}`}
              >
                <img
                  src={project.cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                  {statusLabel[project.status]}
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-fg shadow-sm transition-transform group-hover:-translate-y-0.5">
                  <Images className="h-3.5 w-3.5" />
                  {project.screenshots.length} {project.screenshots.length === 1 ? 'screenshot' : 'screenshots'}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-accent">{project.kind}</p>
                <h3 className="mt-1 text-[1.4rem] font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-auto flex gap-2 pt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline !min-h-[40px] flex-1 !px-4 !text-sm"
                      >
                        Visit site
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline !min-h-[40px] flex-1 !px-4 !text-sm"
                      >
                        <Github className="h-4 w-4" />
                        Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        title={viewing?.title ?? ''}
        items={(viewing?.screenshots ?? []).map((src, i) => ({
          src,
          alt: `${viewing?.title} screenshot ${i + 1}`,
        }))}
        index={viewing ? shot : null}
        onIndexChange={setShot}
        onClose={() => {
          setViewing(null);
          setShot(null);
        }}
      />
    </section>
  );
}
