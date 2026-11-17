import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { certifications, education, experience } from "../data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;
const initialVisible = 4;

function CertificationItem({
  name,
  org,
  year,
  className = "",
}: {
  name: string;
  org: string;
  year: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 bg-bg/50 px-5 py-4 ${className}`}
    >
      <div>
        <p className="text-xs leading-relaxed text-ink/90">{name}</p>
        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted">
          {org}
        </p>
      </div>
      <span className="shrink-0 text-[10px] tabular-nums text-muted">
        {year}
      </span>
    </div>
  );
}

function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const visible = certifications.slice(0, initialVisible);
  const hidden = certifications.slice(initialVisible);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface/40">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-controls="certificacoes"
        className="group flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span>
          <span className="block text-[9px] uppercase tracking-[0.22em] text-accent">
            Formação complementar
          </span>
          <span className="mt-1.5 flex items-baseline gap-2">
            <span className="text-base font-medium tracking-tight sm:text-lg">
              Certificações
            </span>
            <span className="text-[10px] text-muted">
              {certifications.length.toString().padStart(2, "0")}
            </span>
          </span>
        </span>

        <span className="flex items-center gap-3">
          <span className="hidden text-[9px] uppercase tracking-[0.16em] text-muted sm:inline">
            {expanded ? "recolher" : "ver todas"}
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-400 ${
              expanded
                ? "rotate-180 border-accent bg-accent text-black"
                : "border-line text-muted group-hover:border-ink/30 group-hover:text-ink"
            }`}
          >
            <ChevronDown size={15} aria-hidden="true" />
          </span>
        </span>
      </button>

      <div
        id="certificacoes"
        className="grid gap-px border-t border-line bg-line sm:grid-cols-2"
      >
        {visible.map((cert) => (
          <CertificationItem key={`${cert.name}-${cert.org}`} {...cert} />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="extra-certifications"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease },
              opacity: { duration: 0.3, ease },
            }}
            className="overflow-hidden"
          >
            <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
              {hidden.map((cert, index) => (
                <CertificationItem
                  key={`${cert.name}-${cert.org}`}
                  {...cert}
                  className={
                    hidden.length % 2 === 1 && index === hidden.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="03"
              label="Experiência"
              title="Onde já"
              accentTitle="construí."
              description="Da infraestrutura ao front-end: uma trajetória construída resolvendo problemas reais, com tecnologia e pessoas no centro."
            />

            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-line pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-accent">
                  Formação
                </p>
                <div className="mt-4 space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.course}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <div>
                        <p className="text-xs text-ink/90">{item.course}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                          {item.school}
                        </p>
                      </div>
                      <span className="shrink-0 text-[9px] uppercase tracking-[0.12em] text-muted">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="relative border-l border-line pl-7 sm:pl-8">
              {experience.map((job, index) => (
                <Reveal
                  key={`${job.company}-${job.period}`}
                  delay={index * 0.05}
                  y={20}
                >
                  <article
                    className={`group relative ${
                      index === 0 ? "pb-10" : "py-10 border-t border-line/70"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[calc(1.75rem+1px)] h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-accent/60 bg-bg transition-colors duration-300 group-hover:bg-accent sm:-left-[calc(2rem+1px)] ${
                        index === 0 ? "top-2" : "top-[2.85rem]"
                      }`}
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-sm font-medium tracking-[-0.01em] text-ink sm:text-base">
                        {job.role}
                      </h3>
                      <span className="text-[9px] uppercase tracking-[0.16em] text-muted">
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-accent">
                      {job.company}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {job.summary}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-[11px] leading-relaxed text-muted/90"
                        >
                          <span className="mt-[6px] h-px w-2.5 shrink-0 bg-line" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-12">
              <Certifications />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
