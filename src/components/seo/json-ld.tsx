const SITE_URL = "https://tamagossi.dev";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressLocality: "Bandung",
  },
  alternateName: "Raka Pratama",
  email: "mailto:mgf.prauliyatama@gmail.com",
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Product Engineer — Frontend-First · Chapter Lead",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Design Systems",
    "Domain-Driven Design",
    "Test-Driven Development",
  ],
  name: "Auliya Raka Pratama",
  sameAs: ["https://github.com/tamagossi", "https://linkedin.com/in/tamagossi"],
  url: SITE_URL,
  worksFor: {
    "@type": "Organization",
    name: "Staffinc",
    url: "https://staffinc.co",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  inLanguage: "en",
  name: "Raka Pratama — Product Engineer",
  url: SITE_URL,
};

export const JsonLd = () => (
  <>
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      type="application/ld+json"
    />
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      type="application/ld+json"
    />
  </>
);
