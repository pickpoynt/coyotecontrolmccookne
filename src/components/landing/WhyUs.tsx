import { ShieldCheck, MapPin, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Dynamic Background with Technical Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-5 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 opacity-95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Unmatched Precision</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight uppercase tracking-tight">
              Why Las Vegas Trusts <br />
              <span className="text-indigo-500">Our Water Experts</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light italic">
              We bring master-grade engineering to every water softening system. Our team is dedicated to preserving your home's infrastructure through technical excellence and precision system tuning.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Engineering Precision",
                  description: "Our digital calibration equipment optimizes resin regeneration cycles with +/- 1% accuracy, preventing salt waste and system fouling.",
                  icon: Target
                },
                {
                  title: "Las Vegas Local",
                  description: "Based in the heart of the Vegas Valley. We understand the extreme hardness levels and Mojave climate shifts that impact NV systems.",
                  icon: MapPin
                },
                {
                  title: "Rapid Deployment",
                  description: "Emergency service teams deployed immediately across Clark County to stabilize failing water treatment and filtration systems.",
                  icon: Clock
                },
                {
                  title: "Technical License",
                  description: "Master-level water treatment certification in Nevada, ensuring all repairs meet the highest purity and municipal standards.",
                  icon: ShieldCheck
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl shadow-indigo-500/20 relative group">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                alt="Las Vegas Water Softener Repair"
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all" />

              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-3">System Crashing?</p>
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">Emergency Water Scans</h4>
                <div className="flex items-center gap-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 px-6 rounded-xl uppercase tracking-widest text-xs" asChild>
                    <a href="tel:8777921410">Call Vegas Team</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
