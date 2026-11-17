import { ArrowUpRight, GraduationCap, Languages, MapPin } from "lucide-react";
import { contact, skillGroups } from "../data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const facts = [
  {
    icon: MapPin,
    label: "Localização",
    value: contact.location,
  },
  {
    icon: GraduationCap,
    label: "Formação",
    value: "Ciências da Computação — Estácio, 2025",
  },
  {
    icon: Languages,
    label: "Idiomas",
    value: "Português nativo · Inglês avançado · Espanhol avançado",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="01"
              label="Sobre"
              title="Do pixel"
              accentTitle="ao deploy."
            />
            <Reveal delay={0.2}>
              <p className="mt-8 border-l border-accent/50 pl-4 text-xs leading-relaxed text-muted">
                Gosto de código que resolve problemas reais — e de interfaces
                que não fazem o usuário pensar.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-[15px] leading-relaxed text-ink/90">
                Desenvolvedor com experiência na criação de aplicações web
                modernas, landing pages e plataformas focadas em performance,
                usabilidade e experiência do usuário.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Atuo de ponta a ponta: interfaces responsivas e componentizadas
                no front-end, integrações com APIs REST e soluções completas no
                back-end. Tenho experiência com React, Next.js, Vite, Node.js,
                JavaScript, TypeScript, HTML, CSS e SASS, além de ferramentas
                utilitárias, cálculos e automações para diferentes necessidades
                de negócio.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    className="grid gap-3 py-5 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                      {group.label}
                    </p>
                    <ul className="flex flex-wrap gap-x-2 gap-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line bg-surface/60 px-3 py-1 text-[11px] text-ink/90 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 space-y-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <fact.icon
                      size={14}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                      <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                        {fact.label}
                      </dt>
                      <dd className="text-xs leading-relaxed text-ink/90">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                Perfil completo no LinkedIn
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
