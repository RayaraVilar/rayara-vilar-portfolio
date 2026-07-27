# Portfólio · Rayara Vilar

Site pessoal de portfólio desenvolvido para apresentar a transição de carreira de **Comunicação
Digital** para **Desenvolvimento Python / Backend / IA**, com foco nas vagas de
**Desenvolvedora Python Júnior** e **Backend Developer Júnior**.

## Objetivo

O site não esconde a trajetória em comunicação (2020–2026), mas também não a coloca como
protagonista: a narrativa é construída em torno da evolução, comunicação, graduação em
tecnologia, projetos reais em Python/backend/IA.

O posicionamento central do site é:

> **Rayara Vilar, Python Developer**
> Construindo backends, APIs e aplicações com Inteligência Artificial.

## Estrutura do projeto

```
rayara_vilar_portfolio/
├── index.html          # Página principal, todas as seções do site
├── styles.css          # Todo o CSS do site
├── script.js           # Todo o JS (ícones flutuantes, header, nav circular, reveal-on-scroll, scroll card)
├── assets/
│   ├── curriculo-rayara-vilar.pdf
│   ├── rayara_vilar_foto.png
│   └── github.com_RayaraVilar_profile.png
├── README.md            # Este arquivo
├── ROADMAP.md           # Progresso do projeto, seção por seção
└── HANDOFF.md           # Contexto para retomar o projeto em novas sessões
```

## Tecnologias utilizadas na construção do site

O site foi construído como **HTML + CSS + JavaScript puro**, sem necessidade de build/bundler,
o que facilita hospedar em qualquer lugar (GitHub Pages, Vercel, Netlify, etc.) apenas subindo os
arquivos estáticos. HTML, CSS e JS ficam em arquivos separados (`index.html`, `styles.css`,
`script.js`) para facilitar a manutenção conforme o site cresce.

- **HTML5** semântico
- **CSS3** (custom properties/variáveis, grid, flexbox, animações via `@keyframes`,
  `requestAnimationFrame` e `IntersectionObserver`)
- **JavaScript (vanilla)**, sem frameworks, sem dependências de build
- **Google Fonts**: `JetBrains Mono` (títulos, com pegada de editor de código/terminal) e `Sora` (corpo do texto)
- **Devicon** (`cdn.jsdelivr.net/gh/devicons/devicon`), ícones das linguagens, bibliotecas e
  frameworks exibidos no Hero e em Tecnologias
- **GitHub REST API / `gh` CLI**: dados reais de projetos puxados direto do GitHub da Rayara;
  uma lista dinâmica de repositórios via `api.github.com` ainda está planejada (ver `ROADMAP.md`)

## Identidade visual

- **Paleta**: fundo escuro (`#0B1120`), azul Python (`#4B8BBE`) como cor de destaque principal,
  amarelo Python (`#FFD43B`) como cor secundária/de ênfase
- **Tipografia**: monoespaçada (JetBrains Mono) para títulos e elementos que remetem a código,
  reforçando o posicionamento técnico, combinada com uma sans-serif (Sora) para leitura confortável
  no corpo do texto
- **Hero**: ícones das tecnologias do stack Python flutuando ao fundo, reagindo ao movimento do
  mouse, sobre uma grade sutil que remete a um editor de código

## Seções do site

Header, Hero, Sobre, GitHub (card com scroll 3D), Projetos, Tecnologias, Experiência, Formação,
Além do código, Contato e Footer. Ver `ROADMAP.md` para o status detalhado de cada seção e os
próximos passos.

## Como visualizar localmente

Basta abrir o `index.html` diretamente no navegador, não há dependências de instalação nem
processo de build.

## Como publicar

Qualquer serviço de hospedagem de arquivos estáticos funciona:

- **GitHub Pages**: subir os arquivos para um repositório e ativar Pages nas configurações
- **Vercel** ou **Netlify**: importar o repositório e publicar (sem configuração de build necessária)

---

*Desenvolvido por Rayara Vilar.*
