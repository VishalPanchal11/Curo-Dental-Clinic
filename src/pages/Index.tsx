import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Curo Advanced Dental Care",
    image: "https://curodentalcare.com/logo.png",
    url: "https://curodentalcare.com",
    telephone: "+918788127264",
    email: "curodentalcare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "PLOT NO. B/73, MAULI KRUPA, SHIVAJI CHOWK, Sector 12",
      addressLocality: "Kharghar, Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0447,
      longitude: 73.0646,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Dental Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
    },
    medicalSpecialty: [
      "Prosthodontics",
      "Oral and Maxillofacial Surgery",
      "Dental Implants",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Dental Implants" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Root Canal Treatment" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Teeth Whitening" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Braces & Aligners" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Wisdom Tooth Extraction" },
        },
      ],
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is dental treatment painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most treatments are performed using modern, pain-free techniques to ensure comfort. We use local anesthesia and the latest technology to minimize any discomfort.",
        },
      },
      {
        "@type": "Question",
        name: "Do you treat children?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide gentle and friendly dental care for kids including preventive care, cavity treatment, and education about oral hygiene.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply click the WhatsApp booking button and send your preferred date and time. You can also call us directly at 087881 27264.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer advanced treatments like implants and laser dentistry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide dental implants, laser dentistry, full mouth rehabilitation, and many other advanced treatments with 500+ successful implant procedures.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Curo Advanced Dental Care | Best Dental Clinic in Kharghar, Navi
          Mumbai
        </title>
        <meta
          name="description"
          content="Curo Advanced Dental Care offers advanced dental treatments including dental implants, root canal, teeth whitening, and more in Kharghar, Navi Mumbai. Led by expert Prosthodontist & Oral Surgeon with 500+ implants placed."
        />
        <meta
          name="keywords"
          content="dentist kharghar, dental clinic navi mumbai, dental implants, root canal treatment, teeth whitening, braces, oral surgeon, prosthodontist, best dentist kharghar"
        />
        <meta name="author" content="Curo Advanced Dental Care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://curodentalcare.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Curo Advanced Dental Care | Best Dental Clinic in Kharghar"
        />
        <meta
          property="og:description"
          content="Advanced dental care with expert specialists. Dental implants, cosmetic dentistry, and more in Navi Mumbai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://curodentalcare.com" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Curo Advanced Dental Care | Kharghar"
        />
        <meta
          name="twitter:description"
          content="Advanced dental care with expert specialists in Navi Mumbai."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <main>
        <Navbar />
        <HeroSection />
        <DoctorsSection />
        <TreatmentsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
