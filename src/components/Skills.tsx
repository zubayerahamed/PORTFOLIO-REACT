import { skillGroups } from '../data/portfolio';
import SectionHeader from './ui/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="section bg-surface">
      <div className="page">
        <SectionHeader
          title="The stack I work in"
          intro="Proven, industry-standard tools, chosen for the job rather than the trend."
        />

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map((group) => (
            <div key={group.category} className="grid grid-cols-1 gap-4 py-7 sm:py-8 md:grid-cols-12 md:gap-8">
              <div className="flex items-baseline justify-center gap-3 md:col-span-3 md:block">
                <h3 className="text-xl font-bold">{group.category}</h3>
                <p className="text-sm text-muted md:mt-1">
                  {group.skills.length} {group.skills.length === 1 ? 'technology' : 'technologies'}
                </p>
              </div>
              <ul className="flex flex-wrap justify-center gap-2.5 md:col-span-9 md:justify-start">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex min-h-[48px] items-center gap-3 rounded-2xl border border-line bg-surface py-2 pl-2.5 pr-4 transition-colors hover:border-spring/40 hover:bg-spring-soft/40"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper dark:bg-white/90">
                      <img
                        src={skill.logo}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                        className="h-5 w-5 object-contain"
                        onError={(e) => ((e.target as HTMLImageElement).style.visibility = 'hidden')}
                      />
                    </span>
                    <span className="text-[15px] font-semibold">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
