import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SouthlakeSlabLeakInfo from "@/components/landing/SouthlakeSlabLeakInfo";
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
        <title>slab leak repair southlake tx | Southlake Slab Leak Pros</title>
        <meta name="description" content="slab leak repair southlake tx - Professional electronic slab leak detection and foundation pipe repair in Southlake, TX. Expert diagnostics and non-invasive restoration. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak repair southlake tx, Southlake TX leak detection, foundation water leak, concrete slab repair, North Texas plumbing restoration" />
        <link rel="canonical" href="https://slab-leak-repair-southlake-tx.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Southlake Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1400 Main St",
              "addressLocality": "Southlake",
              "addressRegion": "TX",
              "postalCode": "76092",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.9461",
              "longitude": "-97.1350"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Southlake, Texas"
            },
            "priceRange": "$$$",
            "description": "Expert electronic slab leak detection and foundation pipe repair services in Southlake, TX. Specialized in residential leak diagnostics and structural plumbing restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Southlake Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Southlake, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Southlake Slab Leak Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostic"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sub-Slab Foundation Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak repair southlake tx - Southlake Slab Leak Pros" />
        <meta property="og:description" content="Professional electronic slab leak detection and restoration in Southlake, TX. Protect your property with advanced diagnostics and master-grade plumbing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-repair-southlake-tx.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak repair southlake tx
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Southlake Slab Leak Pros</span>
            </>
          }
          subtitle="Southlake's premier experts in master-grade electronic slab leak detection and foundation restoration. We design high-performance plumbing solutions tailored for North Texas's shifting clay conditions, ensuring long-term structural integrity. Engineering excellence for Tarrant County."
          image="/ultra-realistic-photo-of-a-professional-plumber-pe.jpeg"
          overlayImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
          badge="SOUTHLAKE SLAB LEAK RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <SouthlakeSlabLeakInfo />
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








