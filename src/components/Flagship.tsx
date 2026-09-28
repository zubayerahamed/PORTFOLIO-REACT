import {
  Building2,
  Check,
  ChefHat,
  LayoutGrid,
  Monitor,
  Smartphone,
  UtensilsCrossed,
  Wallet,
  WifiOff,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import { flagship } from '../data/portfolio';
import Lightbox from './ui/Lightbox';

const icons: Record<string, LucideIcon> = {
  offline: WifiOff,
  kitchen: ChefHat,
  tables: LayoutGrid,
  menu: UtensilsCrossed,
  payment: Wallet,
  scale: Building2,
};

type Device = 'desktop' | 'mobile';
type Theme = 'dark' | 'light';

// Read at click time so the gallery matches whichever theme the visitor has on.
const currentTheme = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

export default function Flagship() {
  const [gallery, setGallery] = useState<{ device: Device; theme: Theme } | null>(null);
  const [shot, setShot] = useState<number | null>(null);

  const open = (device: Device, index = 0) => {
    setGallery({ device, theme: currentTheme() });
    setShot(index);
  };

  const items = gallery
    ? flagship[gallery.device][gallery.theme].map((src, i) => ({
        src,
        alt: `${flagship.title} ${gallery.device} screenshot ${i + 1}`,
        caption: gallery.device === 'desktop' ? flagship.desktopCaptions[i] : undefined,
      }))
    : [];

  return (
    <article className="relative mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-ink text-white sm:mb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_80%_20%,#000_15%,transparent_65%)]"
      />

      <div className="relative grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-8 lg:p-12">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-3 pr-3.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              In development
            </span>
            <span className="rounded-full bg-spring-bright/15 px-3 py-1.5 text-xs font-semibold text-spring-bright">
              Flagship product
            </span>
          </div>

          <h3 className="mt-6 text-[2.75rem] font-extrabold leading-[0.95] sm:text-6xl">{flagship.title}</h3>
          <p className="mt-4 text-xl font-semibold text-spring-bright sm:text-2xl">{flagship.tagline}</p>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{flagship.description}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Built for">
            {flagship.audience.map((a) => (
              <li key={a} className="rounded-md bg-white/[0.07] px-2.5 py-1 text-[13px] font-medium text-white/85">
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => open('desktop')} className="btn-primary">
              <Monitor className="h-4 w-4" />
              Desktop screens
            </button>
            <button onClick={() => open('mobile')} className="btn-ghost-dark">
              <Smartphone className="h-4 w-4" />
              Mobile screens
            </button>
          </div>
        </div>

        {/* Desktop window with the phone app overlapping its corner */}
        <div className="relative pb-10 sm:pb-14 lg:col-span-7 lg:pb-0 lg:pl-4">
          <button
            onClick={() => open('desktop')}
            className="group block w-full overflow-hidden rounded-xl border border-white/15 bg-ink-800 text-left shadow-2xl"
            aria-label={`View desktop screenshots of ${flagship.title}`}
          >
            <span className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </span>
            <img
              src={flagship.desktop.light[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] dark:hidden"
            />
            <img
              src={flagship.desktop.dark[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="hidden aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] dark:block"
            />
          </button>

          <button
            onClick={() => open('mobile', flagship.mobileCover[currentTheme()])}
            className="absolute -bottom-2 right-3 w-[26%] min-w-[92px] max-w-[170px] overflow-hidden rounded-[1.4rem] border-[5px] border-ink-700 bg-ink-800 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 sm:right-6 lg:-bottom-6 lg:-right-2"
            aria-label={`View mobile screenshots of ${flagship.title}`}
          >
            <img
              src={flagship.mobile.light[flagship.mobileCover.light]}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[9/19] w-full object-cover object-top dark:hidden"
            />
            <img
              src={flagship.mobile.dark[flagship.mobileCover.dark]}
              alt=""
              loading="lazy"
              decoding="async"
              className="hidden aspect-[9/19] w-full object-cover object-top dark:block"
            />
          </button>
        </div>
      </div>

      <div className="relative border-t border-white/10 p-6 sm:p-10 lg:p-12">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {flagship.highlights.map((h) => {
            const Icon = icons[h.icon];
            return (
              <li key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-spring-bright/15 text-spring-bright">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-lg font-bold">{h.title}</h4>
                <p className="mt-1.5 leading-relaxed text-white/65">{h.body}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Under the hood</h4>
            <ul className="mt-4 space-y-3">
              {flagship.engineering.map((e) => (
                <li key={e} className="flex gap-3 leading-relaxed text-white/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-spring-bright" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Stack</h4>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {flagship.technologies.map((t) => (
                <li key={t} className="rounded-md bg-white/[0.07] px-2.5 py-1 text-[13px] font-medium text-white/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Lightbox
        title={`${flagship.title} · ${gallery?.device === 'mobile' ? 'Mobile' : 'Desktop'}`}
        items={items}
        index={gallery ? shot : null}
        onIndexChange={setShot}
        onClose={() => {
          setGallery(null);
          setShot(null);
        }}
      />
    </article>
  );
}
