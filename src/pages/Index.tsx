import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AlondraParkHydroJettingInfo from "@/components/landing/AlondraParkHydroJettingInfo";
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
        <title>Hydro jetting sewer line Alondra Park Alondra Park</title>
        <meta name="description" content="Hydro jetting sewer line Alondra Park Alondra Park. Expert high-pressure hydro jetting for residential and commercial sewer lines in Alondra Park, CA. 24/7 blockage clearance and precision diagnostics. Call (877) 792-1410!" />
        <meta name="keywords" content="Hydro jetting sewer line Alondra Park, Alondra Park hydro jetting, sewer line cleaning Alondra Park, blocked drain Alondra Park, hydrojet sewer cleaning" />
        <link rel="canonical" href="https://alondra-park-jetting-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alondra Park Hydro Jetting Pros",
            "image": "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alondra Park",
              "addressRegion": "CA",
              "postalCode": "90249",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.8892",
              "longitude": "-118.3306"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "priceRange": "$$",
            "description": "Professional high-pressure hydro jetting services in Alondra Park, CA. We specialize in total blockage clearance, root removal, and precision sewer line decontamination."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hydro Jetting Sewer Line Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alondra Park Hydro Jetting Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Drain & Sewer Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Pressure Sewer De-scaling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Invasive Root Pulverization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Grease & Sludge Emulsification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full CCTV Pipe Restoration Verification"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hydro jetting sewer line Alondra Park - Professional Drain Clearance" />
        <meta property="og:description" content="Expert hydro jetting in Alondra Park. Scour your sewer lines clean with 4000 PSI precision technology. Fast response for South Bay property owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alondra-park-jetting-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Hydro jetting sewer line Alondra Park
              <span className="block text-blue-400 mt-2 text-2xl md:text-3xl italic">Alondra Park Hydro Jetting Pros</span>
            </>
          }
          subtitle="Alondra Park's premier authority for industrial-strength sewer cleaning. We provide high-pressure hydro jetting, invasive root removal, and precision camera analytics. Professional Quality Mastercraft."
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1550985543-f47f547bda0f?auto=format&fit=crop&q=80"
          badge="ALONDRA PARK HYDRO JETTING"
        />
        <Services />
        <WhyUs />
        <AlondraParkHydroJettingInfo />
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
