import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerJacksonMI = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair jackson mi | Jackson Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair jackson mi. We fix hard water issues, scale buildup, and system failures in Jackson and Jackson County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-jackson-mi" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">jackson mi</span>
                    </>
                }
                subtitle="Expert water softener repair and maintenance in Jackson, MI. Solve local hard water problems with advanced conditioning solutions."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="JACKSON WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Jackson Water Solutions
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Mineral Extraction</h3>
                                <p className="text-slate-600 text-sm">
                                    Jackson's water can have high iron and mineral levels. We ensure your softener is tuned for maximum purity.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Michigan Certified</h3>
                                <p className="text-slate-600 text-sm">
                                    Repairs performed by technicians who understand the water quality and plumbing needs of Mid-Michigan.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Rapid Response</h3>
                                <p className="text-slate-600 text-sm">
                                    Local service for Jackson residents facing system leaks or water quality drops.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Great Lakes Water Expertise</h3>
                            <p>
                                Residents of Jackson often deal with hard municipal and well water. Our team specializes in the repair of water softening systems that specifically address the regional mineral profile, ensuring your appliances last longer and your water feels softer.
                            </p>
                            <p>
                                Whether you're dealing with a salt bridge or a control valve failure, we have the tools and expertise to restore your water quality immediately.
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

export default WaterSoftenerJacksonMI;
