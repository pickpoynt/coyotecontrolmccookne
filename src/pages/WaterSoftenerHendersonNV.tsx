import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerHendersonNV = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair henderson nv | Henderson Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair henderson nv. We fix Mojave hard water issues, scale buildup, and system failures in Henderson and Clark County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-henderson-nv" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">henderson nv</span>
                    </>
                }
                subtitle="Expert water softener repair in Henderson, NV. Combatting Southern Nevada's extreme hard water with advanced filtration and conditioning."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="HENDERSON WATER TREATMENT SPECIALISTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Henderson Water Conditioning
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Extreme Hardness</h3>
                                <p className="text-slate-600 text-sm">
                                    Henderson's water is among the hardest in the nation. We ensure your system is tuned to handle it.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">NV State Licensed</h3>
                                <p className="text-slate-600 text-sm">
                                    Our technicians are fully licensed to operate and repair water treatment systems in Southern Nevada.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Daily Service</h3>
                                <p className="text-slate-600 text-sm">
                                    Rapid response for Henderson residents facing system salt bridging or valve malfunctions.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Mojave Water Purity Experts</h3>
                            <p>
                                Henderson's unique geological position means water conditioning is a necessity, not a luxury. A failing softener can lead to pipe destruction and appliance failure within months. We specialize in deep resin cleaning and control valve restoration for desert systems.
                            </p>
                            <p>
                                Trust our local Henderson team to keep your water soft, your dishes spotless, and your plumbing safe from scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default WaterSoftenerHendersonNV;
