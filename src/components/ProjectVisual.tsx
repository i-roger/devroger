import type { Project } from "../data";

function GameListArt() {
  return (
    <div className="relative flex h-full flex-col p-4 sm:p-5">
      <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.22em] text-muted">
        <span>panorama / gamelist</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1 w-1 rounded-full bg-accent" />
          online
        </span>
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden rounded-md border border-line/70 bg-bg">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-8 gap-1.5 p-2 opacity-50"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-[3px] border ${
                i % 9 === 0
                  ? "border-accent/40 bg-accent/10"
                  : "border-line/80 bg-surface"
              }`}
              style={{ opacity: 0.35 + ((i * 37) % 60) / 100 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="text-3xl font-medium tracking-[-0.05em] text-ink sm:text-4xl">
              14.389
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-muted">
              jogos retrô
            </p>
            <div className="mx-auto mt-2.5 h-px w-10 bg-accent/70" />
          </div>
        </div>

        <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between text-[7px] uppercase tracking-[0.18em] text-muted">
          <span>01 — 22</span>
          <span>infinite scroll</span>
        </div>
      </div>
    </div>
  );
}

function RaiolaranjaArt() {
  return (
    <div className="relative grid h-full place-items-center overflow-hidden p-4 sm:p-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots opacity-[0.14]"
      />
      <div className="absolute left-4 top-4 text-[8px] uppercase tracking-[0.24em] text-muted">
        raiolaranja / pace
      </div>

      <div className="relative h-40 w-40 sm:h-44 sm:w-44">
        <svg
          viewBox="0 0 160 160"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="80"
            cy="80"
            r="74"
            fill="none"
            stroke="#1e2224"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="80"
            r="58"
            fill="none"
            stroke="#1e2224"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="80"
            r="74"
            fill="none"
            stroke="#c9f24d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="300 465"
          />
          <circle
            cx="80"
            cy="80"
            r="58"
            fill="none"
            stroke="#c9f24d"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="120 365"
            opacity="0.45"
          />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              4'32"
            </p>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.24em] text-muted">
              min / km
            </p>
          </div>
        </div>

        <span className="absolute right-[13%] top-[13%] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#c9f24d]" />
      </div>

      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[8px] uppercase tracking-[0.16em] text-muted">
        <span>distância · 5 km</span>
        <span className="text-ink">22:40</span>
      </div>
    </div>
  );
}

function qrCell(x: number, y: number, size: number) {
  const corners: [number, number][] = [
    [0, 0],
    [size - 7, 0],
    [0, size - 7],
  ];

  for (const [fx, fy] of corners) {
    const dx = x - fx;
    const dy = y - fy;
    if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) {
      const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
      return ring !== 2;
    }
  }

  return (x * 13 + y * 7 + x * y * 3) % 7 < 3;
}

function QrCodeArt() {
  const size = 21;
  const cells = Array.from({ length: size * size }, (_, i) => {
    const x = i % size;
    const y = Math.floor(i / size);
    return qrCell(x, y, size);
  });

  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.22em] text-muted">
        <span>qrcode / generator</span>
        <span className="rounded-full border border-accent/40 px-1.5 py-0.5 text-[7px] text-accent">
          grátis
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center py-3">
        <div className="rounded-lg bg-accent p-1.5">
          <div className="rounded-[4px] bg-white p-2.5">
            <div
              className="grid h-28 w-28 gap-[2px] sm:h-32 sm:w-32"
              style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
              aria-hidden="true"
            >
              {cells.map((on, i) => (
                <div
                  key={i}
                  className={on ? "bg-[#0b0c0c]" : "bg-transparent"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[8px] uppercase tracking-[0.16em] text-muted">
        <span>instantâneo</span>
        <span>sem cadastro</span>
      </div>
    </div>
  );
}

function RogertechArt() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.22em] text-muted">
        <span>rogertech / build</span>
        <span className="text-accent">v1.0</span>
      </div>

      <div className="mt-3 flex-1 rounded-md border border-line/80 bg-bg p-3 text-[9px] leading-relaxed">
        <p>
          <span className="text-accent">$</span>{" "}
          <span className="text-ink">npm run build</span>
        </p>
        <p className="text-muted">
          building <span className="text-ink/80">rogertech</span>...
        </p>
        <p className="mt-1.5 text-muted">
          <span className="text-accent">✓</span> 142 módulos transformados
        </p>
        <p className="text-muted">
          <span className="text-accent">✓</span> pronto em 1.24s
        </p>

        <div className="mt-3 space-y-1.5" aria-hidden="true">
          <div className="h-1 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[92%] rounded-full bg-accent/80" />
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[74%] rounded-full bg-accent/50" />
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[58%] rounded-full bg-accent/30" />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <span className="text-xl font-medium tracking-[-0.05em] text-ink sm:text-2xl">
          &lt;rogertech<span className="text-accent">/</span>&gt;
        </span>
        <span className="text-[8px] uppercase tracking-[0.16em] text-muted">
          deploy · vercel
        </span>
      </div>
    </div>
  );
}

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface">
      {kind === "gamelist" ? <GameListArt /> : null}
      {kind === "raiolaranja" ? <RaiolaranjaArt /> : null}
      {kind === "qrcode" ? <QrCodeArt /> : null}
      {kind === "rogertech" ? <RogertechArt /> : null}
    </div>
  );
}
