import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-indigo-600">Softener Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Las Vegas property owners trust us for master-grade water softener repair and precision system maintenance. We provide specialized care for Clark County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "System Diagnostics",
              description: "We utilize advanced testing tools to identify resin fouling or valve malfunctions with clinical accuracy, avoiding unnecessary system replacement in Vegas homes.",
              link: "#contact"
            },
            {
              icon: Drill,
              title: "Valve Restoration",
              description: "Specialized residential valve repair that addresses pressure drops and cycle failures beneath the desert sun, preventing salt waste and water loss.",
              link: "#contact"
            },
            {
              icon: Camera,
              title: "Tank Maintenance",
              description: "High-resolution system inspections designed to identify salt bridging and resin issues specifically under Nevada's extreme hard water conditions.",
              link: "#contact"
            },
            {
              icon: Waves,
              title: "Filter Replacement",
              description: "Technical carbon and sediment filter solutions that eliminate the Mojave's chlorine taste and mineral odors from your home's water supply.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
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
