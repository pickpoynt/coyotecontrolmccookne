import { Droplets, ShieldCheck, Zap, Waves } from "lucide-react";

const alondraFactors = [
    {
        icon: Droplets,
        title: "High-Pressure Restoration",
        description: "Alondra Park's older sewer lines often accumulate years of heavy grease and mineral buildup. Our 4000 PSI hydro jetting technology scours pipe walls clean, restoring original flow capacity."
    },
    {
        icon: Waves,
        title: "Root Intrusion Clearance",
        description: "With the local landscape's mature trees, root penetration is a common crisis. Our hydro jetting heads are designed to pulverize invasive roots without damaging your existing pipe structure."
    },
    {
        icon: Zap,
        title: "Emergency Blockage Pulse",
        description: "When a sewer backup hits your Alondra Park home, you need immediate relief. Our rapid-dispatch teams utilize portable jetting units for fast, non-invasive clearing of total obstructions."
    },
    {
        icon: ShieldCheck,
        title: "Pipe Longevity Strategy",
        description: "Regular hydro jetting prevents the corrosive pitting caused by stagnant buildup. We help you extend the life of your Alondra Park property's infrastructure through technological maintenance."
    }
];

const jettingBenefits = [
    {
        title: "Master Tech Precision",
        description: "Our technicians are local experts who understand the specific topography and residential plumbing standards of Los Angeles County."
    },
    {
        title: "CCTV Verification",
        description: "We don't guess; we inspect. Every hydro jetting service includes a before-and-after camera scope to verify your lines are 100% clear."
    },
    {
        title: "Transparent Assessment",
        description: "Receive a clear, detailed analysis of your sewer line health before we begin. No hidden fees or surprise surcharges."
    },
    {
        title: "24/7 Rapid Response",
        description: "Sewer emergencies in the South Bay don't follow a schedule. Our Alondra Park teams are strategically positioned for the fastest dispatch."
    }
];

const AlondraParkHydroJettingInfo = () => {
    return (
        <section id="hydro-jetting-info" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        Alondra Park Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">
                        The Science of Clean Sewer Lines in Alondra Park
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Conventional snaking only pokes holes in clogs. In Alondra Park, where grease and mineral scale are prevalent,
                        hydro jetting is the only solution that restores pipes to a 'like-new' internal state using high-velocity water streams.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {alondraFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-blue-400">
                                South Bay Infrastructure Care
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                Don't let a sluggish sewer compromise your Alondra Park home. Our high-pressure systems are the gold standard for
                                long-term property protection and plumbing efficiency.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {jettingBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80"
                                alt="High Pressure Hydro Jetting Unit"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Industrial Precision Cleaning</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Plumbing Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Strategic Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-blue-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlondraParkHydroJettingInfo;
