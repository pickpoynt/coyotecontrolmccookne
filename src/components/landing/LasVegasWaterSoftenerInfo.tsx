import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target, Filter } from "lucide-react";

const LasVegasWaterSoftenerInfo = () => {
    return (
        <section id="las-vegas-water-softener-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Clark County Water Quality Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-blue-600">Water Softener Repair</span> in Las Vegas
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Conquering the Mojave's hardest water. We provide specialized diagnostics and precision repair for residential water softening and filtration systems throughout the Las Vegas Valley.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-blue-600" />
                                    Las Vegas Water Solutions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Filter className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Resin Tank Rejuvenation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                In Las Vegas, high mineral content can cause resin beads to foul prematurely. We perform deep cleaning and regeneration to restore your system's efficiency without a full replacement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Control Valve Calibration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our technicians specialize in the intricate digital and mechanical control valves that manage your regeneration cycles, ensuring peak performance and minimal salt waste.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Salt Bridge Clearance</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Extreme desert heat can lead to salt bridging or mushing in your brine tank. We safely clear these blockages and adjust settings to prevent recurring issues.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Serving the Las Vegas Valley
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid, technical water treatment services for Las Vegas and surrounding Clark County:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Summerlin",
                                        "Henderson",
                                        "North Las Vegas",
                                        "Enterprise",
                                        "Spring Valley",
                                        "Paradise",
                                        "Green Valley",
                                        "Centennial Hills"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* UNIQUE GEOLOGICAL CONTENT */}
                            <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Mojave Mineral Challenge</h4>
                                <p className="text-blue-50 text-sm leading-relaxed italic">
                                    Las Vegas water is sourced primarily from Lake Mead and is classified as "extremely hard" due to high concentrations of calcium and magnesium carbonate. Without a functioning softener, this mineral load can destroy water heaters and plumbing fixtures within years. Our repair strategies are specifically engineered to handle the relentless scale buildup unique to the Southern Nevada desert.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Noticeable White Scale?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    In the Las Vegas area, a failing water softener isn't just an inconvenience—it's a threat to your home's infrastructure. If you see spots on dishes or scale on showerheads, our expert team is ready to restore your system.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">NV State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Clark County Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Hard Water Specialists</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-blue-400/30 shadow-2xl">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Service Available Daily</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic font-medium">
                                    Master-Grade Water Treatment Las Vegas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LasVegasWaterSoftenerInfo;
