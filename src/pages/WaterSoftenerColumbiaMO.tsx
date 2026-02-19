import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerColumbiaMO = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair columbia mo | Columbia Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair columbia mo. Expert service for hard water systems, salt bridging, and water conditioning in Columbia, MO." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-columbia-mo" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">columbia mo</span>
                    </>
                }
                subtitle="Dedicated water softener repair and service in Columbia, Missouri. We combat Mid-Missouri hard water with precision engineering."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="COLUMBIA WATER TREATMENT SPECIALISTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Columbia Water Conditioning
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Scale Prevention</h3>
                                <p className="text-slate-600 text-sm">
                                    Stop mineral buildup before it ruins your Columbia home's pipes and water heater.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Boone County Trusted</h3>
                                <p className="text-slate-600 text-sm">
                                    Our technicians are certified for all major softener brands used throughout Mid-Missouri.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Daily Service</h3>
                                <p className="text-slate-600 text-sm">
                                    Fast response for Columbia residents experiencing system leaks or water quality drops.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Mid-Missouri Purity Experts</h3>
                            <p>
                                Columbia's water sources can lead to significant limescale issues if your water softener isn't working at 100%. We specialize in the repair of digital control valves and resin bed cleaning for systems in the Boone County area.
                            </p>
                            <p>
                                Don't let hard water damage your dishwasher and laundry—keep your water soft with our expert maintenance services.
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

export default WaterSoftenerColumbiaMO;
