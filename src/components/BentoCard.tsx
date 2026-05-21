import type { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  tag?: string;
  className?: string;
  onClick?: () => void;
}

export function BentoCard({ title, subtitle, description, icon: Icon, tag, className, onClick }: BentoCardProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick()
            }
          : undefined
      }
      /* Removidos os conflitos de animação daqui para herdar o comportamento fluido e linear do App.tsx */
      className={`glass-card p-8 md:p-10 pb-12 md:pb-14 flex flex-col justify-between group ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${className}`}
    >
      <div>
        <div className="flex justify-between items-start">
          {Icon && (
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} />
            </div>
          )}
          {tag && (
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] opacity-70 font-bold border border-slate-200 dark:border-white/5 px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-gold-500 transition-colors duration-300">
            {title}
          </h3>
          {subtitle && <p className="text-gold-500/80 text-sm font-medium mt-1">{subtitle}</p>}
          {description && <p className="text-[var(--text-secondary)] opacity-90 text-sm mt-2 leading-relaxed">{description}</p>}
        </div>
      </div>
    </div>
  );
}