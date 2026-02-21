import { Phone, MapPin, ShieldAlert } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <ShieldAlert className="w-7 h-7 text-indigo-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Atherton Raw Sewage</span>
                <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest text-[10px]">Removal Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              Atherton's biohazard elite. We provide clinical-grade raw sewage extraction, pathogen decontamination, and air restoration across San Mateo County.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Raw Sewage Extraction", "Biohazard Decontamination", "Pathogen Elimination", "HEPA Air Restoration"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-indigo-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Coverage Area", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">NAP</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-indigo-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  91 Ashfield Rd<br />
                  Atherton, CA 94027
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-500 shrink-0" />
                <a href="tel:8777921410" className="text-xl font-bold text-white hover:text-indigo-500 transition-colors">
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic">
            © {new Date().getFullYear()} Atherton Raw Sewage Removal Pros. All rights reserved. San Mateo County Biohazard Remediation.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
