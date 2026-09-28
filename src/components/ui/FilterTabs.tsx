type Option = { value: string; label: string; count?: number };

type Props = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterTabs({ label, options, value, onChange }: Props) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 text-center no-scrollbar sm:mx-0 sm:px-0 lg:text-left">
      <div role="tablist" aria-label={label} className="inline-flex gap-1 rounded-full border border-line bg-white p-1">
        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <button
              key={opt.value}
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(opt.value)}
              className={`flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                selected ? 'bg-ink text-white' : 'text-muted hover:bg-paper hover:text-ink'
              }`}
            >
              {opt.label}
              {opt.count !== undefined && (
                <span className={`tabular-nums text-xs ${selected ? 'text-white/60' : 'text-muted/70'}`}>{opt.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
