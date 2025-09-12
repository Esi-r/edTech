import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gif?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gif, className }) => {
  return (
    <div className={cn(
      "glass border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group hover:shadow-glow",
      gif && "pb-8", // Extra padding when gif is present
      className
    )}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 rounded-lg bg-gradient-primary p-4 group-hover:animate-float">
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
        <h3 className="text-xl font-semibold font-inter gradient-text">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        {gif && (
          <div className="mt-6 w-full max-w-sm mx-auto">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg">
              <img
                src={gif}
                alt={`${title} demo`}
                className="w-full h-auto object-cover animate-pulse-subtle"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;