import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import JacksonDrainCleaningInfo from "@/components/landing/JacksonDrainCleaningInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>drain cleaning jackson mi - Jackson Drain Cleaning Pros</title>
        <meta name="description" content="drain cleaning jackson mi - Professional high-tech drain cleaning jackson mi. Expert plumbers clearing blockages in Jackson, MI. Call 877-792-1410 for 24/7 service." />
        <meta name="keywords" content="drain cleaning jackson mi, Jackson plumber, drain clearing Jackson County, sewer service MI, root removal Jackson" />
        <link rel="canonical" href="https://jacksondraincleaningpros.com/" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jackson Drain Cleaning Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
            "@id": "https://jacksondraincleaningpros.com/",
            "url": "https://jacksondraincleaningpros.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "110 N Mechanic St",
              "addressLocality": "Jackson",
              "addressRegion": "MI",
              "postalCode": "49201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.2459",
              "longitude": "-84.4013"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": []
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Drain Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Jackson Drain Cleaning Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Jackson, MI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Drain Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Sink Unclogging"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Removal Service"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="drain cleaning jackson mi - Jackson Drain Cleaning Pros" />
        <meta property="og:description" content="drain cleaning jackson mi - Expert professional drain cleaning jackson mi. High-tech solutions for local homeowners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jacksondraincleaningpros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              drain cleaning <br />
              <span className="text-white drop-shadow-sm">jackson mi</span>
            </>
          }
          subtitle="Jackson's industrial-grade drainage specialists. We deploy precision high-torque cleaning technology to restore drain flow and eliminate root intrusion throughout Mid-Michigan's residential networks."
          image="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80"
          badge="JACKSON COUNTY DRAINAGE SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <JacksonDrainCleaningInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
