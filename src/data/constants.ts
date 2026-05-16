import { 
  Layout, 
  Bot,
  Database,
  Terminal
} from 'lucide-react';

// Importações das imagens locais
import partnerImg from '../assets/partner-management-hub.png';
import ocrImg from '../assets/invoice-ocr-ia.png';
import sentinelImg from "../assets/fiscal-sentinel.png";
import realEstateAIImg from "../assets/project-real-estate-ai.png";

export const INFO = {
  name: "Wallace Pereira",
  title: "Fullstack Software Engineer",
  education: "Bacharel em Ciência da Computação",
  location: "Rio de Janeiro, Brasil",
};

export const STACKS = [
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
    name: "AI & Automation", 
    items: ["n8n", "Make", "Claude AI", "Gemini", "Agents", "Webhooks"], 
    icon: Bot 
  }
];

export const PROJECTS = [
  {
    id: 'partner-management-hub',
    title: 'Partner Management Hub & Social Feed',
    descriptionLong:
      'Centralização de gestão de parceiros e feed social. Engenharia: Implementação de Service Layer Pattern em React/TypeScript para desacoplamento de lógica. Persistência de dados via Supabase (PostgreSQL) com segurança via Row-Level Security (RLS). Resultado: Redução de complexidade no componente principal e arquitetura escalável para novos módulos.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Service Pattern'],
    imageUrl: partnerImg,
    links: {
      github: 'https://github.com/Wallace-Pereira1/solargrid-app.git',
    },
  },
  {
    id: 'real-estate-ai-agent',
    title: 'AI Real Estate Sales Agent',
    descriptionLong:
      'Automação inteligente para qualificação de leads imobiliários. Engenharia: Pipeline multimodal com processamento de áudio via Whisper, interpretação contextual utilizando LLMs da OpenAI e integração em tempo real com CRM imobiliário. Implementação de análise de sentimento para detecção de atrito e roteamento automatizado para atendimento humano. Resultado: Redução no tempo de qualificação, automação de agendamentos e aumento da eficiência operacional no funil comercial.',
    technologies: ['OpenAI', 'Whisper', 'n8n', 'CRM API', 'Sentiment Analysis', 'Automation'],
    imageUrl: realEstateAIImg,
    links: {
      github: 'https://github.com/Wallace-Pereira1',
    },
  },
  {
    id: 'projeto-legado',
    title: 'Modernização de Sistema Legado',
    descriptionLong: 'Atuação na migração de um sistema corporativo antigo para arquitetura Angular (SPA). Desenvolvimento de componentes de UI, modais complexos e lógica de negócio em TypeScript.',
    technologies: ['Angular', 'TypeScript', 'Spring', 'Tailwind', 'Angular Material'],
    imageUrl: 'https://picsum.photos/seed/bento/1280/720',
    links: {
      github: 'https://github.com/Wallace-Pereira1',
    },
  },
  {
    id: 'invoice-ocr-ia',
    title: 'Leitor de Notas (IA)',
    descriptionLong:
    'Extração inteligente de dados em documentos não estruturados. Engenharia: Pipeline de processamento utilizando Gemini 2.0 Flash e visão computacional. Conversão de documentos físicos/PDFs em JSON estruturado de alta fidelidade. Resultado: Otimização drástica no fluxo de entrada de dados, eliminando digitação manual com 99% de precisão.',
    technologies: ['Gemini 2.0 Flash', 'OCR', 'JSON', 'Automação', 'IA aplicada'],
    imageUrl: ocrImg, // Imagem local atualizada
    links: {
      github: 'https://github.com/Wallace-Pereira1',
    },
  },
  {
    id: 'fiscal-sentinel',
    title: 'Fiscal Sentinel',
    descriptionLong:
      'Monitoramento automatizado de obrigações fiscais e compliance. Engenharia: Scripts de validação contínua e integração de dados para auditoria em tempo real. Foco em integridade de dados e redução de falhas humanas operacionais. Resultado: Garantia de conformidade fiscal e automação de alertas de divergência.',
    technologies: ['TypeScript', 'Node.js', 'Automação', 'Data Integrity', 'Compliance'],
    // Mantido Picsum até você gerar esta imagem específica
    imageUrl: sentinelImg,
    links: {
      github: 'https://github.com/Wallace-Pereira1/fiscal-sentinel',
    },
  },
  {
    id: 'bento-portfolio-v2',
    title: 'Bento Portfolio',
    descriptionLong: 'Esta SPA construída com Vite, Tailwind v4 e Framer Motion.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind v4', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/bento/1280/720',
    links: {
      github: 'https://github.com/Wallace-Pereira1/portfolio-v2.git',
    },
  },
] as const;

export const BENTO_CARDS = [
  {
    id: "profile",
    title: "Sobre Mim",
    size: "lg",
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
    id: "project-real-estate-ai",
    title: "AI Real Estate Sales Agent",
    description: "Agente multimodal com OpenAI, Whisper e CRM para qualificação inteligente de leads.",
    icon: Bot,
    size: "md",
    tag: "Projeto Corporativo",
    type: "project",
    projectId: "real-estate-ai-agent"
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
    id: "tech-stack",
    title: "Tech Stack",
    size: "sm",
    type: "stack"
  }
];