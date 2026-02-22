import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are the signs that my Burbank home needs a termite inspection?",
    answer: "Common signs include seeing winged 'swarmers' near light sources, finding mud tubes on your foundation, hearing hollow sounds when tapping wood, or discovering discarded wings. Because termites work from the inside out, a professional termite inspection burbank is the only way to confirm an infestation before significant damage occurs."
  },
  {
    question: "Do I need a termite inspection for escrow in Burbank?",
    answer: "Yes, most real estate transactions in Southern California require a Wood Destroying Organism (WDO) report to close escrow. Our team provides detailed, certified reports that satisfy lenders and provide buyers with an accurate assessment of the property's condition."
  },
  {
    question: "How long does a professional termite inspection take?",
    answer: "A comprehensive inspection of a typical Burbank home usually takes 1 to 2 hours. This includes checking the perimeter, attic, crawl space, and interior to ensure no area is left unexamined."
  },
  {
    question: "What is the difference between drywood and subterranean termites?",
    answer: "Subterranean termites live in the soil and build mud tubes to reach wood sources, while drywood termites live entirely inside the wood they consume. Both are common in Burbank, and our termite inspection burbank techniques are designed to identify and treat both species effectively."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            termite inspection burbank <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential information for Burbank homeowners regarding termite detection, protection, and escrow requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
