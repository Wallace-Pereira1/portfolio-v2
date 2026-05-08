import { 
    Layers, 
    Layout, 
    Bot,
    BrainCircuit,
    Database,
    Terminal
  } from 'lucide-react';
  
  export const INFO = {
    name: "Wallace Pereira",
    title: "Software Engineer & Especialista em IA",
    education: "Bacharel em Ciência da Computação",
    location: "Rio de Janeiro, Brasil",
  };
  
  export const STACKS = [
    { name: "Linguagens", items: ["TypeScript", "Python", "C++", "Java"], icon: Terminal },
    { name: "Frontend", items: ["React", "Vite", "Tailwind CSS"], icon: Layout },
    { name: "Backend", items: ["Node.js", "Supabase", "PostgreSQL"], icon: Database },
    { name: "AI & Automation", items: ["n8n", "Make", "OpenAI", "Agents"], icon: Bot },
  ];

  export const PROJECTS = [
    {
      id: 'n8n-jewel-automation',
      title: 'Automação n8n para Joalheria',
      descriptionLong:
        'Pipeline completo de automação para atendimento e operação: captura de leads, qualificação, follow-up e atualizações em tempo real. Integração com APIs externas, normalização de dados, filas/retentativas e alertas. Redução de tempo operacional e aumento de previsibilidade no funil.',
      technologies: ['n8n', 'Node.js', 'APIs', 'Webhooks', 'PostgreSQL', 'RPA'],
      links: {
        github: 'https://github.com/',
        demo: 'https://example.com/',
      },
    },
    {
      id: 'supabase-integrator',
      title: 'Integrador Supabase (Auth + DB + Storage)',
      descriptionLong:
        'Template/infra para produtos fullstack com Supabase: autenticação, políticas RLS, CRUD tipado, storage e auditoria. Estrutura pronta para escalar com boas práticas de segurança, observabilidade e DX (TypeScript).',
      technologies: ['Supabase', 'PostgreSQL', 'TypeScript', 'RLS', 'React', 'Vite'],
      links: {
        github: 'https://github.com/',
        demo: 'https://example.com/',
      },
    },
    {
      id: 'ai-agent-workflows',
      title: 'Workflows de IA (Agents + Tooling)',
      descriptionLong:
        'Coleção de workflows de IA focados em produtividade: agentes com ferramentas, roteamento de prompts, automação de tarefas repetitivas e integrações com OpenAI/Claude/Gemini via APIs. Controle de custos, logs e fallback de modelos.',
      technologies: ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Node.js', 'Automation'],
      links: {
        github: 'https://github.com/',
        demo: 'https://example.com/',
      },
    },
    {
      id: 'fullstack-bento-portfolio',
      title: 'Portfólio Bento (Performance + UX)',
      descriptionLong:
        'SPA moderna construída com React + Vite, com foco em performance, micro-interações e apresentação premium do perfil. Layout Bento, animações fluidas, componentes reutilizáveis e dados centralizados para fácil manutenção.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
      links: {
        github: 'https://github.com/',
        demo: 'https://example.com/',
      },
    },
  ] as const
  
  export const BENTO_CARDS = [
    {
      id: "profile",
      title: "Sobre Mim",
      size: "lg", // Ocupará mais espaço
      type: "profile"
    },
    {
      id: "project-n8n",
      title: "Automação n8n",
      description: "Automação ponta a ponta com integrações, filas e alertas.",
      icon: BrainCircuit,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "n8n-jewel-automation"
    },
    {
      id: "project-supabase",
      title: "Integrador Supabase",
      description: "Auth, RLS, CRUD tipado e storage prontos para escalar.",
      icon: Database,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "supabase-integrator"
    },
    {
      id: "project-ai",
      title: "Workflows de IA",
      description: "Agents, tooling e automação com controle de custos.",
      icon: Bot,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "ai-agent-workflows"
    },
    {
      id: "project-portfolio",
      title: "Bento Portfolio",
      description: "Performance + UI/UX premium com micro-interações.",
      icon: Layers,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "fullstack-bento-portfolio"
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      size: "sm",
      type: "stack"
    }
  ];