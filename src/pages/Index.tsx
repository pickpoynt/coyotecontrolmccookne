import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BackflowInfo from "@/components/landing/BackflowInfo";
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
        <title>backflow testing cary nc | Cary Backflow Specialists: Certified Annual Testing</title>
        <meta name="description" content="Certified backflow testing cary nc. Professional backflow preventer testing, repair, and installation. Town of Cary certified testers. Call (877) 792-1410 for annual certification!" />
        <meta name="keywords" content="backflow testing cary nc, backflow preventer testing Cary, certified backflow tester NC, annual backflow certification Cary, irrigation backflow repair Cary" />
        <link rel="canonical" href="https://backflow-testing-cary-nc.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cary Backflow Specialists",
            "image": "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cary",
              "addressRegion": "NC",
              "postalCode": "27511",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.7915",
              "longitude": "-78.7811"
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "serviceArea": {
              "@type": "Place",
              "name": "Cary, North Carolina"
            },
            "priceRange": "$$",
            "description": "Professional backflow prevention assembly testing and annual certification services for residential and commercial properties in Cary, NC."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Backflow Testing and Certification",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Cary Backflow Specialists",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Cary, North Carolina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Backflow Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Annual Backflow Certification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Backflow Preventer Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "New Backflow Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Irrigation Backflow Testing"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="backflow testing cary nc | Cary Backflow Specialists" />
        <meta property="og:description" content="Certified backflow testing in Cary, NC. Town of Cary backflow certification, repairs, and installations. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://backflow-testing-cary-nc.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="backflow testing cary nc | Cary Backflow Specialists" />
        <meta name="twitter:description" content="Professional backflow testing in Cary. Town of Cary certified technicians for annual compliance." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              backflow testing cary nc
              <span className="block text-blue-400 mt-2">Cary Backflow Specialists: Certified Compliance</span>
            </>
          }
          subtitle="Keep your water supply safe and meet Town of Cary annual backflow testing requirements. We provide fast, certified testing and official documentation for all types of prevention assemblies. Licensed, bonded, and ready to help."
          image="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <BackflowInfo />
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
