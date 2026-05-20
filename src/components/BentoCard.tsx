import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 28px 90px rgba(225, 177, 44, 0.10)',
      }}
      whileTap={onClick ? { scale: 0.985 } : undefined}
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
      className={`glass-card p-8 md:p-10 pb-12 md:pb-14 flex flex-col justify-between group transition-colors hover:bg-white/10 ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
    >
      <div>
        <div className="flex justify-between items-start">
          {Icon && (
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 group-hover:scale-110 transition-transform">
              <Icon size={24} />
            </div>
          )}
          {tag && (
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border border-white/5 px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">
            {title}
          </h3>
          {subtitle && <p className="text-gold-500/80 text-sm font-medium mt-1">{subtitle}</p>}
          {description && <p className="text-slate-200/80 text-sm mt-2 leading-relaxed">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
}