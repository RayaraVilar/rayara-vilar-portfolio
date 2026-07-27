# Portfólio — Rayara Vilar

Site pessoal de portfólio desenvolvido para apresentar a transição de carreira de **Comunicação
Digital** para **Desenvolvimento Python / Backend / IA**, com foco em conseguir uma primeira
oportunidade como **Desenvolvedora Python Júnior** ou **Backend Developer Júnior**.

## Objetivo

O site não esconde a trajetória em comunicação (2020–2026), mas também não a coloca como
protagonista — a narrativa é construída em torno da evolução: comunicação → graduação em
tecnologia → projetos em Python/backend/IA → busca pela primeira vaga na área.

O posicionamento central do site é:

> **Rayara Vilar — Python Developer**
> Construindo backends, APIs e aplicações com Inteligência Artificial.

## Estrutura do projeto

```
rayara_portfolio/
├── index.html        # Página principal (Header, Hero, Sobre + demais seções, conforme forem construídas)
├── styles.css         # Todo o CSS do site
├── script.js          # Todo o JS do site (ícones flutuantes, header, navegação circular)
├── README.md          # Este arquivo
├── ROADMAP.md         # Progresso do projeto, seção por seção
└── HANDOFF.md          # Contexto para retomar o projeto em novas sessões
```

À medida que novas seções forem adicionadas (Tecnologias, Projetos, Experiência,
Formação, GitHub, Contato), este README será atualizado com a estrutura de arquivos
correspondente (ex.: páginas individuais de projeto em `/projetos/`).

## Tecnologias utilizadas na construção do site

O site foi construído como **HTML + CSS + JavaScript puro**, sem necessidade de build/bundler —
o que facilita hospedar em qualquer lugar (GitHub Pages, Vercel, Netlify, etc.) apenas subindo os
arquivos estáticos. HTML, CSS e JS ficam em arquivos separados (`index.html`, `styles.css`,
`script.js`) para facilitar a manutenção conforme o site cresce.

- **HTML5** semântico
- **CSS3** (custom properties/variáveis, grid, flexbox, animações via `@keyframes` e `requestAnimationFrame`)
- **JavaScript (vanilla)** — sem frameworks, sem dependências de build
- **Google Fonts**: `JetBrains Mono` (títulos, com pegada de editor de código/terminal) e `Sora` (corpo do texto)
- **Devicon** (`cdn.jsdelivr.net/gh/devicons/devicon`) — ícones das linguagens, bibliotecas e
  frameworks exibidos no Hero
- **GitHub REST API** (`api.github.com`) — planejado para a seção "GitHub", consumindo os
  repositórios públicos dinamicamente (sem necessidade de backend próprio)

## Identidade visual

- **Paleta**: fundo escuro (`#0B1120`), azul Python (`#4B8BBE`) como cor de destaque principal,
  amarelo Python (`#FFD43B`) como cor secundária/de ênfase
- **Tipografia**: monoespaçada (JetBrains Mono) para títulos e elementos que remetem a código —
  reforça o posicionamento técnico — combinada com uma sans-serif (Sora) para leitura confortável
  no corpo do texto
- **Hero**: ícones das tecnologias do stack Python flutuando ao fundo, reagindo ao movimento do
  mouse, sobre uma grade sutil que remete a um editor de código

## Seções do site

Ver `ROADMAP.md` para o status atualizado de cada seção (Hero, Sobre, Tecnologias, Projetos,
Experiência, Formação, Além do código, GitHub, Contato, Footer) e os próximos passos.

## Como visualizar localmente

Basta abrir o `index.html` diretamente no navegador — não há dependências de instalação nem
processo de build.

## Como publicar

Qualquer serviço de hospedagem de arquivos estáticos funciona:

- **GitHub Pages**: subir os arquivos para um repositório e ativar Pages nas configurações
- **Vercel** ou **Netlify**: importar o repositório e publicar (sem configuração de build necessária)

---

*Desenvolvido por Rayara Vilar.*
