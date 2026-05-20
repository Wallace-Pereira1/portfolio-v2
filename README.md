<div align="center">

# 🗂️ Portfólio v2 — Wallace Pereira

**SPA de portfólio pessoal com layout Bento Grid, glassmorphism e animações fluidas**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-E10079?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)

[🌐 Ver ao vivo](https://wallace-pereira1.github.io) · [📂 Repositório](https://github.com/Wallace-Pereira1/portfolio-v2)

</div>

---

## 📸 Visão Geral

Portfólio pessoal, Fullstack Software Engineer especializado em automação inteligente e arquiteturas escaláveis com IA. A interface foi construída com um layout **Bento Grid** responsivo, estética de **glassmorphism** e transições animadas via Framer Motion — entregando uma experiência visual moderna e performática.

---

## ✨ Funcionalidades

- **Bento Grid adaptativo** — cards de tamanhos variados (lg, md, sm) reposicionados de forma fluida entre mobile e desktop
- **Três abas de navegação** — Geral (Bento), Projetos (galeria completa) e Stacks (mapa de tecnologias)
- **Modal de projetos** — detalhamento completo com tecnologias, descrição técnica e links
- **Modal de currículo** — visualização do CV em PDF diretamente na página
- **Glassmorphism com GPU layer** — superfícies com `backdrop-filter: blur`, `isolation: isolate` e `-webkit-backdrop-filter` para compatibilidade cross-browser
- **Animações de entrada** — `whileInView` com `once: true` para revelação progressiva dos cards
- **Status de disponibilidade** — indicador animado (ping) em tempo real
- **Links sociais integrados** — GitHub, LinkedIn e e-mail direto no card de perfil
- **Ícones coloridos por tecnologia** — mapeamento visual de toda a stack via `react-icons` e `lucide-react`
- **Design totalmente responsivo** — mobile-first, verificado de 375px a 2560px

---

## 🛠️ Stack Tecnológica

### Frontend & UI

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Componentes e gerenciamento de estado |
| TypeScript | 6.0 | Tipagem estática e segurança de código |
| Tailwind CSS | 4.0 | Utilitários de estilo com `@theme` personalizado |
| Framer Motion | 12 | Animações declarativas e transições de layout |
| Lucide React | 1.14 | Ícones de interface |
| React Icons | 5.6 | Ícones coloridos de tecnologias (SI, FA) |

### Build & Ferramentas

| Tecnologia | Versão | Uso |
|---|---|---|
| Vite | 8.0 | Build tool e dev server com HMR |
| TypeScript ESLint | 8.58 | Linting e qualidade de código |
| Sharp + png-to-ico | — | Geração de favicon via script |
| PostCSS + Autoprefixer | — | Processamento de CSS cross-browser |

### Utilitários

- **`clsx`** + **`tailwind-merge`** — composição segura de classes condicionais
- **`@tailwindcss/vite`** — integração nativa do Tailwind v4 com Vite

---

## 🗂️ Estrutura do Projeto

```
portfolio-v2/
├── public/
│   └── curriculo_fullstack_ia_wallace.pdf   # Currículo em PDF
├── scripts/
│   └── generate-favicon.mjs                # Script de geração de favicon
├── src/
│   ├── assets/                             # Imagens dos projetos e foto de perfil
│   │   ├── me.jpg
│   │   ├── fiscal-sentinel.png
│   │   ├── invoice-ocr-ia.png
│   │   ├── partner-management-hub.png
│   │   └── project-real-estate-ai.png
│   ├── components/
│   │   ├── BentoCard.tsx                   # Card reutilizável com animações Framer Motion
│   │   ├── ProjectModal.tsx                # Modal de detalhes do projeto
│   │   └── ResumeModal.tsx                 # Modal de visualização do currículo
│   ├── data/
│   │   └── constants.ts                    # Dados centralizados: INFO, PROJECTS, STACKS, BENTO_CARDS
│   ├── App.tsx                             # Componente raiz, lógica de abas e estado global
│   ├── App.css                             # Estilos utilitários e componentes de layout
│   ├── index.css                           # Tokens de design, Tailwind @theme e @layer components
│   └── main.tsx                            # Entry point React
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.app.json
└── package.json
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (ou `pnpm` / `yarn`)

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/Wallace-Pereira1/portfolio-v2.git
cd portfolio-v2

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5173`.

### Outros comandos

```bash
# Build de produção (TypeScript + Vite)
npm run build

# Preview do build gerado
npm run preview

# Linting do código
npm run lint

# Geração do favicon
npm run favicon
```

---

## 🎨 Design System

O projeto utiliza um sistema de design proprietário definido em `src/index.css` via Tailwind v4 `@theme`:

```css
@theme {
  --color-navy-900: #050a15;   /* Background principal */
  --color-navy-800: #0a1224;   /* Superfícies secundárias */
  --color-gold-500: #e1b12c;   /* Cor de destaque (accent) */
  --radius-xl: 1rem;
  --shadow-glass: 0 24px 60px rgba(0, 0, 0, 0.45);
}
```

### Classes utilitárias customizadas

| Classe | Descrição |
|---|---|
| `.glass-card` | Superfície glassmorphism com `backdrop-filter: blur(12px)`, `overflow: hidden` e `isolation: isolate` |
| `.glass-surface` | Variante mais translúcida para modais e sobreposições |
| `.glass-border` | Borda sutil `rgba(255,255,255,0.12)` |
| `.focus-ring` | Anel de foco acessível com dupla sombra dourada |

> **Nota de compatibilidade:** Para evitar vazamento de conteúdo em Chrome e Opera, `.glass-card` inclui `-webkit-backdrop-filter`, `overflow: hidden`, `isolation: isolate` e `will-change: transform`, forçando uma GPU layer isolada.

---

## 📦 Projetos em Destaque

Os projetos exibidos no portfólio são gerenciados centralmente em `src/data/constants.ts`:

| Projeto | Tecnologias | Descrição |
|---|---|---|
| **Hub de Parceiros e Feed** | React, TypeScript, Supabase, PostgreSQL, RLS | Service Layer Pattern com segurança via Row-Level Security |
| **Agente de Vendas Imobiliário IA** | OpenAI, Whisper, n8n, CRM API | Pipeline multimodal com qualificação de leads e análise de sentimento |
| **Leitor de Notas Fiscais** | Gemini 2.0 Flash, OCR, JSON | Conversão de PDFs/documentos físicos em JSON estruturado com 99% de precisão |
| **Sentinela Fiscal** | TypeScript, Node.js, Automação | Monitoramento contínuo de compliance fiscal com alertas de divergência |
| **Modernização de Sistema Legado** | Angular, TypeScript, Spring, Tailwind | Migração de sistema corporativo para SPA Angular |
| **Portfólio Bento (este projeto)** | React, Vite, Tailwind v4, Framer Motion | Esta SPA |

---

## 🔧 Adicionando Novos Projetos

Para incluir um novo projeto no portfólio, edite `src/data/constants.ts`:

```typescript
// 1. Adicione o projeto no array PROJECTS
export const PROJECTS = [
  {
    id: 'meu-novo-projeto',
    title: 'Nome do Projeto',
    descriptionLong: 'Descrição técnica detalhada...',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: minhaImagem, // import do asset local
    links: {
      github: 'https://github.com/Wallace-Pereira1/meu-projeto',
    },
  },
  // ...projetos existentes
];

// 2. Opcionalmente, adicione um card no Bento Grid (BENTO_CARDS)
export const BENTO_CARDS = [
  {
    id: 'meu-novo-projeto-card',
    title: 'Nome do Projeto',
    description: 'Descrição curta para o card.',
    icon: FolderGit2,
    size: 'md',
    tag: 'Projeto',
    type: 'project',
    projectId: 'meu-novo-projeto',
  },
  // ...cards existentes
];
```

---

## 📄 Licença

Este projeto é de uso pessoal. O código-fonte está disponível publicamente para fins de referência e aprendizado.

---

<div align="center">

Feito com ☕ por **Wallace Pereira** — Rio de Janeiro, Brasil

[![GitHub](https://img.shields.io/badge/GitHub-Wallace--Pereira1-181717?style=flat-square&logo=github)](https://github.com/Wallace-Pereira1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-wallacepereira--in-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/wallacepereira-in/)
[![Email](https://img.shields.io/badge/Email-wallacepereira%40proton.me-6D4AFF?style=flat-square&logo=protonmail&logoColor=white)](mailto:wallacepereira@proton.me)

</div>
