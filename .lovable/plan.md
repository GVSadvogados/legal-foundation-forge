
# Site Institucional GVS Advogados — Estrutura

Site estático em React + TanStack Router. Sem backend, sem Lovable Cloud. Todos os textos serão placeholders neutros em português para você substituir depois.

## Identidade visual

**Paleta (oklch em `src/styles.css` via `@theme inline`):**
- `#0D0D0D` fundo escuro / header / footer
- `#383838` primária (botões, acentos, ícones)
- `#666666` texto secundário
- `#9B9B9B` bordas
- `#D3D3D3` fundos suaves
- `#FFFFFF` fundo claro
- Complementares: dourado envelhecido `#C9A96E` (acentos premium), off-white `#F7F5F0`, grafite `#1A1A1A`, cinza quente `#EFEDE8`

**Tipografia** (Google Fonts via `<link>` no `__root.tsx`):
- Títulos: **Cormorant Garamond** (600/700)
- Corpo: **Inter** (400/500/600)

**Estilo:** header fixo escuro com blur ao rolar, hero amplo, seções alternadas claro/escuro, cards com bordas finas, hover elevado sutil, divisores finos, animações fade-in ao rolar (IntersectionObserver), mobile impecável.

## Rotas (TanStack Router, file-based em `src/routes/`)

```
index.tsx                                    → /
quem-somos.tsx                               → /quem-somos
areas-de-atuacao.tsx                         → /areas-de-atuacao (layout com <Outlet/>)
areas-de-atuacao.index.tsx                   → /areas-de-atuacao (hub)
areas-de-atuacao.direito-do-trabalho.tsx     → /areas-de-atuacao/direito-do-trabalho
areas-de-atuacao.direito-do-consumidor.tsx   → /areas-de-atuacao/direito-do-consumidor
areas-de-atuacao.direito-civil-e-familia.tsx → /areas-de-atuacao/direito-civil-e-familia
videos.tsx                                   → /videos
depoimentos.tsx                              → /depoimentos
contato.tsx                                  → /contato
```

Cada rota terá `head()` próprio com `title`, `description`, `og:title`, `og:description` em PT-BR.

## Componentes reutilizáveis (`src/components/site/`)

- `Header` — fixo, logo textual "GVS Advogados Associados", nav desktop, botão WhatsApp destacado (dourado), menu mobile via Sheet
- `Footer` — logo, texto institucional, links rápidos, redes sociais, contato, copyright
- `SectionTitle` — kicker + título serif + subtítulo
- `PageHero` — hero interno para páginas secundárias (breadcrumb + título)
- `AreaCard` — ícone Lucide, título, descrição, link
- `VideoCard` — thumbnail placeholder 16:9 com botão play, título, descrição
- `TestimonialCard` — aspas, texto, nome, área
- `CTASection` — faixa escura com CTA para contato/WhatsApp
- `ContactForm` — form estático (nome, e-mail, telefone, assunto, mensagem)
- `MapPlaceholder` — bloco cinza com marcador (sem embed real)
- `Reveal` — wrapper que aplica fade-in ao entrar no viewport

## Estrutura de cada página

**Início** — Hero, apresentação breve, 3 áreas em destaque, faixa de diferenciais (4 itens), depoimentos resumidos, CTA final.

**Quem Somos** — PageHero, missão/visão/valores (3 colunas), texto história, grid de equipe (4 cards placeholder), CTA.

**Áreas de Atuação (hub)** — PageHero, 3 AreaCards grandes linkando para as subpáginas.

**Subpágina de área (template)** — PageHero, "O que atuamos", grid de vídeos explicativos, lista "Casos comuns", CTA. Na de **Consumidor**, bloco extra "Vídeo destaque" (overbooking, cobranças indevidas, cias aéreas).

**Vídeos Institucionais** — PageHero, grid de VideoCards, CTA "acompanhe novos conteúdos".

**Depoimentos** — PageHero, grid de TestimonialCards com textos fictícios neutros.

**Contato** — PageHero, layout duas colunas: ContactForm + bloco com telefone/e-mail/WhatsApp/endereço/MapPlaceholder, CTA.

## Detalhes técnicos

- Tokens de cor em `src/styles.css` sob `@theme inline` em oklch; sem hex hardcoded em componentes
- Fontes carregadas via `links` no `head()` do `__root.tsx` (preconnect + stylesheet)
- Animação de scroll via um hook simples `useReveal` (IntersectionObserver) + classes utilitárias
- Menu mobile usando `Sheet` do shadcn
- Ícones `lucide-react`
- Zero dependências novas além das já instaladas
- Todos os textos claramente placeholders (ex.: "Breve texto institucional sobre o escritório...")
- Sem imagens geradas — blocos `bg-muted` com aspect-ratio prontos para você trocar

## O que NÃO farei nesta primeira entrega

- Não integro Lovable Cloud, não crio backend, não envio formulário
- Não gero fotos/imagens reais
- Não coloco endereço/telefone/e-mail reais
- Não faço SEO com URLs absolutas (uso caminhos relativos em `canonical`/`og:url`)

Depois de aprovado, implemento tudo de uma vez.
