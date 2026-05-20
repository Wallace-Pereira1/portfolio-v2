import { 
  Layout, 
  Bot,
  Database,
  Terminal
} from 'lucide-react';

// Importações das imagens locais (Mantidas para referência, mas não usadas nos cards)
// import partnerImg from '../assets/partner-management-hub.png';
// import ocrImg from '../assets/invoice-ocr-ia.png';
// import sentinelImg from "../assets/fiscal-sentinel.png";
// import realEstateAIImg from "../assets/project-real-estate-ai.png";

export const INFO = {
  PT: {
    name: "Wallace Pereira",
    title: "Engenheiro de Software Fullstack",
    education: "Bacharel em Ciência da Computação",
    location: "Rio de Janeiro, Brasil",
    description: "Engenheiro de Software focado em transformar dados brutos em inteligência operacional. Especialista em arquiteturas escaláveis e automação de processos complexos com IA.",
    status: "Disponível para projetos",
    resume: "Ver Currículo",
  },
  EN: {
    name: "Wallace Pereira",
    title: "Fullstack Software Engineer",
    education: "Bachelor of Computer Science",
    location: "Rio de Janeiro, Brazil",
    description: "Software Engineer focused on transforming raw data into operational intelligence. Specialist in scalable architectures and automation of complex processes with AI.",
    status: "Available for projects",
    resume: "View Resume",
  }
};

export const STACKS = {
  PT: [
    { 
      name: "Linguagens", 
      items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "PHP"], 
      icon: Terminal 
    },
    { 
      name: "Frontend", 
      items: [ "Angular","React", "Vite","Vue", "Tailwind CSS", "Figma"],
      icon: Layout 
    },
    { 
      name: "Backend & Infra", 
      items: ["Node.js", "Supabase", "PostgreSQL", "SQL", "MySQL", "APIs"], 
      icon: Database 
    },
    { 
      name: "IA & Automação", 
      items: ["n8n", "Make", "Claude AI", "Gemini", "Agents", "Webhooks"], 
      icon: Bot 
    }
  ],
  EN: [
    { 
      name: "Languages", 
      items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "PHP"], 
      icon: Terminal 
    },
    { 
      name: "Frontend", 
      items: [ "Angular","React", "Vite","Vue", "Tailwind CSS", "Figma"],
      icon: Layout 
    },
    { 
      name: "Backend & Infra", 
      items: ["Node.js", "Supabase", "PostgreSQL", "SQL", "MySQL", "APIs"], 
      icon: Database 
    },
    { 
      name: "AI & Automation", 
      items: ["n8n", "Make", "Claude AI", "Gemini", "Agents", "Webhooks"], 
      icon: Bot 
    }
  ]
};

