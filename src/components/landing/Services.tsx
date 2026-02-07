import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, ClipboardCheck, Gauge } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Annual Certification",
    description: "Town of Cary required annual testing for residential and commercial backflow prevention assemblies to ensure local water safety.",
    link: "#backflow-info"
  },
  {
    icon: Hammer,
    title: "Assembly Repair",
    description: "Expert repair for all major brands of backflow preventers. We carry many parts on-site to fix failures immediately and save you a second trip.",
    link: "#backflow-info"
  },
  {
    icon: Droplets,
    title: "Irrigation Backflow",
    description: "Dedicated testing and winterization for lawn irrigation systems. We check RPZ and DCVA units for proper operation and debris clearance.",
    link: "#backflow-info"
  },
  {
    icon: ClipboardCheck,
    title: "Official Compliance",
    description: "Electronic submission of your test results directly to the Town of Cary, Apex, Morrisville, and Wake County utility departments.",
    link: "#backflow-info"
  },
  {
    icon: Shield,
    title: "New Installation",
    description: "Installing high-quality backflow prevention assemblies for new construction, commercial upgrades, or replacing old, obsolete units.",
    link: "#backflow-info"
  },
  {
    icon: Waves,
    title: "Thermal Expansion",
    description: "Inspection and installation of thermal expansion tanks, which are often required alongside backflow preventers to protect your water heater.",
    link: "#backflow-info"
  },
  {
    icon: Activity,
    title: "Pressure Testing",
    description: "Comprehensive diagnostic pressure testing to identify internal leaks or failing check valves within the backflow assembly housing.",
    link: "#backflow-info"
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description: "Rapid response for leaking or burst backflow preventers. We provide emergency shutoff and repair to protect your Cary property.",
    link: "#backflow-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Certified Backflow Testing in Cary
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing full-service certification, repair, and installation for all types of backflow prevention assemblies in Wake County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
