import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency water softener repair in Las Vegas?",
    answer: "Yes. Our Las Vegas teams are available for daily diagnostics and rapid restoration. We provide system support across Clark County and the Mojave region to restore your home's water quality."
  },
  {
    question: "What are the signs of a failing water softener in Vegas?",
    answer: "Common signs include white scale buildup on faucets, spots on glassware, stiff laundry, and skin irritation. You may also notice a salt bridge in your brine tank or a drop in water pressure."
  },
  {
    question: "Are your technicians licensed for Nevada water treatment?",
    answer: "Absolutely. Our technicians are fully licensed Nevada water treatment specialists who understand the extreme mineral challenges of the Las Vegas Valley and adhere to all Clark County standards."
  },
  {
    question: "How long does a typical softener repair take?",
    answer: "Most system diagnostics and repairs can be completed within a few hours. We focus on technical results—whether it's valve restoration or resin cleaning—to minimize disruption to your home."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Las Vegas <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about water softener repair and maintenance in Las Vegas, Nevada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6"
              >
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
