import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalTrigger } from "@/components/ui/modal";
import { Sparkles, CheckCircle, Loader2, Key } from "lucide-react";

const AIDemo = () => {
  const [inputText, setInputText] = useState("I want to studying in abroad for my better future.");
  const [email, setEmail] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showAnalysisCategories, setShowAnalysisCategories] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [textAnimating, setTextAnimating] = useState(false);

  const analysisCategories = [
    "Sentence Structure: Analyzed",
    "Vocabulary: Upgraded", 
    "Verb Tense: Fixed"
  ];

  const handleAnalyze = async () => {
    // Step 1: Button loading state
    setButtonLoading(true);
    
    setTimeout(() => {
      setButtonLoading(false);
      setShowAnalysisCategories(true);
      
      // Step 2: Animate through analysis categories
      const animateCategories = () => {
        const intervals = [];
        
        analysisCategories.forEach((_, index) => {
          intervals.push(setTimeout(() => {
            setAnalysisStep(index + 1);
            
            // After last category, show modal
            if (index === analysisCategories.length - 1) {
              setTimeout(() => {
                setModalOpen(true);
              }, 500);
            }
          }, (index + 1) * 800));
        });
      };
      
      animateCategories();
    }, 1500);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setModalOpen(false);
    setTextAnimating(true);
    
    // Animate text change in original text box
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-8">
        <div className="relative">
          <textarea
            value={showResult ? "My goal is to study abroad to build a better future." : inputText}
            onChange={(e) => !showResult && setInputText(e.target.value)}
            className={`w-full min-h-[120px] p-6 text-lg text-center border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-500 ${
              showResult 
                ? "bg-green-50 border-green-300 text-gray-800" 
                : "bg-white/90 border-white/30 text-gray-800 placeholder:text-gray-500"
            }`}
            placeholder="Write a short paragraph describing a magical forest where animals can talk..."
            readOnly={showResult}
          />
          {textAnimating && !showResult && (
            <div className="absolute inset-0 bg-white/90 rounded-xl flex items-center justify-center">
              <div className="text-gray-600 animate-pulse">Updating your text...</div>
            </div>
          )}
        </div>

        {/* Analysis Categories */}
        {showAnalysisCategories && (
          <div className="space-y-3 animate-in fade-in duration-500">
            {analysisCategories.map((category, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/20 transition-all duration-300 ${
                  index < analysisStep ? 'animate-in fade-in' : ''
                }`}
              >
                {index < analysisStep ? (
                  <CheckCircle className="w-5 h-5 text-accent animate-in scale-in duration-300" />
                ) : index === analysisStep - 1 ? (
                  <Loader2 className="w-5 h-5 text-accent animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                )}
                <span className="text-white">{category}</span>
              </div>
            ))}
          </div>
        )}
        
        {!showAnalysisCategories && (
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleAnalyze}
            disabled={buttonLoading}
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 py-4 text-lg font-semibold transition-all duration-300"
          >
            {buttonLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              "✨ Analyze My Sentence"
            )}
          </Button>
        )}

        {/* Email Capture Modal */}
        <Modal open={modalOpen} onOpenChange={setModalOpen}>
          <ModalContent className="backdrop-blur-2xl bg-background/80 border border-white/10">
            <ModalHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center animate-pulse">
                  <Key className="w-8 h-8 text-white" />
                </div>
              </div>
              <ModalTitle className="text-center text-2xl gradient-text">
                Your AI Analysis is Ready!
              </ModalTitle>
              <ModalDescription className="text-center text-lg">
                Enter your email to unlock your result and start your 7-day free trial.
              </ModalDescription>
            </ModalHeader>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-white/20 text-lg py-3"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#34D399] hover:bg-[#34D399]/90 text-gray-900 border-0 py-4 text-lg font-semibold"
              >
                Show Me the Result
              </Button>
            </form>
          </ModalContent>
        </Modal>

        {/* Analysis Report */}
        {showResult && (
          <div className="bg-white/10 rounded-lg p-6 space-y-3 animate-in fade-in duration-700">
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
                <span>Vocabulary: Upgraded ('studying' → 'study abroad')</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Clarity: Enhanced overall meaning</span>
              </div>
            </div>
          </div>
        )}

        {showResult && (
          <Button variant="cta" size="lg" className="w-full">
            Start Your Free Trial
          </Button>
        )}
      </div>
    </div>
  );
};

export default AIDemo;