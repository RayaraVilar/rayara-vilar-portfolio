# Handoff — Portfólio Rayara Vilar (contexto)

`ROADMAP.md` para o status seção por seção.

## Quem sou / Posicionamento

Rayara Vilar, transição de carreira: **Comunicação Digital (2020–2026) → Desenvolvimento
Python / Backend / IA**. O site não esconde os anos em comunicação, mas não os coloca como
protagonista. A narrativa mostra evolução, não deixa o site "parecer" portfólio de Social Media.

Posicionamento central:

> **Rayara Vilar, Python Developer**
> Construindo backends, APIs e aplicações com Inteligência Artificial.

**Tom de voz (importante):** direto e com valor a entregar, nunca de tom carente ou desesperado
por uma vaga. Evitar frases como "em busca da minha primeira oportunidade", preferir framing do
que ela entrega/constrói. Evitar travessões (`—`) no texto do site; usar ponto final, vírgula,
parênteses ou `·` (ponto médio) para separar título/empresa.

## Dados reais de contato e redes

- E-mail: `ravtra301@gmail.com`
- Telefone: `+55 (83) 999287661` (não exibido no site por padrão, disponível se precisar)
- GitHub: `https://github.com/RayaraVilar`
- LinkedIn: `https://www.linkedin.com/in/rayara-vilar/`
- Currículo em PDF: salvo em `assets/curriculo-rayara-vilar.pdf`, linkado no botão "Baixar CV" da
  seção Contato

## Cargo e descrição definidos (usados no Hero)

- Cargo: **Desenvolvedora Python Júnior**
- Descrição:
  > Desenvolvedora Python Júnior focada em desenvolvimento backend, construção de APIs e
  > integração de Inteligência Artificial em aplicações. Formada em Sistemas para Internet e
  > Comunicação em Mídias Digitais, uno tecnologia, pensamento estratégico e comunicação para
  > transformar problemas em soluções digitais.

## Identidade visual (mantida em todo o site)

- **Fundo escuro**: `#0B1120` (fundo principal), `#141B2E` (cards/surfaces), `#0F1729` (bg-soft,
  usado em faixas alternadas como Sobre/Formação)
- **Azul Python** `#4B8BBE`, cor de destaque principal
- **Amarelo Python** `#FFD43B`, cor secundária/ênfase (também usado no círculo da foto em Sobre)
- **Texto**: `#EDEFF7` (principal), `#8891A8` (muted)
- **Tipografia**: `JetBrains Mono` para títulos/elementos de destaque (remete a código/terminal),
  `Sora` para corpo de texto (leitura confortável)
- **Motivo visual**: grade sutil de fundo (estilo editor de código), prompt estilo terminal
  (`>>> import rayara`), badges/pills com brilho para destacar informação-chave

## Estrutura de arquivos

```
rayara_vilar_portfolio/
├── index.html                            # todo o HTML das seções
├── styles.css                            # todo o CSS
├── script.js                             # todo o JS (ícones, header, nav circular, reveal, scroll card)
├── assets/
│   ├── curriculo-rayara-vilar.pdf
│   ├── rayara_vilar_foto.png             # foto final (feita no Canva), já com o círculo composto
│   └── github.com_RayaraVilar_profile.png # screenshot do perfil GitHub, usado no card de scroll
├── README.md
├── ROADMAP.md
└── HANDOFF.md
```

Sem build/bundler, só arquivos estáticos servidos diretamente (GitHub Pages, Vercel, Netlify etc.).

## Ordem real das seções no HTML

Header, Hero, Sobre, GitHub (card scroll), Projetos, Tecnologias, Experiência, Formação,
Além do código, Contato, Footer. (Projetos vem logo depois de GitHub, e Além do código vem depois
de Formação, por pedido explícito da Rayara, não é a ordem "óbvia" — não reordene sem confirmar.)

## O que já foi construído

### 1. Header fixo

Fixo no topo, **transparente sobre o Hero** (só ganha fundo escuro + blur ao rolar, classe
`.scrolled` via `script.js`). Logo `>>> rayara`, links âncora para as seções (na ordem real acima),
CTA GitHub, link ativo destacado em amarelo conforme a seção visível. Abaixo de 861px vira menu
hambúrguer (`#mobileNav`).

### 2. Hero

