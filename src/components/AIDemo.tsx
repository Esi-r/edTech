import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalTrigger } from "@/components/ui/modal";
import { Sparkles, CheckCircle, Loader2 } from "lucide-react";

const AIDemo = () => {
  const [inputText, setInputText] = useState("I want to studying in abroad for my better future.");
  const [email, setEmail] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAnalyze = () => {
    setModalOpen(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setModalOpen(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {!showResult ? (
        <div className="space-y-8">
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full min-h-[120px] p-6 text-lg text-center bg-white/90 border border-white/30 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 text-gray-800 placeholder:text-gray-500"
              placeholder="Write a short paragraph describing a magical forest where animals can talk..."
            />
          </div>
          
          <Modal open={modalOpen} onOpenChange={setModalOpen}>
            <ModalTrigger asChild>
              <Button 
                variant="cta" 
                size="xl"
                onClick={handleAnalyze}
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 py-4 text-lg font-semibold transition-all duration-300"
              >
                ✨ Analyze My Sentence
              </Button>
            </ModalTrigger>
            
            <ModalContent>
              <ModalHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
                    {isAnalyzing ? (
                      <Loader2 className="w-8 h-8 text-primary-foreground animate-spin" />
                    ) : (
                      <Sparkles className="w-8 h-8 text-primary-foreground" />
                    )}
                  </div>
                </div>
                <ModalTitle className="text-center text-2xl gradient-text">
                  {isAnalyzing ? "Analyzing..." : "Getting Your AI Analysis..."}
                </ModalTitle>
                <ModalDescription className="text-center">
                  {isAnalyzing 
                    ? "Please wait while our AI analyzes your sentence..."
                    : "Enter your email to see the result and unlock your 7-day free trial!"
                  }
                </ModalDescription>
              </ModalHeader>
              
              {!isAnalyzing && (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="glass border-white/20"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg"
                    className="w-full"
                  >
                    Show Me the Result
                  </Button>
                </form>
              )}
            </ModalContent>
          </Modal>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-700">
          <div className="relative">
            <div className="text-lg py-6 px-6 bg-white/90 border border-red-300 rounded-lg text-gray-800">
              <span className="line-through text-red-600 opacity-80">
                I want to studying in abroad for my better future.
              </span>
            </div>
            <div className="mt-4 text-lg py-6 px-6 bg-green-50 border border-green-300 rounded-lg text-gray-800">
              My goal is to study abroad to build a better future.
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 space-y-3">
            <h4 className="font-semibold text-accent flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              AI Analysis Report
            </h4>
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Sentence Structure: Corrected</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Vocabulary: Upgraded ('want' → 'goal')</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Verb Tense: Fixed</span>
              </div>
            </div>
          </div>
          
          <Button variant="cta" size="lg" className="w-full">
            Start Your Free Trial
          </Button>
        </div>
      )}
    </div>
  );
};

export default AIDemo;