import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerLoganUtah = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair logan utah | Logan Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair logan utah. We fix hard water issues and maintain water conditioning systems in Logan and Cache County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-logan-utah" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">logan utah</span>
                    </>
                }
                subtitle="High-performance water softener repair in Logan, UT. Protecting Utah homes from mineral buildup and hard water damage."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="LOGAN WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Cache Valley Water Solutions
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Mountain Minerals</h3>
                                <p className="text-slate-600 text-sm">
                                    Logan's water can have high calcium levels. We ensure your system is tuned to manage the mountain mineral load.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Utah State Certified</h3>
                                <p className="text-slate-600 text-sm">
                                    Our technicians are fully certified for all major softening brands used across Northern Utah.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Daily Results</h3>
                                <p className="text-slate-600 text-sm">
                                    Restore your water's softness and clarity with our precision diagnostic and repair services.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Cache County Water Authority</h3>
                            <p>
                                In Logan, the high mineral content of the local water supply can quickly lead to scale issues if your water softener isn't working optimally. We specialize in deep resin rejuvenation and control valve repair for homes throughout the Cache Valley.
                            </p>
                            <p>
                                Keep your pipes clean and your water soft with our expert local repair team.
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

export default WaterSoftenerLoganUtah;
