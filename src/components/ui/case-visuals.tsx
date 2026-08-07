export function VenturaVisual() {
  return (
    <div aria-hidden className="relative h-full min-h-[220px] w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
        <div className="border-line bg-surface/60 w-full rotate-[-3deg] rounded-lg border px-4 py-3">
          <div className="bg-muted/60 h-2 w-2/5 rounded" />
          <div className="bg-faint/60 mt-2 h-2 w-3/5 rounded" />
        </div>
        <div className="border-accent/40 bg-accent-dim w-full rounded-lg border px-4 py-3">
          <div className="bg-accent/70 h-2 w-1/3 rounded" />
          <div className="bg-muted/50 mt-2 h-2 w-1/2 rounded" />
        </div>
        <div className="border-line bg-surface/60 w-full rotate-[3deg] rounded-lg border px-4 py-3">
          <div className="bg-muted/60 h-2 w-1/2 rounded" />
          <div className="bg-faint/60 mt-2 h-2 w-2/5 rounded" />
        </div>
      </div>
    </div>
  );
}

export function MigrationVisual() {
  return (
    <div aria-hidden className="relative h-full min-h-[220px] w-full">
      <div className="absolute inset-0 flex items-end justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-muted/40 w-16 rounded-t" style={{ height: 96 }} />
          <span className="text-faint font-mono text-[10px] tracking-widest uppercase">
            before
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-accent w-16 rounded-t" style={{ height: 40 }} />
          <span className="text-accent font-mono text-[10px] tracking-widest uppercase">
            after
          </span>
        </div>
      </div>
    </div>
  );
}

export function TribeVisual() {
  return (
    <div aria-hidden className="relative h-full min-h-[220px] w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
        <div className="border-line bg-surface/60 w-2/3 rounded-lg border px-4 py-2.5 text-center">
          <span className="text-faint font-mono text-[10px] tracking-widest uppercase">
            UI
          </span>
        </div>
        <svg className="text-accent/70 h-4 w-8" viewBox="0 0 32 16">
          <line
            stroke="currentColor"
            strokeWidth="1.5"
            x1="2"
            x2="26"
            y1="8"
            y2="8"
          />
          <path
            d="M24 3 L30 8 L24 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <div className="border-accent/40 bg-accent-dim w-2/3 rounded-lg border px-4 py-2.5 text-center">
          <span className="text-accent font-mono text-[10px] tracking-widest uppercase">
            Node API
          </span>
        </div>
        <svg className="text-accent/70 h-4 w-8" viewBox="0 0 32 16">
          <line
            stroke="currentColor"
            strokeWidth="1.5"
            x1="2"
            x2="26"
            y1="8"
            y2="8"
          />
          <path
            d="M24 3 L30 8 L24 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <div className="border-line bg-surface/60 w-2/3 rounded-lg border px-4 py-2.5 text-center">
          <span className="text-faint font-mono text-[10px] tracking-widest uppercase">
            OpenAI · Travily
          </span>
        </div>
      </div>
    </div>
  );
}

export function TeamVisual() {
  return (
    <div aria-hidden className="relative h-full min-h-[220px] w-full">
      <svg
        className="absolute inset-0 h-full w-full p-4"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 200 200"
      >
        <line
          className="text-faint/60"
          stroke="currentColor"
          strokeWidth="1.5"
          x1="100"
          x2="40"
          y1="50"
          y2="140"
        />
        <line
          className="text-faint/60"
          stroke="currentColor"
          strokeWidth="1.5"
          x1="100"
          x2="160"
          y1="50"
          y2="140"
        />
        <line
          className="text-faint/40"
          stroke="currentColor"
          strokeDasharray="3 3"
          strokeWidth="1.5"
          x1="40"
          x2="160"
          y1="140"
          y2="140"
        />
        <circle className="fill-accent" cx="100" cy="50" r="9" />
        <circle
          className="fill-surface stroke-accent/60"
          cx="40"
          cy="140"
          r="9"
          strokeWidth="1.5"
        />
        <circle
          className="fill-surface stroke-accent/60"
          cx="160"
          cy="140"
          r="9"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
