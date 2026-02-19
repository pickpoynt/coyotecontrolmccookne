import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerBurnsvilleMN = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair burnsville mn | Burnsville Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair burnsville mn. We fix hard water issues, scale buildup, and system failures in Burnsville and Dakota County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-burnsville-mn" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">burnsville mn</span>
                    </>
                }
                subtitle="Expert water softener repair and maintenance in Burnsville. We solve local hard water challenges with advanced conditioning solutions."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="BURNSVILLE WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Dakota County Water Solutions
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Hard Water Fix</h3>
                                <p className="text-slate-600 text-sm">
                                    Burnsville's water can be harsh on appliances. We restore your system's softening capability immediately.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">System Warranty</h3>
                                <p className="text-slate-600 text-sm">
                                    Our repairs are built to last, protecting your Burnsville home's plumbing infrastructure for the long term.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Purity Check</h3>
                                <p className="text-slate-600 text-sm">
                                    Comprehensive water testing included with every service to ensure your conditioning system is tuned perfectly.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Local Burnsville Expertise</h3>
                            <p>
                                Burnsville residents often deal with varying mineral levels in their municipal water. Our team understands the specific chemistry of Dakota County water sources, allowing us to calibrate your water softener for maximum efficiency and appliance protection.
                            </p>
                            <p>
                                Whether you have a salt bridge, a stuck valve, or resin fouling, we have the technical gear to get your water soft again.
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

export default WaterSoftenerBurnsvilleMN;
