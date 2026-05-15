import { useMemo, useState } from 'react'
import { BentoCard } from './components/BentoCard'
import { ProjectModal } from './components/ProjectModal'
import { ResumeModal } from './components/ResumeModal' // Importe o novo componente
import { BENTO_CARDS, INFO, PROJECTS, STACKS } from './data/constants'
import { FileText, Grid, FolderGit2, Layers, Mail } from 'lucide-react'
import meImg from './assets/me.jpg'
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiPhp,
  SiAngular, SiReact, SiVite, SiVuedotjs, SiTailwindcss, SiFigma,
  SiNodedotjs, SiSupabase, SiPostgresql, SiMysql
} from 'react-icons/si'
import { FaJava, FaDatabase, FaCogs, FaRobot, FaNetworkWired, FaProjectDiagram } from 'react-icons/fa'

// Mapeia os ícones coloridos baseados no nome da Stack
function StackIcon({ name }: { name: string }) {
  const getIcon = () => {
    switch (name) {
      case 'TypeScript': return <SiTypescript color="#3178C6" />;
      case 'JavaScript': return <SiJavascript color="#F7DF1E" />;
      case 'Python': return <SiPython color="#3776AB" />;
      case 'C++': return <SiCplusplus color="#00599C" />;
      case 'Java': return <FaJava color="#007396" />;
      case 'PHP': return <SiPhp color="#777BB4" />;
      case 'Angular': return <SiAngular color="#DD0031" />;
      case 'React': return <SiReact color="#61DAFB" />;
      case 'Vite': return <SiVite color="#646CFF" />;
      case 'Vue': return <SiVuedotjs color="#4FC08D" />;
      case 'Tailwind CSS': return <SiTailwindcss color="#06B6D4" />;
      case 'Figma': return <SiFigma color="#F24E1E" />;
      case 'Node.js': return <SiNodedotjs color="#339933" />;
      case 'Supabase': return <SiSupabase color="#3ECF8E" />;
      case 'PostgreSQL': return <SiPostgresql color="#4169E1" />;
      case 'SQL': return <FaDatabase color="#003B57" />;
      case 'MySQL': return <SiMysql color="#4479A1" />;
      case 'APIs': return <FaNetworkWired color="#00599C" />;
      case 'n8n': return <FaProjectDiagram color="#FF6D5A" />;
      case 'Make': return <FaCogs color="#5B12BA" />;
      case 'Claude AI': return <FaRobot color="#D4A373" />;
      case 'Gemini': return <FaRobot color="#1E88E5" />;
      case 'Agents': return <FaRobot color="#A020F0" />;
      case 'Webhooks': return <FaNetworkWired color="#FF8C00" />;
      default: return null;
    }
  };
  const icon = getIcon();
  return icon ? <span className="text-[16px]">{icon}</span> : null;
}

// Ícones SVG mantidos conforme seu código
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.72.75 12.23c0 5.2 3.44 9.6 8.2 11.15.6.12.82-.27.82-.58 0-.29-.01-1.06-.02-2.07-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.28 1.84 1.28 1.07 1.9 2.8 1.35 3.49 1.03.11-.8.42-1.35.76-1.66-2.66-.32-5.46-1.38-5.46-6.12 0-1.35.46-2.45 1.23-3.31-.12-.32-.53-1.6.12-3.34 0 0 1-.33 3.3 1.26a11 11 0 0 1 6 0c2.3-1.6 3.3-1.26 3.3-1.26.65 1.74.24 3.02.12 3.34.77.86 1.23 1.96 1.23 3.31 0 4.75-2.8 5.8-5.48 6.11.43.4.81 1.17.81 2.36 0 1.7-.02 3.08-.02 3.5 0 .32.21.7.83.58 4.75-1.55 8.18-5.95 8.18-11.15C23.25 5.72 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.08.86 1.98 1.94 1.98h.02c1.12 0 1.98-.9 1.98-1.98C6.94 4.38 6.1 3.5 4.98 3.5zM3.5 21h3V8.98h-3V21zM9 8.98V21h3v-6.65c0-1.78.34-3.12 2.2-3.12 1.84 0 1.86 1.72 1.86 3.23V21h3v-7.16c0-3.52-.75-6.22-4.86-6.22-1.97 0-3.29 1.08-3.83 2.1h-.04V8.98H9z" />
    </svg>
  )
}

