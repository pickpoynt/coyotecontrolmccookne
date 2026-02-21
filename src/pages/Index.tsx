import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import RawSewageRemovalAthertonInfo from "@/components/landing/RawSewageRemovalAthertonInfo";
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
        <title>raw sewage backup removal Atherton CA - Atherton Raw Sewage Removal Pros</title>
        <meta name="description" content="raw sewage backup removal Atherton CA - Professional raw sewage backup removal Atherton CA. Clinical-grade biohazard extraction and decontamination in San Mateo County. Call 877-792-1410 for 24/7 emergency response." />
        <meta name="keywords" content="raw sewage backup removal Atherton CA, Atherton biohazard cleanup, sewage removal San Mateo County, Category 3 water removal CA" />
        <link rel="canonical" href="https://rawsewageremovalatherton.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Atherton Raw Sewage Removal Pros",
            "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
            "@id": "https://rawsewageremovalatherton.com/",
            "url": "https://rawsewageremovalatherton.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "91 Ashfield Rd",
              "addressLocality": "Atherton",
              "addressRegion": "CA",
              "postalCode": "94027",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.4613",
              "longitude": "-122.1977"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Raw Sewage Backup Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Atherton Raw Sewage Removal Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Atherton, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Raw Sewage Removal Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Raw Sewage Extraction" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Biohazard Decontamination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pathogen Elimination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="raw sewage backup removal Atherton CA - Atherton Raw Sewage Removal Pros" />
        <meta property="og:description" content="raw sewage backup removal Atherton CA - Clinical-grade biohazard sewage removal. Emergency response in Atherton and San Mateo County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rawsewageremovalatherton.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              raw sewage backup <br />
              <span className="text-white drop-shadow-sm uppercase">removal Atherton CA</span>
            </>
          }
          subtitle="Atherton's top-rated biohazard elimination specialists. We deploy clinical-grade pathogen containment, industrial extraction, and forensic decontamination to make your estate safe again — fast."
          image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
          badge="ATHERTON BIOHAZARD ELITE"
        />
        <Services />
        <WhyUs />
        <RawSewageRemovalAthertonInfo />
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