Nome, cargo em pill amarelo, descrição, 3 CTAs (Ver projetos / GitHub / LinkedIn, com links
reais), ícones flutuantes do stack técnico (Devicon via CDN) reagindo ao mouse. Centralizado no
viewport inteiro (o header não empurra o conteúdo para baixo).

### 3. Sobre (`#sobre`)

Texto de transição de carreira + 3 pills (Comunicação, Produto, Desenvolvimento) ao lado de uma
foto circular. Abaixo, uma timeline horizontal com reveal-on-scroll (ver seção 11): 2020 → 2022 →
2024–2026 → Agora.

**Foto: resolvida.** A primeira tentativa foi um efeito "cabeça saindo do círculo" via CSS puro
(duas camadas com `clip-path`), mas o corte manual ficou impreciso. A Rayara montou a arte final
no Canva (foto + círculo amarelo Python já compostos, PNG com fundo transparente,
`assets/rayara_vilar_foto.png`, 1080×1350) e o `.about-photo` hoje é só uma `<img>` simples
(`width: 27rem`, `height: auto`, com drop-shadow) em `styles.css`. Se precisar trocar a foto de
novo, é só substituir o arquivo mantendo a mesma composição (círculo + cabeça saindo por cima).

### 4. GitHub (`#github`)

Card que inclina em 3D (rotateX 20°→0°) e ajusta escala conforme o usuário rola a página,
mostrando o screenshot real do perfil do GitHub (`assets/github.com_RayaraVilar_profile.png`,
o perfil já tem um README.md personalizado). A Rayara pediu explicitamente o componente React
"container-scroll-animation" (Aceternity UI / 21st.dev, usa Framer Motion) e mandou o código;
como este projeto é HTML/CSS/JS puro (sem React, Next.js ou build step), reimplementei o mesmo
efeito visual em vanilla JS: `#scrollContainer`/`#scrollHeader`/`#scrollCard` em `index.html`,
`.scroll-*` em `styles.css`, e a lógica de progresso do scroll (`updateScrollCard()`) em
`script.js` calcula `progress` a partir do `getBoundingClientRect()` do container (0 quando o
container entra pela base do viewport, 1 quando sai pelo topo) e aplica `rotateX`/`scale`/
`translateY` interpolados, igual à lógica original de `scrollYProgress` do Framer Motion. Se a
Rayara migrar o site para React/Next.js no futuro, o componente original pode ser usado
diretamente no lugar disso.

### 5. Projetos (`#projetos`)

4 cards com dados reais, obtidos direto do GitHub da Rayara via `gh` CLI (autenticado como
`RayaraVilar`, não precisou de conector): **Rayo Finanças** (copiloto financeiro com IA, Next.js +
FastAPI), **EduMetrics** (análise educacional, Django + PyTorch), **OmniDoc AI** (API assíncrona
de análise de documentos, FastAPI), **Gerador de Currículo** (gera currículos otimizados para ATS
via integração com o GitHub, o mesmo princípio usado para puxar esses dados). Cards com
reveal-on-scroll (ver seção 11). **Decisão da Rayara: sem imagem/screenshot nos cards** (perguntei,
ela preferiu manter só texto + stack) — não adicionar imagens aqui sem ela pedir de novo. Falta o
template de página individual por projeto (`/projetos/<slug>`), ainda não iniciado.

### 6. Tecnologias (`#tecnologias`)

Grid agrupado por domínio: Backend, Banco de Dados, Inteligência Artificial, Dados, Qualidade &
Infra, e Frontend por último (visualmente mais discreto, com nota "base sólida, não é o foco
atual"). Ícones via Devicon onde existe slug correspondente; tecnologias sem ícone (Pydantic,
Celery, LangChain, LlamaIndex, Polars, Vector Databases, CI/CD, REST APIs) aparecem como chip só
com texto.

### 7. Experiência (`#experiencia`)

Timeline vertical com reveal-on-scroll (ver seção 11) e dados reais do currículo
(`curriculo-Rayara-Vilar-Python.pdf`), condensando os 3 cargos na UFPB (Social Media, Designer,
Revista Prim@ Facie) em um único item para manter a timeline enxuta: MR3 Comunicação (2020–2022) →
Ellos Design (2022–2023) → UFPB (2023–2025) → HS Marketing (2025–2026, atual).

### 8. Formação (`#formacao`)