type Tab = 'home' | 'projects' | 'stacks';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false) // Estado para o Currículo
  const [currentTab, setCurrentTab] = useState<Tab>('home') // Estado de abas

  const selectedProject = useMemo(
    () => PROJECTS.find((p) => p.id === selectedProjectId) ?? null,
    [selectedProjectId],
  )

  return (
    <main className="min-h-screen bg-navy-900 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <header className="flex flex-col items-start gap-3">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-500/80">
            Portfólio • v2.0
          </p>
          <div className="flex flex-row items-center">
            <img
              src={meImg}
              alt={`Foto de ${INFO.name}`}
              className="mr-4 md:mr-6 w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold-500/50 object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                {INFO.name}
              </h1>
              <p className="text-gold-500/90 font-medium leading-tight">{INFO.title}</p>
            </div>
          </div>
          <p className="text-slate-200/80 max-w-2xl">
            {INFO.education} • {INFO.location}
          </p>
        </header>

        {/* Barra de Navegação */}
        <nav className="mt-10 flex flex-wrap items-center gap-2 p-1.5 bg-white/5 rounded-full border border-white/10 w-fit">
          <button
            onClick={() => setCurrentTab('home')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              currentTab === 'home' ? 'bg-gold-500/20 text-gold-500' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Grid size={16} />
            Visão Geral
          </button>
          <button
            onClick={() => setCurrentTab('projects')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              currentTab === 'projects' ? 'bg-gold-500/20 text-gold-500' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <FolderGit2 size={16} />
            Todos os Projetos
          </button>
          <button
            onClick={() => setCurrentTab('stacks')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              currentTab === 'stacks' ? 'bg-gold-500/20 text-gold-500' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Layers size={16} />
            Minhas Stacks
          </button>
        </nav>

        {/* PÁGINA: VISÃO GERAL (HOME) */}
        {currentTab === 'home' && (
          <section className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto lg:auto-rows-[180px]">
          {BENTO_CARDS.filter(card => card.type !== 'stack').map((card) => {
            // ... (logica de colSpan mantida)
            const colSpan =
              card.size === 'lg'
                ? 'col-span-1 md:col-span-7 lg:col-span-7 md:row-span-2 lg:row-span-2'
                : card.id === 'project-solargrid'
                  ? 'col-span-1 md:col-span-5 lg:col-span-5'
                  : card.id === 'project-fiscal'
                    ? 'col-span-1 md:col-span-6 lg:col-span-5'
                    : card.id === 'project-ocr' || card.id === 'project-real-estate-ai'
                      ? 'col-span-1 md:col-span-6 lg:col-span-6'
                      : 'col-span-1 md:col-span-6 lg:col-span-5'

            if (card.type === 'profile') {
              return (
                <div key={card.id} className={`${colSpan}`}>
                  <div className="glass-card h-full p-8 md:p-10 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-500/80">
                        {card.title}
                      </p>
                      <p className="text-slate-200/85 text-base md:text-lg leading-relaxed max-w-xl">
                        Engenheiro de Software focado em transformar dados brutos em inteligência operacional.
                        Especialista em arquiteturas escaláveis e automação de processos complexos com IA.
                      </p>

                      <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-200/70">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" />
                          Fluxos de IA Autônomos
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" />
                          Fullstack Developer
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" />
                          Especialista em Automação
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
                      >
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                        Disponível para projetos
                      </button>

                      <div className="flex items-center gap-2">
                        {/* Botão Currículo */}
                        <button
                          onClick={() => setIsResumeOpen(true)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all hover:bg-white/10 hover:border-white/20 hover:text-gold-500"
                          aria-label="Ver Currículo"
                          title="Ver Currículo"
                        >
                          <FileText size={18} />
                        </button>

                        {/* Botão E-mail */}
                        <a
                          href="mailto:wallacepereira@proton.me"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all hover:bg-white/10 hover:border-white/20 hover:text-gold-500"
                          aria-label="Email"
                          title="Email"
                        >
                          <Mail size={18} />
                        </a>

                        <a
                          href="https://github.com/Wallace-Pereira1"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
                          aria-label="GitHub"
                          title="GitHub"
                        >
                          <GitHubIcon size={18} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/wallacepereira-in/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all hover:bg-white/10 hover:border-white/20"
                          aria-label="LinkedIn"
                          title="LinkedIn"
                        >
                          <LinkedInIcon size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div key={card.id} className={colSpan}>
                <BentoCard
                  title={card.title}
                  subtitle={'subtitle' in card && typeof card.subtitle === 'string' ? card.subtitle : undefined}
                  description={'description' in card && typeof card.description === 'string' ? card.description : undefined}
                  icon={'icon' in card ? card.icon : undefined}
                  tag={'tag' in card && typeof card.tag === 'string' ? card.tag : undefined}
                  className="h-full"
                  onClick={
                    card.type === 'project' && 'projectId' in card
                      ? () => {
                          if (typeof card.projectId === 'string') setSelectedProjectId(card.projectId)
                        }
                      : undefined
                  }
                />
              </div>
            )
          })}
        </section>
      )}

      {/* PÁGINA: TODOS OS PROJETOS */}
      {currentTab === 'projects' && (
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="col-span-1">
              <BentoCard
                title={project.title}
                description={
                  project.descriptionLong.length > 120
                    ? project.descriptionLong.substring(0, 120) + '...'
                    : project.descriptionLong
                }
                tag="Projeto"
                icon={FolderGit2}
                className="h-full min-h-[220px] cursor-pointer hover:border-gold-500/50 transition-colors"
                onClick={() => setSelectedProjectId(project.id)}
              />
            </div>
          ))}
        </section>
      )}

      {/* PÁGINA: MINHAS STACKS */}
      {currentTab === 'stacks' && (
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACKS.map((group) => (
            <div key={group.name} className="glass-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-gold-500 border-b border-white/10 pb-4">
                <group.icon size={28} />
                <h2 className="text-xl font-bold tracking-wider uppercase">{group.name}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-200 hover:border-gold-500/50 hover:bg-gold-500/10 transition-colors cursor-default">
                    <StackIcon name={item} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
      </div>

      <ProjectModal
        open={selectedProjectId !== null}
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* NOVO MODAL DO CURRÍCULO */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl="/curriculo_fullstack_ia_wallace.pdf"
      />
    </main>
  )
}