import { ShieldCheck, FileText, Droplets, AlertCircle, MapPin, Gauge } from "lucide-react";

const BackflowInfo = () => {
    const services = [
        {
            icon: Gauge,
            title: "Certified Annual Testing",
            description: "We are authorized to perform annual backflow testing and submit certification forms directly to the Town of Cary and Wake County water departments."
        },
        {
            icon: FileText,
            title: "Compliance Documentation",
            description: "Hassle-free paperwork. We handle all the reports required by local utilities to ensure your property remains in good standing."
        },
        {
            icon: ShieldCheck,
            title: "Assembly Repair",
            description: "If your backflow preventer fails the test, our specialists can repair internal valves and seals on-site to get you back in compliance quickly."
        },
        {
            icon: Droplets,
            title: "Irrigation Systems",
            description: "Specialized testing for lawn irrigation backflow units (RPZ or DCVA), protecting your potable water from fertilizers and pesticides."
        }
    ];

    const caryRegulations = [
        {
            icon: MapPin,
            title: "Town of Cary Requirements",
            description: "The Town of Cary requires all backflow prevention assemblies to be tested annually by a certified professional to prevent cross-contamination."
        },
        {
            icon: AlertCircle,
            title: "Protection Against Siphonage",
            description: "Backflow happens during pressure drops. Our certified tests ensure your check valves hold tight against back-siphonage and back-pressure."
        }
    ];

    return (
        <section id="backflow-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 capitalize leading-tight">
                            Essential Protection for <span className="text-blue-600">Cary's Water Supply</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed shadow-sm p-4 bg-white/50 rounded-xl border border-blue-100">
                            Backflow prevention is more than just a regulatory requirement in Cary, NC—it's the first line of defense for your family's health and the community's water safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">Local Cary Compliance & Standards</h3>
                            <div className="grid md:grid-cols-2 gap-12">
                                {caryRegulations.map((reg, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <reg.icon className="w-6 h-6 text-blue-400" />
                                            <h4 className="text-lg font-bold">{reg.title}</h4>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                            {reg.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract Water Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 50 Q 25 25 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="2" />
                                <path d="M0 70 Q 25 45 50 70 T 100 70" stroke="currentColor" fill="none" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Is your backflow certification due?</h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Don't risk fines or water service interruption. Our Cary team offers rapid same-day testing and filing for all backflow assemblies.
                        </p>
                        <a
                            href="tel:8777921410"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105"
                        >
                            Call (877) 792-1410
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackflowInfo;
