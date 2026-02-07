import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Cary Certified",
    description: "Our testers are fully certified and registered with the Town of Cary and Wake County water departments for official submittals."
  },
  {
    icon: ClipboardCheck,
    title: "On-Site Repairs",
    description: "Fail the test? We carry most repair kits on our trucks, allowing us to fix common issues immediately and re-test on the same visit."
  },
  {
    icon: MapPin,
    title: "Local Local Specialists",
    description: "Based in Wake County, we understand the specific local plumbing codes and testing requirements for Cary, Apex, and Morrisville."
  },
  {
    icon: CheckCircle2,
    title: "Automatic Reminders",
    description: "Never miss a testing deadline again. We offer automated annual reminders to ensure your property remains compliant every year."
  },
  {
    icon: Shield,
    title: "Potable Protection",
    description: "We are committed to protecting the community's drinking water from cross-contamination, siphonage, and back-pressure issues."
  },
  {
    icon: Zap,
    title: "Next-Day Testing",
    description: "Need your certification fast for a real estate closing or building permit? We offer priority scheduling for time-sensitive compliance."
  }
];

const stats = [
  { number: "2500+", label: "Tests Completed" },
  { number: "100%", label: "Cary Compliant" },
  { number: "Same-Day", label: "Reporting" },
  { number: "Certified", label: "Testers" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Cary's Premier Backflow Testing Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining certified technical skill with local regulatory knowledge to provide seamless, reliable backflow prevention services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
