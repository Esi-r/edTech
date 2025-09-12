import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, X, Check, GraduationCap, Building2 } from "lucide-react";
import Header from "./Header";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";
import AIDemo from "./AIDemo";
import FAQ from "./FAQ";

// Import generated images
import heroBg from "@/assets/hero-bg.jpg";
import heroVideoBg from "@/assets/hero-video-bg.jpg";
import fatima from "@/assets/testimonial-fatima.jpg";
import hassan from "@/assets/testimonial-hassan.jpg";

// Import 3D icons
import microphoneIcon3D from "@/assets/icon-microphone-3d.png";
import writingIcon3D from "@/assets/icon-writing-3d.png";
import gameIcon3D from "@/assets/icon-game-3d.png";

// Import animated demo mockups
import speakingPracticeGif from "@/assets/gif-speaking-practice.png";
import writingPracticeGif from "@/assets/gif-writing-practice.png";
import gameQuizGif from "@/assets/gif-game-quiz.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg-animated pt-20 pb-16">
        {/* Dynamic Video-Style Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-gradient"
          style={{ 
            backgroundImage: `url(${heroVideoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        {/* Enhanced Background Elements */}
        <div className="floating-orb w-24 h-24 bg-gradient-primary/40 top-1/4 right-16 animate-pulse-glow" style={{ animationDelay: "0s" }} />
        <div className="floating-orb w-20 h-20 bg-gradient-accent/30 bottom-1/3 left-20 animate-pulse-glow" style={{ animationDelay: "3s" }} />
        <div className="floating-orb w-16 h-16 bg-neon-green/20 top-1/2 right-1/3 animate-pulse-glow" style={{ animationDelay: "6s" }} />
        <div className="pulsing-brain w-40 h-40 bg-gradient-primary/15 rounded-full animate-pulse-glow" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-inter animate-in fade-in duration-1000">
              <span className="text-white">Ace IELTS. </span>
              <span className="text-neon-green">Unlock Your World.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-3xl mx-auto animate-in fade-in duration-1000 delay-200">
              The smart, fun AI tutor that adapts to you. Stop guessing, start improving.
            </p>
          </div>

          
          {/* AI Demo Section */}
          <div className="animate-in fade-in duration-1000 delay-500">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Can our AI improve your writing in 15 seconds?
                </h2>
              </div>
              
              {/* Glassmorphism AI Demo Container */}
              <div className="border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-md bg-white/5 supports-[backdrop-filter]:bg-white/5 shadow-2xl">
                <AIDemo />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Problem/Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16 gradient-text">
            The IELTS Grind is Over.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass border border-red-500/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">The Old Way</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <span>Boring Textbooks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <span>Expensive Tutors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <span>Vague Feedback</span>
                </div>
              </div>
            </div>
            
            <div className="glass border border-accent/30 rounded-xl p-8 text-center relative overflow-hidden animate-pulse-glow shadow-[0_0_40px_rgba(79,70,229,0.3),0_0_60px_rgba(124,58,237,0.2)] hover:shadow-[0_0_50px_rgba(79,70,229,0.4),0_0_80px_rgba(124,58,237,0.3)] transition-all duration-1000">
              <h3 className="text-2xl font-semibold mb-6 text-accent">The Fluentli.ai Way</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <span>Fun, Daily AI Tasks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <span>Your 24/7 AI Tutor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <span>Instant, Clear Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-20 gradient-text">
            Your Personal AI Genie, Unbottled.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <FeatureCard
              icon={microphoneIcon3D}
              title="Speak with Confidence"
              description="Practice with our AI 24/7. It analyzes your pronunciation, fluency, and vocabulary with zero judgment."
              gif={speakingPracticeGif}
            />
            <FeatureCard
              icon={writingIcon3D}
              title="Write Perfect Essays"
              description="Our AI checks your writing for grammar, structure, and vocabulary, giving you a detailed report in seconds."
              gif={writingPracticeGif}
            />
            <FeatureCard
              icon={gameIcon3D}
              title="Learn Like You Play"
              description="Level up your skills with fun, adaptive tasks. Always challenging, never boring."
              gif={gameQuizGif}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16 gradient-text">
            From Lagos to Lahore, Students are Winning.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <TestimonialCard
              content="The AI speaking practice was a game-changer. I went from a 6.0 to a 7.5 in one month!"
              name="Fatima"
              country="Nigeria"
              countryEmoji="🇳🇬"
              profileImage={fatima}
            />
            <TestimonialCard
              content="I used to hate writing Task 2. Fluentli.ai's analysis showed me exactly where I was losing marks. Finally scored the 7.0 I needed."
              name="Hassan"
              country="Pakistan"
              countryEmoji="🇵🇰"
              profileImage={hassan}
            />
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Trusted by students aiming for:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <span className="text-lg font-medium">University of Toronto</span>
              <span className="text-lg font-medium">University of Melbourne</span>
              <span className="text-2xl">🇬🇧 🇨🇦 🇦🇺</span>
            </div>
          </div>
        </div>
      </section>

      {/* User Segmentation */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16 gradient-text">
            Choose Your Path to Success
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass border border-white/10 rounded-xl p-8 text-center hover:border-accent/30 transition-all group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-gradient-primary mx-auto mb-6 flex items-center justify-center group-hover:animate-float">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">For Ambitious Students</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get your personal AI plan and start leveling up your IELTS score today.
              </p>
              <Button variant="cta" size="lg" className="w-full">
                Start My Free Trial
              </Button>
            </div>
            
            <div className="glass border border-white/10 rounded-xl p-8 text-center hover:border-accent/30 transition-all group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-gradient-primary mx-auto mb-6 flex items-center justify-center group-hover:animate-float">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">For Tutors & Schools</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empower your classroom with AI tools. Create custom classes, design tasks, and track student progress.
              </p>
              <Button variant="default" size="lg" className="w-full">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-primary-foreground">
            Your Dream University is Waiting.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get your personal AI tutor and see your score improve in weeks.
          </p>
          <Button variant="cta" size="xl" className="text-xl px-12 py-6 h-auto bg-cta-neon hover:bg-cta-neon/90 text-gray-900">
            Start Acing IELTS Today
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Fluentli.ai. Unlock your world with AI-powered IELTS preparation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;