import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  subtext: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, subtext, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group p-8 bg-white border border-border/60 hover:border-border hover:shadow-lg transition-all duration-500 relative"
    >
      <div className="relative z-10">
        <div className="w-10 h-10 mb-6 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-lg font-semibold text-primary mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>
        
        <div className="pt-4 border-t border-border/40">
          <p className="text-xs text-muted-foreground/70 tracking-wide">{subtext}</p>
        </div>
      </div>
    </motion.div>
  );
}
