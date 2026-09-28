import { useMemo, useState } from 'react';
import { gallery } from '../data/portfolio';
import { formatDay, formatMonth } from '../lib/dates';
import FilterTabs from './ui/FilterTabs';
import Lightbox from './ui/Lightbox';
import SectionHeader from './ui/SectionHeader';

const categories = Array.from(new Set(gallery.map((g) => g.category)));

export default function Gallery() {
  const [category, setCategory] = useState('all');
  const [index, setIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (category === 'all' ? gallery : gallery.filter((g) => g.category === category)),
    [category]
  );

  return (
    <section id="gallery" className="section bg-surface">
      <div className="page">
        <SectionHeader
          title="Moments along the way"
          intro="Workshops, milestones and time with the teams I've worked with."
        />

        <div className="mb-8">
          <FilterTabs
            label="Filter gallery by category"
            value={category}
            onChange={(c) => {
              setCategory(c);
              setIndex(null);
            }}
            options={[
              { value: 'all', label: 'All', count: gallery.length },
              ...categories.map((c) => ({
                value: c,
                label: c,
                count: gallery.filter((g) => g.category === c).length,
              })),
            ]}
          />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <li key={item.image}>
              <button
                onClick={() => setIndex(i)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-paper text-left"
                aria-label={`Open photo: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-4 pt-14 text-white">
                  <span className="block text-base font-semibold leading-snug">{item.title}</span>
                  <span className="mt-0.5 block text-sm text-white/70">
                    {item.category}, {formatMonth(item.date)}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        title="Gallery"
        items={visible.map((g) => ({
          src: g.image,
          alt: g.description,
          caption: (
            <>
              <span className="font-semibold text-white">{g.title}</span>
              <span className="block text-sm">{formatDay(g.date)}</span>
              <span className="mt-1 block text-sm">{g.description}</span>
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
