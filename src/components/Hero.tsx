import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { contact, stats } from "../data";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";
import { SplitText } from "./ui/SplitText";
import { Typewriter } from "./ui/Typewriter";

const ease = [0.16, 1, 0.3, 1] as const;

const roles = [
  "desenvolvedor front-end",
  "desenvolvedor full stack",
  "react · next.js · typescript",
  "interfaces com performance",
];

const terminalLines: {
  type: "command" | "output" | "status" | "blank";
  text?: string;
  tone?: "ink" | "muted" | "accent";
}[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "matheus roger", tone: "ink" },
  { type: "output", text: "front-end & full stack developer", tone: "muted" },
  { type: "blank" },
  { type: "command", text: "cat stack.txt" },
  { type: "output", text: "react · next.js · typescript", tone: "accent" },
  { type: "output", text: "node.js · tailwind · sass", tone: "muted" },
  { type: "blank" },
  { type: "command", text: "status" },
  { type: "status", text: "disponível para novas oportunidades" },
];

const tones = {
  ink: "text-ink",
  muted: "text-muted",
  accent: "text-accent",
} as const;

function TerminalCard() {
  return (
    <Reveal delay={0.2} y={30} className="relative">
      <div
        aria-hidden="true"
        className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl border border-line bg-surface/90 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
          </div>
          <span className="text-[10px] tracking-[0.12em] text-muted">
            matheus@rogertech: ~
          </span>
          <span className="text-[10px] text-muted/60">zsh</span>
        </div>

        <div className="space-y-1.5 px-5 py-6 text-[11px] leading-relaxed sm:text-xs">
          {terminalLines.map((line, index) => {
            if (line.type === "blank") {
              return <div key={index} className="h-2" aria-hidden="true" />;
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + index * 0.075, ease }}
              >
                {line.type === "command" ? (
                  <p>
                    <span className="text-accent">➜</span>{" "}
                    <span className="text-muted">~</span>{" "}
                    <span className="text-ink">{line.text}</span>
                  </p>
                ) : null}

                {line.type === "output" ? (
                  <p className={tones[line.tone ?? "muted"]}>{line.text}</p>
                ) : null}

                {line.type === "status" ? (
                  <p className="flex items-center gap-2 text-muted">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    {line.text}
                  </p>
                ) : null}
              </motion.div>
            );
          })}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.5 }}
            className="flex items-center gap-2 pt-3"
            aria-hidden="true"
          >
            <span className="text-accent">➜</span>
            <span className="text-muted">~</span>
            <span className="animate-caret inline-block h-3.5 w-[6px] bg-accent" />
          </motion.p>
        </div>
      </div>
    </Reveal>
  );
}

function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease }}
      className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-20 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">
            <Counter value={stat.value} />
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-grid opacity-60"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 65% at 50% 0%, black 10%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 65% at 50% 0%, black 10%, transparent 78%)",
          }}
        />
        <div className="absolute -top-56 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[150px]" />
        <div className="absolute right-[-12%] top-[38%] h-80 w-80 rounded-full bg-accent/[0.05] blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container-page relative pb-20 sm:pb-24">
        <Reveal y={12}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-muted backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </div>
        </Reveal>

        <Reveal delay={0.1} y={14}>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">$</span>
            <span>cargo:</span>
            <Typewriter
              phrases={roles}
              className="text-[11px] normal-case tracking-normal text-ink sm:text-xs"
            />
          </div>
        </Reveal>

        <h1 className="mt-6 text-[clamp(2rem,9.5vw,7.2rem)] font-medium leading-[0.95] tracking-[-0.06em]">
          <span className="block">
            <SplitText text="Interfaces que" delay={0.15} />
          </span>
          <span className="block">
            <SplitText text="funcionam." className="text-accent" delay={0.28} />
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 sm:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-muted">
                Sou Matheus Roger, desenvolvedor front-end e full stack no Rio de
                Janeiro. Transformo ideias em produtos digitais{" "}
                <span className="text-ink">rápidos, acessíveis e fáceis de usar</span>{" "}
                — com React, Next.js, TypeScript e atenção obsessiva aos
                detalhes.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projetos"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-accent-soft sm:w-auto"
                >
                  Ver projetos
                  <ArrowDown
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href={contact.resume}
                  download="Matheus_Roger_Desenvolvedor.pdf"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-[11px] uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:border-ink/30 hover:bg-surface sm:w-auto"
                >
                  Baixar currículo
                  <Download
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.17em] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} className="text-accent" />
                  Rio de Janeiro, BR
                </span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight size={11} />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </Reveal>
          </div>

          <TerminalCard />
        </div>

        <Stats />
      </div>
    </section>
  );
}
