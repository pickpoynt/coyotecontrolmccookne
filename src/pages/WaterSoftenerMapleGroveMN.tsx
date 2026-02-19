import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerMapleGroveMN = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair maple grove mn | Maple Grove Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair maple grove mn. We fix hard water issues, system salt bridging, and water conditioning in Maple Grove and Hennepin County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-maple-grove-mn" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">maple grove mn</span>
                    </>
                }
                subtitle="Expert water softener repair and service in Maple Grove. Combatting Minnesota hard water with precision engineering and technical care."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="MAPLE GROVE WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Maple Grove Water Conditioning
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Hardness Removal</h3>
                                <p className="text-slate-600 text-sm">
                                    Maple Grove's water mineral content can be significant. We ensure your system is tuned for peak removal efficiency.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">MN State Licensed</h3>
                                <p className="text-slate-600 text-sm">
                                    Our technicians are fully certified for all residential water treatment systems in the Twin Cities area.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Daily Results</h3>
                                <p className="text-slate-600 text-sm">
                                    Restore your water's softness immediately with our expert local diagnostic and repair team.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Twin Cities Water Authorities</h3>
                            <p>
                                Maple Grove residents often deal with varying water mineral levels. Our team understands the specific chemistry of Hennepin County water sources, allowing us to calibrate your water softener for maximum efficiency and appliance protection.
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

export default WaterSoftenerMapleGroveMN;
