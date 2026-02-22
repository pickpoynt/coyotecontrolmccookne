import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind, Home, Shield } from "lucide-react";

const BurbankTermiteInfo = () => {
    return (
        <section id="burbank-termite-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Burbank California Termite Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">termite inspection burbank</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Specialized termite detection and prevention for Burbank, CA properties. We deploy clinical-grade inspections, infrared technology, and comprehensive protective barriers to eliminate the silent threat and protect your home's structural integrity.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Silent Threat in Burbank
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Stealthy Destruction</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Termites are notoriously difficult to detect until the damage is significant. They consume wood from the inside out, often leaving a thin veneer of paint or wallpaper. Our termite inspection burbank specialists use advanced moisture meters and acoustic sensors to find colonies before they compromise your home.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Localized Treatment Solutions</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We apply specialized non-repellent termiticides that create an invisible barrier. These treatments are specifically designed to be transferred between termites, ensuring the entire colony is eliminated even if they don't come into direct contact with the treated area.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Home className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Structural Integrity Protection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                By identifying early signs of wood-destroying organisms, we help Burbank homeowners avoid costly structural repairs. We provide detailed reports that are essential for real estate transactions and long-term property maintenance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Burbank & San Fernando Valley
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid termite inspection burbank service for these areas:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Burbank",
                                        "Magnolia Park",
                                        "Rancho District",
                                        "Toluca Lake",
                                        "Glendale",
                                        "Sun Valley",
                                        "North Hollywood",
                                        "Media District"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <img src="/3.jpeg" alt="Termite Damage Prevention" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Escrow Requirement</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In California, a professional termite inspection is often a requirement for closing escrow. Our termite inspection burbank team provides comprehensive WDO (Wood Destroying Organism) reports that satisfy lenders and give buyers peace of mind. We specialize in identifying subterranean, drywood, and dampwood termites common in Southern California.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">termite inspection burbank</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Wind, title: "Swarmers", desc: "Seeing winged termites around window sills or light fixtures is a clear indication of a mature colony nearby searching for new nesting sites." },
                                { icon: Droplets, title: "Mud Tubes", desc: "Pencil-sized tubes found on foundation walls or floor joists are used by subterranean termites to travel safely from soil to wood." },
                                { icon: Shield, title: "Hollow Wood", desc: "If wood sounds hollow when tapped or feels soft when probed, it's a critical sign of internal termite consumption. Immediate termite inspection burbank is vital." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Are Termites Eating Your Equity?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for visible damage. Termites cost Americans billions in property damage every year. Our termite inspection burbank team provides same-day, professional assessments to secure your investment.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">CA State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">WDO Specialist</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">termite inspection burbank</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    termite inspection burbank
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BurbankTermiteInfo;
