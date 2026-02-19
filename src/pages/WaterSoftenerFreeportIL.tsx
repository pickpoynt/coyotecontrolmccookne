import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerFreeportIL = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair freeport il | Freeport Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair freeport il. Fix hard water, system leaks, and salt bridges in Freeport and Stephenson County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-freeport-il" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">freeport il</span>
                    </>
                }
                subtitle="Master-grade water softener repair in Freeport, IL. We solve hard water issues and protect your home's pipes with expert conditioning."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="FREEPORT WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Freeport Water Conditioning
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Appliance Safety</h3>
                                <p className="text-slate-600 text-sm">
                                    Protect your Freeport home's valuable appliances from the damaging effects of hard water scale.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Illinois Certified</h3>
                                <p className="text-slate-600 text-sm">
                                    Repairs performed by technicians who know the plumbing codes and water quality of Northern Illinois.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Soft Water Daily</h3>
                                <p className="text-slate-600 text-sm">
                                    Rapid service for Freeport residents facing system failures or mineral breakthroughs.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Stephenson County Water Pros</h3>
                            <p>
                                Freeport's water supply can present unique filtration challenges. Our repair solutions are designed to address the specific mineral profile of Stephenson County, ensuring your resin bed and control valves operate at peak performance.
                            </p>
                            <p>
                                We specialize in troubleshooting everything from digital errors to mechanical salt bridges, providing long-term reliability for your home's water quality.
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

export default WaterSoftenerFreeportIL;
