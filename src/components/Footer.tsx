import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="text-[9px] uppercase tracking-[0.18em] text-muted">
          © 2026 Matheus Roger
        </p>
        <p className="text-[9px] uppercase tracking-[0.18em] text-muted">
          Feito com React, Vite & JetBrains Mono
        </p>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
        >
          Voltar ao topo
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-accent/50">
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
