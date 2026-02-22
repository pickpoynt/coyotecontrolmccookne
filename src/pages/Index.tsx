import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BurbankTermiteInfo from "@/components/landing/BurbankTermiteInfo";
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
        <title>termite inspection burbank - Burbank Termite Pros</title>
        <meta name="description" content="termite inspection burbank - Professional termite inspection in Burbank. Licensed specialists providing escrow WDO reports, localized treatments, and termite protection." />
        <meta name="keywords" content="termite inspection burbank, real estate termite report Burbank, localized termite treatment Burbank, termite protection Burbank CA, pest control Burbank CA" />
        <link rel="canonical" href="https://termiteinspectionburbank.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Burbank Termite Pros",
            "image": "/1.jpeg",
            "@id": "https://termiteinspectionburbank.com/",
            "url": "https://termiteinspectionburbank.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "225 E Olive Ave",
              "addressLocality": "Burbank",
              "addressRegion": "CA",
              "postalCode": "91502",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.1808",
              "longitude": "-118.3090"
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
            "serviceType": "Termite Inspection & Protection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Burbank Termite Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Burbank, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Termite Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Termite Inspection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Escrow WDO Reporting" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Localized Termite Treatment" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="termite inspection burbank - Burbank Termite Pros" />
        <meta property="og:description" content="termite inspection burbank - Expert termite inspection and protection services in Burbank, CA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://termiteinspectionburbank.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              termite inspection <br />
              <span className="text-white drop-shadow-sm uppercase">burbank</span>
            </>
          }
          subtitle="Burbank's specialized experts in comprehensive termite inspection and protection. We provide escrow inspections, localized treatments, and long-term prevention strategies to safeguard your property from wood-destroying organisms. Available 24/7 for emergency service."
          image="/1.jpeg"
          overlayImage="/3.jpeg"
          badge="BURBANK TERMITE ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <BurbankTermiteInfo />
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
