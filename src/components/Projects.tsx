import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { projects } from "../data";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="02"
            label="Projetos"
            title="Trabalhos"
            accentTitle="selecionados."
          />
          <Reveal delay={0.2} className="hidden sm:block">
            <p className="text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
              {projects.length.toString().padStart(2, "0")} projetos no ar
              <br />
              <span className="text-accent">2025 — 2026</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {projects.map((project) => {
            const isOpen = openId === project.id;

            return (
              <article
                key={project.id}
                className="border-b border-line"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`projeto-${project.id}`}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-7 sm:py-7"
                  >
                    <span className="self-start pt-1 text-[10px] tabular-nums tracking-[0.12em] text-muted sm:pt-1.5">
                      {project.index}
                    </span>

                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className="text-lg font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-accent sm:text-xl lg:text-2xl">
                          {project.title}
                        </span>
                        {project.featured ? (
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[8px] uppercase tracking-[0.16em] text-accent">
                            destaque
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-muted">
                        <span>{project.tagline}</span>
                        <span className="h-2.5 w-px bg-line" />
                        <span>{project.year}</span>
                      </span>
                    </span>

                    <span className="flex items-center gap-4 sm:gap-6">
                      <span className="hidden flex-wrap justify-end gap-1.5 lg:flex">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-line px-2.5 py-1 text-[10px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 sm:h-10 sm:w-10 ${
                          isOpen
                            ? "rotate-45 border-accent bg-accent text-black"
                            : "border-line text-muted group-hover:border-ink/30 group-hover:text-ink"
                        }`}
                      >
                        <Plus size={15} aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      id={`projeto-${project.id}`}
                      role="region"
                      aria-label={`Detalhes do projeto ${project.title}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.55, ease },
                        opacity: { duration: 0.32, ease },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12, ease }}
                        className="grid gap-8 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line">
                          <ProjectVisual kind={project.visual} />
                        </div>

                        <div className="flex flex-col">
                          <p className="text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>

                          <ul className="mt-6 space-y-2.5">
                            {project.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex gap-3 text-xs leading-relaxed text-ink/80"
                              >
                                <span
                                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                                  aria-hidden="true"
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-line bg-surface/70 px-2.5 py-1 text-[10px] text-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex flex-wrap gap-2 pt-7">
                            {project.links.map((link, index) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={
                                  index === 0
                                    ? "group/link inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-bg transition-colors hover:bg-accent"
                                    : "group/link inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent/50 hover:text-accent"
                                }
                              >
                                {link.label}
                                <ArrowUpRight
                                  size={13}
                                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
