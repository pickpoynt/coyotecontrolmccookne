import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SlabLeakJacksonvilleInfo from "@/components/landing/SlabLeakJacksonvilleInfo";
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
        <title>slab leak detection jacksonville fl Location</title>
        <meta name="description" content="slab leak detection jacksonville fl Location - Specialized non-invasive slab leak detection, acoustic diagnostics & thermal imaging in Jacksonville, FL. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="slab leak detection jacksonville fl, Jacksonville slab leak repair, foundation leak detection Jacksonville, acoustic leak detection Duval County, non-invasive plumbing Jacksonville" />
        <link rel="canonical" href="https://jacksonville-slab-leak-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1504384308090-c89e959b9428?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "postalCode": "32202",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Jacksonville, FL"
            },
            "priceRange": "$$$",
            "description": "Professional non-invasive slab leak detection services in Jacksonville, Florida. Specialized in acoustic mapping, thermal imaging, and foundation protection for Duval County property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Slab Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Jacksonville Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Jacksonville, Florida"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Slab Leak Diagnostics Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acoustic Foundation Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Non-Invasive Thermal Leak Identification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Duval County Structural Moisture Analysis"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak detection jacksonville fl Location - Jacksonville Slab Leak Pros" />
        <meta property="og:description" content="Expert non-invasive slab leak detection in Jacksonville, Florida. Protecting foundation integrity with advanced acoustic and thermal diagnostics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jacksonville-slab-leak-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504384308090-c89e959b9428?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak detection jacksonville fl Location
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Jacksonville Slab Leak Pros</span>
            </>
          }
          subtitle="Jacksonville's premier authority for non-invasive foundation diagnostics. We utilize acoustic mapping and thermal imagery to pinpoint sub-slab leaks without destructive excavation. Supporting Duval and St. Johns County structural integrity."
          image="https://images.unsplash.com/photo-1541888941259-7bc3df903961?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2000"
          badge="JACKSONVILLE AUTHORIZED SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <SlabLeakJacksonvilleInfo />
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
