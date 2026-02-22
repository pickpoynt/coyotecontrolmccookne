import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">termite inspection burbank</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Burbank property owners trust our specialized team for precision termite detection, certified escrow reporting, and proactive property protection. We eliminate wood-destroying organisms at their source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "WDO Inspection",
              description: "Clinical-grade diagnostic inspection of your Burbank property — identifying drywood, subterranean, and dampwood termite activity in high-risk areas.",
            },
            {
              icon: ShieldCheck,
              title: "Escrow Reports",
              description: "Certified Wood Destroying Organism (WDO) reports required for California real estate transactions, delivered with same-day speed and accuracy.",
            },
            {
              icon: Bug,
              title: "Localized Treatment",
              description: "Targeted localized treatments using advanced non-repellent termiticides to eliminate active colonies without the need for full-property fumigation.",
            },
            {
              icon: Home,
              title: "Soil Barriers",
              description: "Installation of specialized liquid or baiting barriers around your Burbank foundation to prevent subterranean termites from entering your home.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Get Inspection <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
