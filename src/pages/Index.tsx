import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import LasVegasWaterSoftenerInfo from "@/components/landing/LasVegasWaterSoftenerInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>water softener repair las vegas | Las Vegas Water Softener Pros</title>
        <meta name="description" content="water softener repair las vegas - Professional water softener repair, maintenance, and installation in Las Vegas, NV. Fix hard water issues, scale buildup, and system failures. Call (877) 792-1410." />
        <meta name="keywords" content="water softener repair las vegas, Las Vegas water treatment, hard water repair NV, water softener maintenance, Clark County plumbing service" />
        <link rel="canonical" href="https://water-softener-repair-las-vegas.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Las Vegas Water Softener Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Las Vegas Blvd",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89101",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1699",
              "longitude": "-115.1398"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Las Vegas, Nevada"
            },
            "priceRange": "$$",
            "description": "Expert water softener repair and maintenance services in Las Vegas, NV. Specialized in resolving hard water problems, system salt bridging, and valve malfunctions."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Water Softener Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Las Vegas Water Softener Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Las Vegas, NV"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Softener Service Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "System Diagnostic & Testing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Resin Tank Cleaning & Reconditioning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Control Valve Repair & Replacement"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="water softener repair las vegas - Las Vegas Water Softener Pros" />
        <meta property="og:description" content="Professional water softener repair and maintenance in Las Vegas, NV. Protect your appliances from hard water damage with our expert services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://water-softener-repair-las-vegas.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              water softener repair las vegas
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Las Vegas Water Softener Pros</span>
            </>
          }
          subtitle="Las Vegas's leading experts in high-performance water softening solutions. We combat the Mojave Desert's extreme hard water with advanced filtration and conditioning systems, extending the life of your plumbing and appliances. Quality water for the Silver State."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1605330880126-24e5425646f9?auto=format&fit=crop&q=80"
          badge="LAS VEGAS WATER TREATMENT SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <LasVegasWaterSoftenerInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
