# Spec — Portfólio Matheus Roger

Documento de retomada do projeto. Descreve o que foi construído, decisões de design, estrutura, conteúdo e próximos passos.

- **Status:** funcional, build de produção validado
- **Idioma da interface:** Português (Brasil)
- **Tipo:** landing page pessoal / portfólio, uma única página

---

## 1. Stack

| Camada | Tecnologia |
| --- | --- |
| UI | React 19.3.1 + TypeScript 7 |
| Build | Vite 8.3.8 |
| Estilo | Tailwind CSS 4.3.5 (`@tailwindcss/vite`) |
| Animação | Motion 14.14.0 (`motion/react`) |
| Ícones | lucide-react 1.74.0 + SVGs próprios para marcas |
| Fonte | JetBrains Mono Variable via `@fontsource-variable/jetbrains-mono` (self-hosted) |
| Deploy | Estático — Vercel/Netlify, saída em `dist/` |

---

## 2. Comandos

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # typecheck (tsc --noEmit) + build
npm run preview   # servir build
```

---

## 3. Estrutura de arquivos

```text
portfolio-matheus/
├─ index.html                 # meta tags, SEO, favicon, entrada
├─ vite.config.ts
├─ tsconfig.json
├─ package.json
├─ public/
│  ├─ favicon.svg
│  └─ curriculo-matheus-roger.pdf
└─ src/
   ├─ main.tsx                # StrictMode + MotionConfig reducedMotion="user"
   ├─ App.tsx                 # composição, link skip-to-content, grão
   ├─ index.css               # tema Tailwind, base, utilitários, keyframes
   ├─ data.ts                 # TODO o conteúdo editável
   └─ components/
      ├─ Header.tsx           # nav fixa + menu mobile animado
      ├─ Hero.tsx             # headline, typewriter, terminal, stats
      ├─ Marquee.tsx          # faixa infinita de tecnologias
      ├─ About.tsx            # sobre, stack, formação, idiomas
      ├─ Projects.tsx         # lista expansível de projetos
      ├─ ProjectVisual.tsx    # previews em CSS/SVG por projeto
      ├─ Experience.tsx       # timeline + acordeão de certificações
      ├─ Contact.tsx          # contato, copiar e-mail, redes
      ├─ Footer.tsx
      ├─ ScrollProgress.tsx   # barra de progresso do scroll
      └─ ui/
         ├─ Reveal.tsx        # entrada on-scroll
         ├─ SplitText.tsx     # revelação palavra por palavra
         ├─ Typewriter.tsx    # efeito de digitação rotativo
         ├─ Counter.tsx       # contadores animados
         ├─ SectionHeading.tsx
         └─ BrandIcons.tsx    # ícones GitHub e LinkedIn
```

---

## 4. Design system

### Cores (em `src/index.css`, via `@theme`)

| Token | Valor | Uso |
| --- | --- | --- |
| `bg` | `#08090a` | fundo principal |
| `surface` | `#0d0f10` | cards e superfícies |
| `surface-2` | `#111415` | variação sutil |
| `line` | `#1e2224` | bordas hairline |
| `ink` | `#f1f3ee` | texto principal |
| `muted` | `#8b938d` | texto secundário |
| `accent` | `#c9f24d` | lime, destaque e CTAs |
| `accent-soft` | `#e2ffa3` | hover do accent |

Tema **somente escuro**. Seleção de texto usa accent com texto escuro.

### Tipografia

- **JetBrains Mono Variable** em toda a interface (títulos, corpo, labels).
- Títulos grandes com `font-medium`, `tracking-[-0.05em]` a `-0.06em` e `leading` entre 0.94 e 1.02.
- Labels em maiúsculas, `10px`, `tracking-[0.18em]`–`[0.24em]`.
- Corpo entre 11px e 15px, `text-muted` com `leading-relaxed`.
- Hierarquia editorial: números de seção (`01`–`04`) em accent, separador hairline.

### Layout

- Container `.container-page`: `max-width: 76rem`, padding lateral `1.25rem` → `2rem` (sm) → `2.5rem` (lg).
- Seções com `py-24 sm:py-32` (contato com `py-20 sm:py-28`).
- Grid assimétrico no Sobre e Experiência; coluna esquerda sticky em desktop (`lg:sticky lg:top-28`).
- Bordas de 1px em `line`, raios pequenos (cards) a `rounded-full` (botões/pills).
- Breakpoints Tailwind padrão; layout muda em `sm`, `lg` e `md`.

