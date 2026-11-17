import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "../data";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";
import { SplitText } from "./ui/SplitText";

const socials = [
  {
    label: "LinkedIn",
    handle: "matheus-roger",
    href: contact.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    handle: "@i-roger",
    href: contact.github,
    icon: GitHubIcon,
  },
  {
    label: "WhatsApp",
    handle: contact.phone,
    href: contact.whatsapp,
    icon: MessageCircle,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-grid opacity-40"
              style={{
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 20% 0%, black, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 20% 0%, black, transparent 70%)",
              }}
            />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/[0.08] blur-[120px]" />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-14">
            <Reveal>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted">
                <span className="text-accent">04</span>
                <span className="h-px w-8 bg-line" />
                <span>Contato</span>
              </div>
            </Reveal>

            <h2 className="mt-6 text-[clamp(2.1rem,6.6vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              <span className="block">
                <SplitText text="Vamos construir" />
              </span>
              <span className="block">
                <SplitText
                  text="algo juntos?"
                  className="text-accent"
                  delay={0.15}
                />
              </span>
            </h2>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
              <div>
                <Reveal delay={0.2}>
                  <p className="max-w-md text-sm leading-relaxed text-muted">
                    Estou aberto a oportunidades em front-end e full stack,
                    projetos freelance e boas conversas sobre interfaces. Me
                    chama — respondo rápido.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="group inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-accent sm:text-lg"
                    >
                      {contact.email}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.span
                            key="copied"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18 }}
                            className="inline-flex items-center gap-1.5 text-accent"
                          >
                            <Check size={11} />
                            copiado
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18 }}
                            className="inline-flex items-center gap-1.5"
                          >
                            <Copy size={11} />
                            copiar
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                    <span className="sr-only" aria-live="polite">
                      {copied
                        ? "E-mail copiado para a área de transferência"
                        : ""}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.35}>
                  <p className="mt-6 text-[9px] uppercase tracking-[0.16em] text-muted/80">
                    Rio de Janeiro, Brasil · remoto ou presencial
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.4}>
                <div className="flex flex-col gap-3">
                  <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-muted">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    disponível para conversar
                  </p>

                  <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between bg-bg/70 px-5 py-4 transition-colors duration-300 hover:bg-surface"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                            <social.icon size={15} />
                          </span>
                          <span>
                            <span className="block text-[9px] uppercase tracking-[0.18em] text-muted">
                              {social.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-ink/90">
                              {social.handle}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
