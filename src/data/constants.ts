import { 
    Layers, 
    Layout, 
    Bot,
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
      id: 'partner-management-hub',
      title: 'Partner Management Hub & Social Feed',
      descriptionLong:
        'Contexto: Centralização de gestão de parceiros e feed social. Engenharia: Implementação de Service Layer Pattern em React/TypeScript para desacoplamento de lógica. Persistência de dados via Supabase (PostgreSQL) com segurança via Row-Level Security (RLS). Resultado: Redução de complexidade no componente principal e arquitetura escalável para novos módulos.',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Service Pattern'],
      imageUrl: 'https://picsum.photos/seed/partnerhub/1280/720',
      links: {
        github: 'https://github.com/Wallace-Pereira1/solargrid-app.git',
      },
    },
    {
      id: 'fiscal-sentinel',
      title: 'Fiscal Sentinel',
      descriptionLong:
        'Contexto: Monitoramento automatizado de obrigações fiscais e compliance. Engenharia: Scripts de validação contínua e integração de dados para auditoria em tempo real. Foco em integridade de dados e redução de falhas humanas operacionais. Resultado: Garantia de conformidade fiscal e automação de alertas de divergência.',
      technologies: ['TypeScript', 'Node.js', 'Automação', 'Data Integrity', 'Compliance'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/fiscal-sentinel',
      },
    },
    {
      id: 'invoice-ocr-ia',
      title: 'Leitor de Notas (IA)',
      descriptionLong:
        'Contexto: Extração inteligente de dados em documentos não estruturados. Engenharia: Pipeline de processamento utilizando Gemini 2.0 Flash e visão computacional. Conversão de documentos físicos/PDFs em JSON estruturado de alta fidelidade. Resultado: Otimização drástica no fluxo de entrada de dados, eliminando digitação manual com 99% de precisão.',
      technologies: ['Gemini 2.0 Flash', 'OCR', 'JSON', 'Automação', 'IA aplicada'],
      imageUrl: 'https://picsum.photos/seed/ocr/1280/720',
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'quality-analysis',
      title: 'Quality Analysis',
      descriptionLong:
        'Contexto: Controle de qualidade e padronização de processos industriais/operacionais. Engenharia: Interface para análise de métricas e conformidade técnica. Foco em padronização de fluxos de trabalho e monitoramento de KPIs de qualidade. Resultado: Melhoria na eficiência operacional e garantia de que os processos sigam normas técnicas rigorosas.',
      technologies: ['Python', 'Análise de Dados', 'Qualidade', 'Compliance', 'Relatórios'],
      imageUrl: 'https://picsum.photos/seed/quality/1280/720',
      links: {
        github: 'https://github.com/Wallace-Pereira1/process-quality-analysis-bakery',
      },
    },
    {
      id: 'bento-portfolio-v2',
      title: 'Bento Portfolio v2',
      descriptionLong: 'Esta SPA construída com Vite, Tailwind v4 e Framer Motion.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind v4', 'Framer Motion'],
      imageUrl: 'https://picsum.photos/seed/bento/1280/720',
      links: {
        github: 'https://github.com/Wallace-Pereira1/portfolio-v2.git',
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
      id: "project-solargrid",
      title: "Partner Management Hub & Social Feed",
      description: "Hub de parceiros e feed social com Service Layer, Supabase e RLS.",
      icon: Layout,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "partner-management-hub"
    },
    {
      id: "project-fiscal",
      title: "Fiscal Sentinel",
      description: "Validação contínua, auditoria em tempo real e alertas de divergência.",
      icon: Database,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "fiscal-sentinel"
    },
    {
      id: "project-ocr",
      title: "Leitor de Notas (IA)",
      description: "Pipeline Gemini 2.0 Flash + visão: PDFs e recibos em JSON estruturado.",
      icon: Bot,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "invoice-ocr-ia"
    },
    {
      id: "project-quality",
      title: "Quality Analysis",
      description: "Métricas, KPIs de qualidade e conformidade em processos operacionais.",
      icon: Layers,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "quality-analysis"
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      size: "sm",
      type: "stack"
    }
  ];