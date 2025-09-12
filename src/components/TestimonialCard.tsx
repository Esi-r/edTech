import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  name: string;
  country: string;
  countryEmoji: string;
  profileImage: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  content, 
  name, 
  country, 
  countryEmoji, 
  profileImage,
  className 
}) => {
  return (
    <div className={cn(
      "border border-white/20 rounded-xl p-6 hover:border-white/30 transition-all duration-300 group backdrop-blur-xl shadow-xl hover:shadow-2xl",
      className
    )}
    style={{
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }}>
      <div className="flex flex-col space-y-4">
        {/* Stars */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-accent text-accent"
            />
          ))}
        </div>
        
        {/* Content */}
        <blockquote className="text-foreground leading-relaxed">
          "{content}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center space-x-3 pt-2">
          <img 
            src={profileImage} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover border-2 border-accent/20"
          />
          <div>
            <div className="font-medium text-foreground">
              {name} {countryEmoji}
            </div>
            <div className="text-sm text-muted-foreground">
              {country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;