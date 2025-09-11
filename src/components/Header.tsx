import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold gradient-text">Fluentli.ai</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">
              FAQ
            </a>
          </nav>

          {/* Login/Account Section */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="cta" size="sm" className="bg-cta-neon hover:bg-cta-neon/90 text-gray-900">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;