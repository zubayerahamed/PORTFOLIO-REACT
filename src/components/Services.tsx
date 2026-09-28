import {
  Cable,
  CloudCog,
  Code2,
  GraduationCap,
  Layers,
  Lightbulb,
  RefreshCcwDot,
  Rocket,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../data/portfolio';
import SectionHeader from './ui/SectionHeader';

const icons: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Cable,
  Workflow,
  CloudCog,
  Rocket,
  RefreshCcwDot,
  Lightbulb,
  GraduationCap,
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="page">
        <SectionHeader
          title="What I can do for you"
          intro="From a single API integration to a full ERP rollout, I take on engineering work where reliability matters."
        />

        <ul className="grid overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 [&>li]:bg-surface" style={{ gap: 1 }}>
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <li key={service.title} className="group p-6 text-center transition-colors sm:text-left hover:bg-spring-soft/40 sm:p-8">
                <span className="mx-auto flex h-12 w-12 items-center sm:mx-0 justify-center rounded-2xl bg-spring-soft text-accent transition-colors group-hover:bg-spring group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug">{service.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
