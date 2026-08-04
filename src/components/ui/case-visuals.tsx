export function VenturaVisual() {
  return (
    <div className="relative h-full min-h-[220px] w-full" aria-hidden>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
        <div className="w-full rounded-lg border border-line bg-surface/60 px-4 py-3 rotate-[-3deg]">
          <div className="h-2 w-2/5 rounded bg-muted/60" />
          <div className="mt-2 h-2 w-3/5 rounded bg-faint/60" />
        </div>
        <div className="w-full rounded-lg border border-accent/40 bg-accent-dim px-4 py-3">
          <div className="h-2 w-1/3 rounded bg-accent/70" />
          <div className="mt-2 h-2 w-1/2 rounded bg-muted/50" />
        </div>
        <div className="w-full rounded-lg border border-line bg-surface/60 px-4 py-3 rotate-[3deg]">
          <div className="h-2 w-1/2 rounded bg-muted/60" />
          <div className="mt-2 h-2 w-2/5 rounded bg-faint/60" />
        </div>
      </div>
    </div>
  );
}

export function MigrationVisual() {
  return (
    <div className="relative h-full min-h-[220px] w-full" aria-hidden>
      <div className="absolute inset-0 flex items-end justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 rounded-t bg-muted/40" style={{ height: 96 }} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
            before
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 rounded-t bg-accent" style={{ height: 40 }} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            after
          </span>
        </div>
      </div>
    </div>
  );
}

export function TeamVisual() {
  return (
    <div className="relative h-full min-h-[220px] w-full" aria-hidden>
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full p-4"
        preserveAspectRatio="xMidYMid meet"
      >
        <line
          x1="100"
          y1="50"
          x2="40"
          y2="140"
          stroke="currentColor"
          className="text-faint/60"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="50"
          x2="160"
          y2="140"
          stroke="currentColor"
          className="text-faint/60"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="140"
          x2="160"
          y2="140"
          stroke="currentColor"
          className="text-faint/40"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="100" cy="50" r="9" className="fill-accent" />
        <circle cx="40" cy="140" r="9" className="fill-surface stroke-accent/60" strokeWidth="1.5" />
        <circle cx="160" cy="140" r="9" className="fill-surface stroke-accent/60" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