3 cards com dados reais: Tecnólogo em Sistemas para Internet (Universidade Cruzeiro do Sul),
Bacharelado em Comunicação em Mídias Digitais (UFPB), mobilidade acadêmica no Instituto
Politécnico de Bragança (Portugal).

### 9. Além do código (`#alem`)

3 pilares (Comunicação, Produto, Desenvolvimento), com texto adaptado ao contexto real da Rayara
(anos de comunicação digital → produto → foco atual em backend/IA). Visualmente é um "baralho"
de 3 cards empilhados e inclinados (`skewY(-8deg)`), cascateados em diagonal, com o card da frente
sempre colorido e os dois de trás em `grayscale`. A Rayara pediu explicitamente o componente
`display-cards` (Aceternity UI / 21st.dev, React + Tailwind), reimplementado em CSS puro:
`.pillars-stack-wrap` > `.pillars-stack` (largura/altura de UM card) > 3 `.pillar-card` com
`position:absolute; inset:0`, cada um com seu próprio `translate()` fixo (back/mid/front) que
define o cascateamento.

**Interação de hover, ajustada duas vezes:** a ideia original do componente de referência era o
card subir (`translateY` negativo) ao passar o mouse, mas isso fazia o card "atropelar"
visualmente o card da frente. A Rayara pediu para deslizar **para a esquerda** em vez de subir
(mantendo o `skewY`), com um deslocamento bem grande (quase saindo do "baralho"). Cada
`.pillar-*:hover` reduz bastante o `translateX` — ver `.pillar-back:hover` / `.pillar-mid:hover` /
`.pillar-front:hover` em `styles.css`.

**Ordem de empilhamento é SEMPRE fixa, mesmo em hover**: Desenvolvimento (z-index 3, sempre na
frente) > Produto (z-index 2) > Comunicação (z-index 1, sempre atrás). Uma primeira tentativa
também subia o `z-index` do card em hover pra ele aparecer acima de tudo, mas a Rayara não queria
isso — o card hover deve deslizar e ficar em evidência, mas **sem nunca sobrepor um card que já
está na frente dele na ordem base**. Por isso os `:hover` de `.pillar-back` e `.pillar-mid` NÃO têm
`z-index` (só a versão anterior tinha, foi removido). Não reintroduza `z-index` nesses hovers.

O card da frente (Desenvolvimento) também ganhou acento amarelo (`--yellow`) no ícone e na borda,
em vez do azul padrão, pra destacar que é o foco atual dela — os outros dois continuam com acento
azul.

### 10. Contato (`#contato`) + Footer

CTA de e-mail real (`mailto:ravtra301@gmail.com`), botão Baixar CV, disponibilidade (Python Jr /
Backend Jr / AI-Backend Jr), GitHub/LinkedIn. Footer com nome, cargo, localização (Paraíba,
Brasil, inferida do DDD 83 do telefone + UFPB), links e "Desenvolvido por Rayara Vilar".

### 11. Reveal on scroll (animações de entrada)

Sistema global em `styles.css` (`.reveal` / `.reveal.revealed`) + `script.js`
(`IntersectionObserver`, threshold 0.15, `rootMargin: "0px 0px -60px 0px"`): qualquer elemento com
classe `.reveal` começa com `opacity:0; transform:translateY(28px)` e ganha `.revealed` (fade +
slide up) quando entra no viewport, com `transition-delay` inline por item pra criar um efeito
cascata (`style="transition-delay:0.1s"` etc.). Aplicado hoje nos itens da timeline de Sobre, da
timeline de Experiência, e nos cards de Projetos. Respeita `prefers-reduced-motion`. Para aplicar
em elementos novos, basta adicionar a classe `reveal` (+ delay inline se for uma lista/grid).

### 12. Navegação flutuante e arrastável

Botão circular flutuante (canto inferior direito, arrastável) que abre um menu circular com as 9
seções (Início, Sobre, GitHub, Projetos, Tecnologias, Experiência, Formação, Além, Contato). Fecha
ao clicar fora, no X central, ou com Esc.

