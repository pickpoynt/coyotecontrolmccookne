import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerChippewaFalls = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair chippewa falls | Chippewa Falls Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair chippewa falls. We fix hard water issues and maintain water conditioning systems in Chippewa Falls, WI." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-chippewa-falls" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">chippewa falls</span>
                    </>
                }
                subtitle="High-performance water softener repair in Chippewa Falls. Protecting Wisconsin homes from mineral buildup and system inefficiency."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="CHIPPEWA FALLS WATER PROS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Wisconsin Water Treatment
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Winter Ready</h3>
                                <p className="text-slate-600 text-sm">
                                    We ensure your Chippewa Falls system stays operational through the toughest Wisconsin winters.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Local Experts</h3>
                                <p className="text-slate-600 text-sm">
                                    Certified technicians who understand the specific groundwater issues in Chippewa County.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Pure Results</h3>
                                <p className="text-slate-600 text-sm">
                                    Restore your water's softness and clarity with our precision diagnostic and repair tools.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Chippewa Valley Water Authorities</h3>
                            <p>
                                In Chippewa Falls, groundwater minerals can vary significantly. Our repair services focus on tailoring your water softener's settings to match the local supply, extending the life of your appliances and ensuring your skin and hair feel their best.
                            </p>
                            <p>
                                From brine tank maintenance to control circuit repairs, we handle it all for the Chippewa Falls community.
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

export default WaterSoftenerChippewaFalls;