### Motivos visuais

- Grid técnico de fundo com máscara radial (`bg-grid`).
- Glow lime difuso, grão fixo (`opacity 0.028`), bordas finas.
- Mockups próprios em CSS/SVG (sem screenshots externos).
- Ícones 13–18px, traço fino, setas com microtranslação no hover.

---

## 5. Estrutura da página

| Ordem | Seção / âncora | Componente | Conteúdo |
| --- | --- | --- | --- |
| 1 | `#inicio` | `Hero` | badge de disponibilidade, cargo com typewriter, headline, descrição, CTAs, localização/redes, terminal, contadores |
| 2 | — | `Marquee` | 14 tecnologias em loop infinito |
| 3 | `#sobre` | `About` | texto de apresentação, 3 grupos de skills, formação, idiomas, LinkedIn |
| 4 | `#projetos` | `Projects` | 4 projetos em linhas expansíveis com preview, destaques, stack e links |
| 5 | `#experiencia` | `Experience` | timeline de 4 experiências + formação + 11 certificações em acordeão |
| 6 | `#contato` | `Contact` | headline, e-mail com copiar, disponibilidade, LinkedIn/GitHub/WhatsApp |
| 7 | — | `Footer` | copyright, stack do site, voltar ao topo |

Overlays globais: `ScrollProgress` (barra accent no topo) e grão fixo.

Navegação do header: Sobre, Projetos, Experiência, Contato + botão "Currículo" (download) e menu mobile até `lg`.

---

## 6. Conteúdo e fonte de dados

Todo o conteúdo fica em **`src/data.ts`**; os componentes não têm texto de negócio hardcoded (exceto microcopy de UI).

### Modelos

```ts
type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  visual: "gamelist" | "raiolaranja" | "qrcode" | "rogertech";
  featured?: boolean;
};

type Job = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
};
```

Também existem: `education`, `certifications`, `skillGroups`, `techMarquee`, `stats`, `contact`.

### Projetos (extraídos do currículo)

1. **Panorama Gamelist** — catálogo de ~14.389 jogos retrô de 22 plataformas; infinite scroll com IntersectionObserver, busca client-side, favoritos com exportação, tema persistente, analytics. Destaque. Links: `panoramapanorama.com.br` e `panorama-games.vercel.app`. Visual `gamelist`.
2. **Raiolaranja** — calculadoras de ritmo/velocidade/distância para corredores; Next.js + TypeScript, mobile-first, analytics. Link: `raiolaranja.vercel.app`. Visual `raiolaranja`.
3. **QrCode Grátis** — geração dinâmica de QR Codes em tempo real, validação de entrada. Link: `qrcodegratis.vercel.app`. Visual `qrcode`.
4. **Rogertech** — portfólio profissional em React + TypeScript, integração GitHub, deploy Vercel. Link: `rogertech.vercel.app`. Visual `rogertech`.

### Estatísticas do Hero

`4` projetos no ar · `14.389` jogos catalogados · `22` plataformas retrô · `11` certificações.

### Skills

- **Front-end:** React, Next.js, TypeScript, JavaScript, Vite, HTML, CSS, SASS, Tailwind CSS
- **Back-end & dados:** Node.js, APIs REST, SQL
- **Ferramentas & IA:** Git, GitHub, Vercel, Analytics, Gemini, DeepSeek e IA aplicada ao fluxo de desenvolvimento

### Contato

- E-mail: `mroger.dev@gmail.com`
- WhatsApp: `+55 21 99905-5127` (`wa.me/5521999055127`)
- LinkedIn: `linkedin.com/in/matheus-roger-22555b235`
- GitHub: `github.com/i-roger`
- Currículo: `public/curriculo-matheus-roger.pdf` (copiado do PDF original; download como `Matheus_Roger_Desenvolvedor.pdf`)

---

## 7. Animações e interações

### Texto

- **`SplitText`**: quebra a frase em palavras, cada uma sobe de `110%` com fade dentro de um `overflow-hidden`, stagger de 45ms. Usado em títulos e na headline.
- **`Typewriter`**: alterna cargos com digitação/remoção, pausa de 1.6s e caret piscante. Frases em `Hero.tsx`.
- **`Reveal`**: fade + `translateY` + blur ao entrar na viewport (once, margin -70px).

### Componentes

