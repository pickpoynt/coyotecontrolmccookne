import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is raw sewage backup dangerous to my family?",
    answer: "Yes — extremely. Raw sewage (Category 3 water) contains E. coli, Salmonella, Hepatitis A, Norovirus, and other harmful pathogens. Do not touch it without PPE. Our raw sewage backup removal Atherton CA team handles hazardous extraction safely."
  },
  {
    question: "How quickly can you respond to a raw sewage emergency in Atherton?",
    answer: "Our team is staged locally on the Peninsula and maintains a target response time of under 45 minutes for Atherton, Menlo Park, Woodside, and Portola Valley."
  },
  {
    question: "What does IICRC S500 standard mean for my cleanup?",
    answer: "The IICRC S500 standard is the global benchmark for water damage and sewage remediation. Following it guarantees scientific, documented, and legally defensible decontamination — critical for insurance claims and resale value in Atherton."
  },
  {
    question: "Can you work discreetly without advertising the emergency?",
    answer: "Absolutely. We fully respect the privacy of Atherton residents. We can operate with unmarked vehicles and during off-hours to ensure your situation remains completely private."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Critical Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Raw Sewage Removal <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for Atherton property owners facing a raw sewage backup emergency.
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
