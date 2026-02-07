import { Phone, Mail, MapPin, Activity, ShieldBox, Droplets, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Cary Backflow Specialists
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Wake County's leading experts in certified backflow prevention testing, compliance reporting, and specialized repair. Dedicated to Cary's water quality.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:8777921410" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Testing Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Annual Certification</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> RPZ Testing & Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Irrigation Compliance</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> DCVA Inspections</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Thermal Expansion</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Town of Cary</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Apex, NC</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Morrisville, NC</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Winston-Salem</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Western Wake</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Certified Hotline</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">Town of Cary Certified</div>
              <a href="tel:8777921410" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (877) 792-1410
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Licensed NC Plumbing #BT12345
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Cary Backflow Specialists. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">backflow testing Cary NC</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">certified backflow preventer testing Wake County</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Cary Backflow Specialists",
          "telephone": "+1-877-792-1410",
          "url": "https://backflow-testing-cary-nc.com/",
          "logo": "https://backflow-testing-cary-nc.com/logo.png",
          "image": "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80",
          "description": "Professional certified backflow testing and annual certification services in Cary, NC. Expert repairs and official utility reporting.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Cary and Wake County",
            "addressLocality": "Cary",
            "addressRegion": "NC",
            "postalCode": "27511",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.7915,
            "longitude": -78.7811
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;
