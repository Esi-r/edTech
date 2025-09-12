import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/10 border-b border-white/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/10">
      <div className="container mx-auto px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">Fluentli.ai</span>
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors px-2 sm:px-3">
              <LogIn className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
            <Button variant="cta" size="sm" className="bg-cta-neon hover:bg-cta-neon/90 text-gray-900 px-3 sm:px-4 text-xs sm:text-sm">
              <span className="hidden sm:inline">Start Your Free Trial</span>
              <span className="sm:hidden">Try Free</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;