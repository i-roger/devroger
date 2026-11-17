import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "../data";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line/80 bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="container-page flex h-[70px] items-center justify-between gap-4">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5"
          aria-label="Matheus Roger — início"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-[10px] font-semibold tracking-tight text-accent transition-colors duration-300 group-hover:border-accent/60">
            MR
          </span>
          <span className="inline text-xs font-medium tracking-tight">
            mroger<span className="text-accent">.dev</span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.14em] text-muted lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={contact.resume}
            download="Matheus_Roger_Desenvolvedor.pdf"
            className="group hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-accent/60 hover:text-accent sm:inline-flex"
          >
            Currículo
            <Download
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/30 lg:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </div>
    </header>

    <AnimatePresence>
      {open ? (
        <motion.div
          id="menu-mobile"
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="fixed inset-0 top-[70px] z-40 overflow-y-auto border-t border-line bg-bg/95 backdrop-blur-2xl lg:hidden"
        >
            <div className="container-page flex min-h-[calc(100dvh-70px)] flex-col justify-between pb-10 pt-10">
              <nav
                aria-label="Navegação mobile"
                className="flex flex-col"
              >
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + index * 0.06,
                      ease,
                    }}
                    className="group flex items-center justify-between border-b border-line py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10px] tracking-[0.2em] text-muted">
                        0{index + 1}
                      </span>
                      <span className="text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-accent">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.36, ease }}
                className="mt-12 space-y-5"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                  Vamos conversar
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm text-ink transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={contact.resume}
                    download="Matheus_Roger_Desenvolvedor.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-black"
                  >
                    Baixar currículo
                    <Download size={13} />
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-ink"
                  >
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
