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
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 gradient-text">
            Can Our AI Improve Your Writing in 15 Seconds?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Enter a sentence below, or use our example, and see the magic.
          </p>
          
          <div className="glass border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            {!showResult ? (
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="glass border-white/20 text-center text-lg py-6 px-6"
                    placeholder="Enter your sentence here..."
                  />
                </div>
                
                <Modal open={modalOpen} onOpenChange={setModalOpen}>
                  <ModalTrigger asChild>
                    <Button 
                      variant="hero" 
                      size="xl"
                      onClick={handleAnalyze}
                      className="w-full sm:w-auto"
                    >
                      <Sparkles className="w-5 h-5" />
                      Analyze My Sentence
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
                  <div className="text-lg py-6 px-6 glass border-accent/30 border rounded-lg">
                    <span className="line-through text-muted-foreground opacity-60">
                      I want to studying in abroad for my better future.
                    </span>
                  </div>
                  <div className="mt-4 text-lg py-6 px-6 bg-accent/10 border border-accent/30 rounded-lg">
                    My goal is to study abroad to build a better future.
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-6 space-y-3">
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
                
                <Button variant="cta" size="lg" className="w-full sm:w-auto">
                  Start Your Free Trial
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;