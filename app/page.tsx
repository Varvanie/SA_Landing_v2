import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Ribbon from "./components/Ribbon/Ribbon";
import SV_Zone from "./components/SV_Zone/SV_Zone";
import Zone3 from "./components/Zone3/Zone3";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Script from "next/script";

export const metadata = {
  title:
    "Главная — Surveyor's Assistant | Автоматизация для кадастровых инженеров",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Surveyor's Assistant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Cloud",
    description:
      "Прототип программной системы для кадастровых инженеров, предназначенной для автоматизированной работы с пространственными данными с использованием ИИ.",
    url: "https://surveyors-assistant.ru",
    author: {
      "@type": "Organization",
      name: "Surveyor's Assistant Startup Team",
    },
  };

  return (
    <>
      <Script
        id="schema-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <Header />
        <Hero />
        <Ribbon />
        <SV_Zone />
        <Zone3 />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
