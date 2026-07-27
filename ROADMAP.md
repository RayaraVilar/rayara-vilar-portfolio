# Roadmap — Portfólio Rayara Vilar

Posicionamento definido: **comunicação + tecnologia, com foco atual em Python/Backend/IA.**
A narrativa do site mostra transição de carreira (comunicação → tecnologia), não esconde os anos
de experiência em comunicação, mas não deixa o site "parecer" um portfólio de Social Media.

Status possíveis: `✅ concluído`, `🔧 em andamento`, `⏳ não iniciado`.

---

## 1. Estrutura geral do site (ordem real no HTML)

```
/
├── Header (nav fixo)
├── Hero
├── Sobre (bio + foto + timeline comunicação → tecnologia)
├── GitHub (card com efeito de scroll 3D, screenshot real do perfil)
├── Projetos (destaques + página individual por projeto)
├── Tecnologias (agrupadas por domínio)
├── Experiência profissional
├── Formação
├── Além do código (cards empilhados/inclinados, efeito "display cards")
├── GitHub dinâmico (lista de repos via API, ainda não iniciado)
├── Contato
└── Footer
```

## 2. Status por seção

| # | Seção | Status | Observações |
|---|-------|--------|-------------|
| 1 | Header / Navegação | ✅ | Fixo, transparente sobre o Hero, menu hambúrguer < 861px |
| 1b | Navegação flutuante circular | ✅ | 9 seções (Início, Sobre, GitHub, Projetos, Tecnologias, Experiência, Formação, Além, Contato). Bug de alinhamento corrigido (ver Notas técnicas no `HANDOFF.md`) |
| 2 | Hero | ✅ | Nome, cargo, descrição, ícones de tech flutuantes, CTAs reais |
| 3 | Sobre mim | ✅ | Texto + timeline horizontal com reveal-on-scroll + foto final (Canva) |
| 3b | GitHub (card com scroll 3D) | ✅ | rotateX + scale conforme o scroll, screenshot real do perfil |
| 4 | Projetos (destaques) | ✅ | 4 cards com reveal-on-scroll: Rayo Finanças, EduMetrics, OmniDoc AI, Gerador de Currículo. Sem imagem por decisão da Rayara |
| 4b | Página individual de projeto | ⏳ | Template: problema → solução → funcionalidades → arquitetura → tecnologias → aprendizados → links |
| 5 | Tecnologias | ✅ | Agrupado por domínio, ícones via Devicon |
| 6 | Experiência profissional | ✅ | Timeline vertical com reveal-on-scroll, dados reais do currículo |
| 7 | Formação | ✅ | 3 cards com dados reais |
| 8 | Além do código | ✅ | 3 pilares (Comunicação, Produto, Desenvolvimento) como cards empilhados e inclinados, efeito hover "fanned deck" (baseado no componente `display-cards` que a Rayara pediu, reimplementado em CSS puro) |
| 9 | GitHub dinâmico (lista de repos) | ⏳ | Diferente do card de scroll: consumir `/users/RayaraVilar/repos` para listar repositórios automaticamente |
| 10 | Contato | ✅ | E-mail real, Baixar CV, disponibilidade, GitHub/LinkedIn |
| 11 | Footer | ✅ | Nome, cargo, localização, links |
| 12 | Animações de scroll | ✅ | Sistema `.reveal` global (IntersectionObserver) aplicado nas timelines e nos cards de Projetos; respeita `prefers-reduced-motion` |
| 13 | Responsividade / acessibilidade | 🔧 | Todas as seções responsivas; falta revisão final de acessibilidade |
| 14 | README do projeto | ✅ | Ver `README.md` |
| 15 | Repositório Git | 🔧 | Ver `HANDOFF.md` para status do repositório/commits |

## 3. Informações pendentes

- [ ] Conteúdo/texto do template de página individual por projeto

## 4. Próximos passos sugeridos

1. GitHub dinâmico (lista de repositórios via fetch client-side na API pública do GitHub)
2. Template de página individual por projeto
3. Revisão geral de responsividade e acessibilidade
