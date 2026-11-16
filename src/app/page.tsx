import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Structured data so search engines understand who the page is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  image: `${siteUrl}${profile.photo}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  worksFor: { "@type": "Organization", name: "Libra Motors Limited" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Federal University Oye-Ekiti" },
    { "@type": "CollegeOrUniversity", name: "Yaba College of Technology" },
  ],
  sameAs: [profile.linkedin],
  knowsAbout: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Mobile development", "Clean Architecture", "Payments integration", "Google Cloud Run"],
};

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
