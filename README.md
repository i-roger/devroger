# Portfólio — Matheus Roger

Landing page pessoal com design minimalista, tipografia JetBrains Mono e animações de texto e de componentes.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Motion (Framer Motion) para as animações
- Lucide React para ícones
- JetBrains Mono via Fontsource (self-hosted, sem depender do Google Fonts)

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

O resultado fica em `dist/` e pode ser publicado na Vercel, Netlify ou qualquer hospedagem estática.

## Estrutura

```
src/
  components/
    ui/            # Reveal, SplitText, Typewriter, Counter, SectionHeading
    Header.tsx     # navegação fixa + menu mobile animado
    Hero.tsx       # headline animada, typewriter e terminal
    Marquee.tsx    # faixa infinita de tecnologias
    About.tsx      # sobre, stack e informações
    Projects.tsx   # lista expansível de projetos
    ProjectVisual.tsx # previews em CSS/SVG de cada projeto
    Experience.tsx # timeline + certificações expansíveis
    Contact.tsx    # contato, copiar e-mail e redes
    Footer.tsx
  data.ts          # todo o conteúdo (projetos, experiências, links)
  index.css        # tema Tailwind, fontes, grão, marquee, utilitários
```