**Bug real corrigido (não era cache do navegador):** os itens do menu ficavam a distâncias bem
diferentes do centro (medi via script de diagnóstico: de 100 a 197px, quando deveria ser 150px
pra todos). Causa: o `transform` de cada item em `script.js` incluía `translate(-50%,-50%)`, mas
essa centralização JÁ era feita pelo `margin: -2.2rem` do `.nav-item` em `styles.css`, a duplicação
deslocava cada ícone ~35px na diagonal (mais ou menos, dependendo do ângulo de cada item). Removido
o `translate(-50%,-50%)` de dentro do `transform` em `script.js` (a centralização via `margin` já é
suficiente). Se mexer nesse menu de novo, **não reintroduza esse translate**.

## O que falta

- [ ] GitHub dinâmico: lista de repositórios via fetch client-side em
      `api.github.com/users/RayaraVilar/repos` (diferente do card de scroll, que já está pronto)
- [ ] Template de página individual por projeto
- [ ] Revisão final de responsividade e acessibilidade

## Notas técnicas úteis para a próxima sessão

- **`gh` CLI já está autenticado** neste ambiente como `RayaraVilar` (`gh auth status`). Use
  `gh repo view` / `gh repo list` / `gh api repos/RayaraVilar/<repo>/...` para puxar dados reais
  do GitHub sem precisar de conector nenhum.
- **Não há Playwright/Puppeteer instalado.** Para conferir visualmente mudanças de CSS, uso o
  Chrome instalado localmente em modo headless (`chrome.exe --headless --disable-gpu
  --screenshot=out.png --window-size=W,H URL`), servindo os arquivos com
  `python -m http.server 8765` a partir da pasta do projeto.
- **Cuidado com `--virtual-time-budget`**: em páginas com `requestAnimationFrame` em loop (o
  float dos ícones do Hero roda assim), usar essa flag junto com `--screenshot` produz, de forma
  intermitente, uma captura em branco (só a cor de fundo, arquivo bem pequeno tipo ~7KB) sem
  nenhum aviso de erro. **Não uso mais essa flag** para screenshots deste site; sem ela (deixando o
  Chrome usar tempo real) as capturas saem completas de forma consistente. Também vi, antes disso,
  um artefato onde `position: fixed` parecia não renderizar corretamente ao navegar direto com
  fragmento de URL (`#secao`) + `--virtual-time-budget`; isso some também sem a flag.
- Escreva sempre em arquivos dentro do diretório do projeto; para salvar imagens/arquivos que a
  Rayara compartilha na conversa, procure primeiro em `~/Downloads` (funcionou tanto para o PDF do
  currículo quanto para as fotos) antes de pedir o caminho manualmente.
- **Para depurar bugs de posicionamento/CSS que "parecem certos no código" mas não estão**: não
  confie só em inspeção visual de screenshot (é fácil errar a leitura de poucos pixels de
  diferença). Injete um script na página de teste que calcula `getBoundingClientRect()` dos
  elementos envolvidos e escreve os números em um `<pre>`/`<div>` visível na própria captura de
  tela, foi assim que achei a causa real do bug do menu circular.
- Ao criar páginas de teste/diagnóstico que precisam do `styles.css`/`script.js` reais (servidos
  via `python -m http.server 8765` na pasta do projeto), prefira criar o arquivo de teste na pasta
  scratchpad e usar `<link href="http://localhost:8765/styles.css">`. Se precisar copiar o
  `index.html` real para injetar um script de teste nele, copie para dentro do próprio projeto
  (ex.: `_test_algo.html`) só temporariamente e **apague o arquivo depois**, não deixe arquivos de
  teste `_algo.html` no repositório (aconteceu mais de uma vez nesta sessão, sempre limpar).

## Nota sobre a pasta `.claude/`

Existe uma pasta `.claude/` na raiz do projeto com skills do Claude Code (design, brand,
ui-styling etc.) instaladas no escopo deste projeto. Não faz parte do site (não é publicada, não
afeta `index.html`), é só configuração/tooling local. Considere colocar `.claude/` no
`.gitignore` do repositório Git (ver abaixo) já que é tooling local, não conteúdo do site.

## Repositório Git

Repositório: `https://github.com/RayaraVilar/rayara-vilar-portfolio` (público). `.claude/` está no
`.gitignore` (tooling local, não faz parte do site). Ver o próprio `git log` / `git remote -v` /
`gh repo view` para o estado atual (descrição, se tem commits novos etc.); este arquivo não
duplica esse status porque ele muda rápido, só documento aqui decisões que não são óbvias a partir
do histórico do Git.

---

_Continue atualizando o `ROADMAP.md` e este arquivo conforme cada seção for concluída._
