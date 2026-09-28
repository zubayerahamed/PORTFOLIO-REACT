import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: ReactNode;
};

type Props = {
  title: string;
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({ title, items, index, onIndexChange, onClose }: Props) {
  const open = index !== null && items.length > 0;
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = items.length;

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndexChange(((index ?? 0) + 1) % count);
      if (e.key === 'ArrowLeft') onIndexChange(((index ?? 0) - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, count, onClose, onIndexChange]);

  useEffect(() => {
    if (index === null) return;
    const thumb = thumbsRef.current?.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [index]);

  if (!open || index === null) return null;

  const item = items[index];
  const go = (delta: number) => onIndexChange((index + delta + count) % count);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-ink/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold">{title}</p>
          {count > 1 && (
            <p className="text-sm tabular-nums text-white/60">
              {index + 1} of {count}
            </p>
          )}
        </div>
        <button
          ref={closeRef}
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50 && count > 1) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full animate-fade-in rounded-lg object-contain shadow-2xl"
        />
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {item.caption && <div className="mx-auto w-full max-w-2xl px-4 pt-4 text-center text-white/80">{item.caption}</div>}

      {count > 1 ? (
        <div ref={thumbsRef} className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar sm:justify-center">
          {items.map((it, i) => (
            <button
              key={it.src}
              onClick={() => onIndexChange(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-opacity sm:h-14 sm:w-20 ${
                i === index ? 'border-spring-bright opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img src={it.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : (
        <div className="h-6" />
      )}
    </div>
  );
}
