import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do I need to test my backflow preventer every year in Cary?",
    answer: "The Town of Cary (and NC state law) requires annual testing to ensure the check valves and relief ports are operating correctly. This prevents contaminated water from being siphoned back into the public drinking water supply if a pressure drop occurs."
  },
  {
    question: "How do I know when my backflow test is due?",
    answer: "Most property owners receive a notification letter from the Town of Cary Water Department. However, tests are typically due on the anniversary of your installation or previous test. We can help you track your due date."
  },
  {
    question: "Do I need to be home for the backflow test?",
    answer: "For exterior units, such as those for irrigation systems, you typically do not need to be home as long as we have clear access to the assembly. For interior commercial or residential units, we will need to schedule a time for access."
  },
  {
    question: "What happens if my backflow preventer fails the test?",
    answer: "If it fails, the Town of Cary gives you a grace period for repairs. As certified testers and repair specialists, we can often fix the unit on the same day by replacing worn rubber seals, springs, or cleaning out debris."
  },
  {
    question: "Do you submit the results to the Town of Cary for me?",
    answer: "Yes! We handle the entire submittal process. We use the required electronic reporting systems to send your certified results directly to the Cary Water Department, saving you the paperwork."
  },
  {
    question: "What is an RPZ vs. a Double Check Valve?",
    answer: "Reduced Pressure Zone (RPZ) assemblies offer the highest protection and are required for 'high hazard' applications like irrigation. Double Check Valve Assemblies (DCVA) are used for lower hazard domestic lines. We test all certified types."
  },
  {
    question: "How much does a backflow test cost in Cary, NC?",
    answer: "Pricing typically ranges from $85 to $150 for residential irrigation units, depending on accessibility and reporting fees. Commercial testing costs vary by unit size. Call us at (877) 792-1410 for a quick quote."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Certification & Testing FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Answers to common questions about backflow prevention and Town of Cary compliance.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