export const PROJECTS = {
  PT: [
    {
      id: 'partner-management-hub',
      title: 'Hub de Parceiros e Feed',
      descriptionLong:
        'Centralização de gestão de parceiros e feed social. Engenharia: Implementação de Service Layer Pattern em React/TypeScript para desacoplamento de lógica. Persistência de dados via Supabase (PostgreSQL) com segurança via Row-Level Security (RLS). Resultado: Redução de complexidade no componente principal e arquitetura escalável para novos módulos.',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Service Pattern'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/hub-parceiros',
        demo: 'https://hub-parceiros-zeta.vercel.app/',
      },
    },
    {
      id: 'real-estate-ai-agent',
      title: 'Agente de Vendas Imobiliário com IA',
      descriptionLong:
        'Automação inteligente para qualificação de leads imobiliários. Engenharia: Pipeline multimodal com processamento de áudio via Whisper, interpretação contextual utilizando LLMs da OpenAI e integração em tempo real com CRM imobiliário. Implementação de análise de sentimento para detecção de atrito e roteamento automatizado para atendimento humano. Resultado: Redução no tempo de qualificação, automação de agendamentos e aumento da eficiência operacional no funil comercial.',
      technologies: ['OpenAI', 'Whisper', 'n8n', 'CRM API', 'Sentiment Analysis', 'Automation'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'projeto-legado',
      title: 'Modernização de Sistema Legado',
      descriptionLong: 'Atuação na migração de um sistema corporativo antigo para arquitetura Angular (SPA). Desenvolvimento de componentes de UI, modais complexos e lógica de negócio em TypeScript.',
      technologies: ['Angular', 'TypeScript', 'Spring', 'Tailwind', 'Angular Material'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'invoice-ocr-ia',
      title: 'Leitor de Notas Fiscais',
      descriptionLong:
        'Extração inteligente de dados em documentos não estruturados. Engenharia: Pipeline de processamento utilizando Gemini 2.0 Flash e visão computacional. Conversão de documentos físicos/PDFs em JSON estruturado de alta fidelidade. Resultado: Otimização drástica no fluxo de entrada de dados, eliminando digitação manual com 99% de precisão.',
      technologies: ['Gemini 2.0 Flash', 'OCR', 'JSON', 'Automação', 'IA aplicada'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'fiscal-sentinel',
      title: 'Sentinela Fiscal',
      descriptionLong:
        'Monitoramento automatizado de obrigações fiscais e compliance. Engenharia: Scripts de validação contínua e integração de dados para auditoria em tempo real. Foco em integridade de dados e redução de falhas humanas operacionais. Resultado: Garantia de conformidade fiscal e automação de alertas de divergência.',
      technologies: ['TypeScript', 'Node.js', 'Automação', 'Data Integrity', 'Compliance'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/fiscal-sentinel',
      },
    },
    {
      id: 'bento-portfolio-v2',
      title: 'Portfólio Bento',
      descriptionLong: 'Esta SPA construída com Vite, Tailwind v4 e Framer Motion.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind v4', 'Framer Motion'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/portfolio-v2.git',
      },
    },
  ],
  EN: [
    {
      id: 'partner-management-hub',
      title: 'Partner Hub & Feed',
      descriptionLong:
        'Centralized partner management and social feed. Engineering: Implementation of Service Layer Pattern in React/TypeScript for logic decoupling. Data persistence via Supabase (PostgreSQL) with security through Row-Level Security (RLS). Result: Reduced complexity in the main component and scalable architecture for new modules.',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Service Pattern'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/hub-parceiros',
        demo: 'https://hub-parceiros-zeta.vercel.app/',
      },
    },
    {
      id: 'real-estate-ai-agent',
      title: 'AI Real Estate Sales Agent',
      descriptionLong:
        'Intelligent automation for real estate lead qualification. Engineering: Multimodal pipeline with audio processing via Whisper, contextual interpretation using OpenAI LLMs, and real-time integration with real estate CRM. Sentiment analysis implementation to detect friction and automated routing to human service. Result: Reduced qualification time, automated scheduling, and increased operational efficiency in the sales funnel.',
      technologies: ['OpenAI', 'Whisper', 'n8n', 'CRM API', 'Sentiment Analysis', 'Automation'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'projeto-legado',
      title: 'Legacy System Modernization',
      descriptionLong: 'Migration of an old corporate system to Angular architecture (SPA). Development of UI components, complex modals, and business logic in TypeScript.',
      technologies: ['Angular', 'TypeScript', 'Spring', 'Tailwind', 'Angular Material'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'invoice-ocr-ia',
      title: 'AI Invoice Reader',
      descriptionLong:
        'Intelligent data extraction from unstructured documents. Engineering: Processing pipeline using Gemini 2.0 Flash and computer vision. Conversion of physical documents/PDFs into high-fidelity structured JSON. Result: Drastic optimization in the data entry flow, eliminating manual typing with 99% accuracy.',
      technologies: ['Gemini 2.0 Flash', 'OCR', 'JSON', 'Automation', 'Applied AI'],
      links: {
        github: 'https://github.com/Wallace-Pereira1',
      },
    },
    {
      id: 'fiscal-sentinel',
      title: 'Fiscal Sentinel',
      descriptionLong:
        'Automated monitoring of tax obligations and compliance. Engineering: Continuous validation scripts and data integration for real-time auditing. Focus on data integrity and reduction of operational human errors. Result: Guarantee of tax compliance and automation of divergence alerts.',
      technologies: ['TypeScript', 'Node.js', 'Automation', 'Data Integrity', 'Compliance'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/fiscal-sentinel',
      },
    },
    {
      id: 'bento-portfolio-v2',
      title: 'Bento Portfolio',
      descriptionLong: 'This SPA built with Vite, Tailwind v4, and Framer Motion.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind v4', 'Framer Motion'],
      links: {
        github: 'https://github.com/Wallace-Pereira1/portfolio-v2.git',
      },
    },
  ]
};

export const BENTO_CARDS = {
  PT: [
    {
      id: "profile",
      title: "Sobre Mim",
      size: "lg",
      type: "profile"
    },
    {
      id: "project-solargrid",
      title: "Hub de Parceiros e Feed",
      description: "Hub de parceiros e feed social com Service Layer, Supabase e RLS.",
      icon: Layout,
      size: "md",
      tag: "Projeto",
      type: "project",
      projectId: "partner-management-hub"
    },
    {
      id: "project-real-estate-ai",
      title: "Agente de Vendas Imobiliário com IA",
      description: "Agente multimodal com OpenAI, Whisper e CRM para qualificação inteligente de leads.",
      icon: Bot,
      size: "md",
      tag: "Projeto Corporativo",
      type: "project",
      projectId: "real-estate-ai-agent"
    },
    {
      id: "project-fiscal",
      title: "Sentinela Fiscal",
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

  ],
  EN: [
    {
      id: "profile",
      title: "About Me",
      size: "lg",
      type: "profile"
    },
    {
      id: "project-solargrid",
      title: "Partner Hub & Feed",
      description: "Partner hub and social feed with Service Layer, Supabase, and RLS.",
      icon: Layout,
      size: "md",
      tag: "Project",
      type: "project",
      projectId: "partner-management-hub"
    },
    {
      id: "project-real-estate-ai",
      title: "AI Real Estate Sales Agent",
      description: "Multimodal agent with OpenAI, Whisper, and CRM for intelligent lead qualification.",
      icon: Bot,
      size: "md",
      tag: "Corporate Project",
      type: "project",
      projectId: "real-estate-ai-agent"
    },
    {
      id: "project-fiscal",
      title: "Fiscal Sentinel",
      description: "Continuous validation, real-time auditing, and divergence alerts.",
      icon: Database,
      size: "md",
      tag: "Project",
      type: "project",
      projectId: "fiscal-sentinel"
    },
    {
      id: "project-ocr",
      title: "Invoice Reader (AI)",
      description: "Gemini 2.0 Flash pipeline + vision: PDFs and receipts into structured JSON.",
      icon: Bot,
      size: "md",
      tag: "Project",
      type: "project",
      projectId: "invoice-ocr-ia"
    },

  ]
};

export const UI_TEXT = {
  PT: {
    tabs: {
      home: "Geral",
      projects: "Projetos",
      stacks: "Stacks"
    },
    header: {
      version: "Portfólio • v2.0"
    },
    projects: {
      tag: "Projeto"
    },
    stacks: {
      more: "tecnologias"
    }
  },
  EN: {
    tabs: {
      home: "General",
      projects: "Projects",
      stacks: "Stacks"
    },
    header: {
      version: "Portfolio • v2.0"
    },
    projects: {
      tag: "Project"
    },
    stacks: {
      more: "technologies"
    }
  }
};
