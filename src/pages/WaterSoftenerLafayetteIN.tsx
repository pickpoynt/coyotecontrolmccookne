import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Droplets, ShieldCheck, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WaterSoftenerLafayetteIN = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>water softener repair lafayette indiana | Lafayette Water Softener Pros</title>
                <meta name="description" content="Professional water softener repair lafayette indiana. We fix hard water issues and maintain conditioning systems in Lafayette and Tippecanoe County." />
                <link rel="canonical" href="https://water-softener-repair-las-vegas.com/water-softener-repair-lafayette-indiana" />
            </Helmet>
            <Header />
            <Hero
                title={
                    <>
                        water softener repair <br />
                        <span className="text-emerald-400">lafayette indiana</span>
                    </>
                }
                subtitle="Master-grade water softener repair in Lafayette, IN. Protecting Indiana homes from hard water scale and system inefficiency."
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                badge="LAFAYETTE WATER TREATMENT EXPERTS"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">
                            Hoosier Water Conditioning
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Filter className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Scale Defense</h3>
                                <p className="text-slate-600 text-sm">
                                    Lafayette's water is known for its mineral density. We defend your pipes with precision tuning.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Indiana Certified</h3>
                                <p className="text-slate-600 text-sm">
                                    Certified technicians who understand the specific groundwater challenges of Tippecanoe County.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <Droplets className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Pure Quality</h3>
                                <p className="text-slate-600 text-sm">
                                    Comprehensive diagnostics to restore your system's softening power and water clarity.
                                </p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600 leading-relaxed italic font-medium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 not-italic uppercase tracking-tight">Tippecanoe County Experts</h3>
                            <p>
                                In Lafayette, water conditioning is key to home maintenance. Our repair services focus on the digital and mechanical components that manage your water's mineral levels, ensuring peak performance and protecting your internal plumbing.
                            </p>
                            <p>
                                Trust our local Lafayette team for all your water softener maintenance and repair needs.
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

export default WaterSoftenerLafayetteIN;
