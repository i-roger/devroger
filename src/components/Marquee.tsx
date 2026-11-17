import { techMarquee } from "../data";

export function Marquee() {
  return (
    <div
      className="marquee relative overflow-hidden border-y border-line bg-surface/40"
      aria-label="Tecnologias"
    >
      <div className="marquee-mask">
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center"
              aria-hidden={copy === 1}
            >
              {techMarquee.map((tech) => (
                <div
                  key={`${copy}-${tech}`}
                  className="flex items-center gap-8 px-8 py-4 text-xs tracking-[0.04em] text-muted"
                >
                  <span className="transition-colors hover:text-ink">
                    {tech}
                  </span>
                  <span className="text-[9px] text-accent/70">✳</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">
        Tecnologias: {techMarquee.join(", ")}.
      </span>
    </div>
  );
}