- **Contadores**: animação de 0 → valor com `animate`, formatados em `pt-BR` (14.389).
- **Marquee**: CSS `translateX(-50%)` em 42s, loop com conteúdo duplicado, pausa no hover, máscara nas bordas.
- **Projetos**: acordeão com animação de `height: auto` e fade; primeiro projeto aberto por padrão; ícone `+` gira 45°; conteúdo interno entra com slide.
- **Certificações**: mostra as 4 primeiras; botão expande as 11 com animação de altura; chevron gira 180°; item ímpar final ocupa duas colunas.
- **Menu mobile**: overlay full-screen com itens em stagger; blocos decorativos no desktop; fecha ao clicar, com `Esc`, e bloqueia scroll do body.
- **Barra de progresso**: `useScroll` + `useSpring` com `scaleX`.
- **Hover**: links do header com underline animado; cards e setas com microdeslocamento; botões accent com transição de cor.

### Movimento reduzido

- `MotionConfig reducedMotion="user"` em `main.tsx`.
- Hooks `useReducedMotion` em `Reveal`, `SplitText`, `Typewriter` e `Counter` retornam conteúdo estático.
- CSS desativa marquee/caret e `scroll-behavior` sob `prefers-reduced-motion`.

---

## 8. Acessibilidade e decisões técnicas

- HTML semântico: `header`, `nav`, `main`, `section`, `article`, `h1–h3`, `footer`.
- Acordeões com `aria-expanded`, `aria-controls`, `role="region"` e `aria-label`.
- Menu mobile com `aria-expanded`, `aria-controls`, `aria-label` dinâmico e fechamento por `Esc`.
- Link "Ir para o conteúdo" visível no foco; `:focus-visible` em accent.
- Botão de copiar e-mail com feedback visual e região `aria-live`.
- Ícones decorativos com `aria-hidden`; marquee tem lista equivalente em `sr-only`.
- **Âncoras:** `section[id] { scroll-margin-top: 5.5rem }` compensa o header de 70px (offset medido: 88px).
- **Bug corrigido:** o menu mobile ficou **fora** do `<header>` como irmão no fragmento. O `backdrop-filter` do header cria containing block para descendentes `position: fixed`, o que zerava a altura do overlay quando ele ficava dentro do header.
- Header fixo com blur apenas após scroll > 24px.
- Ícones de marca (GitHub/LinkedIn) são SVGs próprios em `BrandIcons.tsx`, pois o lucide 1.x não exporta mais ícones de marca.
- Fontes são empacotadas no build (sem requisição externa).

---

## 9. SEO e assets

- `<html lang="pt-BR">`, title, description, author, theme-color.
- Open Graph básico (`og:type`, `title`, `description`, `locale`).
- Favicon SVG com monograma "M" em accent.
- `preload` do PDF do currículo.
- Sem imagem Open Graph própria ainda.

---

## 10. QA realizado

- `npm run build` passou (typecheck + build), sem erros.
- Testado em 320, 390, 768, 1024 e 1440px: **sem overflow horizontal**.
- Verificado em headless Chrome: sem erros de console, sem requisições 4xx.
- Âncoras do menu param consistentemente a 88px do topo.
- Menu mobile, acordeão de projetos, certificações e download do PDF validados.
- Bundle aproximado: 449 kB JS (142 kB gzip) e 50 kB CSS (12 kB gzip).
- Lighthouse não foi executado.

---

## 11. Limitações e próximos passos

- Tema apenas escuro; não há toggle claro/escuro.
- Previews dos projetos são abstrações em CSS/SVG, não screenshots reais.
- Menu mobile não prende o foco (focus trap) nem restaura o foco ao fechar.
- Sem testes automatizados nem CI.
- Sem imagem Open Graph e sem `sitemap.xml`/`robots.txt`.
- Links de projetos usam os domínios da Vercel; ajustar quando houver domínio próprio.
- Possíveis evoluções: página de detalhe por projeto, versão em inglês, microinterações de cursor, formulário de contato, analytics.

---

## 12. Checklist para retomar

1. `npm install && npm run dev`.
2. Atualizar projetos/experiências em `src/data.ts`.
3. Substituir o PDF em `public/curriculo-matheus-roger.pdf` quando o currículo mudar.
4. Ajustar links e dados de contato em `contact`.
5. Rodar `npm run build` antes de publicar.
6. Publicar `dist/` na Vercel ou similar e configurar domínio/OG image.
