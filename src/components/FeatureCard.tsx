import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "glass border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group hover:shadow-glow",
      className
    )}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-lg bg-gradient-primary p-3 group-hover:animate-float">
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold font-inter gradient-text">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;