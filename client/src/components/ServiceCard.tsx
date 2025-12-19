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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group p-8 bg-white border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-6 bg-primary/5 rounded-none flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3 font-display">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider">Includes</p>
          <p className="text-sm text-foreground/80 mt-1 italic">{subtext}</p>
        </div>
      </div>
    </motion.div>
  );
}
