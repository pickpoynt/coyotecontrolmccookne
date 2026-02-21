import { ArrowRight, Droplets, FlaskConical, Wind, Search, ShieldAlert } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">raw sewage backup removal Atherton CA</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Atherton estate owners trust us for FDA-grade pathogen elimination and white-glove biohazard restoration. We neutralize the most dangerous raw sewage events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Droplets,
              title: "Raw Sewage Extraction",
              description: "Immediate industrial-grade vacuum removal of Category 3 raw sewage, stopping pathogen spread before it reaches structural components.",
            },
            {
              icon: ShieldAlert,
              title: "Containment Barriers",
              description: "Professional-grade physical containment to isolate the affected zone and prevent cross-contamination to clean areas of your Atherton home.",
            },
            {
              icon: FlaskConical,
              title: "Pathogen Elimination",
              description: "EPA List N broad-spectrum disinfectants targeting E. coli, Salmonella, Hepatitis A, and other sewage-borne pathogens to clinical-grade standards.",
            },
            {
              icon: Wind,
              title: "HEPA Air Restoration",
              description: "Negative air pressure HEPA scrubbers remove all airborne biohazard particles, restoring breathable air quality to your Atherton residence.",
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
                  Deploy Now <ArrowRight className="w-4 h-4" />
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
