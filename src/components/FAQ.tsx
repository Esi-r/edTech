import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Fluentli.ai really free to start?",
      answer: "Yes! You can explore all our features with a 7-day free trial, no credit card required. After that, you can choose a subscription that fits your goals."
    },
    {
      question: "Does this work for both Academic and General IELTS?",
      answer: "Absolutely. Our AI is trained on both formats. You can select your test type, and all the tasks and mock exams will adapt accordingly."
    },
    {
      question: "How is this different from Duolingo?",
      answer: "While we use a fun, gamified style, Fluentli.ai is 100% focused on the specific skills, question types, and scoring criteria of the official IELTS exam."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-12 gradient-text">
            Frequently Asked Questions
          </h2>
          
          <div className="glass border border-white/10 rounded-xl p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;