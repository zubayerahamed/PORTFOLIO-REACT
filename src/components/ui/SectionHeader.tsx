import type { ReactNode } from 'react';

type Props = {
  title: string;
  intro?: ReactNode;
  dark?: boolean;
  children?: ReactNode;
};

export default function SectionHeader({ title, intro, dark, children }: Props) {
  return (
    <div className="mb-10 grid grid-cols-1 gap-5 text-center sm:mb-14 lg:text-left lg:grid-cols-12 lg:items-end lg:gap-10">
      <h2
        className={`text-[2.25rem] font-extrabold leading-[1.02] sm:text-5xl lg:col-span-6 lg:text-[3.5rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {(intro || children) && (
        <div className="lg:col-span-6 lg:pb-1.5">
          {intro && (
            <p className={`mx-auto max-w-xl text-lg lg:mx-0 leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>{intro}</p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
